import { Router } from 'express'
import { uploadFile } from '../controllers/upload'
import {
    checkImageContent,
    checkMinFileSize,
    upload,
} from '../middlewares/file'

const uploadRouter = Router()
uploadRouter.post('/', checkImageContent, upload.single('file'), checkMinFileSize, uploadFile)

export default uploadRouter
