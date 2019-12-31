import { BrowserWindow } from "electron";

export class Editor {

    public createWindow(h: number, w: number): void {
        const win = new BrowserWindow({
            height: h,
            webPreferences: {
                nodeIntegration: true,
            },
            width: w,
        });

        // win.loadFile("index.html");
        win.loadFile("index.html")
            .then((result: void): void => {
                win.webContents.openDevTools({ mode: "right", });
            });
    }
}
