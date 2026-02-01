const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('./index.html', 'utf8');

// Check specifically for script tag matching
const scriptTagRegex = /<\/?script/gi;
const scriptMatches = [...html.matchAll(scriptTagRegex)];

let openScriptTags = 0;
let closeScriptTags = 0;

for (const match of scriptMatches) {
    if (match[0].includes('</')) {
        closeScriptTags++;
    } else {
        openScriptTags++;
    }
}

console.log(`Open script tags: ${openScriptTags}`);
console.log(`Close script tags: ${closeScriptTags}`);

if (openScriptTags !== closeScriptTags) {
    console.log('❌ Mismatched script tags!');
} else {
    console.log('✅ Script tags are balanced');
}

// Check specifically for the main script structure
const mainScriptStartIndex = html.indexOf('<script>', html.indexOf('let currentLang'));
const mainScriptEndIndex = html.indexOf('</script>', mainScriptStartIndex);

if (mainScriptStartIndex !== -1 && mainScriptEndIndex !== -1) {
    const mainScriptContent = html.substring(mainScriptStartIndex + '<script>'.length, mainScriptEndIndex);
    
    // Check for common JavaScript syntax errors in the main script
    const lines = mainScriptContent.split('\n');
    let inMultilineComment = false;
    let braceCount = 0;
    let parenCount = 0;
    let bracketCount = 0;
    
    for (let i = 0; i < lines.length; i++) {
        const line = lines[i];
        const lineNumber = i + 1;
        
        // Handle multiline comments
        for (let j = 0; j < line.length; j++) {
            if (!inMultilineComment && j < line.length - 1 && line[j] === '/' && line[j+1] === '*') {
                inMultilineComment = true;
                j++; // Skip next character
            } else if (inMultilineComment && j < line.length - 1 && line[j] === '*' && line[j+1] === '/') {
                inMultilineComment = false;
                j++; // Skip next character
            } else if (!inMultilineComment) {
                if (line[j] === '{') braceCount++;
                else if (line[j] === '}') braceCount--;
                else if (line[j] === '(') parenCount++;
                else if (line[j] === ')') parenCount--;
                else if (line[j] === '[') bracketCount++;
                else if (line[j] === ']') bracketCount--;
            }
        }
    }
    
    console.log(`\\nMain script brace balance: ${braceCount}`);
    console.log(`Main script parenthesis balance: ${parenCount}`);
    console.log(`Main script bracket balance: ${bracketCount}`);
    
    if (braceCount !== 0 || parenCount !== 0 || bracketCount !== 0) {
        console.log('❌ Syntax imbalance detected in main script!');
    } else {
        console.log('✅ Main script syntax appears balanced');
    }
} else {
    console.log('❌ Could not locate main script section');
}

// Check for the specific part where music functionality was added
const musicFunctionIndex = html.indexOf('音乐播放功能');
if (musicFunctionIndex !== -1) {
    console.log('\\n✅ Music functionality code found in main script');
} else {
    console.log('\\n❌ Music functionality code not found in main script');
}

console.log('\\nScript syntax check complete.');