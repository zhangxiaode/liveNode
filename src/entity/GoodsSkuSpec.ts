import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class GoodsSkuSpec {
    @CreateApiPropertyDoc('商品规格id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('商品id')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('商品图片')
    @Column({
        length: 64
    })
    goods_img: string;

    @CreateApiPropertyDoc('商品价格')
    @Column()
    goods_price: number;

    @CreateApiPropertyDoc('商品库存')
    @Column()
    goods_inventory: number;

    @CreateApiPropertyDoc('规格组合，每个规格逗号隔开')
    @Column()
    goods_sku_ids: string;
}