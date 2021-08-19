const compilerCreator = require('../webpack.config')
const compiler = compilerCreator('development')
const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 9000;
  
module.exports = function () {
    return {
        ...compiler,
        devServer: {
            compress: true,
            port: DEFAULT_PORT,
            open: true,
        },
    }
}