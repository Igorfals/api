import { Router } from 'express'
import { TipoAnimaisMiddleWare } from '../../../middlewares/tipo-animais'

const router = Router()
const tipoanimaisMiddleWare = new TipoAnimaisMiddleWare()

router.post('/add', tipoanimaisMiddleWare.setTipoAnimais)
router.put('/update', tipoanimaisMiddleWare.updatetipoAnimais)
router.delete('/delete/:id', tipoanimaisMiddleWare.deleteTipoAnimais)
export default router