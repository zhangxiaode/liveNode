import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { GoodsSkuSpecService } from '../service/GoodsSkuSpecService';
import { GoodsSkuSpec } from '../entity/GoodsSkuSpec';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'GoodsSkuSpec', description: '商品规格' })
export class GoodsSkuSpecController {
  
  @Inject()
  goodsSkuSpecService: GoodsSkuSpecService;

  @Get('/goodsSkuSpec', { summary: '商品规格列表' })
  async getGoodsSkuSpec(@Query() goodsId: number) {
    const goodsSkuSpec: Array<GoodsSkuSpec> = await this.goodsSkuSpecService.getGoodsSkuSpec(goodsId);
    return goodsSkuSpec;
  }

  @CreateApiDoc()
  .param('商品规格ID')
  .build()
  @Get('/goodsSkuSpec/:id', { summary: '商品规格详情' })
  async getGoodsSkuSpecDetail(@Param() id: number): Promise<GoodsSkuSpec> {
    const goodsSkuSpec:GoodsSkuSpec = await this.goodsSkuSpecService.getGoodsSkuSpecDetail(id);
    return goodsSkuSpec;
  }

  @CreateApiDoc()
  .param('商品规格ID')
  .build()
  @Del('/goodsSkuSpec/:id', { summary: '删除商品规格' })
  async deleteGoodsSkuSpec(@Param() id: number): Promise<string> {
    const msg:string = await this.goodsSkuSpecService.deleteGoodsSkuSpec(id);
    return msg;
  }

  @Put('/goodsSkuSpec', { summary: '更新商品规格' })
  async updateGoodsSkuSpec(@Body(ALL) goodsSkuSpec: GoodsSkuSpec): Promise<GoodsSkuSpec> {
    const result:GoodsSkuSpec = await this.goodsSkuSpecService.updateGoodsSkuSpec(goodsSkuSpec);
    return result;
  }

  @Post('/goodsSkuSpec', { summary: '新增商品规格' })
  async addGoodsSkuSpec(@Body(ALL) goodsSkuSpec: GoodsSkuSpec): Promise<GoodsSkuSpec> {
    const result:GoodsSkuSpec = await this.goodsSkuSpecService.addGoodsSkuSpec(goodsSkuSpec);
    return result;
  }
}
