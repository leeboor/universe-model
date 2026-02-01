const fs = require('fs');

// Read the HTML file
const html = fs.readFileSync('./index.html', 'utf8');

// Check for basic structure issues
let unmatchedTags = [];
let stack = [];

// Simple regex to find opening and closing tags
const tagRegex = /<\/?([a-zA-Z][a-zA-Z0-9:-]*)[^>]*>/g;
let match;

while ((match = tagRegex.exec(html)) !== null) {
    const fullTag = match[0];
    const tagName = match[1];
    
    if (fullTag.startsWith('</')) {
        // Closing tag
        if (stack.length === 0) {
            unmatchedTags.push(`Unmatched closing tag: ${fullTag} at position ${match.index}`);
        } else {
            const lastOpened = stack.pop();
            if (lastOpened !== tagName) {
                unmatchedTags.push(`Mismatched tags: opened <${lastOpened}> but closed </${tagName}> at position ${match.index}`);
            }
        }
    } else if (!fullTag.endsWith('/>')) {
        // Opening tag (not self-closing)
        stack.push(tagName);
    }
}

// Check for unclosed tags
while (stack.length > 0) {
    const unclosed = stack.pop();
    unmatchedTags.push(`Unclosed tag: <${unclosed}>`);
}

if (unmatchedTags.length > 0) {
    console.log('HTML Structure Issues Found:');
    unmatchedTags.forEach(issue => console.log('- ' + issue));
} else {
    console.log('✓ HTML structure appears valid');
}

// Check for common JavaScript syntax errors
const jsBlocks = html.split(/<script[^>]*>/);
if (jsBlocks.length > 1) {
    jsBlocks.shift(); // Remove content before first script tag
    
    for (let i = 0; i < jsBlocks.length; i++) {
        const jsCode = jsBlocks[i].split('</script>')[0];
        // Look for common syntax errors
        const lines = jsCode.split('\n');
        let lineNum = 1;
        for (const line of lines) {
            // Check for potential issues
            if (line.includes('undefined') && line.includes('=')) {
                // This might be normal usage, not necessarily an error
            }
            lineNum++;
        }
    }
}

console.log('\\nFile structure check complete.');