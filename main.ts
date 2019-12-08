import { app, BrowserWindow } from 'electron'

function createWindow () {
  // Erstelle das Browser-Fenster.
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  // und lade die index.html der App.
  win.loadFile('index.html')
}

app.on('ready', createWindow)