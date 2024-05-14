const mongoose =require('mongoose');
const connectDb=async()=>{
    await mongoose.connect(`mongodb+srv://dark9soul88:5ROxiNqNjQby8gxE@anuj.efi1lzq.mongodb.net/sigmaOne`)
    console.log(`database is connected ${mongoose.connection.host}`);

}
connectDb();
module.exports=connectDb;