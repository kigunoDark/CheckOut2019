exports.getMapPage = (req, res) => {
    res.render('usermap', {
        pageType: "UserIn",
        pageTitle:"CheckOut-Map"
    });
}

exports.postMapUser = (req, res) => {
    res.redirect('/checkout-map');   
}


exports.prof = (req, res) => {
    res.render("profile", {    pageTitle:"user-profile" });
  };


exports.logout = function(req, res) {
    req.session.destroy(function(err) {
      res.redirect("/");
    });
  };