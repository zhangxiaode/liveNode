import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { MyCollectionService } from '../service/MyCollectionService';
import { MyCollection } from '../entity/MyCollection';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'MyCollection', description: '我的收藏' })
export class MyCollectionController {
  
  @Inject()
  myCollectionService: MyCollectionService;

  @Get('/myCollection', { summary: '我的收藏列表' })
  async getMyCollection(@Query() userId: number) {
    const myCollection: Array<MyCollection> = await this.myCollectionService.getMyCollection(userId);
    return myCollection;
  }

  @CreateApiDoc()
  .param('我的收藏ID')
  .build()
  @Get('/myCollection/:id', { summary: '我的收藏详情' })
  async getMyCollectionDetail(@Param() id: number): Promise<MyCollection> {
    const myCollection:MyCollection = await this.myCollectionService.getMyCollectionDetail(id);
    return myCollection;
  }

  @CreateApiDoc()
  .param('我的收藏ID')
  .build()
  @Del('/myCollection/:id', { summary: '删除我的收藏' })
  async deleteMyCollection(@Param() id: number): Promise<string> {
    const msg:string = await this.myCollectionService.deleteMyCollection(id);
    return msg;
  }

  @Put('/myCollection', { summary: '更新我的收藏' })
  async updateMyCollection(@Body(ALL) myCollection: MyCollection): Promise<MyCollection> {
    const result:MyCollection = await this.myCollectionService.updateMyCollection(myCollection);
    return result;
  }

  @Post('/myCollection', { summary: '添加我的收藏' })
  async addMyCollection(@Body(ALL) myCollection: MyCollection): Promise<MyCollection> {
    const result:MyCollection = await this.myCollectionService.addMyCollection(myCollection);
    return result;
  }
}
