const fs = require('fs');
const path = require('path');

// Capacitor 8.4 writes OS-specific separators into Swift string literals.
// Keep generated package paths valid when syncing on Windows for a Mac build.
const packageFile = path.resolve(__dirname, '../ios/App/CapApp-SPM/Package.swift');
if (fs.existsSync(packageFile)) {
  const original = fs.readFileSync(packageFile, 'utf8');
  const portable = original.replace(/path: "([^"\r\n]+)"/g, (_, value) =>
    `path: "${value.replace(/\\/g, '/')}"`
  );
  if (portable !== original) fs.writeFileSync(packageFile, portable);
}
