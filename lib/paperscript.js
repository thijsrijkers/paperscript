const fs = require("fs");
const parser = require("./parser");

function readTextFile()
{
    fs.readFile(__dirname + "../../src/index.paper", (error, data) => 
    {
        const file = data.toString();
        const lines = file.split(/\r\n|\n/);
        var builder = "";

        lines.forEach((line) => 
        {
            var words = line.split(" ");
            words.forEach((word)=>
            {
                builder += parser.ParseContent(word) + " ";
            });
            builder += "\n";
        });
    
        fs.writeFile('dist/index.js', builder, function (err) {
            if (err) throw err;
            console.log('File is created successfully.');
        });
    });
}

readTextFile();
