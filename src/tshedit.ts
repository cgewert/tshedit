import {BrowserWindow} from "electron";

export class Editor {
    public createWindow(h: number, w: number) {
        const win = new BrowserWindow({
            height: h,
            webPreferences: {
                nodeIntegration: true,
            },
            width: w,
        });

        win.loadFile("index.html");
    }
}