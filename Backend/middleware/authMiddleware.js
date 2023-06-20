import jwt from 'jsonwebtoken'
import User from '../models/studentModel.js'

const protect = asyncHandler(async( req, res, next) => {
    let token
    if(req.headers.authorization && req.headers.authorization.startsWith('Bearer')){
        try{
            token = req.headers.authorization.split(' ')[1]
            const decoded = jwt.verify(token, process.env.JWT_SECRET)

            req.user = await User.findById(decoded.id).select('-password')
            console.log(decoded)
            next()
        }catch(error){
            // console.error(error)
            // res.status(401)
            // throw new Error('Not authorized, Token failed!')
       return res.status(401).json({success: false, data: "Not authorized, Token failed!"});

        }
    }
        if(!token){
        return res.status(401).json({success: false, data: "Token failed!"});
    }

})

export{
    protect
}