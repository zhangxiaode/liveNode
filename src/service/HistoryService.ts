import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { History } from '../entity/History';
import { Repository } from 'typeorm';

@Provide()
export class HistoryService {
  @InjectEntityModel(History)
  historyModel: Repository<History>;

  async getHistory(userId: number): Promise<Array <History>> {
    let allHistory: Array<History> = await this.historyModel.find({user_id: userId});
    return allHistory;
  }

  async deleteHistory(id: number): Promise<string> {
    let history: History = await this.historyModel.findOne({ id });
    await this.historyModel.remove(history);
    return "success";
  }

  async addHistory(history: History): Promise<History> {
    this.historyModel.save(history);
    return history;
  }
}
