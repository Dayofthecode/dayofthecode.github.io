// Get the elements to display the info
const browserInfoElement = document.getElementById('browser-info');
const androidVersionElement = document.getElementById('android-version');
const manufacturerElement = document.getElementById('manufacturer');

// Get the user's device info
const userAgent = navigator.userAgent;
console.log(userAgent); // Log the userAgent string to the console
const browserInfo = getBrowserInfo(userAgent);
const androidVersion = getAndroidVersion(userAgent);
const manufacturer = getManufacturer(userAgent);

// Display the device info
browserInfoElement.textContent = `Browser: ${browserInfo}`;
androidVersionElement.textContent = `Android Version: ${androidVersion}`;
manufacturerElement.textContent = `Manufacturer: ${manufacturer}`;

// Helper functions to extract device info from user agent
function getBrowserInfo(userAgent) {
    const browserRegex = /(Chrome|Firefox|Safari|Edge|Opera)/;
    const match = userAgent.match(browserRegex);
    return match ? match[0] : 'Unknown';
}

function getAndroidVersion(userAgent) {
    const androidRegex = /Android\s+([\d.]+)/i;
    const match = userAgent.match(androidRegex);
    return match ? match[1] : 'Unknown';
}

function getManufacturer(userAgent) {
    const manufacturerRegex = /\(([^;]+);/;
    const match = userAgent.match(manufacturerRegex);
    return match ? match[1].trim() : 'Unknown';
}
