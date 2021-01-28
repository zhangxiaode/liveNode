import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class MyCollection {
    @CreateApiPropertyDoc('我的收藏id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户id')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('收藏的商品id')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('收藏时间')
    @Column()
    create_time: number;
}