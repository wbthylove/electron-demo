const {app, BrowserWindow} = require('electron')

// 创建窗口
function createWindow() {
    let mainWin = new BrowserWindow({
        width: 800,
        height: 400
    })
    mainWin.loadFile('index.html')


    mainWin.webContents.on('did-finish-load', () => {
        console.log('3333------->did-finish-load')
    })

    mainWin.webContents.on('dom-ready', () => {
        console.log('2222------->dom-ready')
    })

    // 主窗口
    mainWin.on('close', () => {
        console.log('8888-------->this window is closed')
        mainWin = null
    })
}


app.on('ready', () => {
    console.log('1111------>ready')
    createWindow()
})

app.on('window-all-closed', () => {
    console.log('4444------->window-all-closed')
    app.quit()
})

app.on('before-quit', () => {
    console.log('5555------->before-quit')
})

app.on('will-quit', () => {
    console.log('6666------->will-quit')
})

app.on('quit', () => {
    console.log('7777------->quit')
})
