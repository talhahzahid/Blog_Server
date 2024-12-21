


import blog from '../models/blog.models.js'


const addBlog = async (req, res) => {
    const { title, description } = req.body;
    if (!title) return res.status(400).json({ message: 'title is required' });
    if (!description) return res.status(400).json({ message: 'description is required' });
    try {
        await blog.create({ title, description })
        res.status(201).json({ message: 'blog added successfully' });
    } catch (error) {
        res.status(400).json({ message: 'error occured', error: error.message });
    }
}


const deleteBlog = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: 'id is required' });
    try {
        await blog.findByIdAndDelete(id)
        res.status(200).json({ message: 'blog deleted successfully' });
    } catch (error) {
        res.status(400).json({ message: 'error occured', error: error.message });
    }
}


const editBlog = async (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    if (!id) return res.status(400).json({ message: 'id is required' });
    try {
        await blog.findByIdAndUpdate(id, { title, description })
        res.status(201).json({ message: 'blog edit successfully' });
    } catch (error) {
        res.status(400).json({ message: 'error occured', error: error.message });
    }
}

const allBlog = async (req, res) => {
    try {
        await blog.find({})
        res.status(200).json({ message: "ALl Blog" })
    } catch (error) {
        res.status(400).json({ message: 'error occured', error: error.message });
    }
}
const singleBlog = async (req, res) => {
    const { id } = req.params;
    if (!id) return res.status(400).json({ message: "no blog found" })
    try {
        await blog.findById(id)
        res.status(200).json({ message: "user blog found" })
    } catch (error) {
        res.status(400).json({ message: 'error occured', error: error.message });
    }
}

export { addBlog, deleteBlog, editBlog, allBlog, singleBlog }