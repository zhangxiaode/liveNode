import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { User } from '../entity/User';
import { Repository } from 'typeorm';
import { Pager } from '../types/index';

@Provide()
export class UserService {

  @InjectEntityModel(User)
  userModel: Repository<User>;

  async getUser(params?: any): Promise<Pager | Array<User>> {
    if(params.skip != NaN && params.take != undefined) {
      const [rows, total] = await this.userModel.findAndCount(params);
      return {
        page: params.skip + 1,
        size: params.take,
        rows,
        total
      };
    } else {
      const rows = await this.userModel.find(params);
      return rows;
    }
  }

  async getUserDetail(openid: string): Promise<User> {
    let user: User = await this.userModel.findOne({ openid });
    return user;
  }

  async deleteUser(id: number): Promise<User> {
    let user: User = await this.userModel.findOne({ id });
    user.del = 0
    this.userModel.save(user);
    return user;
  }

  async updateUser(user: User): Promise<User> {
    this.userModel.save(user);
    return user;
  }
}
