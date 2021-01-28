import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Body, ALL } from '@midwayjs/decorator';
import { GoodsSkuGroupService } from '../service/GoodsSkuGroupService';
import { GoodsSkuGroup } from '../entity/GoodsSkuGroup';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'GoodsSkuGroup', description: '商品规格属性' })
export class GoodsSkuGroupController {
  
  @Inject()
  goodsSkuGroupService: GoodsSkuGroupService;

  @Get('/goodsSkuGroup', { summary: '商品规格属性列表' })
  async getGoodsSkuGroup() {
    const goodsSkuGroup: Array<GoodsSkuGroup> = await this.goodsSkuGroupService.getGoodsSkuGroup();
    return goodsSkuGroup;
  }

  @CreateApiDoc()
  .param('商品规格属性ID')
  .build()
  @Get('/goodsSkuGroup/:id', { summary: '商品规格属性详情' })
  async getGoodsSkuGroupDetail(@Param() id: number): Promise<GoodsSkuGroup> {
    const goodsSkuGroup:GoodsSkuGroup = await this.goodsSkuGroupService.getGoodsSkuGroupDetail(id);
    return goodsSkuGroup;
  }

  @CreateApiDoc()
  .param('商品规格属性ID')
  .build()
  @Del('/goodsSkuGroup/:id', { summary: '删除商品规格属性' })
  async deleteGoodsSkuGroup(@Param() id: number): Promise<string> {
    const msg:string = await this.goodsSkuGroupService.deleteGoodsSkuGroup(id);
    return msg;
  }

  @Put('/goodsSkuGroup', { summary: '更新商品规格属性' })
  async updateGoodsSkuGroup(@Body(ALL) goodsSkuGroup: GoodsSkuGroup): Promise<GoodsSkuGroup> {
    const result:GoodsSkuGroup = await this.goodsSkuGroupService.updateGoodsSkuGroup(goodsSkuGroup);
    return result;
  }

  @Post('/goodsSkuGroup', { summary: '添加商品规格属性' })
  async addGoodsSkuGroup(@Body(ALL) goodsSkuGroup: GoodsSkuGroup): Promise<GoodsSkuGroup> {
    const result:GoodsSkuGroup = await this.goodsSkuGroupService.addGoodsSkuGroup(goodsSkuGroup);
    return result;
  }
}
