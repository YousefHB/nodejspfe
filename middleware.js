exports.requireLogin=(req,res,next) => {
 if(req.session && req.session.user )
  return next();
else {
    res.end("please register before")
}

};