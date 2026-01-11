import User from "../Models/user.model.js";

export const updateUser = async (req, res) => {
    const { name, email } = req.body;
  
    const user = await User.findByIdAndUpdate(
      req.user._id,
      { name, email },
      { new: true }
    ).select("-password");
  
    res.status(200).json(user);
  };