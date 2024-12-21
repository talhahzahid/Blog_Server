import express from 'express'
import { addBlog, allBlog, deleteBlog, editBlog, singleBlog } from '../controllers/blog.controllers.js'

const router = express.Router()

router.post('/addblog', addBlog)
router.put('/edit/:id', editBlog)
router.delete('/delete/:id', deleteBlog)
router.delete('/blogs', allBlog)
router.delete('/blog/:id', singleBlog)


export default router