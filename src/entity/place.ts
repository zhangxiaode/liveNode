import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Place {
    @CreateApiPropertyDoc('收货地址id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户id')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('收货人姓名')
    @Column({
        length: 100
    })
    user_name: string;

    @CreateApiPropertyDoc('收货人手机号')
    @Column({
        length: 11
    })
    user_phone: string;

    @CreateApiPropertyDoc('省级id')
    @Column()
    province_id: number;

    @CreateApiPropertyDoc('省级名称')
    @Column({
        length: 64
    })
    province_name: string;

    @CreateApiPropertyDoc('市级id')
    @Column()
    city_id: number;

    @CreateApiPropertyDoc('市级名称')
    @Column({
        length: 64
    })
    city_name: string;

    @CreateApiPropertyDoc('区级id')
    @Column()
    district_id: number;

    @CreateApiPropertyDoc('区级名称')
    @Column({
        length: 64
    })
    district_name: string;

    @CreateApiPropertyDoc('乡镇id')
    @Column()
    town_id: number;

    @CreateApiPropertyDoc('乡镇名称')
    @Column({
        length: 64
    })
    town_name: string;

    @CreateApiPropertyDoc('收货地址详细地址')
    @Column({
        length: 64
    })
    detail: string;

    @CreateApiPropertyDoc('是否默认收货地址0为否1为是')
    @Column()
    is_default: number;
}