import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { GoodsService } from '../service/GoodsService';
import { Goods } from '../entity/Goods';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Goods', description: '商品' })
export class GoodsController {
  
  @Inject()
  goodsService: GoodsService;

  @Get('/goods', { summary: '商品列表' })
  async getGoods(@Query() keyword: string) {
    let params = {}
    if(keyword) {
      params['keyword'] = keyword;
    }
    const goods: Array<Goods> = await this.goodsService.getGoods(params);
    return goods;
  }

  @CreateApiDoc()
  .param('商品ID')
  .build()
  @Get('/goods/:id', { summary: '商品详情' })
  async getGoodsDetail(@Param() id: number): Promise<any> {
    const goods: any = await this.goodsService.getGoodsDetail(id);
    return goods;
  }

  @CreateApiDoc()
  .param('商品ID')
  .build()
  @Del('/goods/:id', { summary: '删除商品' })
  async deleteGoods(@Param() id: number): Promise<string> {
    const msg: string = await this.goodsService.deleteGoods(id);
    return msg;
  }

  @Put('/goods', { summary: '更新商品' })
  async updateGoods(@Body(ALL) goods: Goods): Promise<Goods> {
    const result: Goods = await this.goodsService.updateGoods(goods);
    return result;
  }

  @Post('/goods', { summary: '新增商品' })
  async addGoods(@Body(ALL) goods: Goods): Promise<Goods> {
    const result: Goods = await this.goodsService.addGoods(goods);
    return result;
  }
}
