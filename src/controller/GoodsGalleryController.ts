import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { GoodsGalleryService } from '../service/GoodsGalleryService';
import { GoodsGallery } from '../entity/GoodsGallery';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'GoodsGallery', description: '商品图片' })
export class GoodsGalleryController {
  
  @Inject()
  goodsGalleryService: GoodsGalleryService;

  @Get('/goodsGallery', { summary: '商品图片列表' })
  async getGoodsGallery(@Query() goodsId: number) {
    const goodsGallery: Array<GoodsGallery> = await this.goodsGalleryService.getGoodsGallery(goodsId);
    return goodsGallery;
  }

  @CreateApiDoc()
  .param('商品图片ID')
  .build()
  @Get('/goodsGallery/:id', { summary: '商品图片详情' })
  async getGoodsGalleryDetail(@Param() id: number): Promise<GoodsGallery> {
    const goodsGallery:GoodsGallery = await this.goodsGalleryService.getGoodsGalleryDetail(id);
    return goodsGallery;
  }

  @CreateApiDoc()
  .param('商品图片ID')
  .build()
  @Del('/goodsGallery/:id', { summary: '删除商品图片' })
  async deleteGoodsGallery(@Param() id: number): Promise<string> {
    const msg:string = await this.goodsGalleryService.deleteGoodsGallery(id);
    return msg;
  }

  @Put('/goodsGallery', { summary: '修改商品图片' })
  async updateGoodsGallery(@Body(ALL) goodsGallery: GoodsGallery): Promise<GoodsGallery> {
    const result:GoodsGallery = await this.goodsGalleryService.updateGoodsGallery(goodsGallery);
    return result;
  }

  @Post('/goodsGallery', { summary: '添加商品图片' })
  async addGoodsGallery(@Body(ALL) goodsGallery: GoodsGallery): Promise<GoodsGallery> {
    const result:GoodsGallery = await this.goodsGalleryService.addGoodsGallery(goodsGallery);
    return result;
  }
}
