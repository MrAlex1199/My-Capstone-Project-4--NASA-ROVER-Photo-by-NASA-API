const fs = require('fs');
const path = require('path');
const { execSync } = require('child_process');

const compiledServerPath = path.join(__dirname, 'dist', 'server.js');

// Auto-compile TypeScript if dist/server.js does not exist on deployment
if (!fs.existsSync(compiledServerPath)) {
  console.log('[Deploy Fail-Safe] dist/server.js not found. Compiling TypeScript...');
  try {
    execSync('npx tsc', { stdio: 'inherit' });
  } catch (err) {
    console.error('[Deploy Error] Failed to compile TypeScript:', err);
  }
}

require('./dist/server.js');
