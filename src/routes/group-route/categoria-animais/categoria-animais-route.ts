import { Router } from 'express'
import { CategoriaAnimaisMiddleWare } from '../../../middlewares/categoria-animais'


const router = Router()
const categoriaanimaisMiddleWare = new CategoriaAnimaisMiddleWare()

router.post('/add', categoriaanimaisMiddleWare.setCategoriaanimais)
router.get('/', categoriaanimaisMiddleWare.getCategoriaAnimais)
router.put('/update', categoriaanimaisMiddleWare.updatecategoriaAnimais)
router.delete('/delete/:id', categoriaanimaisMiddleWare.deletecategoriaAnimais)
export default router