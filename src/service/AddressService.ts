import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Address } from '../entity/Address';
import { Repository } from 'typeorm';

@Provide()
export class AddressService {
  @InjectEntityModel(Address)
  addressModel: Repository<Address>;

  async getAddress(parentId: number): Promise<Array <Address>> {
    let list: Array<Address> = await this.addressModel.find({parent_id: parentId});
    return list;
  }
}
