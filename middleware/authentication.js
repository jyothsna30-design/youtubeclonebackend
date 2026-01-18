import jsonwebtoken from 'jsonwebtoken';
import {User} from '../Modals/user.js';

const authenticate = async (req, res, next) => {
    const token = req.cookies.token
    if (!token) {
        return res.status(401).json({ error: 'Authentication failed: No token provided' });
    }
    else{
           try{
               const decoded = jsonwebtoken.verify(token, "secretKey");
               req.user = await User.findById(decoded.userId).select('-password');
               next();
           }
           catch(err){
               return res.status(401).json({ error: 'Authentication failed: Invalid token' });
           }

    }

}
export default authenticate;
    
