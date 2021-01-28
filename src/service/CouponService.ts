import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Coupon } from '../entity/Coupon';
import { Repository } from 'typeorm';

@Provide()
export class CouponService {
  @InjectEntityModel(Coupon)
  couponModel: Repository<Coupon>;

  async getCoupon(): Promise<Array <Coupon>> {
    let allCoupon: Array<Coupon> = await this.couponModel.find();
    return allCoupon;
  }

  async getCouponDetail(id: number): Promise<Coupon> {
    let coupon: Coupon = await this.couponModel.findOne({ id });
    return coupon;
  }

  async deleteCoupon(id: number): Promise<string> {
    let coupon: Coupon = await this.couponModel.findOne({ id });
    await this.couponModel.remove(coupon);
    return "success";
  }

  async updateCoupon(coupon: Coupon): Promise<Coupon> {
    let result: Coupon = await this.couponModel.findOne({ id: coupon.id });
    this.couponModel.save(Object.assign(result,coupon));
    return result;
  }

  async addCoupon(coupon: Coupon): Promise<Coupon> {
    this.couponModel.save(coupon);
    return coupon;
  }
}
