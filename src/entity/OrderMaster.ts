import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class OrderMaster {
    @CreateApiPropertyDoc('订单ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('订单编号 yyyymmddnnnnnnnn')
    @Column()
    order_number: number;

    @CreateApiPropertyDoc('下单人ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('收货人姓名')
    @Column({
        length: 10
    })
    shipping_user: string;

    @CreateApiPropertyDoc('省')
    @Column()
    province: number;

    @CreateApiPropertyDoc('市')
    @Column()
    city: number;

    @CreateApiPropertyDoc('区')
    @Column()
    district: number;

    @CreateApiPropertyDoc('详细地址')
    @Column({
        length: 100
    })
    address: string;

    @CreateApiPropertyDoc('支付方式：1现金，2余额，3网银，4支付宝，5微信')
    @Column()
    payment_method: number;

    @CreateApiPropertyDoc('订单金额')
    @Column()
    order_money: number;

    @CreateApiPropertyDoc('运费金额')
    @Column()
    shipping_money: number;

    @CreateApiPropertyDoc('支付金额')
    @Column()
    payment_money: number;

    @CreateApiPropertyDoc('优惠金额')
    @Column()
    district_money: number;

    @CreateApiPropertyDoc('快递公司名称')
    @Column({
        length: 20
    })
    shipping_comp_name: string;

    @CreateApiPropertyDoc('快递单号')
    @Column({
        length: 50
    })
    shipping_number: string;

    @CreateApiPropertyDoc('下单时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('发货时间')
    @Column()
    shipping_time: number;

    @CreateApiPropertyDoc('支付时间')
    @Column()
    pay_time: number;

    @CreateApiPropertyDoc('收货时间')
    @Column()
    receive_time: number;

    @CreateApiPropertyDoc('订单状态')
    @Column()
    order_status: number;

    @CreateApiPropertyDoc('订单积分')
    @Column()
    order_point: number;

    @CreateApiPropertyDoc('发票抬头')
    @Column({
        length: 100
    })
    invoice_title: string;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}