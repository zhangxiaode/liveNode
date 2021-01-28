import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { MessageService } from '../service/MessageService';
import { Message } from '../entity/Message';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Message', description: '站内信关联' })
export class MessageController {
  
  @Inject()
  messageService: MessageService;

  @CreateApiDoc()
  .param('接收站内信用户ID')
  .build()
  @Get('/message', { summary: '站内信关联列表' })
  async getMessage(@Query() receiveId: number) {
    const message: Array<Message> = await this.messageService.getMessage(receiveId);
    return message;
  }

  @Get('/message/:id', { summary: '站内信关联详情' })
  async getMessageDetail(@Param() id: number): Promise<Message> {
    const message:Message = await this.messageService.getMessageDetail(id);
    return message;
  }

  @Del('/message/:id', { summary: '删除站内信关联' })
  async deleteMessage(@Param() id: number): Promise<string> {
    const msg:string = await this.messageService.deleteMessage(id);
    return msg;
  }

  @Put('/message', { summary: '更改站内信关联' })
  async updateMessage(@Body(ALL) message: Message): Promise<Message> {
    const result:Message = await this.messageService.updateMessage(message);
    return result;
  }

  @Post('/message', { summary: '新增站内信关联' })
  async addMessage(@Body(ALL) message: Message): Promise<Message> {
    const result:Message = await this.messageService.addMessage(message);
    return result;
  }
}
