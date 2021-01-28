import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class GoodsComment {
    @CreateApiPropertyDoc('评论ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('商品ID')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('订单ID')
    @Column()
    order_id: number;

    @CreateApiPropertyDoc('用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('评论标题')
    @Column({
        length: 50
    })
    title: string;

    @CreateApiPropertyDoc('评论内容')
    @Column({
        length: 300
    })
    content: string;

    @CreateApiPropertyDoc('审核状态：0未审核，1已审核')
    @Column()
    audit_status: number;

    @CreateApiPropertyDoc('评论时间')
    @Column()
    audit_time: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}