# Android Build + ADB Runbook (WSL -> Windows Device)

This runbook documents the workflow that worked from this WSL instance to build and install the app on a USB-connected Android device.

## Preconditions

- Repo path in WSL: `/home/jazmine/friendlyspaces-pwa`
- Windows user: `jazmi`
- Device visible to adb:
  - `"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" devices`
- WSL has Java 21 installed (`openjdk-21-jdk`).

## Important Constraint

WSL Gradle + Windows SDK mismatch can fail because Linux tools expect `aapt` (not `aapt.exe`).

Working solution: mirror repo to a Windows path and run `gradlew.bat` there.

## 1) Sync Capacitor from WSL source repo

```bash
cd /home/jazmine/friendlyspaces-pwa
npm run cap:sync
```

## 2) Mirror repo to Windows filesystem for Gradle build

```bash
mkdir -p /mnt/c/Users/jazmi/friendlyspaces-pwa-build
rsync -a --delete --exclude '.git' /home/jazmine/friendlyspaces-pwa/ /mnt/c/Users/jazmi/friendlyspaces-pwa-build/
```

## 3) Set Windows Android SDK path for mirrored Android project

```bash
cat > /mnt/c/Users/jazmi/friendlyspaces-pwa-build/android/local.properties <<'EOF'
sdk.dir=C\:\\Users\\jazmi\\AppData\\Local\\Android\\Sdk
EOF
```

## 4) Build debug APK using Windows Gradle + Android Studio JBR

Run from WSL:

```bash
cmd.exe /C "set JAVA_HOME=C:\Program Files\Android\Android Studio\jbr&& set PATH=%JAVA_HOME%\bin;%PATH%&& gradlew.bat :app:assembleDebug"
```

Working directory must be:

`/mnt/c/Users/jazmi/friendlyspaces-pwa-build/android`

Output APK:

`C:\Users\jazmi\friendlyspaces-pwa-build\android\app\build\outputs\apk\debug\app-debug.apk`

## 5) Install APK to connected phone

From WSL:

```bash
"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" install -r "C:\Users\jazmi\friendlyspaces-pwa-build\android\app\build\outputs\apk\debug\app-debug.apk"
```

## 6) Launch app

```bash
"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" shell monkey -p ch.friendlyspaces.app -c android.intent.category.LAUNCHER 1
```

## 7) Useful checks

```bash
"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" devices -l
"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" shell pm list packages | rg friendlyspaces
```

Uninstall:

```bash
"/mnt/c/Users/jazmi/AppData/Local/Android/Sdk/platform-tools/adb.exe" uninstall ch.friendlyspaces.app
```

## Notes

- If Android Studio appears to run different code, add a temporary fingerprint (e.g., app name suffix like `DEBUG123`) and rebuild/install through this exact flow.
- Keep this runbook updated when Windows username, SDK location, package id, or output paths change.
