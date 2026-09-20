# Hosted App Content

Friendly Spaces uses three hosted JSON files under `https://app.friendlyspaces.ch/data/`:

- `venues.json` controls the places shown in the app.
- `filters.json` controls filter vocabulary, filter labels, and filter option labels.
- `content.json` controls app text, About-panel social links, Linktree, privacy, partner email, share URL, map attribution links, and map-provider link templates.

To update app copy or outbound links, edit `data/content.json` on `master` and push. The hosted web app serves it from `/data/content.json`; native apps try the hosted file on next launch with a 6 second timeout, then fall back to their local cache, then to the bundled copy.

To add a language, add the language code to `languages`, add matching `strings.<lang>.ui` and `strings.<lang>.popup` keys, and add labels for `about.socials`. The app language switcher still needs a release before a new language appears in the menu.

Still requiring an app release: form field structure, app behaviour, the quick-filter pill set, the language list, and any new UI surface that does not already have a content key.
