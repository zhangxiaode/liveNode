import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL } from '@midwayjs/decorator';
import { CategoryService } from '../service/CategoryService';
import { Category } from '../entity/Category';
import { CreateApiDoc } from '@midwayjs/swagger';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'Category', description: '商品类目' })
export class CategoryController {
  
  @Inject()
  categoryService: CategoryService;

  @CreateApiDoc()
  .param('是否在首页展示：0否，1是')
  .param('父ID')
  .param('层级')
  .build()
  @Get('/category', { summary: '获取类目列表' })
  async getCategory(@Query() isIndex: number, @Query() parentId: number, @Query() level: number) {
    let params = {}
    if(isIndex) {
      params['is_index'] = isIndex;
    }
    if(parentId && parentId != -1) {
      params['parent_id'] = parentId;
    }
    if(level && level != -1) {
      params['level'] = level;
    }
    const category: Array<Category> = await this.categoryService.getCategory(params);
    return category;
  }

  @CreateApiDoc()
  .param('类目ID')
  .build()
  @Get('/category/:id', { summary: '获取类目详情' })
  async getCategoryDetail(@Param() id: number): Promise<Category> {
    const category: Category = await this.categoryService.getCategoryDetail(id);
    return category;
  }

  @CreateApiDoc()
  .param('类目ID')
  .build()
  @Del('/category/:id', { summary: '删除类目' })
  async deleteCategory(@Param() id: number): Promise<string> {
    const msg: string = await this.categoryService.deleteCategory(id);
    return msg;
  }

  @Put('/category', { summary: '更新类目' })
  async updateCategory(@Body(ALL) category: Category): Promise<Category> {
    const result: Category = await this.categoryService.updateCategory(category);
    return result;
  }

  @Post('/category', { summary: '添加类目' })
  async addCategory(@Body(ALL) category: Category): Promise<Category> {
    const result: Category = await this.categoryService.addCategory(category);
    return result;
  }
}
