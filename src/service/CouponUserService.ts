import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { CouponUser } from '../entity/CouponUser';
import { Repository } from 'typeorm';

@Provide()
export class CouponUserService {
  @InjectEntityModel(CouponUser)
  couponUserModel: Repository<CouponUser>;

  async getCouponUser(userId: number): Promise<Array <CouponUser>> {
    let allCouponUser: Array<CouponUser> = await this.couponUserModel.find({user_id: userId});
    return allCouponUser;
  }

  async addCouponUser(userId: number, couponId: number): Promise<CouponUser> {
    let couponUser = new CouponUser();
    couponUser.user_id = userId;
    couponUser.coupon_id = couponId;
    this.couponUserModel.save(couponUser);
    return couponUser;
  }

  async deleteCouponUser(id: number): Promise<string> {
    let couponUser: CouponUser = await this.couponUserModel.findOne({ id });
    await this.couponUserModel.remove(couponUser);
    return "success";
  }
}
