import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { BannerService } from '../service/BannerService';
import { Banner } from '../entity/Banner';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Banner', description: 'banner图' })
export class BannerController {

  @Inject()
  bannerService: BannerService;

  @CreateApiDoc()
  .param('banner类型，1首页banner -1全部')
  .param('是否推送：0不推送，1推送 -1全部')
  .build()
  @Get('/banner', { summary: '获取banner列表' })
  async getBanner(@Query() type: number, @Query() publish: number) {
    let params = {}
    if(type && type != -1) {
      params['type'] = type;
    }
    if(publish && publish != -1) {
      params['publish'] = publish;
    }
    const banner: Array<Banner> = await this.bannerService.getBanner(params);
    return banner;
  }

  @CreateApiDoc()
  .param('banner ID')
  .build()
  @Get('/banner/:id', { summary: '根据ID获取banner详情' })
  async getBannerDetail(@Param() id: number): Promise<Banner> {
    const banner:Banner = await this.bannerService.getBannerDetail(id);
    return banner;
  }

  @CreateApiDoc()
  .param('banner ID')
  .build()
  @Del('/banner/:id', { summary: '删除banner' })
  async deleteBanner(@Param() id: number): Promise<string> {
    const msg:string = await this.bannerService.deleteBanner(id);
    return msg;
  }

  @Put('/banner', { summary: '更新banner' })
  async updateBanner(@Body(ALL) banner: Banner): Promise<Banner> {
    const result:Banner = await this.bannerService.updateBanner(banner);
    return result;
  }

  @Post('/banner', { summary: '添加banner' })
  async addBanner(@Body(ALL) banner: Banner): Promise<Banner> {
    const result:Banner = await this.bannerService.addBanner(banner);
    return result;
  }
}
