import { Router } from "express";
import * as controller from '../controllers/posts'

const router = Router()


export {
  router
}

router.get('/', controller.index)
router.post('/create', controller.create)
router.get('/:id', controller.show)
router.put('/:id', controller.update)