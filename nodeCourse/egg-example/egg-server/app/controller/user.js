const { Controller } = require('egg');
/**
 * @Controller ⽤户管理
 */
class UserController extends Controller {
    constructor(ctx) {
        super(ctx)
    }
    /**
     * @summary 创建⽤户
     * @description 创建⽤户，记录⽤户账户/密码/类型
     * @router post /api/user
     * @request body createUserRequest *body
     * @response 200 baseResponse 创建成功
     */
    async create() {
        const { ctx, service } = this;
        // ctx.body = 'user ctrl5555555555555'

        // 校验参数
        ctx.validate(ctx.rule.createUserRequest)

        // 组装参数
        const payload = ctx.request.body || {}

        // 调⽤ Service 进⾏业务处理
        const res = await service.user.create(payload)

        // 设置响应内容和响应状态码
        ctx.helper.success({ ctx, res })
    }
}

module.exports = UserController