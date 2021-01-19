const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
	const file = fs.readFileSync("./data.json", {
		encoding: "utf8",
		flag: "r",
	});
	res.setHeader("Content-Type", "application/json");
	res.write(file);
	res.end();
}).listen(8080);
