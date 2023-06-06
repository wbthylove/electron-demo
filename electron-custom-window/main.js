const {app, BrowserWindow} = require('electron')

// 创建窗口
function createWindow() {
    let mainWin = new BrowserWindow({
        show: false, // 默认情况下创建一个窗口对象之后就会显示，设置为false就不会显示了
        width: 800,
        height: 400,
        minWidth: 700,
        title: "dsq",
        icon: "./image/favicon.ico",
        frame: false, // 是否显示导航菜单
        // transparent: true, // 透明度，设置之后会导致窗口不能缩放
        autoHideMenuBar: true, // 隐藏菜单
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
