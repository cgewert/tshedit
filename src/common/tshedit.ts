import { BrowserWindow, Menu, MenuItem } from "electron";

export class Editor {
    public createWindow(h: number, w: number): void {
        const applicationWindow = new BrowserWindow({
            height: h,
            webPreferences: {
                nodeIntegration: true,
            },
            width: w,
        });
        applicationWindow.setMenu(
            Menu.buildFromTemplate([
                {
                    label: "File",
                    submenu: [{ role: "about" }, { role: "quit" }],
                },
            ])
        );
        // applicationWindow.loadFile("index.html");
        applicationWindow.loadFile("index.html").then((result: void): void => {
            applicationWindow.webContents.openDevTools({ mode: "right" });
        });
    }
}
