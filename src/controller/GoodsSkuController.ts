import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { GoodsSkuService } from '../service/GoodsSkuService';
import { GoodsSku } from '../entity/GoodsSku';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'GoodsSku', description: '商品规格' })
export class GoodsSkuController {
  
  @Inject()
  goodsSkuService: GoodsSkuService;

  @Get('/goodsSku', { summary: '商品规格列表' })
  async getGoodsSku(@Query() skuGroupId: number) {
    const goodsSku: Array<GoodsSku> = await this.goodsSkuService.getGoodsSku(skuGroupId);
    return goodsSku;
  }

  @CreateApiDoc()
  .param('商品规格ID')
  .build()
  @Get('/goodsSku/:id', { summary: '商品规格详情' })
  async getGoodsSkuDetail(@Param() id: number): Promise<GoodsSku> {
    const goodsSku:GoodsSku = await this.goodsSkuService.getGoodsSkuDetail(id);
    return goodsSku;
  }

  @CreateApiDoc()
  .param('商品规格ID')
  .build()
  @Del('/goodsSku/:id', { summary: '删除商品规格' })
  async deleteGoodsSku(@Param() id: number): Promise<string> {
    const msg:string = await this.goodsSkuService.deleteGoodsSku(id);
    return msg;
  }

  @Put('/goodsSku', { summary: '更新商品规格' })
  async updateGoodsSku(@Body(ALL) goodsSku: GoodsSku): Promise<GoodsSku> {
    const result:GoodsSku = await this.goodsSkuService.updateGoodsSku(goodsSku);
    return result;
  }

  @Post('/goodsSku', { summary: '新增商品规格' })
  async addGoodsSku(@Body(ALL) goodsSku: GoodsSku): Promise<GoodsSku> {
    const result:GoodsSku = await this.goodsSkuService.addGoodsSku(goodsSku);
    return result;
  }
}
