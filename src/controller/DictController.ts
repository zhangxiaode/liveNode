import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { DictService } from '../service/DictService';
import { Dict } from '../entity/Dict';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Dict', description: '字典项' })
export class DictController {
  
  @Inject()
  dictService: DictService;

  @CreateApiDoc()
  .param('字典项类型code')
  .build()
  @Get('/dict', { summary: '获取字典项列表' })
  async getDict(@Query() typeCode: string) {
    const dict: Array<Dict> = await this.dictService.getDict(typeCode);
    return dict;
  }

  @Post('/dict', { summary: '新增字典项' })
  async addDict(@Body(ALL) dict: Dict): Promise<Dict> {
    const result: Dict = await this.dictService.addDict(dict);
    return result;
  }

  @Put('/dict', { summary: '更改字典项' })
  async updateDict(@Body(ALL) dict: Dict): Promise<Dict> {
    const result: Dict = await this.dictService.updateDict(dict);
    return result;
  }

  @CreateApiDoc()
  .param('字典项code')
  .build()
  @Get('/dict/:code', { summary: '获取字典项详情' })
  async getDictDetail(@Param() code: string): Promise<Dict> {
    const dict: Dict = await this.dictService.getDictDetail(code);
    return dict;
  }

  @CreateApiDoc()
  .param('字典项code')
  .build()
  @Del('/dict/:code', { summary: '删除字典项' })
  async deleteDict(@Param() code: string): Promise<string> {
    const msg: string = await this.dictService.deleteDict(code);
    return msg;
  }
}
