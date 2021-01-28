import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { MyCollection } from '../entity/MyCollection';
import { Repository } from 'typeorm';

@Provide()
export class MyCollectionService {
  @InjectEntityModel(MyCollection)
  myCollectionModel: Repository<MyCollection>;

  async getMyCollection(userId: number): Promise<Array <MyCollection>> {
    let allMyCollection: Array<MyCollection> = await this.myCollectionModel.find({ user_id: userId });
    return allMyCollection;
  }

  async getMyCollectionDetail(id: number): Promise<MyCollection> {
    let myCollection: MyCollection = await this.myCollectionModel.findOne({ id });
    return myCollection;
  }

  async deleteMyCollection(id: number): Promise<string> {
    let myCollection: MyCollection = await this.myCollectionModel.findOne({ id });
    await this.myCollectionModel.remove(myCollection);
    return "success";
  }

  async updateMyCollection(myCollection: MyCollection): Promise<MyCollection> {
    this.myCollectionModel.save(myCollection);
    return myCollection;
  }

  async addMyCollection(myCollection: MyCollection): Promise<MyCollection> {
    this.myCollectionModel.save(myCollection);
    return myCollection;
  }
}
