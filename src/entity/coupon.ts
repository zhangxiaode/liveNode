import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Coupon {
    @CreateApiPropertyDoc('优惠券ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('优惠券标题（有图片则显示图片）：无门槛50元优惠券 | 单品最高减2000元')
    @Column({
        length: 64
    })
    title: string;

    @CreateApiPropertyDoc('图片')
    @Column({
        length: 128
    })
    icon: string;

    @CreateApiPropertyDoc('可用于：10店铺优惠券 11新人店铺券  20商品优惠券  30类目优惠券  60平台优惠券 61新人平台券')
    @Column()
    used: number;

    @CreateApiPropertyDoc('1满减券 2叠加满减券 3无门槛券（需要限制大小）')
    @Column()
    type: number;

    @CreateApiPropertyDoc('1可用于特价商品 2不能  默认不能(商品优惠卷除外)')
    @Column()
    with_special: number;

    @CreateApiPropertyDoc('店铺或商品流水号')
    @Column({
        length: 36
    })
    with_sn: string;

    @CreateApiPropertyDoc('满多少金额')
    @Column()
    with_amount: number;

    @CreateApiPropertyDoc('用券金额')
    @Column()
    used_amount: number;

    @CreateApiPropertyDoc('配额：发券数量')
    @Column()
    quota: number;

    @CreateApiPropertyDoc('已领取的优惠券数量')
    @Column()
    take_count: number;

    @CreateApiPropertyDoc('已使用的优惠券数量')
    @Column()
    used_count: number;

    @CreateApiPropertyDoc('发放开始时间')
    @Column()
    start_time: string;

    @CreateApiPropertyDoc('发放结束时间')
    @Column()
    end_time: string;

    @CreateApiPropertyDoc('时效:1绝对时效（领取后XXX-XXX时间段有效）  2相对时效（领取后N天有效）')
    @Column()
    valid_type: number;

    @CreateApiPropertyDoc('使用开始时间')
    @Column()
    valid_start_time: number;

    @CreateApiPropertyDoc('使用结束时间')
    @Column()
    valid_end_time: number;

    @CreateApiPropertyDoc('自领取之日起有效天数')
    @Column()
    valid_days: number;

    @CreateApiPropertyDoc('1生效 2失效 3已结束')
    @Column()
    status: number;

    @CreateApiPropertyDoc('创建人ID')
    @Column()
    create_user: number;

    @CreateApiPropertyDoc('创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('修改人ID')
    @Column()
    update_user: number;

    @CreateApiPropertyDoc('修改时间')
    @Column()
    update_time: number;

}