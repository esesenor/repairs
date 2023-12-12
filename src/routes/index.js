import express from 'express';
import { router as userRouter } from '../modules/users/users.route.js';
import { router as repairsRouter } from '../modules/repairs/repairs.route.js';
//import { protect } from '../modules/user/user.middleware.js';

export const router = express.Router();

//router.use(protect);

router.use('/users', userRouter);

router.use('/repairs', repairsRouter);
