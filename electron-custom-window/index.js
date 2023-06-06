const remote = require('@electron/remote')

// 利用 romote 可以获取当前窗口对象
let mainWin = remote.getCurrentWindow()
// 获取元素添加点击操作的监听
window.addEventListener('DOMContentLoaded', () => {

    window.onbeforeunload = function () {
        let bulletbox = document.getElementsByClassName("bulletbox")[0]
        bulletbox.style.display = 'block'
        let yesBtn = bulletbox.getElementsByTagName("button")[0]
        let noBtn = bulletbox.getElementsByTagName("button")[1]
        yesBtn.addEventListener("click", () => {
            mainWin.destroy()
        })
        noBtn.addEventListener("click", () => {
            bulletbox.style.display = 'none'
        })

        return false;
    }

    let optBtnI = document.getElementsByClassName("optBtn")[0].getElementsByTagName("i")
    optBtnI[0].addEventListener('click', () => {
        // 最小化
        if(!mainWin.isMinimized()) {
            mainWin.minimize()
        }
    })
    optBtnI[1].addEventListener('click', () => {
        // 最大化
        if(!mainWin.isMaximized()) {
            mainWin.maximize()  // 让窗口最大化
        } else {
            mainWin.restore()   // 让窗口回到原来的状态
        }
    })
    optBtnI[2].addEventListener('click', () => {
        mainWin.close()
    })




})