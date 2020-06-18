var http = require("http");
http.CreatServer(function(req,res){
	res.write("hellow wel-come");
	res.end();
});\.listen(5000)