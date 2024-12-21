import express from 'express'
import { addBlog, deleteBlog, editBlog } from '../controllers/blog.controllers.js'

const router = express.Router()

router.post('/addblog', addBlog)
router.put('/edit/:id', editBlog)
router.delete('/delete/:id', deleteBlog)


export default router