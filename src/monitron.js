const { app, BrowserWindow } = require("electron");
const path = require("path");

function createWindow() {
  const win = new BrowserWindow({
    width: 310,
    height: "auto",
    frame: false,
    transparent: true,
    backgroundColor: "#00000000",

    alwaysOnTop: true,
    maximizable: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false,
    },
  });
  win.setIgnoreMouseEvents(false);
  win.loadFile(path.join(__dirname, "monitron.html"));
}

app.whenReady().then(createWindow);
