module.exports = {
    publicPath:"./" ,
    configureWebpack:{//配置webpack
       resolve:{ //映射
           //extensions:['.less'],//省略后缀配置
           alias: {
                //"@":"src",//默认带有
                "assets":"@/assets",
                "common":"@/common",
                "network":"@/network",
                "components":"@/components",
                "views":"@/views",
           }
       }
    }
}
