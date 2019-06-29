const server = require('./api/index');

const port = process.env.PORT || 3000;

server.listen(port, () => console.log(`Server Live : Port ${port}`));