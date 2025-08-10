// Get the elements to display the info
const browserInfoElement = document.getElementById('browser-info');
const androidVersionElement = document.getElementById('android-version');
const deviceModelElement = document.getElementById('device-model'); // Updated to device-model
const timeZoneElement = document.getElementById('time-zone');

// Get the user's device info
const userAgent = navigator.userAgent;
const browserInfo = getBrowserInfo(userAgent);
const androidVersion = getAndroidVersion(userAgent);
const deviceModel = getDeviceModel(userAgent);
const timeZone = getTimeZone();

// Define the field names
const fieldNames = {
    browser: 'Браузер',
    androidVersion: 'Версия Андроид',
    deviceModel: 'Производитель/Модель телефона',
    timeZone: 'Часовой Пояс'
};

// Display the device info with custom field names
browserInfoElement.textContent = `${fieldNames.browser}: ${browserInfo}`;
androidVersionElement.textContent = `${fieldNames.androidVersion}: ${androidVersion}`;
deviceModelElement.textContent = `${fieldNames.deviceModel}: ${deviceModel}`; // Updated to deviceModelElement
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

function getDeviceModel(userAgent) {
    const deviceModelRegex = /\(([^)]+)\)/;
    const match = userAgent.match(deviceModelRegex);
    if (match) {
        const deviceInfo = match[1].split(';');
        return deviceInfo[deviceInfo.length - 1].trim();
    }
    return 'Unknown';
}

function getTimeZone() {
    try {
        return Intl.DateTimeFormat().resolvedOptions().timeZone;
    } catch (error) {
        return 'Unknown';
    }
}
