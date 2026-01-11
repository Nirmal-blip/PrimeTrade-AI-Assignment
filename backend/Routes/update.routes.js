import {Router} from 'express'
import { updateUser } from '../Controllers/update.controller.js';
import {protect} from '../middlewares/auth.middleware.js'

const update= Router();
update.put('/',protect,updateUser);

export default update;
    