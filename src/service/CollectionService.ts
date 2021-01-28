import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Collection } from '../entity/Collection';
import { Repository } from 'typeorm';

@Provide()
export class CollectionService {
  @InjectEntityModel(Collection)
  collectionModel: Repository<Collection>;

  async getCollection(userId: number): Promise<Array <Collection>> {
    let allCollection: Array<Collection> = await this.collectionModel.find({user_id: userId});
    return allCollection;
  }

  async getCollectionDetail(id: number): Promise<Collection> {
    let collection: Collection = await this.collectionModel.findOne({ id });
    return collection;
  }

  async updateCollection(userId: number, goodsId: number): Promise<Collection|string> {
    let collection: Collection = await this.collectionModel.findOne({ user_id: userId, goods_id: goodsId });
    if(collection) {
      await this.collectionModel.remove(collection);
      return collection;
    } else {
      let collection = new Collection();
      collection.user_id = userId;
      collection.goods_id = goodsId;
      this.collectionModel.save(collection);
      return "success";
    }
  }
}
