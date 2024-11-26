const validate = (schema) => async(req,res,next) =>{
    try {
        const parseBody = await schema.parseAsync(req.body)
        req.body = parseBody
        next()
    } catch (err) {
        const status = 500;
        const message = 'Fill the input properties'
        const extraDetalies  = err.errors[0].message;
          console.log(extraDetalies);
          
        const error ={
            status,
            message,
            extraDetalies
        }
        // console.log(err);
        next(error)
    }
}
export{validate}