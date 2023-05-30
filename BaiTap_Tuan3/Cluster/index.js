const cluster = require('cluster');

const numCPUs = require('os').cpus().length;

if (cluster.isMaster) {

	console.log(`Master process ${process.pid} is running`);

// Fork workers

	for (let i = 0; i < numCPUs; i++) {

		cluster.fork();

	}

	cluster.on('exit', (worker, code, signal) => {

		console.log(`Worker process ${worker.process.pid} died`);

// Fork a new worker when a worker dies

		cluster.fork();

	});

} else {

	require('./app');

}