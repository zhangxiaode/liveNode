import { Inject, Controller, Provide, Get, Del, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { HistoryService } from '../service/HistoryService';
import { History } from '../entity/History';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'History', description: '商品浏览历史' })
export class HistoryController {
  
  @Inject()
  historyService: HistoryService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/history', { summary: '商品浏览历史列表' })
  async getHistory(@Query() userId: number) {
    const history: Array<History> = await this.historyService.getHistory(userId);
    return history;
  }

  @CreateApiDoc()
  .param('商品浏览历史ID')
  .build()
  @Del('/history/:id', { summary: '商品浏览历史列表' })
  async deleteHistory(@Param() id: number): Promise<string> {
    const msg:string = await this.historyService.deleteHistory(id);
    return msg;
  }

  @Post('/history', { summary: '商品浏览历史列表' })
  async addHistory(@Body(ALL) history: History): Promise<History> {
    const result:History = await this.historyService.addHistory(history);
    return result;
  }
}
