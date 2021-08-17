const compilerCreator = require('../webpack.config')
const compiler = compilerCreator('production')
  
module.exports = function () {
    return {
        ...compiler,
    }
}