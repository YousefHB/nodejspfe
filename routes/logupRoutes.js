const express = require('express');
const app= express();
const router = express.Router();


router.get("/",(req,res,next)=>{
    res.end("this is logup(registration) page")
});
module.exports = router;