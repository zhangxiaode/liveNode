import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query } from '@midwayjs/decorator';
import { CartService } from '../service/CartService';
import { Cart } from '../entity/Cart';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Cart', description: '购物车' })
export class CartController {
  
  @Inject()
  cartService: CartService;

  @Get('/cart', { summary: '获取购物车列表' })
  async getCart(@Query() userId: number) {
    const cart: Array<Cart> = await this.cartService.getCart(userId);
    return cart;
  }

  @Post('/cart', { summary: '添加购物车' })
  async addCart(@Query() userId: number, @Query() goodsId: number) {
    const cart: Cart = await this.cartService.addCart(userId, goodsId);
    return cart;
  }

  @Put('/cart', { summary: '更新购物车数量' })
  async updateCart(@Query() id: number, @Query() amount: number): Promise<Cart|string> {
    const result: Cart|string = await this.cartService.updateCart(id, amount);
    return result;
  }

  @CreateApiDoc()
  .param('购物车ID')
  .build()
  @Del('/cart/:id', { summary: '删除购物车' })
  async deleteCart(@Param() id: number): Promise<string> {
    const msg:string = await this.cartService.deleteCart(id);
    return msg;
  }
}
