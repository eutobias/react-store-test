const path = require('path')

module.exports = {
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `
      @import "functions.scss";
      @import "variables.scss";  
    `,
  },
}