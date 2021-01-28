import { Inject, Controller, Provide, Get, Put, Param, Query } from '@midwayjs/decorator';
import { CollectionService } from '../service/CollectionService';
import { Collection } from '../entity/Collection';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Collection', description: '商品收藏' })
export class CollectionController {
  
  @Inject()
  collectionService: CollectionService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/collection', { summary: '获取收藏列表' })
  async getCollection(@Query() userId: number) {
    const collection: Array<Collection> = await this.collectionService.getCollection(userId);
    return collection;
  }

  @CreateApiDoc()
  .param('商品收藏ID')
  .build()
  @Get('/collection/:id', { summary: '获取收藏详情' })
  async getCollectionDetail(@Param() id: number): Promise<Collection> {
    const collection:Collection = await this.collectionService.getCollectionDetail(id);
    return collection;
  }

  @CreateApiDoc()
  .param('用户ID')
  .param('商品ID')
  .build()
  @Put('/collection', { summary: '添加删除收藏' })
  async updateCollection(@Query() userId: number,@Query() goodsId: number): Promise<Collection|string> {
    const result:Collection|string = await this.collectionService.updateCollection(userId, goodsId);
    return result;
  }
}
