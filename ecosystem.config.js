module.exports = {
  apps: [
    {
      name: 'koa2-demo',      //应用名
      script: './src/app.js',   //应用文件位置
      env: {
        NODE_ENV: 'development' //启动默认模式
      },
      env_production : {
        NODE_ENV: 'production'  //使用production模式 pm2 start ecosystem.config.js --env production
      },
      instances:"max",          //将应用程序分布在所有CPU核心上,可以是整数或负数
      instance_var: "INSTANCE_ID",
      exec_mode: "cluster",
      watch:[
        "server",
      ],   //监听模式，不能单纯的设置为true，易导致无限重启，因为日志文件在变化，需要排除对其的监听
      merge_logs: true,         //集群情况下，可以合并日志
    }
  ],
  // deploy: {
  //     production : {
  //       user: 'node',                      //ssh 用户
  //       host: '212.83.163.1',              //ssh 地址
  //       ref: 'origin/master',             //GIT远程/分支
  //       repo: 'git@github.com:repo.git',   //git地址
  //       path: '/var/www/production',       //服务器文件路径
  //       "post-deploy": 'npm install && pm2 reload ecosystem.config.js --env production'  //部署后的动作
  //     }
  // }
}