'use strict'
module.exports = (option, app) => {
    return async function (ctx, next) {
        try {
            await next()
        } catch (err) {
            // 开课吧web全栈架构师
            // helper⽅法实现统⼀响应格式
            // Helper 函数⽤来提供⼀些实⽤的 utility 函数。
            // 它的作⽤在于我们可以将⼀些常⽤的动作抽离在 helper.js ⾥⾯成为⼀个独⽴的函数，这样可以⽤
            // JavaScript 来写复杂的逻辑，避免逻辑分散各处。另外还有⼀个好处是 Helper 这样⼀个简单的函
            // 数，可以让我们更容易编写测试⽤例。
            // 框架内置了⼀些常⽤的 Helper 函数。我们也可以编写⾃定义的 Helper 函数。
            // 所有的异常都在 app 上触发⼀个 error 事件，框架会记录⼀条错误⽇志
            app.emit('error', err, this)
            const status = err.status || 500

            // ⽣产环境时 500 错误的详细错误内容不返回给客户端，因为可能包含敏感信息
            const error = status === 500 && app.config.env === 'prod' ?
                'Internal Server Error' :
                err.message
            // 从 error 对象上读出各个属性，设置到响应中
            ctx.body = {
                code: status, // 服务端⾃身的处理逻辑错误(包含框架错误500 及 ⾃定义业务逻辑
                // 错误533开始 ) 客户端请求参数导致的错误(4xx开始)，设置不同的状态码
                error: error
            }

            // 用户定义错误 检查哪个接口出错了
            if (status === 422) {
                ctx.body.detail = err.errors
            }
            ctx.status = 200
        }
    }
}