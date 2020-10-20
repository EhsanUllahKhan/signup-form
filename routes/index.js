var express = require('express');
var router = express();
const request = require('request');

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' });
});


/* GET home page. */
router.get('/user', function (req, res, next) {
  request('https://reqres.in/api/users?page=2', function (error, response, body) {
    var data = JSON.parse(body)
    console.log(data["data"])
    res.render("data", {
      data: JSON.stringify(data["data"])
    });
  });
});

router.get("/user/:id", (req, res) => {
  const accountId = Number(req.params.id);
  //console.log(accountId)
  var url = 'https://reqres.in/api/users/' + accountId;
  request(url, function (error, response, body) {
    var data = JSON.parse(body)
    console.log(data["data"])
    res.render("data", {
      data: JSON.stringify(data["data"])
    });
  });
})

router.get("/user/unknown/:id", (req, res) => {
  const accountId = Number(req.params.id);
  //console.log(accountId)
  var url = "https://reqres.in/api/unknown/" + accountId;
  request(url, function (error, response, body) {
    var data = JSON.parse(body)
    console.log(data)
    res.render("data", {
      data: JSON.stringify(data)
    });
  });
})

router.get('/user/unknown', function (req, res, next) {
  request('https://reqres.in/api/unknown', function (error, response, body) {
    var data = JSON.parse(body)
    console.log(data["data"])
    res.render("data", {
      data: JSON.stringify(data["data"])
    });
  });
});

router.post("/subscribe", function (req, res, next) {
  const { name, email } = req.body;

  // 1. Validate the user data
  // 2. Subscribe the user to the mailing list
  // 3. Send a confirmation email

  res.render("subscribed", {
    name: "Ehsan Ullah Khan",
    email
  });
});
module.exports = router;
