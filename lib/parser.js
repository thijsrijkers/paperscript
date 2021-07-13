module.exports = 
{
    ParseContent: function(parse)
    {
        switch (true) 
        {
            case parse.indexOf("doc(") !== -1:
                return parse.replace("doc(", "document.getElementByID(");
            default:
                return parse;
        }
    }
};