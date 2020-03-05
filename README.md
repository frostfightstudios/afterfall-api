# Afterfall API Examples
Various examples for the Open API of Afterfall.

Welcome to this small repository of examples on how to use our API.
We have a Documentation about most Endpoints and what to expect from them here: [Afterfall Docs](https://docs.afterfall-game.com)

I prepared Code for NodeJS and PHP, if you understand how they work it should be easy to port them over to your favorite Programming Language.

NodeJS
-
We use [node-fetch](https://www.npmjs.com/package/node-fetch) for contacting the API.

PHP
-

We use the [cURL Extension](https://www.php.net/manual/en/book.curl.php) for contacting the API.

Examples
-
We currently have 1 Example: 
1. Character fetching with a given name. (This uses 2 calls, one for the character info and another one for the title_id)

Contribution
-
Feel free to make a PR with examples (new languages or other endpoints) or correct existing ones!
If you don't want to, you can create a new Issue with Feedback or Requests.

If you want to make a PR make sure to format the files like this:

    %number%-%name%.%ext%

Where %number% is the next number after the last example. (That means if the last added example says 5-fetch-character.js you would do 6-fetch-user.js)



