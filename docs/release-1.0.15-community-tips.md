# Release: community tips (Android 1.0.15 / build 18, iOS 1.0.4 / build 11)

Branch: `community-tips-app`. Web bundle version tag: `pwa-1.2`.

## What's in it

- Partner pins: blue with a white circle and a check.
- Community tips: grey pins with a speech bubble, read from `data/community-tips.json`
  (hosted next to `venues.json`, bundled into the app for offline use). Same clusters as
  partners, one number per cluster.
- Tip sheet: Community tip pill, name, address, Navigate / Website / Call, the
  "not currently a Friendly Spaces partner" note and "Is this your venue?" linking to
  the website's contact page.
- Tips with a recommendation show it as "What parents say" (optional `tip` field).
- Partner profile: unchanged apart from a "Friendly Spaces partner" pill.
- Small map key, top right, one line.
- Filters, Near me and Favourites show partners only; the list view shows partners only.
- Intro: new slide 2 "Two kinds of pins"; new wording on slides 1, 2 and 5.

## Android (on the laptop, with the upload key)

1. `git fetch origin && git checkout community-tips-app && git pull`
2. `npm ci`
3. Make sure `map-config.local.json`, `android/keystore.properties` (+ the `.jks`) and
   `android/app/google-services.json` are in place, as for earlier releases.
4. `npm run android:aab` (or the Windows-side Gradle steps in `docs/android-wsl-adb-runbook.md`).
5. Upload `android/app/build/outputs/bundle/release/app-release.aab` in Play Console
   with the release notes below. If Play Console says build 18 is already used, rebuild
   with `-PappVersionCode=19`.

## iOS (on the Mac)

1. `git fetch origin && git checkout community-tips-app && git pull`
2. `npm ci`
3. `map-config.local.json` and `ios/App/App/GoogleService-Info.plist` in place.
4. `npm run prepare:ios` (build:web, cap sync ios, SPM path fix), then `npx cap open ios`.
5. Version is already 1.0.4 (11) in the project. Product > Archive, then upload to
   App Store Connect with the release notes below.

## Going live

Merge `community-tips-app` into `master` when the release is submitted. That updates
app.friendlyspaces.ch and the hosted `content.json`. The new builds read their wording
from the hosted `content.json`, so until the merge they still show the old text on
intro slides 1 and 5 (the rest of the new text is built in). Older app versions only pick
up the new slide 1 and 5 wording from that file; they never read `community-tips.json`.

## What's new (Play Console / App Store Connect)

**EN**
Community tips are here. Next to our audited Friendly Spaces partners (blue pins with a check), the map now shows places recommended by other parents as grey pins. Tap one for directions, to call or to visit their website. A new intro slide explains the two kinds of pins, and a small key on the map keeps them apart.

**DE**
Neu: Community-Tipps. Neben unseren geprüften Friendly Spaces Partnern (blaue Pins mit Häkchen) zeigt die Karte jetzt auch Orte, die andere Eltern empfehlen, als graue Pins. Tippe darauf für Route, Anruf oder Webseite. Eine neue Intro-Seite erklärt die zwei Arten von Pins, und eine kleine Legende auf der Karte hilft beim Unterscheiden.

**FR**
Nouveau : les conseils de la communauté. En plus de nos partenaires Friendly Spaces audités (repères bleus avec une coche), la carte affiche désormais en gris les lieux recommandés par d’autres parents. Touchez-en un pour l’itinéraire, appeler ou voir le site web. Une nouvelle page d’introduction explique les deux types de repères, et une petite légende sur la carte aide à les distinguer.

**IT**
Novità: i consigli della community. Oltre ai nostri partner Friendly Spaces verificati (segnaposto blu con la spunta), la mappa mostra ora in grigio i luoghi consigliati da altri genitori. Toccane uno per l'itinerario, per chiamare o per visitare il sito web. Una nuova pagina introduttiva spiega i due tipi di segnaposto e una piccola legenda sulla mappa aiuta a distinguerli.
