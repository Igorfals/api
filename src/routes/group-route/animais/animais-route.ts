import { Router } from 'express'
import { AnimaisMiddleWhere } from '../../../middlewares/animais'

const router = Router()
const animaisMiddleWare = new AnimaisMiddleWhere()

router.post('/add', animaisMiddleWare.setAnimais)
router.get('/', animaisMiddleWare.getAnimais)
router.put('/update', animaisMiddleWare.updateAnimais)
router.delete('/delete/:id', animaisMiddleWare.deleteAnimais)

export default router