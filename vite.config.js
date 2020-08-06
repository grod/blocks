const svite = require('svite');
module.exports = {
  plugins: [svite({
    logLevel: 'info', // 'silent'
    hot: {noPreserveState: false}
  })]
};