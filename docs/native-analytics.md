# Friendly Spaces native analytics

The installed iOS and Android apps use Firebase Analytics through
`@capacitor-firebase/analytics`. The PWA uses the separate GA4 web stream
`G-23RW5YZHCW`. Native WebViews do not load the web `gtag`, which prevents app
traffic from being counted as website traffic.

## Native app registrations

- Android package: `ch.friendlyspaces.app`
- iOS bundle ID: `ch.friendlyspaces.app`
- Android config: `android/app/google-services.json`
- iOS config: `ios/App/App/GoogleService-Info.plist`

Both Firebase apps must be linked to GA4 property `360639781`.

## Events

Firebase supplies `first_open`, `session_start`, active-user, retention, device,
and platform data automatically. Friendly Spaces adds these events:

| Event | Purpose |
| --- | --- |
| `venue_profile_open` | A person opened a Friendly Space profile. |
| `directions_click` | A person opened directions for a venue. |
| `call_click` | A person tapped the venue phone action. |
| `website_click` | A person opened the venue website. |
| `instagram_click` | A person opened the venue Instagram account. |
| `venue_save` / `venue_unsave` | A person saved or removed a venue. |
| `filter_apply` / `filter_remove` | A filter was enabled or disabled. |
| `filter_clear_all` | All active filters were reset. |

Venue events include `partner_id`, `partner_city`, `partner_category`, and
`surface`. Filter events include `filter_type`, `filter_value`, `filter_source`,
and `results_count` so the dashboard can rank the filters families use most.

`surface` is one of `ios_app`, `android_app`, or `pwa_web`.

## GA4 configuration

Register these event-scoped custom dimensions:

- `partner_id`
- `partner_city`
- `partner_category`
- `surface`
- `filter_type`
- `filter_value`
- `filter_source`

Mark these events as key events:

- `venue_profile_open`
- `directions_click`
- `call_click`
- `website_click`
- `instagram_click`
- `venue_save`

After the native SDK or event code changes, ship new iOS and Android store
builds. Existing installations begin sending the native events after users
update.
