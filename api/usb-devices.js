// api/usb-devices.js
const usb = require('usb');

module.exports = (req, res) => {
    const devices = usb.getDeviceList();
    res.json(devices);
};

