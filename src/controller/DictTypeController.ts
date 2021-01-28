import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Body, ALL } from '@midwayjs/decorator';
import { DictTypeService } from '../service/DictTypeService';
import { DictType } from '../entity/DictType';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'DictType', description: '字典项类型' })
export class DictTypeController {
  
  @Inject()
  dictTypeService: DictTypeService;

  @Get('/dictType', { summary: '获取字典类型列表' })
  async getDictType() {
    const dictType: Array<DictType> = await this.dictTypeService.getDictType();
    return dictType;
  }

  @CreateApiDoc()
  .param('字典类型code')
  .build()
  @Get('/dictType/:code', { summary: '获取字典类型详情' })
  async getDictTypeDetail(@Param() code: string): Promise<DictType> {
    const dictType:DictType = await this.dictTypeService.getDictTypeDetail(code);
    return dictType;
  }

  @CreateApiDoc()
  .param('字典类型code')
  .build()
  @Del('/dictType/:code', { summary: '删除字典类型' })
  async deleteDictType(@Param() code: string): Promise<string> {
    const msg:string = await this.dictTypeService.deleteDictType(code);
    return msg;
  }

  @Put('/dictType', { summary: '更改字典类型' })
  async updateDictType(@Body(ALL) dictType: DictType): Promise<DictType> {
    const result:DictType = await this.dictTypeService.updateDictType(dictType);
    return result;
  }

  @Post('/dictType', { summary: '新增字典类型' })
  async addDictType(@Body(ALL) dictType: DictType): Promise<DictType> {
    const result:DictType = await this.dictTypeService.addDictType(dictType);
    return result;
  }
}
