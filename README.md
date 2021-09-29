<p align="center"><img src="https://i.imgur.com/Tk4CNy5.gif" width="132" height="96"> </p>
<h3 align="center">PaperScript</h3>

## Introduction

Paperscript or Paper is a little language that compiles into JavaScript. The first rule when it comes to paperscript is that there is one rule, it just needs to compile Javascript. The code compiles one-to-one into the equivalent JS, and there is no interpretation at runtime. With this, the goal is to create a enviroment that can run seamlessly with other Javascript libaries.


## Installation

Once you have Node.js installed:

```shell
# Install locally for a project:
npm install --save-dev paperscript
```

## Getting started

When you done coding your .paper file:

```shell
# To compile files you need to run:
npm run build
# This will compile the .paper files in src to newly generated js files in the dist folder to use
```
Code example:

```shell
# Small example of paper code:
doc("value").ToString();
# This will result into:
document.getElementByID("value").ToString(); 
```

For documentation, usage, and examples, see: {Comming soon}

To suggest a feature or report a bug: https://github.com/thijsrijkers/paperscript/issues

The source repository: https://github.com/thijsrijkers/paperscript.git
