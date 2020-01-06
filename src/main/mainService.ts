import { BrowserWindow, dialog } from "electron";

export class MainService {
    public openFileDialog(browserWindow: BrowserWindow): Promise<string> {
        return new Promise<string>(
            (resolve: (value: string) => void, reject: (error: any) => void) => {
                dialog
                    .showOpenDialog(browserWindow, { properties: ["openFile"] })
                    .then((value: Electron.OpenDialogReturnValue): void => {
                        if (!value.canceled && value.filePaths && value.filePaths.length === 1) {
                            resolve(value.filePaths[0]);
                        } else {
                            reject("File IO Error");
                        }
                    })
                    .catch((error: any): void => {
                        reject(error);
                    });
            }
        );
    }
}
