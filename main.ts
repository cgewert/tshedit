import { app, BrowserWindow } from "electron";

function createWindow() {
  const win = new BrowserWindow({
    height: 600,
    webPreferences: {
      nodeIntegration: true,
    },
    width: 800,
  });

  win.loadFile("index.html");
}

app.on("ready", createWindow);
