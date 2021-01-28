import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { OrderDetail } from '../entity/OrderDetail';
import { Repository } from 'typeorm';

@Provide()
export class OrderDetailService {
  @InjectEntityModel(OrderDetail)
  orderDetailModel: Repository<OrderDetail>;

  async getOrderDetail(orderId: number): Promise<Array <OrderDetail>> {
    let allOrderDetail: Array<OrderDetail> = await this.orderDetailModel.find({ order_id: orderId });
    return allOrderDetail;
  }

  async getOrderDetailDetail(id: number): Promise<OrderDetail> {
    let orderDetail: OrderDetail = await this.orderDetailModel.findOne({ id });
    return orderDetail;
  }

  async deleteOrderDetail(id: number): Promise<string> {
    let orderDetail: OrderDetail = await this.orderDetailModel.findOne({ id });
    await this.orderDetailModel.remove(orderDetail);
    return "success";
  }

  async updateOrderDetail(orderDetail: OrderDetail): Promise<OrderDetail> {
    this.orderDetailModel.save(orderDetail);
    return orderDetail;
  }

  async addOrderDetail(orderDetail: OrderDetail): Promise<OrderDetail> {
    this.orderDetailModel.save(orderDetail);
    return orderDetail;
  }
}
