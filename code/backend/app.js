const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const port = 3000;
const neo4j = require("neo4j-driver").v1;
const driver = neo4j.driver("bolt://localhost", neo4j.auth.basic("neo4j", "1234"));
const session = driver.session();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Authorization, X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Allow-Request-Method');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  res.header('Allow', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
app.post("/reco", function (req, res) {
  var mood = req.body.mood;
  var last = req.body.last;
  console.log(mood);
  var query = "MATCH (n:Song) where n.mood ='" + mood + "' return n";
  //AND n.group <> '"+last+"' 
  console.log(query);
  var array = [];
  const resultPromise = session.run(query).subscribe({
    onNext: function (record) {
      array.push(record.get(0).properties);

    },
    onCompleted: function () {
      var randon_int = Math.floor(Math.random() * array.length);
      console.log(array[randon_int]);

      res.send([array[randon_int]]);

      session.close();
    },
    onError: function (error) {
      console.log(error);
    }
  });
}),
  app.post("/bscr", function (req, res) {
    var songi = req.body.name;
    console.log(songi);
    var query = "MATCH (n:Song) where n.name =~ '(?i).*" + songi + ".*' return n";
    console.log(query);
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);

      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
  }),
  app.get("/real", function (req, res) {
    var query = "MATCH (n:Song) return n";
    console.log("prueba");
    var array = [];

    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);

      },
      onCompleted: function () {
        var randon_int = Math.floor(Math.random() * array.length);
        console.log(array[randon_int]);

        res.send([array[randon_int]]);

        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
  }),
  app.get("/can", function (req, res) {
    var query = "MATCH (n:Song) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);

      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
  }),
  app.get("/alb", function (req, res) {
    var query = "MATCH (n:Album) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);

      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
  }),
  app.get("/art", function (req, res) {
    var query = "match (n) where (:Genre)-[]->(n) return n";
    var array = [];
    const resultPromise = session.run(query).subscribe({
      onNext: function (record) {
        array.push(record.get(0).properties);

      },
      onCompleted: function () {
        console.log(array);

        res.send(array);

        session.close();
      },
      onError: function (error) {
        console.log(error);
      }
    });
  })


app.listen(port, function () {
  console.log("Example app listening on port " + 3000);
});