import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class OrderDetail {
    @CreateApiPropertyDoc('订单详情ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('订单ID')
    @Column()
    order_id: number;

    @CreateApiPropertyDoc('订单商品ID')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('商品名称')
    @Column({
        length: 50
    })
    goods_name: string;

    @CreateApiPropertyDoc('购买商品数量')
    @Column()
    goods_count: number;

    @CreateApiPropertyDoc('购买商品单价')
    @Column()
    goods_price: number;

    @CreateApiPropertyDoc('商品重量')
    @Column()
    weight: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;

    @CreateApiPropertyDoc('点单商品积分')
    @Column()
    integral: number;
}