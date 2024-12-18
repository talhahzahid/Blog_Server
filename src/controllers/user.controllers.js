
import users from "../models/user.models.js";

const signUp = async (req, res) => {
    const { fullname, email, password } = req.body;
    if (!email) return res.status(400).json({ messaage: "email is rrequired" });
    if (!password) return res.status(400).json({ messaage: "password is rrequired" });
    try {
        const user = await users.findOne({ email })
        if (user) return res.status(400).json({ message: "user already exits" })
        await users.create({ fullname, email, password })
        res.status(200).json({ messaage: "user register successfully" })
    } catch (error) {
        res.status(400).json({ messaage: "error occured" })
        console.log(error);
    }
}

export { signUp }