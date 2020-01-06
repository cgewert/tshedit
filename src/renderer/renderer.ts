const { ipcRenderer } = require("electron");
const pug = require("pug");

ipcRenderer.on("data", (event: Event, args: any) => {
    const compiledFunction = pug.compileFile("editor.pug");

    const html = compiledFunction(args);
    const contentCenter = document.getElementById("content-center");
    if (contentCenter !== null) {
        contentCenter.innerHTML = html;
    }
});
