import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Message } from '../entity/Message';
import { Repository } from 'typeorm';

@Provide()
export class MessageService {
  @InjectEntityModel(Message)
  messageModel: Repository<Message>;

  async getMessage(receiveId: number): Promise<Array <Message>> {
    let allMessage: Array<Message> = await this.messageModel.find({receive_id: receiveId});
    return allMessage;
  }

  async getMessageDetail(id: number): Promise<Message> {
    let message: Message = await this.messageModel.findOne({ id });
    return message;
  }

  async deleteMessage(id: number): Promise<string> {
    let message: Message = await this.messageModel.findOne({ id });
    await this.messageModel.remove(message);
    return "success";
  }

  async updateMessage(message: Message): Promise<Message> {
    this.messageModel.save(message);
    return message;
  }

  async addMessage(message: Message): Promise<Message> {
    this.messageModel.save(message);
    return message;
  }
}
