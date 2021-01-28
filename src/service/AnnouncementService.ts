import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Announcement } from '../entity/Announcement';
import { Repository } from 'typeorm';

@Provide()
export class AnnouncementService {
  @InjectEntityModel(Announcement)
  announcementModel: Repository<Announcement>;

  async getAnnouncement(): Promise<Array <Announcement>> {
    let allAnnouncement: Array<Announcement> = await this.announcementModel.find();
    return allAnnouncement;
  }

  async getAnnouncementDetail(id: number): Promise<Announcement> {
    let announcement: Announcement = await this.announcementModel.findOne({ id });
    return announcement;
  }

  async deleteAnnouncement(id: number): Promise<string> {
    let announcement: Announcement = await this.announcementModel.findOne({ id });
    await this.announcementModel.remove(announcement);
    return "success";
  }

  async updateAnnouncement(announcement: Announcement): Promise<Announcement> {
    this.announcementModel.save(announcement);
    return announcement;
  }

  async addAnnouncement(announcement: Announcement): Promise<Announcement> {
    this.announcementModel.save(announcement);
    return announcement;
  }
}
