import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Feedback } from '../entity/Feedback';
import { Repository } from 'typeorm';

@Provide()
export class FeedbackService {
  @InjectEntityModel(Feedback)
  feedbackModel: Repository<Feedback>;

  async getFeedback(params: any): Promise<Array <Feedback>> {
    let allFeedback: Array<Feedback> = await this.feedbackModel.find(params);
    return allFeedback;
  }

  async getFeedbackDetail(id: number): Promise<Feedback> {
    let feedback: Feedback = await this.feedbackModel.findOne({ id });
    return feedback;
  }

  async deleteFeedback(id: number): Promise<string> {
    let feedback: Feedback = await this.feedbackModel.findOne({ id });
    await this.feedbackModel.remove(feedback);
    return "success";
  }

  async updateFeedback(feedback: Feedback): Promise<Feedback> {
    this.feedbackModel.save(feedback);
    return feedback;
  }

  async addFeedback(feedback: Feedback): Promise<Feedback> {
    this.feedbackModel.save(feedback);
    return feedback;
  }
}
