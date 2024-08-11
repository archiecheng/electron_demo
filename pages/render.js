/*
 * @Author: archiecheng archiechengice@outlook.com
 * @Date: 2024-08-10 22:04:06
 * @LastEditors: archiecheng archiechengice@outlook.com
 * @LastEditTime: 2024-08-11 09:38:16
 * @FilePath: \electron_test\pages\render.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AEbtn
 */
console.log('render')
const btn1 = document.getElementById('btn1');
const btn2 = document.getElementById('btn2');
const btn3 = document.getElementById('btn3');
const input = document.getElementById('input')
btn1.onclick = () => {
    alert(myAPI.version)
}

btn2.onclick = () => {
    // alert(input.value)
    myAPI.saveFile(input.value)
}

btn3.onclick = async () => {
    let data = await myAPI.readFile()
    alert(data)
}