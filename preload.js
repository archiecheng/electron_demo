/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-08-10 22:12:57
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-08-11 09:36:35
 * @FilePath: \electron_test\preload.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
console.log('preload',process.version);

const {contextBridge, ipcRenderer} = require('electron')

contextBridge.exposeInMainWorld('myAPI', {
    version: process.version,
    saveFile:(data) => {
        ipcRenderer.send('file-save',data )
    },
    readFile(){
        // let x = await ipcRenderer.invoke('file-read')
        // console.log('@@@@', x)
        return ipcRenderer.invoke('file-read')
    }
})