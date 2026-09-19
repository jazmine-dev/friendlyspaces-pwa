# Friendly Spaces map and optimization fixes — updated 7 September 2026

The main Windows project is `C:\Users\jazmi\friendlyspaces-app`.

## Android

Upload `FriendlySpaces-1.0.12-15-map-fix.aab` to the Friendly Spaces app in Google Play Console.

- Application ID: `ch.friendlyspaces.app`
- Version: **1.0.12 (15)**
- Rebuilt on 7 September with R8 code optimization, obfuscation, resource shrinking, and the AGP 8.13 optimized resource shrinker enabled. Version code 15 is retained because it had not been uploaded.
- Built with the existing release signing configuration.
- The release build, including its required lint checks, passed. The bundle signature verified.

Suggested release notes: “Restores the background map and optimizes the Android app.”

The rebuilt bundle replaces the previous unoptimized version 15 at the same download path. R8's mapping is embedded in the AAB and also supplied as `FriendlySpaces-1.0.12-15-mapping.txt` for decoding crash reports. Keep that mapping with this exact release. Google Play's final optimization score must be checked after upload; the local mapping is not a substitute for that score.

The bundle has not been uploaded or published. No Android device was connected for an installed-app test, and a temporary read-only emulator did not finish booting; it was stopped. Test the optimized release through Play internal testing before rolling it out to users. Check startup, the map, venue profiles, filters, saves, location permission, sharing, and Firebase events. Future Android uploads must use a version code higher than 15.

## iOS: prepare on your remote Mac

1. Transfer and extract `FriendlySpaces-1.0.12-map-fix-source.zip` into a new folder on the Mac. Keep the existing Mac project until the new version has been verified.
2. In Terminal, enter the extracted `friendlyspaces-app` folder.
3. Run:

```sh
npm ci
npm run prepare:ios
open ios/App/App.xcodeproj
```

Use a recent Node.js version compatible with Capacitor 8, and Xcode with Swift 6.1 or later. The archive contains the local map configuration, so you do not need to paste the key into Terminal.

4. In Xcode, select the **App** target and your existing Friendly Spaces signing team. Release signing currently references the `friendly_spaces_ios` provisioning profile; select a valid profile or configure automatic signing for your team if your remote Mac requires it.
5. The prepared iOS version is **1.0.3 (10)**, bundle ID `ch.friendlyspaces.app`. Confirm App Store Connect has not already used those version/build values; increase them if necessary.
6. Run on an iPhone or simulator first. Confirm the map has no “API KEY REQUIRED” watermark, the CARTO/OpenStreetMap credits are visible, venue profiles open, and filters still work.
7. Select a generic iOS device destination, choose **Product → Archive**, then use Organizer to validate and distribute to App Store Connect. Test through TestFlight before release.

The iOS project was synced on Windows, but it has not been compiled, signed, or archived with Xcode. No `.ipa` is included.

## What changed

- The shared map requests include the new CARTO key, fixing Android and iOS through the same web code.
- The light map style is retained. A small provider credit line is visible at the bottom left.
- The build reads `cartoApiKey` from `map-config.local.json`, or `CARTO_BASEMAP_API_KEY` from the environment, and generates `scripts/map-config.js`. Both local key files are excluded from Git.
- A build without a key stops before generating web assets. Run `npm run build:web` before a root-directory web preview; native preparation runs this automatically.
- The web cache version is bumped to refresh app-shell assets when the web build is eventually deployed.
- The iOS Firebase plist is included in the App target's Resources phase.
- The sync commands normalize generated Swift package paths after syncing on Windows. Run `npm run prepare:ios` on the Mac to recreate its local plugin links.

The source archive contains the map key and Firebase client configuration needed for both platforms. Transfer it privately. It excludes Android signing credentials, local SDK paths, dependency folders, Git history, and generated native/web build outputs. Run `npm ci` and the preparation command after extraction.

## Verification completed

- CARTO returned HTTP 200 with a valid PNG using the new key.
- Phone-size browser preview displayed the map without the watermark and with visible credits.
- Restaurant filtering and the venue list worked in the browser preview.
- The same generated map configuration was verified in the web, Android, and iOS asset folders.
- JavaScript syntax checks passed; a missing-key build correctly stopped before creating output.
- Android `bundleRelease` succeeded, with version 1.0.12 / code 15 confirmed in the merged release manifest. The signed AAB verified.
- The 7 September rebuild also passed `assembleRelease`, R8 minification and resource optimization, and release lint checks. Bundle size fell from 5,370,885 to 3,131,056 bytes (about 42%). The mapping contains 2,146 renamed classes out of 2,315 mapped classes; these counts do not represent Google Play's optimization score.
- The Firebase Analytics, Geolocation, and Share plugin names are preserved in the mapping. Capacitor's consumer rules and Android's JavaScript-interface keep rules are present, and no global disable-obfuscation/optimization/shrinking rules were found in the merged configuration. The AAB contains its obfuscation mapping and the verified CARTO configuration.

Native iOS Firebase event delivery still needs verification in Firebase DebugView or GA4 Realtime after installation. Check venue opens and actions, saves, and filters, with the expected `partner_id`. Adding the configuration to the Xcode project does not by itself prove that events arrive in production.

The source review confirmed that the iOS plist matches `ch.friendlyspaces.app` and the Android Firebase project, that `FirebaseAnalyticsPlugin` is registered, and that the plugin calls `FirebaseApp.configure()` when it loads. Custom native events use `logEvent` with `surface: ios_app` and stable venue IDs. No Analytics collection-disable setting was found in the app's Info.plist.

For the iOS verification, add `-FIRDebugEnabled` under **Product → Scheme → Edit Scheme → Run → Arguments Passed On Launch**, run the app from Xcode, and inspect Firebase **Analytics → DebugView**. Open a venue, save it, apply a filter, and use a venue action. Confirm `venue_profile_open`, `venue_save`, `filter_apply`, and the relevant action event, including `partner_id` on venue events. Confirm the Firebase project is linked to GA4 property **360639781**, and register `partner_id` as an event-scoped custom dimension if it is not already registered. Remove the debug argument after testing; Firebase also documents `-FIRDebugDisabled` to explicitly disable debug mode.

Reference: [Firebase DebugView instructions](https://firebase.google.com/docs/analytics/debugview).

## CARTO account

The key was issued to **jazmine@decaro.ch** for Friendly Spaces. The requested service is free, with a 5-million-tile monthly allowance. No payment details or paid subscription were supplied.

Registration includes the Friendly Spaces domains and localhost for the Capacitor apps. The key is visible in client map requests by design; keep any service restrictions aligned with the website and native app origins.

References: [CARTO key setup](https://carto.com/basemaps/apikey/), [CARTO basemap terms](https://carto.com/legal/basemap-terms/), [Apple Xcode requirements](https://developer.apple.com/xcode/system-requirements/).
