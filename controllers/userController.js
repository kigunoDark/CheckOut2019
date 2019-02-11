exports.getMapPage = (req, res) => {
    res.render('usermap', {
        pageType: "UserIn",
        pageTitle:"CheckOut-Map"
    });
}

exports.postMapUser = (req, res) => {
    res.redirect('/checkout-map');
}