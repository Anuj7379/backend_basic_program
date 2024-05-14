// const userModel = require('./userModel.js')
// exports.home=(req ,res)=>{
//     res.send("anuj sharma");
// }

// exports.createUser =async(req, res)=>{
//     // extract information//
//     try {
//         const {name , emial} =req.body
//         const user = await userModel.create({
//             name,
//             emial

//         })
//         res.status(201).json({
//             success:true,
//             message:"user created successfully",
//             user
//         })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success:false,
//             message: error.message
//         })
            

//     }
//  }




const userModel = require('./userModel.js');

exports.home = (req, res) => {
    res.send("anuj sharma");
}

exports.createUser = async (req, res) => {
    try {
        const { name, email } = req.body; // Corrected typo: emial to email
        const user = await userModel.create({
            name,
            email
        });
        res.status(201).json({
            success: true,
            message: "User created successfully",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
// exports.getUsers =async(req , res)=>{
//     try {
//      const users =   await userModel.find({});
    
//      res.status(200).json({

//         success:true
       
//      })
//     } catch (error) {
//         console.log(error);
//         res.status(500).json({
//             success: false,
//             message: error.message
//         });

//     }

// }


exports.getUsers = async (req, res) => {
    try {
        const users = await userModel.find({});
        console.log("Users:", users); // Log users to check if data is fetched
        
        res.status(200).json({
            success: true,
            users: users
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}
exports.deleteUser = async (req, res) => {
    try {
        const userId = req.params.userId;
        const deletedUser = await userModel.findByIdAndDelete(userId);
        
        if (!deletedUser) {
            return res.status(404).json({
                success: false,
                message: "User not found"
            });
        }
        
        res.status(200).json({
            success: true,
            message: "User deleted successfully",
            user: deletedUser
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
}