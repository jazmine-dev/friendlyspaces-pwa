# Submissions Setup

Friendly Spaces now sends app submissions through Netlify Functions instead of Netlify Forms.

## Functions

- `/.netlify/functions/suggest`
- `/.netlify/functions/bug`

Both functions send email through Resend.

## Netlify Environment Variables

Set these in the Netlify site dashboard before testing:

- `RESEND_API_KEY`: your Resend API key
- `RESEND_FROM_EMAIL`: verified sender, for example `Friendly Spaces <hello@yourdomain.com>`
- `RESEND_TO_EMAIL`: inbox that should receive submissions

## Resend

1. Create a Resend account.
2. Verify your sending domain or sender address.
3. Copy the API key into Netlify as `RESEND_API_KEY`.

## Deploy

After setting the environment variables:

1. Deploy the site on Netlify.
2. Submit one `Suggest a space` form from the web app.
3. Submit one form from the installed mobile app.
4. Confirm both arrive in the inbox configured in `RESEND_TO_EMAIL`.

## Notes

- The app posts JSON directly to the functions.
- This bypasses Netlify Forms storage and Netlify form notifications.
- The native app will need a rebuilt release to pick up the new submission flow.
