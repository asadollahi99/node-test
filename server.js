const http = require('http');

const app = http.createServer((req, res) => {
    console.log("create server block");
    res.write('Hello');
    res.end();
})

const port = 3000;
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});