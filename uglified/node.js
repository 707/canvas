var express = require('express')
var app = express();
var bodyParser = require('body-parser');
var mysql      = require('mysql');


app.use(express.static(__dirname + '/public'));  
app.use(bodyParser.json({limit: "50mb"}));
app.use(bodyParser.urlencoded({limit: "50mb", extended: true, parameterLimit:100000}));

var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'ok',
  database : 'fp'


});

var data;

connection.connect();


app.get('/api/saved', function(req, res) {
        connection.query('SELECT * FROM saved', function (error, results, fields) {
        if (error) throw error;
        data = results;
        });
        res.send(data);


    });

    app.post('/api/saved', function(req, res) {
        console.log(req.body);
        var request = req.body;
        var id, data;
        var query_data= [];
        for(i=0;i<request.length; i++){

        id = request[i]['id'];
        data = request[i]['data'];
        query_data.push([id,data]);
        }
        console.log(data);
        var myquery = 'insert into saved (id,data) values ?';

        connection.query(myquery, [query_data], function(err) {
        if(err) {
            res.send('Error');
            console.log(err)
        }
        else {
            res.send('Success');
            console.log("success \n");
                    console.log(query_data);

        }
        });

    });

    app.get('*', function(req, res) {
        res.sendfile('./public/index.html'); 
    });


app.listen(3000);
    console.log("App listening on port 3000");


    //root@localhost: lAchk>BfV3by

//    E5s_4;*be_v-

