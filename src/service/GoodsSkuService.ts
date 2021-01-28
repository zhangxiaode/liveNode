import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { GoodsSku } from '../entity/GoodsSku';
import { Repository } from 'typeorm';

@Provide()
export class GoodsSkuService {
  @InjectEntityModel(GoodsSku)
  goodsSkuModel: Repository<GoodsSku>;

  async getGoodsSku(skuGroupId: number): Promise<Array <GoodsSku>> {
    let allGoodsSku: Array<GoodsSku> = await this.goodsSkuModel.find({ sku_group_id: skuGroupId});
    return allGoodsSku;
  }

  async getGoodsSkuDetail(id: number): Promise<GoodsSku> {
    let goodsSku: GoodsSku = await this.goodsSkuModel.findOne({ id });
    return goodsSku;
  }

  async deleteGoodsSku(id: number): Promise<string> {
    let goodsSku: GoodsSku = await this.goodsSkuModel.findOne({ id });
    await this.goodsSkuModel.remove(goodsSku);
    return "success";
  }

  async updateGoodsSku(goodsSku: GoodsSku): Promise<GoodsSku> {
    this.goodsSkuModel.save(goodsSku);
    return goodsSku;
  }

  async addGoodsSku(goodsSku: GoodsSku): Promise<GoodsSku> {
    this.goodsSkuModel.save(goodsSku);
    return goodsSku;
  }
}
