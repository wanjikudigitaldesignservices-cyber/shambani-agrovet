const fs = require('fs');
const readline = require('readline');
const path = require('path');

const logPath = 'C:\\Users\\wanji\\.gemini\\antigravity-ide\\brain\\99b878ad-8cd0-4394-8711-d929ed6607fd\\.system_generated\\logs\\transcript_full.jsonl';

async function extract() {
  const fileStream = fs.createReadStream(logPath);
  const rl = readline.createInterface({ input: fileStream, crlfDelay: Infinity });

  for await (const line of rl) {
    if (line.includes('USER_INPUT') && line.includes('01_PRODUCT_CATALOG.md')) {
      const data = JSON.parse(line);
      if (data.type === 'USER_INPUT' && data.content) {
        fs.writeFileSync(path.join(__dirname, 'master-prompt.txt'), data.content, 'utf-8');
        console.log('Extracted master prompt to master-prompt.txt');
        return;
      }
    }
  }
}

extract().catch(console.error);
