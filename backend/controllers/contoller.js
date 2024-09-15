 

 export const LoginContorll = async (req,res )=>{
    const {Email,Name,password} =req.body;
    console.log(Email,Name,password)
res.send({message:"Received"})
 }