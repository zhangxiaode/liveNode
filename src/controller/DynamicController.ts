import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { DynamicService } from '../service/DynamicService';
import { Dynamic } from '../entity/Dynamic';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Dynamic', description: '商城动态' })
export class DynamicController {
  
  @Inject()
  dynamicService: DynamicService;

  @Get('/dynamic', { summary: '获取动态列表' })
  async getDynamic(@Query() userId: number) {
    const dynamic: Array<Dynamic> = await this.dynamicService.getDynamic(userId);
    return dynamic;
  }

  @CreateApiDoc()
  .param('动态ID')
  .build()
  @Get('/dynamic/:id', { summary: '获取动态详情' })
  async getDynamicDetail(@Param() id: number): Promise<Dynamic> {
    const dynamic:Dynamic = await this.dynamicService.getDynamicDetail(id);
    return dynamic;
  }

  @CreateApiDoc()
  .param('动态ID')
  .build()
  @Del('/dynamic/:id', { summary: '删除动态' })
  async deleteDynamic(@Param() id: number): Promise<string> {
    const msg:string = await this.dynamicService.deleteDynamic(id);
    return msg;
  }

  @Put('/dynamic', { summary: '更新动态' })
  async updateDynamic(@Body(ALL) dynamic: Dynamic): Promise<Dynamic> {
    const result:Dynamic = await this.dynamicService.updateDynamic(dynamic);
    return result;
  }

  @Post('/dynamic', { summary: '新增动态' })
  async addDynamic(@Body(ALL) dynamic: Dynamic): Promise<Dynamic> {
    const result:Dynamic = await this.dynamicService.addDynamic(dynamic);
    return result;
  }
}
