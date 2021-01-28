import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class CouponUser {
    @CreateApiPropertyDoc('用户优惠券ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('优惠券ID')
    @Column()
    coupon_id: number;

    @CreateApiPropertyDoc('创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('更新时间')
    @Column()
    modified_time: number;
}