import User from '../Models/user.model.js';

  export const deleteUser = async (req, res) => {
    await User.findByIdAndDelete(req.user._id);//so it finds it from token
    res.clearCookie("token", { path: "/" });//clears cookie from browser(clear kr diya)
    res.status(200).json({ message: "User deleted" });
    console.log("account deleted successfully");
  };
  