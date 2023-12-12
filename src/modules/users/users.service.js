import User from './users.model.js';

export class UserService {
  static async findOne(id) {
    return await User.findOne({
      where: {
        id: id,
      },
    });
  }

  static async findAll() {
    return await User.findAll({
      where: {
        status: 'available',
      },
    });
  }

  static async create(data) {
    return await User.create(data);
  }

  static async update(user, data) {
    return await user.update({ status: 'disable' });
  }

  static async delete() {
    return await user.delete({ status: '' });
  }
}
