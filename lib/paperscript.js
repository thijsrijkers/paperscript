const fs = require("fs");

function readTextFile()
{
    fs.readFile(__dirname + "../../src/index.paper", (error, data) => {
        if(error) {
            throw error;
        }
        console.log(data.toString());
    });
}
readTextFile();