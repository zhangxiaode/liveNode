import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { GoodsCommentService } from '../service/GoodsCommentService';
import { GoodsComment } from '../entity/GoodsComment';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'GoodsComment', description: '商品评论' })
export class GoodsCommentController {
  
  @Inject()
  goodsCommentService: GoodsCommentService;

  @Get('/goodsComment', { summary: '商品评论列表' })
  async getGoodsComment(@Query() goodsId: number, @Query() orderId: number, @Query() userId: number) {
    let params = {}
    if(goodsId) {
      params['goods_id'] = goodsId;
    }
    if(orderId) {
      params['order_id'] = orderId;
    }
    if(userId) {
      params['user_d'] = userId;
    }
    const goodsComment: Array<GoodsComment> = await this.goodsCommentService.getGoodsComment(params);
    return goodsComment;
  }

  @CreateApiDoc()
  .param('评论ID')
  .build()
  @Get('/goodsComment/:id', { summary: '商品评论详情' })
  async getGoodsCommentDetail(@Param() id: number): Promise<GoodsComment> {
    const goodsComment:GoodsComment = await this.goodsCommentService.getGoodsCommentDetail(id);
    return goodsComment;
  }

  @CreateApiDoc()
  .param('评论ID')
  .build()
  @Del('/goodsComment/:id', { summary: '删除商品评论' })
  async deleteGoodsComment(@Param() id: number): Promise<string> {
    const msg:string = await this.goodsCommentService.deleteGoodsComment(id);
    return msg;
  }

  @Put('/goodsComment', { summary: '修改商品评论' })
  async updateGoodsComment(@Body(ALL) goodsComment: GoodsComment): Promise<GoodsComment> {
    const result:GoodsComment = await this.goodsCommentService.updateGoodsComment(goodsComment);
    return result;
  }

  @Post('/goodsComment', { summary: '提交商品评论' })
  async addGoodsComment(@Body(ALL) goodsComment: GoodsComment): Promise<GoodsComment> {
    const result:GoodsComment = await this.goodsCommentService.addGoodsComment(goodsComment);
    return result;
  }
}
