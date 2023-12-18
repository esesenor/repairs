import z from 'zod';
import { extractValidationData } from '../../common/utils/extractErrorData.js';

const repairSchema = z.object({
  id: z.number(),
  date: z.date(),
  userId: z.number(),
  status: z.string(),
});

export function validateRepair(data) {
  const result = repairSchema.safeParse(data);

  const {
    hasError,
    errorMessages,
    data: repairData,
  } = extractValidationData(result);

  return {
    hasError,
    errorMessages,
    repairData,
  };
}
