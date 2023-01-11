import { Router } from 'express'
import { CategoriaAnimaisMiddleWare } from '../../../middlewares/categoria-animais'
import { TipoAnimaisMiddleWare } from '../../../middlewares/tipo-animais'

const router = Router()
const categoriaanimaisMiddleWare = new CategoriaAnimaisMiddleWare()

router.post('/add', categoriaanimaisMiddleWare.setCategoriaanimais)
router.put('/update', categoriaanimaisMiddleWare.updatecategoriaAnimais)
export default router