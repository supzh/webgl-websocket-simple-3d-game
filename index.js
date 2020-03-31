var ws = require("nodejs-websocket")

function broadcast(server, msg) {
server.connections.forEach(function (conn) {
conn.sendText(msg)
})
}

var server = ws.createServer(function (conn) {
console.log("New connection")
conn.on("text", function (str) {
console.log("Received "+str)
broadcast(server, str)
})
conn.on("close", function (code, reason) {
console.log("Connection closed")
})
conn.on("error", function (code, reason) {
console.log("异常关闭", reason)
});
}).listen(8001)