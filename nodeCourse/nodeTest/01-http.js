const http = require('http');
const fs = require('fs')

http.createServer((req,res) => {
    console.log(req,'req',res,'res')
    // res.end('hello node') // 页面测试内容
    const {url, method, headers} = req;
    if (url === '/' && method === 'GET'){
        fs.readFile('index.html',(err, data) => {
            if (err){
                res.writeHead(500,{'Content-Type': 'text/plan;charset=utf-8'})
                res.end('500内部服务器错误')
                return
            }
            res.statusCode = 200;
            res.setHeader('Content-Type','text/html')
            res.end(data)
        })
        
    } else if (url === '/users' && method === 'GET') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify([{name:'tom',age:20}]));
    } else if(method === 'GET' && headers.accept.indexOf('image/*') !== -1){
        // 图片文件服务 favicon.ico 默认需要加载这个
        fs.createReadStream('./'+ url).pipe(res)
    }

}).listen(9910)