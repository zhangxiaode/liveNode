import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Collection {
    @CreateApiPropertyDoc('收藏ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户id')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('商品id')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('收藏时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('收藏更新时间')
    @Column()
    modified_time: number;
}