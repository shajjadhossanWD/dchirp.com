// const User = require("../models/User");
// const jwt = require("jsonwebtoken");

// exports.findOrCreateUser = async (req, res) => {
//     try {
//         const user = await User.findOne({ walletAddress: req.body.walletAddress });
//         if (user) {
//             // make jwt token
//             const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
//                 expiresIn: "7d",
//             });
//             return res.status(200).json({
//                 token,
//                 user,
//             })
//         }
//         else {
//             const newUser = new User({
//                 walletAddress: req.body.walletAddress,
//             });
//             const data = await newUser.save();
//             // make jwt token
//             const token = jwt.sign({ id: data._id }, process.env.JWT_SECRET, {
//                 expiresIn: "7d",
//             });

//             res.status(200).json({
//                 token,
//                 user: data,
//             })
//         }
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json({ message: "An error occurred while creating user" });
//     }
// }

// exports.findUserByWalletAddress = async (req, res) => {
//     try {
//         if (req.user) {
//             res.json(req.user);
//         }
//         else {
//             res.status(404).json({ message: "User not found" });
//         }
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json({ message: "An error occurred while getting user by wallet address" });
//     }
// }

// exports.updateUserInfo = async (req, res) => {
//     try {

//         const wallet = await User.findOne({ walletAddress: req.params.walletAddress });
//         const query = { walletAddress: req.params.walletAddress };


//         const data = {
//             name: req.body.name,
//             username: req.body.username,
//             email: req.body.email,
//             network: req.body.network,
//             desc: req.body.desc,
//             city: req.body.city,
//             from: req.body.from,
//             birthday: req.body.birthday,
//             website: req.body.website,
//             usernameUpdateHistory: [...wallet.usernameUpdateHistory, new Date()],
//         };
//         const options = { upsert: true, new: true };
//         const user = await User.findOneAndUpdate(query, data, options);
//         res.status(200).json({
//             user,
//             message: "User has been updated",
//         });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json("An error occurred while updating user");
//     }
// }
// exports.updateUserProfile = async (req, res) => {
//     try {

//         const wallet = await User.findOne({ walletAddress: req.params.walletAddress });
//         const query = { walletAddress: req.params.walletAddress };

//         let path = "http://localhost:8800/assets/" + req.filename;

//         const profilePicture = {
//             profilePicture: req.filename && path,
//             usernameUpdateHistory: [...wallet.usernameUpdateHistory, new Date()],
//         };
//         const options = { upsert: true, new: true };
//         const user = await User.findOneAndUpdate(query, profilePicture, options);
//         res.status(200).json({
//             user,
//             message: "User has been updated",
//         });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json("An error occurred while updating user");
//     }
// }

// exports.updateUserCover = async (req, res) => {
//     try {

//         const wallet = await User.findOne({ walletAddress: req.params.walletAddress });
//         const query = { walletAddress: req.params.walletAddress };

//         let path = "http://localhost:8800/assets/" + req.filename;

//         const coverPicture = {
//             coverPicture: req.filename && path,
//             usernameUpdateHistory: [...wallet.usernameUpdateHistory, new Date()],
//         };
//         const options = { upsert: true, new: true };
//         const user = await User.findOneAndUpdate(query, coverPicture, options);
//         res.status(200).json({
//             user,
//             message: "User has been updated",
//         });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json("An error occurred while updating user");
//     }
// }

// exports.logout = async (req, res) => {
//     try {
//         const transaction = new Transaction({
//             type: "Logout",
//             user: req.user._id,
//             url: null,
//         });
//         await transaction.save();

//         res.status(200).json({
//             message: "Logout successfully",
//         });
//     }
//     catch (e) {
//         console.error(e.message);
//         res.status(500).json({ message: "An error occurred while logout" });
//     }
// }







