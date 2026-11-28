# Handover: community tips (grey pins) — state on 27 Nov 2026

Read this first when picking up the community-tips work on any machine.
Release steps and store texts: `docs/release-1.0.15-community-tips.md`.

## The idea

Two kinds of pins on every map:

- **Friendly Spaces partner**: audited, certified venues. Blue pin, white circle, check.
- **Community tip**: places recommended by parents (app suggestion form, the Instagram
  giveaway, friends' lists, WhatsApp recommendations). Not audited. Slate-grey pin, white
  circle, speech bubble.

Wording rule: never "Friendly Spaces approved" or any variation. Partners are "certified",
"audited" or "Friendly Spaces partner"; tips are "Community tip" / "not currently a
Friendly Spaces partner".

## What is live, what is waiting

| Where | State |
|---|---|
| friendlyspaces.ch/map (repo `jazmine-dev/friendly-spaces`, branch `main`) | **Live.** Grey pins, check pins, tip profile, one-line map key, partners-only filters. |
| friendlyspaces.ch homepage + About (EN/DE/FR) | **Live.** "Every blue pin, checked in person." / "Every blue pin is earned" + grey-pin lines. |
| `data/community-tips.json` (this repo, `master`) | **Live** at app.friendlyspaces.ch/data/community-tips.json, 83 tips. The website reads it. Released apps don't read it. |
| The app (this repo, branch `community-tips-app`) | **Ready, not merged.** Android 1.0.15 (18), iOS 1.0.4 (11), web tag `pwa-1.2`. Test-built unsigned in Linux: bundleRelease succeeds. |
| Play Store / App Store | **To do:** signed AAB on the laptop (WSL routine), iOS archive on the Mac. |

**Merge `community-tips-app` into `master` when the release is submitted** (Jaz asked to
wait until then). Reason: the apps read their wording from the hosted `content.json`;
until the merge, new builds show the old intro slides 1 and 5. The merge also puts the
new app live on app.friendlyspaces.ch.

## Architecture

Two shared files on the app host, read by the website map and by the app:

- `data/venues.json`: partners only (9). Unchanged.
- `data/community-tips.json`: tips. Kept separate on purpose: released apps (≤ 1.0.14 /
  iOS 1.0.3) read `venues.json` and would show any tip there as a partner with a full
  profile. Do not move tips into `venues.json`.

A tip entry:

```json
{ "slug": "tip-olympia", "listing": "community", "name": "Olympia",
  "address": "Militärstrasse 64, 3014 Bern", "city": "Bern",
  "fallbackCoords": [46.9589795, 7.4554698], "filters": {},
  "website": "https://olympiabern.ch/", "phone": "+41 31 529 29 10" }
```

`website`, `phone` and `tip` are optional. `tip` is what the recommending parents said
(their words, no names; `i18n.tip` can hold translations); it shows as "What parents say"
on the tip profile, and tips without it show no block. 26 of 83 have one so far. `filters` stays empty so filters return partners only.
A tip whose slug or name matches a partner is skipped.

**Adding a tip:** add an entry to `data/community-tips.json` on `master` and push. The
website shows it within a minute; the new app picks it up on next launch (it also ships a
bundled copy for offline use). Geocode from the real street address (OpenStreetMap
Nominatim works) and check the venue's own website for the address.

**Privacy rules used for the data:** venue name, address, city and public website only.
No submitter names or emails (the tracker notes contain some). Phone numbers only for
business landlines, never the personal mobiles in the tracker. No internal notes
("no budget", reasons for declining).

## Behaviour (both maps)

- Clusters: one blue bubble, one number counting partners and tips together.
- First view frames the partners (Bern / Basel / Zurich), so phones show regional
  bubbles; zooming out shows Geneva, Lausanne, Lugano etc.
- Filters, Near me and Favourites: partners only (tips hide while any is on). Search and
  the city menu include tips. App list view: partners only.
- Partner profile: unchanged except a "Friendly Spaces partner" pill (check-circle).
- Tip profile (approved mockup): Community tip pill, name, address, Navigate / Website /
  Call, grey note "Suggested by the Friendly Spaces community. This venue is not currently
  a Friendly Spaces partner.", and "Is this your venue? Get in touch with Friendly Spaces"
  linking to friendlyspaces.ch/contact (/de/, /fr/).
- Map key: top right, one line ("Friendly Spaces partner · Community tip"); wraps to two
  lines only on very narrow phones in French. Only shown when tips exist.
- App intro: new slide 2 "Two kinds of pins"; slide 1 "Every Friendly Space is audited…";
  slide 5 ends "Your suggestions can appear on the map as community tips…". DE/FR/IT/EN.
- Analytics: no events from `*.pages.dev` or localhost (website map). Tip opens carry
  `listing_type: community`; the tip's "Get in touch" link is tracked
  (`tip_owner_contact_click` on the website, link type `tip-owner-contact` in the app).

## Where the code is

- Website map: `friendly-spaces/map/index.html` (the old `friendlyspaceswebmap` repo is
  stale since Sept 2026; the website copy is the one that's live).
- Website wording: `friendly-spaces/src/pages/{en,de,fr}/{index,about}.html`, then
  `python build.py`.
- App: `scripts/app.js` (loading `community-tips.json`, pins, `communityTipVisible`,
  `createTipProfileContent`, map key, strings), `styles/app.css` (end of file),
  `index.html` (intro slide 2), `data/content.json` (hosted strings), `sw.js` (cache v29),
  `scripts/build-web.cjs` (bundles the tips file).
- Mockups (Option A vs B for the key): https://claude.ai/artifact/XeMNtUtD7BehmNk4E56tEF

## Open items

**Check with Jaz / verify:**
- Le V. – Restaurant Verdaine placed at Rue Verdaine 9, Geneva (Le Verdaine); its website
  didn't load and one listing hints it changed. Confirm.
- Ristorante Piccolo Vigneto matched to the restaurant in Aldesago (Monte Brè), Lugano.
- tibits Bern Bahnhof was the original Bern tip; now all 13 tibits, Luigia (Lausanne,
  Zurich, 2× Geneva) and 7 Le Pain Quotidien Geneva shops are in (23 chain pins). Trim if
  she wants fewer.
- Hostel77 and Le Petit Couteau said no (Le Petit Couteau was sceptical about more
  families); English Speaking Playgroup is a meetup group; Tierpark Jeuss — does it fit?
- Becanto, Altes Pfarrhaus, Schöngrün (contacted, waiting) and Restaurant Zent ("later")
  are now tips.

**Not placed (no confirmed address):** Wolke85, Ah und Oh, TreffPunkt MüZe, Au Momentum,
Pizzeria Da Vinci (Fribourg). **Left out on purpose:** Joyne Cafe (now Cream bakery),
Tea-Room Saudan (directory find, not a recommendation). Contacted-and-waiting venues from
the tracker beyond the four above (e.g. La Chaumière) were not added.

**Sources still to mine for tips:** envoiturearthur.blogspot.com (Neuchâtel),
livingeneva.com (Geneva), jennyenvadrouille.ch and vaudfamille.ch (Lausanne), happykid.ch.

**Codex work on the laptop:** an earlier ChatGPT/Codex session had local, unpushed changes
(its own community-tips.json from an old Feb 2026 xlsx export). Jaz said not to worry
about it; don't push it over `main`/`master`.

**Next idea from Jaz:** a direct "suggest a community tip" flow that feeds the tips file.

## Gotchas

- Hosted `content.json` is merged over the built-in strings in `app.js`: a key present in
  the hosted file wins. Keep both in sync.
- The signed Android build needs `android/keystore.properties` + the `.jks`,
  `android/app/google-services.json` and `map-config.local.json`; all live only on the
  laptop. Build there (`docs/android-wsl-adb-runbook.md`, with `:app:bundleRelease`).
- In a fresh Linux container Gradle can hit Maven Central `429 Too Many Requests`; rerun
  with `--max-workers=1` and it passes.
- Bump `CACHE_VERSION` in `sw.js` whenever app files change, or PWA users keep old files.
