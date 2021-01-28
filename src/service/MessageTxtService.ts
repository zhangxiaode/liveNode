import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { MessageTxt } from '../entity/MessageTxt';
import { Repository } from 'typeorm';

@Provide()
export class MessageTxtService {
  @InjectEntityModel(MessageTxt)
  messageTxtModel: Repository<MessageTxt>;

  async getMessageTxt(): Promise<Array <MessageTxt>> {
    let allMessageTxt: Array<MessageTxt> = await this.messageTxtModel.find();
    return allMessageTxt;
  }

  async getMessageTxtDetail(id: number): Promise<MessageTxt> {
    let messageTxt: MessageTxt = await this.messageTxtModel.findOne({ id });
    return messageTxt;
  }

  async deleteMessageTxt(id: number): Promise<string> {
    let messageTxt: MessageTxt = await this.messageTxtModel.findOne({ id });
    await this.messageTxtModel.remove(messageTxt);
    return "success";
  }

  async updateMessageTxt(messageTxt: MessageTxt): Promise<MessageTxt> {
    this.messageTxtModel.save(messageTxt);
    return messageTxt;
  }

  async addMessageTxt(messageTxt: MessageTxt): Promise<MessageTxt> {
    this.messageTxtModel.save(messageTxt);
    return messageTxt;
  }
}
