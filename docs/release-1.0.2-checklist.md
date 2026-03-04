# Friendly Spaces Release 1.0.2 Checklist

Use this checklist to validate the `1.0.2` release (`versionCode 5`) end-to-end.

## Core UI and Navigation

- [ ] Status bar icons are visible on all pages (no white-on-white conflicts).
- [ ] Status bar behavior is consistent across blue and white page backgrounds.
- [ ] Venue profile top-right close control is an `X` (not a back arrow).
- [ ] Venue profile supports full/half behavior and closes cleanly with downward dismissal.
- [ ] Profile sheet drag/scroll interaction is smooth on all venues.
- [ ] Favorites quick filter returns users to their previous view when deselected.
- [ ] Last selected view (`Map` / `List` / `Favorites`) is restored after app restart.

## Landscape and Safe Area

- [ ] Landscape search/filter layout is compact and usable.
- [ ] Landscape filters open from filter button as a drawer (not always-on desktop-style panel).
- [ ] Menu drawer in landscape is scrollable and all items are reachable.
- [ ] Notch/safe-area spacing is applied correctly for landscape layouts.

## Filters and Venues

- [ ] `Restaurant` exists in full filter list.
- [ ] Quick filter pills include `Restaurant` and `Small Child`.
- [ ] `Klara 13` and `Markthalle Basel` are counted under Restaurant.
- [ ] `Crafty Crew` appears in Bern with images loading correctly.
- [ ] Venue action buttons hide `Call` when no phone number is provided.

## Content and Localization

- [ ] Crafty Crew EN hours include: `Friday drop-in ... (check the website)`.
- [ ] Crafty Crew hours render on separate lines in profile (not comma-only inline).
- [ ] German text uses correct characters (for example `prüfen`, `Für`, `Geschäfte`).
- [ ] Italian text uses correct accents (for example `Lunedì`, `Mercoledì`, `Venerdì`, `sensorialità`).
- [ ] Venue profile content is translated in DE/FR/IT (not title-only).
- [ ] Welcome/intro slides show updated copy in all languages.

## Sharing, About, and Menu

- [ ] Privacy Policy link is present in menu.
- [ ] Share button opens native share sheet directly.
- [ ] Shared URL is `https://www.friendlyspaces.ch/map`.
- [ ] Old copy-to-clipboard popup behavior is gone.
- [ ] About-page OpenStreetMap attribution text is smaller/subtle and link remains blue.

## Android Release and Play Console

- [ ] Internal testing release shows `5 (1.0.2)`.
- [ ] Installed app from Play internal testing reflects latest UI/features.
- [ ] Upload signing key is accepted by Play (no wrong key error).
- [ ] Location hardware is optional in manifest (device compatibility warning reduced).

## Notes

- Deobfuscation warning in Play Console is expected for this build because code minification/obfuscation is disabled (`minifyEnabled false`).
