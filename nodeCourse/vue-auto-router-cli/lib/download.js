const {promisify} = require('util')
module.exports.clone = async (repo,desc) => {
    const download = promisify(require('download-git-repo')) // 下载git使用
    const ora = require('ora')
    const process = ora(`下载.....${repo}`) // 定义进度条
    process.start() // 开始转动进度条
    await download(repo, desc)
    process.succeed() // 下载完成
}