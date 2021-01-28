import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { GoodsSkuSpec } from '../entity/GoodsSkuSpec';
import { Repository } from 'typeorm';

@Provide()
export class GoodsSkuSpecService {
  @InjectEntityModel(GoodsSkuSpec)
  goodsSkuSpecModel: Repository<GoodsSkuSpec>;

  async getGoodsSkuSpec(goodsId: number): Promise<Array <GoodsSkuSpec>> {
    let allGoodsSkuSpec: Array<GoodsSkuSpec> = await this.goodsSkuSpecModel.find({ goods_id: goodsId});
    return allGoodsSkuSpec;
  }

  async getGoodsSkuSpecDetail(id: number): Promise<GoodsSkuSpec> {
    let goodsSkuSpec: GoodsSkuSpec = await this.goodsSkuSpecModel.findOne({ id });
    return goodsSkuSpec;
  }

  async deleteGoodsSkuSpec(id: number): Promise<string> {
    let goodsSkuSpec: GoodsSkuSpec = await this.goodsSkuSpecModel.findOne({ id });
    await this.goodsSkuSpecModel.remove(goodsSkuSpec);
    return "success";
  }

  async updateGoodsSkuSpec(goodsSkuSpec: GoodsSkuSpec): Promise<GoodsSkuSpec> {
    this.goodsSkuSpecModel.save(goodsSkuSpec);
    return goodsSkuSpec;
  }

  async addGoodsSkuSpec(goodsSkuSpec: GoodsSkuSpec): Promise<GoodsSkuSpec> {
    this.goodsSkuSpecModel.save(goodsSkuSpec);
    return goodsSkuSpec;
  }
}
