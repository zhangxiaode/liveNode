import { Inject, Controller, Provide, Get, Del, Post, Param, Query } from '@midwayjs/decorator';
import { CouponUserService } from '../service/CouponUserService';
import { CouponUser } from '../entity/CouponUser';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'CouponUser', description: '用户优惠券' })
export class CouponUserController {

  @Inject()
  couponUserService: CouponUserService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/couponUser', { summary: '获取用户优惠券列表' })
  async getCouponUser(@Query() userId: number) {
    const couponUser: Array<CouponUser> = await this.couponUserService.getCouponUser(userId);
    return couponUser;
  }

  @Post('/couponUser', { summary: '领取用户优惠券' })
  async addCouponUser(@Query() userId: number, @Query() couponId: number): Promise<CouponUser> {
    const couponUser: CouponUser = await this.couponUserService.addCouponUser(userId, couponId);
    return couponUser;
  }

  @Del('/couponUser/:id', { summary: '删除用户优惠券' })
  async deleteCouponUser(@Param() id: number): Promise<string> {
    const msg: string = await this.couponUserService.deleteCouponUser(id);
    return msg;
  }
}
