const validatePartici = (req,res,next)=>{
    const {nome, email, evento_id} = req.body;

    if(!nome || !email || !evento_id){
        return res.status(400).json({
            msg:"Campos invlaidos, abre o olho fi",
        });
    }
    return next();
};

const validateParticiId = (req,res,next) =>{
    const {id} = req.params;

    if(!id){
        return res.status(400).json({
            msg:"Paramentro faltando",
        });
    }
    return next();
};

module.exports = {validatePartici, validateParticiId}