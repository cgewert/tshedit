import { BrowserWindow, dialog, Menu, MenuItem } from "electron";
import { MainService } from "../main/mainService";

import * as fs from "fs";

export class Editor {
    constructor(private mainService: MainService) {}

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
                                this.mainService.openFileDialog(applicationWindow).then(
                                    (fileName: string): void => {
                                        console.log("Selected File: ", fileName);
                                        const fileStream = new fs.ReadStream();
                                        // tslint:disable-next-line:typedef
                                        fileStream.on("data", chunk => {
                                            console.log("Chunk: ", chunk);
                                        });
                                    },
                                    (err: string): void => {
                                        console.error("File IO error: ", err);
                                    }
                                );
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
