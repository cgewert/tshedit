import { app, dialog } from "electron";
import { Editor } from "../common/tshedit";
import { MainService } from "./mainService";

app.on("ready", () => {
    const tshedit = new Editor(new MainService());
    tshedit.createWindow(720, 1280);
});
