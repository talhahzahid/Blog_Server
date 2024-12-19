

import blog from '../models/blog.models.js';


// add blog 
const addBlog = async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: "title is required" })
    if (!description) return res.status(400).json({ message: "description is required" })
    try {
        await blog.create({ title, description })
        res.status(201).json({ message: "blog added successfully" })
    } catch (error) {
        res.status(400).json({ message: "error occurred" })
    }
}

// delete blog
const deleteBlog = async (req,)

export { addBlog }