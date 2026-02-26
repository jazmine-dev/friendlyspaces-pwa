# Android Release Setup (Play Store)

## 1) One-time setup

1. Create an upload keystore in Android Studio:
   - `Build` -> `Generate Signed Bundle / APK`
   - Choose `Android App Bundle`, then `Create new...` keystore
2. Save the keystore file in a safe private location.
3. Copy `android/keystore.properties.example` to `android/keystore.properties`.
4. Replace values in `android/keystore.properties`:
   - `storeFile`: path to your `.jks` file (relative to `android/`)
   - `storePassword`
   - `keyAlias`
   - `keyPassword`

`android/keystore.properties` and `.jks` files are git-ignored and must never be committed.

## 2) Build release bundle (.aab)

From project root:

```bash
npm run android:aab
```

Output file:

`android/app/build/outputs/bundle/release/app-release.aab`

## 3) Upload to Play Console

1. Open Google Play Console.
2. Go to your app -> `Testing` (recommended first) or `Production`.
3. Create a new release and upload:
   - `android/app/build/outputs/bundle/release/app-release.aab`
4. Add release notes and submit for review.

## 4) Each new release

Increase version in `android/app/build.gradle`:

- `versionCode` must increase every upload (integer)
- `versionName` is the user-facing version label
