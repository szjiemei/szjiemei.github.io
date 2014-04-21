exports.index = function(req, res){
    res.render('index', { header: 'Wedding of Huang Qi & Cai Qidan', 
    					title:'Site in Construction. Please wait for HQ&QD\'s invitation of wedding.' });
};

exports.mobile = function(req, res){
    res.render('mobile.html');
};