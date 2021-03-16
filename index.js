/**
 * @ReadMe 🍅
 ---------------------------------------------
  When you first learn JavaScript,
  When creating a file to study JavaScript,
  When you're not sure how to give the file a name,
  A JavaScript file with a random name based on the current date
  Make it.
  You just write whatever you think of.
 ---------------------------------------------
 */
const fs = require('fs');
var rs = require("randomstring");
const moment = require('moment');
require('moment-timezone');

moment.tz.setDefault("Asia/Seoul"); 
const todaystring = moment().format('YYYY-MM-DD');
const randomstring = rs.generate(7);

//Create today's date folder
function createTodayDirectory(directory, fiename,  createRandomJsFunc){
  if(!fs.existsSync(directory)) fs.mkdirSync(directory);
  createRandomJsFunc(directory, fiename);
}

createTodayDirectory(todaystring, randomstring, (directory, filename) => {
//html
fs.writeFileSync(
`${directory}/index.html`, 
`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>JS STUDY</title>
</head>
<body>
    <noscript>js study</noscript>
    <script src="${filename}.js"></script>
</body>
</html>
`
);

//js
fs.writeFileSync(
`${directory}/${filename}.js`, 
`'use strict';
/**
 * @README 🌟
 --------------------------------------------------
  #Please write a simple comment about the code
  ...
 --------------------------------------------------
*/`
);
});

