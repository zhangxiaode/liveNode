import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { OrderMaster } from '../entity/OrderMaster';
import { Repository } from 'typeorm';

@Provide()
export class OrderMasterService {
  @InjectEntityModel(OrderMaster)
  orderMasterModel: Repository<OrderMaster>;

  async getOrderMaster(userId: number): Promise<Array <OrderMaster>> {
    let allOrderMaster: Array<OrderMaster> = await this.orderMasterModel.find({user_id: userId});
    return allOrderMaster;
  }

  async getOrderMasterDetail(id: number): Promise<OrderMaster> {
    let orderMaster: OrderMaster = await this.orderMasterModel.findOne({ id });
    return orderMaster;
  }

  async deleteOrderMaster(id: number): Promise<string> {
    let orderMaster: OrderMaster = await this.orderMasterModel.findOne({ id });
    await this.orderMasterModel.remove(orderMaster);
    return "success";
  }

  async updateOrderMaster(orderMaster: OrderMaster): Promise<OrderMaster> {
    this.orderMasterModel.save(orderMaster);
    return orderMaster;
  }

  async addOrderMaster(orderMaster: OrderMaster): Promise<OrderMaster> {
    this.orderMasterModel.save(orderMaster);
    return orderMaster;
  }
}
