import Router from 'express';
import { logoutUser } from '../Controllers/logout.controller.js';

const logout = Router();


logout.post('/', logoutUser);

export default logout;