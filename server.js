const express = require('express');
const usb = require('usb');

const app = express();
const port = 3000;

app.get('/usb-devices', (req, res) => {
    const devices = usb.getDeviceList();
    res.json(devices);
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
