import jwt from 'jsonwebtoken';
import { envs } from '../enviroments/enviroments.js';

export const generateJWT = (id) => {
  return new Promise((resolve, reject) => {
    const payload = { id };
    jwt.sign(
      payload,
      envs.SECRET_JWT_SEED, // secret key
      {
        expiresIn: envs.JWT_EXPIRE_IN, //time token
      },
      (err, token) => {
        //capturar errores o pasar el token si esta bien
        if (err) reject(err);

        resolve(token);
      }
    );
  });
};
