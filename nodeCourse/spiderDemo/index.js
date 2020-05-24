const originRequest = require('request');
const iconv = require('iconv-lite');
const cheerio = require('cheerio');

function request(url, cb){
    const option = {
        encoding: null
    }
    originRequest(url, option, cb)
}

for (let i = 100553; i< 100574; i++){
    const url = `https://www.dy2018.com/i/${i}.html`;
    request(url, function(err, res, body){
        console.log(body,'body')
        const html = iconv.decode(body,'gb2312')
        console.log(html,'html')
        const $ = cheerio.load(html);
        console.log($('title_all h1').text())
    })
}