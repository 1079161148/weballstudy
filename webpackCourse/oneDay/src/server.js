const express = require('express')
const app = express()
app.get('/api/info', (req, res) => {
    res.json({
        name: 'express返回结果',
        age: 22,
        msg: '欢迎来到express课程'
    })
})
app.listen('9092')