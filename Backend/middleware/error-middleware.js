const middleware = (err,req,res,next) =>{
    const status = err.status||500;
    const message = err. message || "Error from Backend";
    const extraDetalies = err.extraDetalies|| "ERROR EAGLE"

   return res.status(404).json({message,extraDetalies})
}
export{middleware}