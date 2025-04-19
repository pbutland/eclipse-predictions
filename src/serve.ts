import express from 'express';

const port = 3000;
const directoryPath = './data';

const server = express();
server.use(express.static(directoryPath));

// Start the server
server.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});
