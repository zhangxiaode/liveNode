import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Dict } from '../entity/Dict';
import { Repository } from 'typeorm';

@Provide()
export class DictService {
  @InjectEntityModel(Dict)
  dictModel: Repository<Dict>;

  async getDict(typeCode: string): Promise<Array <Dict>> {
    let allDict: Array<Dict> = await this.dictModel.find({ type_code: typeCode });
    return allDict;
  }

  async addDict(dict: Dict): Promise<Dict> {
    this.dictModel.save(dict);
    return dict;
  }

  async updateDict(dict: Dict): Promise<Dict> {
    this.dictModel.save(dict);
    return dict;
  }

  async getDictDetail(code: string): Promise<Dict> {
    let dict: Dict = await this.dictModel.findOne({ code });
    return dict;
  }

  async deleteDict(code: string): Promise<string> {
    let dict: Dict = await this.dictModel.findOne({ code });
    await this.dictModel.remove(dict);
    return "success";
  }
}
