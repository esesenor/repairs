import { catchAsync } from '../../common/errors/catchAsync.js';
import { RepairService } from './repairs.service.js';
import { AppError } from '../../common/errors/appError.js';

export const validExistRepair = catchAsync(async (req, res, next) => {
  const { id } = req.params;

  const repair = await RepairService.findOne(id);

  if (!repair) {
    return next(new AppError('Repair not found'));
  }

  req.repair = repair;
  next();
});
