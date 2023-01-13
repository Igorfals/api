import { Router } from 'express'
import { AnimaisMiddleWhere } from '../../../middlewares/animais'

const router = Router()
const animaisMiddleWare = new AnimaisMiddleWhere()

router.post('/add', animaisMiddleWare.setAnimais)

export default router