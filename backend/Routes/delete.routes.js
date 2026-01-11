import {Router} from 'express'
import { deleteUser } from '../Controllers/delete.controller.js';
import {protect} from '../middlewares/auth.middleware.js'
const del= Router();
del.delete('/', protect ,deleteUser);

export default del;
    