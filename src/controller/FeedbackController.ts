import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { FeedbackService } from '../service/FeedbackService';
import { Feedback } from '../entity/Feedback';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Feedback', description: '意见反馈' })
export class FeedbackController {
  
  @Inject()
  feedbackService: FeedbackService;

  @Get('/feedback', { summary: '意见反馈列表' })
  async getFeedback(@Query() userId: number) {
    let params = {}
    if(userId && userId != -1) {
      params['user_id'] = userId;
    }
    const feedback: Array<Feedback> = await this.feedbackService.getFeedback(params);
    return feedback;
  }

  @CreateApiDoc()
  .param('反馈ID')
  .build()
  @Get('/feedback/:id', { summary: '意见反馈详情' })
  async getFeedbackDetail(@Param() id: number): Promise<Feedback> {
    const feedback:Feedback = await this.feedbackService.getFeedbackDetail(id);
    return feedback;
  }

  @CreateApiDoc()
  .param('反馈ID')
  .build()
  @Del('/feedback/:id', { summary: '删除意见反馈' })
  async deleteFeedback(@Param() id: number): Promise<string> {
    const msg:string = await this.feedbackService.deleteFeedback(id);
    return msg;
  }

  @Put('/feedback', { summary: '更改意见反馈' })
  async updateFeedback(@Body(ALL) feedback: Feedback): Promise<Feedback> {
    const result:Feedback = await this.feedbackService.updateFeedback(feedback);
    return result;
  }

  @Post('/feedback', { summary: '新增意见反馈' })
  async addFeedback(@Body(ALL) feedback: Feedback): Promise<Feedback> {
    const result:Feedback = await this.feedbackService.addFeedback(feedback);
    return result;
  }
}
