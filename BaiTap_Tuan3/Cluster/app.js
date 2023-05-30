const cluster = require('cluster');

const express = require('express');

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

// Workers can share any TCP connection

	const app = express();

// Define routes

	app.get('/', (req, res) => {

		res.send('Hello from worker!');

	});

// Start the server

	const port = 3000;

	app.listen(port, () => {

		console.log(`Worker process ${process.pid} listening on port ${port}`);

	});

}