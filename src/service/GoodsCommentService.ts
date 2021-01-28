import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { GoodsComment } from '../entity/GoodsComment';
import { Repository } from 'typeorm';

@Provide()
export class GoodsCommentService {
  @InjectEntityModel(GoodsComment)
  goodsCommentModel: Repository<GoodsComment>;

  async getGoodsComment(params: any): Promise<Array <GoodsComment>> {
    let allGoodsComment: Array<GoodsComment> = await this.goodsCommentModel.find(params);
    return allGoodsComment;
  }

  async getGoodsCommentDetail(id: number): Promise<GoodsComment> {
    let goodsComment: GoodsComment = await this.goodsCommentModel.findOne({ id });
    return goodsComment;
  }

  async deleteGoodsComment(id: number): Promise<string> {
    let goodsComment: GoodsComment = await this.goodsCommentModel.findOne({ id });
    await this.goodsCommentModel.remove(goodsComment);
    return "success";
  }

  async updateGoodsComment(goodsComment: GoodsComment): Promise<GoodsComment> {
    this.goodsCommentModel.save(goodsComment);
    return goodsComment;
  }

  async addGoodsComment(goodsComment: GoodsComment): Promise<GoodsComment> {
    this.goodsCommentModel.save(goodsComment);
    return goodsComment;
  }
}
