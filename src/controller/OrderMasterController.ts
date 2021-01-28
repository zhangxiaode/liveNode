import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { OrderMasterService } from '../service/OrderMasterService';
import { OrderMaster } from '../entity/OrderMaster';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'OrderMaster', description: '主订单信息' })
export class OrderMasterController {
  
  @Inject()
  orderMasterService: OrderMasterService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/orderMaster', { summary: '主订单列表' })
  async getOrderMaster(@Query() userId: number) {
    const orderMaster: Array<OrderMaster> = await this.orderMasterService.getOrderMaster(userId);
    return orderMaster;
  }

  @CreateApiDoc()
  .param('订单ID')
  .build()
  @Get('/orderMaster/:id', { summary: '主订单详情' })
  async getOrderMasterDetail(@Param() id: number): Promise<OrderMaster> {
    const orderMaster:OrderMaster = await this.orderMasterService.getOrderMasterDetail(id);
    return orderMaster;
  }

  @CreateApiDoc()
  .param('订单ID')
  .build()
  @Del('/orderMaster/:id', { summary: '删除主订单' })
  async deleteOrderMaster(@Param() id: number): Promise<string> {
    const msg:string = await this.orderMasterService.deleteOrderMaster(id);
    return msg;
  }

  @Put('/orderMaster', { summary: '更新主订单' })
  async updateOrderMaster(@Body(ALL) orderMaster: OrderMaster): Promise<OrderMaster> {
    const result:OrderMaster = await this.orderMasterService.updateOrderMaster(orderMaster);
    return result;
  }

  @Post('/orderMaster', { summary: '新增主订单' })
  async addOrderMaster(@Body(ALL) orderMaster: OrderMaster): Promise<OrderMaster> {
    const result:OrderMaster = await this.orderMasterService.addOrderMaster(orderMaster);
    return result;
  }
}
