//二进制友好，图片操作
const fs = require('fs')
const rs = fs.createReadStream('./img.png')
const ws = fs.createWriteStream('./img2.png')
rs.pipe(ws) // 链接 运行相当于复制一份 img