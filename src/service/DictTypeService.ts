import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Dict } from '../entity/Dict';
import { DictType } from '../entity/DictType';
import { Repository } from 'typeorm';

@Provide()
export class DictTypeService {
  @InjectEntityModel(Dict)
  dictModel: Repository<Dict>;

  @InjectEntityModel(DictType)
  dictTypeModel: Repository<DictType>;

  async getDictType(): Promise<Array <DictType>> {
    let allDictType: Array<DictType> = await this.dictTypeModel.find();
    return allDictType;
  }

  async getDictTypeDetail(code: string): Promise<DictType> {
    let dictType: DictType = await this.dictTypeModel.findOne({ code });
    return dictType;
  }

  async deleteDictType(code: string): Promise<string> {
    let dictList: Array<Dict> = await this.dictModel.find({ type_code: code });
    let dictType: DictType = await this.dictTypeModel.findOne({ code });
    await this.dictTypeModel.remove(dictType);
    dictList.map(async (dict: Dict) => {
      await this.dictModel.remove(dict);
    })
    return "success";
  }

  async updateDictType(dictType: DictType): Promise<DictType> {
    this.dictTypeModel.save(dictType);
    return dictType;
  }

  async addDictType(dictType: DictType): Promise<DictType> {
    this.dictTypeModel.save(dictType);
    return dictType;
  }
}
