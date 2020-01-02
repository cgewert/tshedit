import { app, dialog } from "electron";
import { Editor } from "../common/tshedit";

app.on("ready", () => {
    const tshedit = new Editor();
    tshedit.createWindow(720, 1280);
});
