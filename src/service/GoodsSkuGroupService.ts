import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { GoodsSkuGroup } from '../entity/GoodsSkuGroup';
import { Repository } from 'typeorm';

@Provide()
export class GoodsSkuGroupService {
  @InjectEntityModel(GoodsSkuGroup)
  goodsSkuGroupModel: Repository<GoodsSkuGroup>;

  async getGoodsSkuGroup(): Promise<Array <GoodsSkuGroup>> {
    let allGoodsSkuGroup: Array<GoodsSkuGroup> = await this.goodsSkuGroupModel.find();
    return allGoodsSkuGroup;
  }

  async getGoodsSkuGroupDetail(id: number): Promise<GoodsSkuGroup> {
    let goodsSkuGroup: GoodsSkuGroup = await this.goodsSkuGroupModel.findOne({ id });
    return goodsSkuGroup;
  }

  async deleteGoodsSkuGroup(id: number): Promise<string> {
    let goodsSkuGroup: GoodsSkuGroup = await this.goodsSkuGroupModel.findOne({ id });
    await this.goodsSkuGroupModel.remove(goodsSkuGroup);
    return "success";
  }

  async updateGoodsSkuGroup(goodsSkuGroup: GoodsSkuGroup): Promise<GoodsSkuGroup> {
    this.goodsSkuGroupModel.save(goodsSkuGroup);
    return goodsSkuGroup;
  }

  async addGoodsSkuGroup(goodsSkuGroup: GoodsSkuGroup): Promise<GoodsSkuGroup> {
    this.goodsSkuGroupModel.save(goodsSkuGroup);
    return goodsSkuGroup;
  }
}
