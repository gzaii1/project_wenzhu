const express = require('express')
const path = require('path')
const glob = require('glob')
const colors = require('colors')
const port = 5000

// const fs = require('fs')
// const opt = {
//     persistent:true, // persistent <boolean> 指示如果文件已正被监视，进程是否应继续运行。默认值: true。
//     recursive: false// recursive <boolean> 指示应该监视所有子目录，还是仅监视当前目录。 这适用于监视目录时，并且仅适用于受支持的平台（参见注意事项）。默认值: false。
// }

// var server

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
        app[method](`/api/${path}`, (req, res) => {
            res.setHeader('Cache-Control', 'no-store');
            res.send(require(file))
        })
    })
    // server = 
    app.listen(port, () => {
        console.log(colors.green(`mock数据已开启,正在发送至: http://localhost:${port}`))
    })
}

loadFiles()

/*
fs.watch(path.resolve(__dirname, './mock'),opt, (eventType, filename) => {
    console.log(`事件类型是: ${eventType}`);
    server.once('close', function () {
        loadFiles()
    })
    server.close();
})
*/


