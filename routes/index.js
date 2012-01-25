
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { title: 'Home' })
};

exports.about = function(req, res){
  res.render('about', { title: 'About' })
};

exports.portfolio = function(req, res){
  res.render('portfolio', { title: 'Portfolio' })
};
