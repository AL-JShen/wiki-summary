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

It would be useful to add an alias to quickly call the command. 

For example, if `wp="node wiki.js"`, `wp canada` would return a brief description of Canada. 

It is also recommended to pipe the output through `fold`, as this will greatly increase readability. Here is an example of what might be done.

```
node wiki.js cheese | fold -s -w60
``` 

* `-s` will break only at spaces (so words are not cut off)
* `-w60` says to break after 60 characters

Any feedback or suggestions would be greatly appreciated. 
