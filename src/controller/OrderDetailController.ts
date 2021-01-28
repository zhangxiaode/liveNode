import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { OrderDetailService } from '../service/OrderDetailService';
import { OrderDetail } from '../entity/OrderDetail';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'OrderDetail', description: '订单详情' })
export class OrderDetailController {
  
  @Inject()
  orderDetailService: OrderDetailService;

  @CreateApiDoc()
  .param('主订单ID')
  .build()
  @Get('/orderDetail', { summary: '订单详情列表' })
  async getOrderDetail(@Query() orderId: number) {
    const orderDetail: Array<OrderDetail> = await this.orderDetailService.getOrderDetail(orderId);
    return orderDetail;
  }

  @CreateApiDoc()
  .param('订单详情ID')
  .build()
  @Get('/orderDetail/:id', { summary: '订单详情' })
  async getOrderDetailDetail(@Param() id: number): Promise<OrderDetail> {
    const orderDetail:OrderDetail = await this.orderDetailService.getOrderDetailDetail(id);
    return orderDetail;
  }

  @CreateApiDoc()
  .param('订单详情ID')
  .build()
  @Del('/orderDetail/:id', { summary: '删除订单详情' })
  async deleteOrderDetail(@Param() id: number): Promise<string> {
    const msg:string = await this.orderDetailService.deleteOrderDetail(id);
    return msg;
  }

  @Put('/orderDetail', { summary: '更新订单详情' })
  async updateOrderDetail(@Body(ALL) orderDetail: OrderDetail): Promise<OrderDetail> {
    const result:OrderDetail = await this.orderDetailService.updateOrderDetail(orderDetail);
    return result;
  }

  @Post('/orderDetail', { summary: '新增订单详情' })
  async addOrderDetail(@Body(ALL) orderDetail: OrderDetail): Promise<OrderDetail> {
    const result:OrderDetail = await this.orderDetailService.addOrderDetail(orderDetail);
    return result;
  }
}
