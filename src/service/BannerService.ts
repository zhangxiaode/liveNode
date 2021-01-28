import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Banner } from '../entity/Banner';
import { Repository } from 'typeorm';

@Provide()
export class BannerService {
  @InjectEntityModel(Banner)
  bannerModel: Repository<Banner>;

  async getBanner(params: any): Promise<Array <Banner>> {
    let allBanner: Array<Banner> = await this.bannerModel.find(params);
    return allBanner;
  }

  async getBannerDetail(id: number): Promise<Banner> {
    let banner: Banner = await this.bannerModel.findOne({ id });
    return banner;
  }

  async deleteBanner(id: number): Promise<string> {
    let banner: Banner = await this.bannerModel.findOne({ id });
    await this.bannerModel.remove(banner);
    return "success";
  }

  async updateBanner(banner: Banner): Promise<Banner> {
    this.bannerModel.save(banner);
    return banner;
  }

  async addBanner(banner: Banner): Promise<Banner> {
    this.bannerModel.save(banner);
    return banner;
  }
}
