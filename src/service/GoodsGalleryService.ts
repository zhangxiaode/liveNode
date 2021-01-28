import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { GoodsGallery } from '../entity/GoodsGallery';
import { Repository } from 'typeorm';

@Provide()
export class GoodsGalleryService {
  @InjectEntityModel(GoodsGallery)
  goodsGalleryModel: Repository<GoodsGallery>;

  async getGoodsGallery(goodsId: number): Promise<Array <GoodsGallery>> {
    let allGoodsGallery: Array<GoodsGallery> = await this.goodsGalleryModel.find({ goods_id: goodsId });
    return allGoodsGallery;
  }

  async getGoodsGalleryDetail(id: number): Promise<GoodsGallery> {
    let goodsGallery: GoodsGallery = await this.goodsGalleryModel.findOne({ id });
    return goodsGallery;
  }

  async deleteGoodsGallery(id: number): Promise<string> {
    let goodsGallery: GoodsGallery = await this.goodsGalleryModel.findOne({ id });
    await this.goodsGalleryModel.remove(goodsGallery);
    return "success";
  }

  async updateGoodsGallery(goodsGallery: GoodsGallery): Promise<GoodsGallery> {
    this.goodsGalleryModel.save(goodsGallery);
    return goodsGallery;
  }

  async addGoodsGallery(goodsGallery: GoodsGallery): Promise<GoodsGallery> {
    this.goodsGalleryModel.save(goodsGallery);
    return goodsGallery;
  }
}
