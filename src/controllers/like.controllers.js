
import like from "../models/like.models.js"

const userLike = async (req, res) => {
    const { userId, blogId } = req.body;
    try {
        const exitingLike = await like.findOne({ userId, blogId })
        if (exitingLike) {
            await like.deleteOne({ userId, blogId })
            return res.status(200).json({ message: "post unlike succesfully" })
        } else {
            await like.create({ userId, blogId })
            return res.status(200).json({ message: "post like succesfully" })
        }
    } catch (error) {
        return res.status(400).json({ message: "error occurred" })
    }
}

export { userLike }