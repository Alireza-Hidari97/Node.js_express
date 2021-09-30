var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET home page. */
router.get('/home', function(req, res, next) {
  res.render('index', { 
    title: 'Home'
  });
});

/* GET About page. */
router.get('/about', function(req, res, next) {
  res.render('about', { 
    title: 'about'
  });
});

/* GET Products page. */
router.get('/project', function(req, res, next) {
  res.render('project', { 
    title: 'project'
  });
});

/* GET Services page. */
router.get('/services', function(req, res, next) {
  res.render('services', { 
    title: 'Services'
  });
});

/* GET Contact Us page. */
router.get('/contact', function(req, res, next) {
  res.render('contact', { 
    title: 'Contact Us'
  });
});

module.exports = router;
