const {app, BrowserWindow} = require("electron")

const createWindow = function (){
    let mainWin = new BrowserWindow({
        show: false,
        width: 800,
        height: 500,
        webPreferences: {
            nodeIntegration: true,
            contextIsolation: false,
            enableRemoteModule: true,
        }
    })
    require("@electron/remote/main").initialize(); // 初始化
    require("@electron/remote/main").enable(mainWin.webContents);

    mainWin.on('ready-to-show', () => {
        mainWin.show() 
    })
    mainWin.loadFile('index.html')
    // 主窗口
    mainWin.on('close', () => {
        console.log('mainWin is closed.')
        mainWin = null
    })
}
app.on('ready', createWindow)

app.on('window-all-closed', () => {
    console.log('all window is closed.')
    app.quit()
})
