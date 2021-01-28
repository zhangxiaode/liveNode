import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Body, ALL } from '@midwayjs/decorator';
import { AnnouncementService } from '../service/AnnouncementService';
import { Announcement } from '../entity/Announcement';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Announcement', description: '首页公告相关' })
export class AnnouncementController {

  @Inject()
  announcementService: AnnouncementService;

  @Get('/announcement', { summary: '获取公告列表' })
  async getAnnouncement() {
    const announcement: Array<Announcement> = await this.announcementService.getAnnouncement();
    return announcement;
  }

  @CreateApiDoc()
  .param('公告ID')
  .build()
  @Get('/announcement/:id', { summary: '根据公告ID获取公告详情' })
  async getAnnouncementDetail(@Param() id: number): Promise<Announcement> {
    const announcement:Announcement = await this.announcementService.getAnnouncementDetail(id);
    return announcement;
  }

  @CreateApiDoc()
  .param('公告ID')
  .build()
  @Del('/announcement/:id', { summary: '根据公告ID删除公告' })
  async deleteAnnouncement(@Param() id: number): Promise<string> {
    const msg:string = await this.announcementService.deleteAnnouncement(id);
    return msg;
  }

  @Put('/announcement', { summary: '修改公告' })
  async updateAnnouncement(@Body(ALL) announcement: Announcement): Promise<Announcement> {
    const result:Announcement = await this.announcementService.updateAnnouncement(announcement);
    return result;
  }

  @Post('/announcement', { summary: '新增公告' })
  async addAnnouncement(@Body(ALL) announcement: Announcement): Promise<Announcement> {
    const result:Announcement = await this.announcementService.addAnnouncement(announcement);
    return result;
  }
}
