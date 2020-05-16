const cluster = require('cluster');
const numCPUs = require('os').cpus().length;
console.log('num is ', numCPUs)
if (cluster.isMaster) {
  // Fork workers.
  for (let i = 0; i < numCPUs; i++) {
    cluster.fork();
  }

  cluster.on('exit', function(worker, code, signal) {
    console.log('worker ' + worker.process.pid + ' died');
  });
} else {
  require('./src/app')
}