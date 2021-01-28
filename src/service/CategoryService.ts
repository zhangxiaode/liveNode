import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Category } from '../entity/Category';
import { Repository } from 'typeorm';

@Provide()
export class CategoryService {
  @InjectEntityModel(Category)
  categoryModel: Repository<Category>;

  async getCategory(params: any): Promise<Array <Category>> {
    let allCategory: Array<Category> = await this.categoryModel.find(params);
    return allCategory;
  }

  async getCategoryDetail(id: number): Promise<Category> {
    let category: Category = await this.categoryModel.findOne({ id });
    return category;
  }

  async deleteCategory(id: number): Promise<string> {
    let category: Category = await this.categoryModel.findOne({ id });
    await this.categoryModel.remove(category);
    return "success";
  }

  async updateCategory(category: Category): Promise<Category> {
    this.categoryModel.save(category);
    return category;
  }

  async addCategory(category: Category): Promise<Category> {
    this.categoryModel.save(category);
    return category;
  }
}
