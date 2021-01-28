import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Body, ALL } from '@midwayjs/decorator';
import { CouponService } from '../service/CouponService';
import { Coupon } from '../entity/Coupon';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Coupon', description: '商品优惠券' })
export class CouponController {

  @Inject()
  couponService: CouponService;

  @Get('/coupon', { summary: '获取优惠券列表' })
  async getCoupon() {
    const coupon: Array<Coupon> = await this.couponService.getCoupon();
    return coupon;
  }

  @CreateApiDoc()
  .param('优惠券ID')
  .build()
  @Get('/coupon/:id', { summary: '获取优惠券详情' })
  async getCouponDetail(@Param() id: number): Promise<Coupon> {
    const coupon: Coupon = await this.couponService.getCouponDetail(id);
    return coupon;
  }

  @Del('/coupon/:id', { summary: '删除优惠券' })
  async deleteCoupon(@Param() id: number): Promise<string> {
    const msg: string = await this.couponService.deleteCoupon(id);
    return msg;
  }

  @Put('/coupon', { summary: '更新优惠券' })
  async updateCoupon(@Body(ALL) coupon: Coupon): Promise<Coupon> {
    const result: Coupon = await this.couponService.updateCoupon(coupon);
    return result;
  }

  @Post('/coupon', { summary: '新增优惠券' })
  async addCoupon(@Body(ALL) coupon: Coupon): Promise<Coupon> {
    const result: Coupon = await this.couponService.addCoupon(coupon);
    return result;
  }
}
