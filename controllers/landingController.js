const User = require('../models/users')
exports.getLanding = (req, res) =>
{
    res.render('landing', {
        pageTitle:"CheckOut",
        pageType: "landing"
    });
}

exports.postUser = (req, res) => {

    const name = req.body.username;
    const surname = req.body.usersurname;
    const nickname = req.body.nickname;
    const email = req.body.password;
    const password = req.body.password;

    User.create({
        name: name,
        surname: surname,
        nickname: nickname,
        email: email,
        password: password
    }) .then(result => {
        console.log('Created User');
        res.redirect('/');
    }).catch( err => {
        console.log(err);
    });
}
