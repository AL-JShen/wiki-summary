# wiki-summary

The purpose of this tool is to provide a quick way to look up something and get a brief description of it without opening a web browser.

This is a tool built with Node.js. It processes the arguments passed in along when calling the program, and uses [Axios](https://github.com/mzabriskie/axios) to make a `GET` request to Wikipedia. By default, two sentences are returned.

The syntax is very simple.

```
node wiki.js <word>

node wiki.js bitcoin
```

Multiple words can also be passed in.

```
node wiki.js <word word>

node wiki.js war of 1812
```

It would be useful to add a function to the shell configuration to simplify using this tool.

```
function wp() { node wiki.js $@ | fold -s -w60 }
```

This makes it so the tool can be called with a simple `wp <word>` regardless of the directory that you are in. The pipe to `fold` is optional but increases readability. 

Any feedback or suggestions would be greatly appreciated. 
