import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Place } from '../entity/Place';
import { Repository } from 'typeorm';

@Provide()
export class PlaceService {
  @InjectEntityModel(Place)
  placeModel: Repository<Place>;

  async getPlace(userId: number): Promise<Array <Place>> {
    let allPlace: Array<Place> = await this.placeModel.find({ user_id: userId});
    return allPlace;
  }

  async getPlaceDetail(id: number): Promise<Place> {
    let place: Place = await this.placeModel.findOne({ id });
    return place;
  }

  async deletePlace(id: number): Promise<string> {
    let place: Place = await this.placeModel.findOne({ id });
    await this.placeModel.remove(place);
    return "success";
  }

  async updatePlace(place: Place): Promise<Place> {
    this.placeModel.save(place);
    return place;
  }

  async addPlace(place: Place): Promise<Place> {
    this.placeModel.save(place);
    return place;
  }
}
