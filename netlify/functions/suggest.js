const {
    buildTextBody,
    cleanValue,
    jsonResponse,
    parseBody,
    sendEmail
} = require('./_submission');

exports.handler = async (event) => {
    if (event.httpMethod === 'OPTIONS') {
        return jsonResponse(200, { ok: true });
    }

    if (event.httpMethod !== 'POST') {
        return jsonResponse(405, { error: 'Method not allowed' });
    }

    const payload = parseBody(event);
    const venueName = cleanValue(payload.venueName);
    const venueCity = cleanValue(payload.venueCity);
    const venueMessage = cleanValue(payload.venueMessage);
    const venueWhy = cleanValue(payload.venueWhy);
    const ownerName = cleanValue(payload.ownerName);
    const ownerEmail = cleanValue(payload.ownerEmail);
    const ownerPhone = cleanValue(payload.ownerPhone);
    const fanEmail = cleanValue(payload.fanEmail);
    const role = cleanValue(payload.role) || 'owner';
    const newsletterOptIn = Boolean(payload.newsletterOptIn);

    if (!venueName || !venueCity) {
        return jsonResponse(400, { error: 'Venue name and city are required' });
    }

    const replyTo = ownerEmail || fanEmail || '';
    const subject = `Friendly Spaces suggestion: ${venueName} (${venueCity})`;
    const text = buildTextBody('New Friendly Spaces suggestion', [
        ['Role', role],
        ['Venue name', venueName],
        ['City', venueCity],
        ['Why it is friendly', venueWhy],
        ['Message', venueMessage],
        ['Owner name', ownerName],
        ['Owner email', ownerEmail],
        ['Owner phone', ownerPhone],
        ['Fan email', fanEmail],
        ['Newsletter opt-in', newsletterOptIn ? 'Yes' : 'No']
    ]);

    try {
        await sendEmail({ subject, text, replyTo });
        return jsonResponse(200, { ok: true });
    } catch (error) {
        console.error('Suggest submission failed', error);
        return jsonResponse(500, { error: 'Unable to send suggestion' });
    }
};
