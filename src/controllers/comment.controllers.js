

import comment from "../models/comment.models.js"

const userComment = async (req, res) => {
    const { userId, blogId, content } = req.body;
    if (!userId) return res.status(400).json({ message: "id is required to comment" })
    if (!blogId) return res.status(400).json({ message: "postid is required to comment" })
    try {
        await comment.create({ userId, blogId, content })
        res.status(201).json({ message: "comment added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error occurred" })
    }
}

export { userComment }