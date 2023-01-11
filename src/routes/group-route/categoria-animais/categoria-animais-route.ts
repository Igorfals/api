import { Router } from 'express'
import { CategoriaAnimaisMiddleWare } from '../../../middlewares/categoria-animais'

const router = Router()
const categoriaanimaisMiddleWare = new CategoriaAnimaisMiddleWare()

router.post('/add', categoriaanimaisMiddleWare.setCategoriaanimais)

export default router