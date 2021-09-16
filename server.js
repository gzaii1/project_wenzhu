/*
    使用方法: 
        - 启动命令: npm run mock
        - 使用细则:
            - 添加api接口, 需要直接在`/mock`目录下添加.json文件, 满足json要求即可
            - 通常情况, 文件名即为接口名, 默认为get方法, 如果需要其他方法如post, 则可以将方法用"-"拼接到接口名后, 如`login-post.json`
            - 工具并未对文件名做任何字符串上的删选, 请避免使用任何字母以外的字符, 尤其是"-"
            - 本mock工具并未添加热启动功能, 修改json文件或添加接口后, 请自行重启
            - 如果要发送文件, 可以放在/mock/public目录下, 请求时通过`/static/资源名`进行访问
*/
const express = require('express')
const path = require('path')
const glob = require('glob')
const colors = require('colors')

const port = 5000 // 默认端口号
const prefix = "/api" // 前缀

function loadFiles() {
    const app = express()
    app.use(express.json())
    app.use('/static', express.static(`${__dirname}/mock/public`))

    const files = glob.sync(path.resolve(__dirname, './mock/*.json'))
    files.forEach(file => {
        const fileName = file.split('/').pop().replace('.json', '')
        let path
        let method = 'get'
        if (fileName.includes('-')) {
            [path, method] = fileName.split('-')
        } else {
            path = fileName
        }
        app[method](`${prefix}/${path}`, (req, res) => {
            res.setHeader('Cache-Control', 'no-store');
            res.send(require(file))
        })
    })

    app.listen(port, () => {
        console.log(colors.green(`mock数据已开启,正在发送至: http://localhost:${port}`))
    })
}

// 如果需要热启动, 可以在这里通过fs.watch或其他方式自行添加
loadFiles()
