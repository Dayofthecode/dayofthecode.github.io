// Get the elements to display the info
const browserInfoElement = document.getElementById('browser-info');
const androidVersionElement = document.getElementById('android-version');
const deviceModelElement = document.getElementById('device-model');
const deviceBrandElement = document.getElementById('device-brand'); // New element for device brand
const timeZoneElement = document.getElementById('time-zone');

// Get the user's device info
const userAgent = navigator.userAgent;
const browserInfo = getBrowserInfo(userAgent);
const androidVersion = getAndroidVersion(userAgent);
const deviceModel = getDeviceModel(userAgent);
const deviceBrand = getDeviceBrand(userAgent); // Get device brand
const timeZone = getTimeZone();

// Display the device info
browserInfoElement.textContent = `${browserInfo}`;
androidVersionElement.textContent = `${androidVersion}`;
deviceModelElement.textContent = `${deviceModel}`;
deviceBrandElement.textContent = `${deviceBrand}`; // Display device brand
timeZoneElement.textContent = `${timeZone}`;

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
    // Method 1: Look for a specific pattern in the user agent string
    const deviceModelRegex1 = /\(([^)]+)\)/;
    const match1 = userAgent.match(deviceModelRegex1);
    if (match1) {
        const deviceInfo = match1[1].split(';');
        for (const info of deviceInfo) {
            const trimmedInfo = info.trim();
            if (!trimmedInfo.includes('Android') && !trimmedInfo.includes('Build') && !trimmedInfo.includes('Linux')) {
                return trimmedInfo;
            }
        }
    }

    // Method 2: Look for a brand name followed by a model number
    const deviceModelRegex2 = /\b(?:SM|SC|SG|Samsung|OnePlus|Google|Pixel|Huawei|Honor|Xiaomi|Redmi|POCO|Realme|Vivo|Oppo|Motorola|Lenovo|Asus|LG|Sony|Xperia|Nokia|HTC|ZTE)\s*[a-zA-Z0-9\-]+/gi;
    const match2 = userAgent.match(deviceModelRegex2);
    if (match2) {
        return match2[0].trim();
    }

    // Method 3: Look for a model number or identifier in the user agent string
    const deviceModelRegex3 = /[a-zA-Z0-9]+(?:[_-][a-zA-Z0-9]+)*/g;
    const matches3 = userAgent.match(deviceModelRegex3);
    if (matches3) {
        for (const match of matches3) {
            if (match.length > 3 && !match.includes('Android') && !match.includes('Linux')) {
                return match;
            }
        }
    }

    // If all else fails, return 'Unknown'
    return 'Unknown';
}

function getDeviceBrand() {
    const userAgent = navigator.userAgent.toLowerCase();
    const brands = [
        { regex: /samsung|sm-/i, brand: 'Samsung' },
        { regex: /google|pixel/i, brand: 'Google' },
        { regex: /oneplus/i, brand: 'OnePlus' },
        { regex: /huawei|honor/i, brand: 'Huawei' },
        { regex: /xiaomi|redmi|mi-/i, brand: 'Xiaomi' },
        { regex: /oppo/i, brand: 'Oppo' },
        { regex: /vivo/i, brand: 'Vivo' },
        { regex: /realme/i, brand: 'Realme' },
        { regex: /motorola|moto/i, brand: 'Motorola' },
        { regex: /lenovo/i, brand: 'Lenovo' },
        { regex: /asus/i, brand: 'Asus' },
        { regex: /lg/i, brand: 'LG' },
        { regex: /sony|xperia/i, brand: 'Sony' },
        { regex: /nokia/i, brand: 'Nokia' },
        { regex: /htc/i, brand: 'HTC' },
        { regex: /zte/i, brand: 'ZTE' },
    ];

    for (const brand of brands) {
        if (brand.regex.test(userAgent)) {
            return brand.brand;
        }
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

// Get the slider element
const slider = document.getElementById('slider');

// Add an event listener to the slider
slider.addEventListener('input', (e) => {
    const value = e.target.value;
    const hue = value * 3.6; // Convert the slider value to a hue value (0-360)
    const backgroundColor = `hsl(${hue}, 75%, 50%)`; // Create an HSL color string
    document.body.style.background = backgroundColor; // Set the background color
});


