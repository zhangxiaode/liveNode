import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Cart {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('商品ID')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('商品数量')
    @Column()
    goods_amount: number;

    @CreateApiPropertyDoc('商品价格')
    @Column()
    price: number;

    @CreateApiPropertyDoc('加入购物车时间')
    @Column()
    add_time: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}