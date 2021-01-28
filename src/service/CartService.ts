import { Provide } from '@midwayjs/decorator';
import { InjectEntityModel } from '@midwayjs/orm';
import { Cart } from '../entity/Cart';
import { Goods } from '../entity/Goods';
import { Repository } from 'typeorm';

@Provide()
export class CartService {
  @InjectEntityModel(Goods)
  goodsModel: Repository<Goods>;

  @InjectEntityModel(Cart)
  cartModel: Repository<Cart>;

  async getCart(userId: number): Promise<Array <Cart>> {
    let allCart: Array<Cart> = await this.cartModel.find({user_id: userId});
    return allCart;
  }

  async addCart(userId: number, goodsId: number): Promise<Cart> {
    let cart: Cart = await this.cartModel.findOne({ user_id: userId, goods_id: goodsId });
    if(cart) {
      cart.goods_amount++
    } else {
      cart = new Cart();
      let goods: Goods = await this.goodsModel.findOne({ id: goodsId });
      cart['user_id'] = userId;
      cart['goods_id'] = goodsId;
      cart['goods_amount'] = 1;
      cart['price'] = goods.price;
    }
    this.cartModel.save(cart);
    return cart;
  }

  async updateCart(id: number, amount: number): Promise<Cart|string> {
    if(amount > 0) {
      let cart: Cart = await this.cartModel.findOne({ id });
      cart.goods_amount = amount
      this.cartModel.save(cart);
      return cart;
    } else {
      return '不能再少了！';
    }
  }

  async deleteCart(id: number): Promise<string> {
    let cart: Cart = await this.cartModel.findOne({ id });
    await this.cartModel.remove(cart);
    return "success";
  }
}
