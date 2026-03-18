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
    const bugMessage = cleanValue(payload.bugMessage);

    if (!bugMessage) {
        return jsonResponse(400, { error: 'Message is required' });
    }

    const subject = 'Friendly Spaces bug report / feedback';
    const text = buildTextBody('New Friendly Spaces bug report / feedback', [
        ['Message', bugMessage]
    ]);

    try {
        await sendEmail({ subject, text });
        return jsonResponse(200, { ok: true });
    } catch (error) {
        console.error('Bug submission failed', error);
        return jsonResponse(500, { error: 'Unable to send feedback' });
    }
};
