import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Body, ALL } from '@midwayjs/decorator';
import { MessageTxtService } from '../service/MessageTxtService';
import { MessageTxt } from '../entity/MessageTxt';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'MessageTxt', description: '站内信' })
export class MessageTxtController {
  @Inject()
  messageTxtService: MessageTxtService;

  @Get('/messageTxt', { summary: '站内信列表' })
  async getMessageTxt() {
    const messageTxt: Array<MessageTxt> = await this.messageTxtService.getMessageTxt();
    return messageTxt;
  }

  @CreateApiDoc()
  .param('站内信ID')
  .build()
  @Get('/messageTxt/:id', { summary: '站内信详情' })
  async getMessageTxtDetail(@Param() id: number): Promise<MessageTxt> {
    const messageTxt:MessageTxt = await this.messageTxtService.getMessageTxtDetail(id);
    return messageTxt;
  }

  @CreateApiDoc()
  .param('站内信ID')
  .build()
  @Del('/messageTxt/:id', { summary: '删除站内信' })
  async deleteMessageTxt(@Param() id: number): Promise<string> {
    const msg:string = await this.messageTxtService.deleteMessageTxt(id);
    return msg;
  }

  @Put('/messageTxt', { summary: '更新站内信' })
  async updateMessageTxt(@Body(ALL) messageTxt: MessageTxt): Promise<MessageTxt> {
    const result:MessageTxt = await this.messageTxtService.updateMessageTxt(messageTxt);
    return result;
  }

  @Post('/messageTxt', { summary: '新增站内信' })
  async addMessageTxt(@Body(ALL) messageTxt: MessageTxt): Promise<MessageTxt> {
    const result:MessageTxt = await this.messageTxtService.addMessageTxt(messageTxt);
    return result;
  }
}
