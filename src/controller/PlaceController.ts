import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { PlaceService } from '../service/PlaceService';
import { Place } from '../entity/Place';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Place', description: '收货地址' })
export class PlaceController {
  
  @Inject()
  placeService: PlaceService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/place', { summary: '收货地址列表' })
  async getPlace(@Query() userId: number) {
    const place: Array<Place> = await this.placeService.getPlace(userId);
    return place;
  }

  @CreateApiDoc()
  .param('收货地址ID')
  .build()
  @Get('/place/:id', { summary: '收获收货详情' })
  async getPlaceDetail(@Param() id: number): Promise<Place> {
    const place:Place = await this.placeService.getPlaceDetail(id);
    return place;
  }

  @CreateApiDoc()
  .param('收货地址ID')
  .build()
  @Del('/place/:id', { summary: '删除收货地址' })
  async deletePlace(@Param() id: number): Promise<string> {
    const msg:string = await this.placeService.deletePlace(id);
    return msg;
  }

  @Put('/place', { summary: '更新收货地址' })
  async updatePlace(@Body(ALL) place: Place): Promise<Place> {
    const result:Place = await this.placeService.updatePlace(place);
    return result;
  }

  @Post('/place', { summary: '添加收货地址' })
  async addPlace(@Body(ALL) place: Place): Promise<Place> {
    const result:Place = await this.placeService.addPlace(place);
    return result;
  }
}
