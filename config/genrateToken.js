const jwt =require('jsonwebtoken');


const generateTokens =(id)=>{
return jwt.sign({id } , "secretkeyforjwttoken", {
    expiresIn: "30d"
});



};


module.exports =generateTokens;