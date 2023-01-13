import { Router } from 'express'
import { AnimaisMiddleWhere } from '../../../middlewares/animais'

const router = Router()
const animaisMiddleWare = new AnimaisMiddleWhere()

router.post('/add', animaisMiddleWare.setAnimais)
router.get('/', animaisMiddleWare.getAnimais)

export default router