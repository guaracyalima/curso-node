const http = require ('http')
const server = http.createServer(function (req, res)
{
    res.writeHead(200, {"Contet-Type": "text/html"})
    res.end('<h1> Aco que e emelhor susar express, nao </h1<')
})

const porta = 3456

server.listen(porta, function () {
  console.log(`escutando porta ${porta}`);
})
