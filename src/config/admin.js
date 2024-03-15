const mongoose = require("mongoose");
const connectToDB = async () => {
    try {
        await mongoose.connect(`mongodb+srv://nsarathreddyavm:Sowmya7569@cluster0.laplkak.mongodb.net/`);
        console.log("Database connected ");
    } 
    catch (error) {
        console.error("ERROR in connecting!", error);
    }
}
// const connect = async (user) => {
//     try {
//         await mongoose.connect(`mongodb+srv://nsarathreddyavm:Sowmya7569@cluster0.laplkak.mongodb.net/${user}`);
//         console.log("Database connected ");
//         console.log(User.user);
//     } 
//     catch (error) {
//         console.error("ERROR in connecting!", error);
//     }
// }
module.exports = {connectToDB};