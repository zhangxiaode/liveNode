import { Inject, Controller, Provide, Get, Query } from '@midwayjs/decorator';
import { AddressService } from '../service/AddressService';
import { Address } from '../entity/Address';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Address', description: '省市区县四级行政区域' })
export class AddressController {

  @Inject()
  addressService: AddressService;

  @CreateApiDoc()
  .param('parent_id 为0表示省级行政区域')
  .build()
  @Get('/address', { summary: '根据父级区域ID获取该区域下级行政区域列表' })
  async getAddress(@Query() parentId: number) {
    const address: Array<Address> = await this.addressService.getAddress(parentId);
    return address;
  }
}
