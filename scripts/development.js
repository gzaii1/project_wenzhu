const path = require('path')
const { checkBrowsers } = require('react-dev-utils/browsersHelper');
const compilerCreator = require('../webpack.config')
const {
    choosePort,
    createCompiler,
    prepareProxy,
    prepareUrls,
  } = require('react-dev-utils/WebpackDevServerUtils');

const compiler = compilerCreator('development')

const DEFAULT_PORT = parseInt(process.env.PORT, 10) || 9000;
const HOST = process.env.HOST || '0.0.0.0';

// checkBrowsers(path.resolve(__dirname, '../src'), true)
// .then(() => {
//     return choosePort(HOST, DEFAULT_PORT);
// })

  
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