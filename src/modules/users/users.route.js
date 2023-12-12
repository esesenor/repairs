import express from 'express';
import {
  register,
  login,
  findAllUser,
  findOneUser,
  updateUser,
  deleteUser,
  changePassword,
} from './users.controller.js';

import {
  protect,
  protectAccountOwner,
  restrictTo,
  validateExistUser,
} from './users.middleware.js';

export const router = express.Router();

router.post('/register', register);

router.post('/login', login);

router.use(protect); //////////////////////////////////////////////////////////

router.patch('/change-password', changePassword);

router.get('/', findAllUser);

router
  .route('/:id')
  .get(restrictTo('developer', 'receptionist'), validateExistUser, findOneUser)
  .patch(validateExistUser, protectAccountOwner, updateUser)
  .delete(validateExistUser, protectAccountOwner, deleteUser);
