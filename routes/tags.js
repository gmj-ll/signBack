var express = require('express');
var router = express.Router();
var tagsDao = require('../dao/tagsDao')
/* GET users listing. */
router.post('/addTags', function(req, res, next) {
  tagsDao.add(req, res,next)
});

router.get('/getTags', function(req, res, next) {
  tagsDao.queryAll(req, res,next)
});

router.post('/deleteTags', function(req, res, next) {
  tagsDao.delete(req, res,next)
});
router.post('/updateTags', function(req, res, next) {
  tagsDao.update(req, res,next)
});

module.exports = router;
