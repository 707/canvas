# canvas

This is a MyEAN stack app which uses fabric.js

Screencast https://i.imgur.com/AV84YDj.gif

Images and Text can be uploaded scaled, rotated. The canvas can also be downloaded as .png image file.

Edit history works by tracking user click events within the canvas and collating canvas data for fast loading. 

A MySQl 5.0+ db is requried to run the app.

Use this query to create a table in a database called 'fp' and use your credentials to access it. You can edit 

[the variable 'connection'](node.js) if you'd like to edit the credentials.

````
CREATE TABLE `saved` (
  `id` varchar(255) NOT NULL DEFAULT '',
  `data` json DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1;
````

