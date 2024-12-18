
import users from "../models/user.models.js";

const signUp = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email) return res.status(400).json({ messaage: "email is rrequired" })
}