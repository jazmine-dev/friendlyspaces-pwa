const RESEND_API_URL = 'https://api.resend.com/emails';

function corsHeaders() {
    return {
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'POST, OPTIONS',
        'Content-Type': 'application/json'
    };
}

function jsonResponse(statusCode, body) {
    return {
        statusCode,
        headers: corsHeaders(),
        body: JSON.stringify(body)
    };
}

function cleanValue(value) {
    if (typeof value !== 'string') return '';
    return value.trim();
}

function buildTextBody(title, fields) {
    const lines = [title, ''];
    for (const [label, value] of fields) {
        if (!value) continue;
        lines.push(`${label}: ${value}`);
    }
    return lines.join('\n');
}

async function sendEmail({ subject, text, replyTo }) {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESEND_FROM_EMAIL;
    const to = process.env.RESEND_TO_EMAIL;

    if (!apiKey || !from || !to) {
        throw new Error('Missing Resend configuration');
    }

    const response = await fetch(RESEND_API_URL, {
        method: 'POST',
        headers: {
            Authorization: `Bearer ${apiKey}`,
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            from,
            to: [to],
            subject,
            text,
            ...(replyTo ? { reply_to: replyTo } : {})
        })
    });

    if (!response.ok) {
        const details = await response.text();
        throw new Error(`Resend request failed: ${response.status} ${details}`);
    }
}

function parseBody(event) {
    if (!event.body) return {};
    try {
        return JSON.parse(event.body);
    } catch {
        return {};
    }
}

module.exports = {
    buildTextBody,
    cleanValue,
    corsHeaders,
    jsonResponse,
    parseBody,
    sendEmail
};
