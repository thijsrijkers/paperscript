const fs = require("fs");
const parser = require("./parser");

function readTextFile()
{
    var files = fs.readdirSync(__dirname + "../../src/");

    for(var i = 0; i < files.length; i++)
    {
        if(ReturnExtension(files[i]).toString().toLowerCase() == 'paper')
        {
            CompileToJS(files[i]);
        }
    }
}

function CompileToJS(paperfile)
{
    fs.readFile(__dirname + "../../src/" + paperfile, (error, data) => 
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
    
        fs.writeFile('dist/'+paperfile.substring(0, paperfile.indexOf('.'))+'.js', builder, function (err) 
        {
            if (err) throw err;
                console.log('File is created successfully.');
        });
    });
}

function ReturnExtension(file)
{
    return file.split('.').pop();
}

readTextFile();
