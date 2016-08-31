/**
 * Created by Administrator on 2016/8/28.
 */
var webpack = require('webpack');

module.exports = {
    entry:[
        './app/app.js'
    ],
    output:{
        path:'build',
        filename:'bundle.js'
    },
    module:{
        loaders:[
            {
                test:/\.js$/,exclude:/node_modules/,loader:'babel-loader'
            }
        ]
    }
}