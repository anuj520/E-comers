const adminMiddleware = async(req,res,next) =>{
    try {
      const adminRole = req.user.isAdmin  
      if (!adminRole) {
        return res.status(404).json({msg:'user already exits'})
      }
      next();
    } catch (error) {
        console.log(error);
        
        res.status(500).json({msg:"invalied traditions"})
    }
}
export{adminMiddleware}