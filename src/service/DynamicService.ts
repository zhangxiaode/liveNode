import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Dynamic } from '../entity/Dynamic';
import { Repository } from 'typeorm';

@Provide()
export class DynamicService {
  @InjectEntityModel(Dynamic)
  dynamicModel: Repository<Dynamic>;

  async getDynamic(userId: number): Promise<Array <Dynamic>> {
    let allDynamic: Array<Dynamic> = await this.dynamicModel.find({user_id: userId});
    return allDynamic;
  }

  async getDynamicDetail(id: number): Promise<Dynamic> {
    let dynamic: Dynamic = await this.dynamicModel.findOne({ id });
    return dynamic;
  }

  async deleteDynamic(id: number): Promise<string> {
    let dynamic: Dynamic = await this.dynamicModel.findOne({ id });
    await this.dynamicModel.remove(dynamic);
    return "success";
  }

  async updateDynamic(dynamic: Dynamic): Promise<Dynamic> {
    this.dynamicModel.save(dynamic);
    return dynamic;
  }

  async addDynamic(dynamic: Dynamic): Promise<Dynamic> {
    this.dynamicModel.save(dynamic);
    return dynamic;
  }
}
