import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Goods } from '../entity/Goods';
import { GoodsComment } from '../entity/GoodsComment';
import { Repository } from 'typeorm';

@Provide()
export class GoodsService {
  @InjectEntityModel(Goods)
  goodsModel: Repository<Goods>;

  @InjectEntityModel(GoodsComment)
  goodsComment: Repository<GoodsComment>;

  async getGoods(params: any): Promise<Array <Goods>> {
    let allGoods: Array<Goods> = await this.goodsModel.query(`select * from goods where name like '${params.keyword}'`)
    // let allGoods: Array<Goods> = await this.goodsModel.find(params);
    return allGoods;
  }

  async getGoodsDetail(id: number): Promise<any> {
    let goods: any = await this.goodsModel.findOne({ id });
    let goodsComment: Array<GoodsComment> = await this.goodsComment.find({ goods_id: id });
    goods['goodsComment'] = goodsComment
    return goods;
  }

  async deleteGoods(id: number): Promise<string> {
    let goods: Goods = await this.goodsModel.findOne({ id });
    await this.goodsModel.remove(goods);
    return "success";
  }

  async updateGoods(goods: Goods): Promise<Goods> {
    this.goodsModel.save(goods);
    return goods;
  }

  async addGoods(goods: Goods): Promise<Goods> {
    this.goodsModel.save(goods);
    return goods;
  }
}
