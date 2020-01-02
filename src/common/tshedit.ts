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

        this.initializeMenu(applicationWindow);

        // applicationWindow.loadFile("index.html");
        applicationWindow.loadFile("index.html").then((result: void): void => {
            applicationWindow.webContents.openDevTools({ mode: "right" });
        });
    }

    private initializeMenu(applicationWindow: BrowserWindow): void {
        applicationWindow.setMenu(
            Menu.buildFromTemplate([
                {
                    label: "File",
                    submenu: [
                        {
                            accelerator: "CmdOrCtrl+O",
                            // tslint:disable-next-line:typedef
                            click: (item, focusedWindow, ev) => {
                                console.log("CLICK: ", item, focusedWindow, ev);
                            },
                            id: "mnuItemOpen",
                            label: "Open",
                        },
                        {
                            type: "separator",
                        },
                        {
                            role: "quit",
                        },
                    ],
                },
            ])
        );
    }
}
