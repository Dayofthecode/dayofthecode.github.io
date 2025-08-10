// Get the elements to display the info
const browserInfoElement = document.getElementById('browser-info');
const androidVersionElement = document.getElementById('android-version');
const manufacturerElement = document.getElementById('manufacturer');
const timeZoneElement = document.getElementById('time-zone');

// Get the user's device info
const userAgent = navigator.userAgent;
const browserInfo = getBrowserInfo(userAgent);
const androidVersion = getAndroidVersion(userAgent);
const manufacturer = getManufacturer(userAgent);
const timeZone = getTimeZone();

// Define the field names
const fieldNames = {
    browser: 'Браузер',
    androidVersion: 'Версия Андроид',
    manufacturer: 'Производитель телефона',
    timeZone: 'Часовой пояс'
};

// Display the device info with custom field names
browserInfoElement.textContent = `${fieldNames.browser}: ${browserInfo}`;
androidVersionElement.textContent = `${fieldNames.androidVersion}: ${androidVersion}`;
manufacturerElement.textContent = `${fieldNames.manufacturer}: ${manufacturer}`;
timeZoneElement.textContent = `${fieldNames.timeZone}: ${timeZone}`;

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

function getTimeZone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error) {
        return 'Unknown';
    }
}
