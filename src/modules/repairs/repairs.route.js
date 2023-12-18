import express from 'express';
import {
  createRepair,
  deleteRepair,
  findAllRepairs,
  findOneRepair,
  updateRepair,
} from './repairs.controller.js';
import { validExistRepair } from './repairs.middleware.js';

export const router = express.Router();

router.route('/').get(findAllRepairs).post(createRepair);

router
  .route('/:id')
  .get(findOneRepair)
  .patch(validExistRepair, updateRepair)
  .delete(validExistRepair, deleteRepair);
