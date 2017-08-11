module.exports = {
	index: function (req, res) {
		res.locals.layout = 'layout.ejs';
		res.render('index', {
			NODE_ENV: process.env['NODE_ENV']
		});
	}
};
