/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-08-10 17:02:33
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-08-11 09:35:41
 * @FilePath: \electron_test\main.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
const {app, BrowserWindow, ipcMain} = require('electron')
const path = require('path')
const fs = require('fs');
function writeFile(_, data){
    fs.writeFileSync('D:/hello.txt', data);
}
function readFile(){
    const res = fs.readFileSync('D:/hello.txt').toString()
    console.log(res)
    return res
}
function createWindow() {
    const win = new BrowserWindow({
        width:800,
        height:600,
        autoHideMenuBar: true,
        x:0,
        y:0,
        alwaysOnTop:true,
        webPreferences: {
            preload: path.resolve(__dirname, './preload.js')
        }
    })
    ipcMain.on('file-save', writeFile)
    ipcMain.handle('file-read',readFile)
    // win.loadURL("https://www.google.com")
    win.loadFile('./pages/index.html')
}

console.log(__dirname)
console.log(process.versions.chrome)
console.log(process.versions.node)
console.log(process.versions.electron)
// app.whenReady().then(() => {
//     console.log('ok');
// })

app.on('ready', () => {
    console.log("app is ready!!!")
    createWindow()
    console.log('ok');
    app.on('activate', () => {
        if(BrowserWindow.getAllWindows().length === 0) createWindow()
    })
})

app.on('window-all-closed',() => {
    if(process.platform !== 'darwin') app.quit()
})

app.on('activate', () => {
    if(BrowserWindow.getAllWindows().length === 0) createWindow()
})