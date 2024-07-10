const {verifyToken} = require('../Helpers/GenerateToken')

const checkAuth = async(req, res, next) => {
    try{
        const token = req.cookies.jwt || req.header('Autorization')?.replace('Bearer ', '');
        const tokenData = await verifyToken(token)
        console.log(tokenData)
        if(tokenData._id) {
            next()

        }else {
            res.status(409)
            res.send({error : 'no podes pasar'})
        }
    }catch(err) {
        console.log(err)
    }
}

module.exports = checkAuth;