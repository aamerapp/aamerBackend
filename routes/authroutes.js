import express from "express";
import { signup, login, getUsers } from '../controllers/authController.js';
import validateInput from '../middleware/validateInput.js';
const router = express.Router();

router.post('/signup', validateInput, signup);
router.post('/login', validateInput, login);
router.get('/users', getUsers);

export default router;