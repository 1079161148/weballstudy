const fs = require('fs')
const {promisify} = require('util') // promise写法
const readFile = promisify(fs.readFile)

const data = fs.readFileSync('./test.js') // 同步读取

console.log(data,'data') // 默认是buffer
console.log(data.toString(),'data')

fs.readFile('./test.js', (err,asyncData) => { // 异步读取
    if (err) throw err
    console.log(asyncData.toString(),'asyncData')
})

process.nextTick(async () => {
    const data = await readFile('./test.js')
    console.log(data.toString(),'promise')
})