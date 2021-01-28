import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn} from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Goods {
    @CreateApiPropertyDoc('商品ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('商品编码')
    @Column({
        length: 16
    })
    code: string;

    @CreateApiPropertyDoc('商品名称')
    @Column({
        length: 20
    })
    name: string;

    @CreateApiPropertyDoc('所属分类中间用逗号隔开')
    @Column({
        length: 64
    })
    category_ids: string;

    @CreateApiPropertyDoc('商品销售价格')
    @Column()
    price: number;

    @CreateApiPropertyDoc('上下架状态：0下架1上架')
    @Column()
    publish_status: number;

    @CreateApiPropertyDoc('审核状态：0未审核，1已审核')
    @Column()
    audit_status: number;

    @CreateApiPropertyDoc('生产日期')
    @Column()
    create_date: number;

    @CreateApiPropertyDoc('商品有效期')
    @Column()
    shelf_life: number;

    @CreateApiPropertyDoc('商品描述')
    @Column()
    descript: string;

    @CreateApiPropertyDoc('商品录入时间')
    @Column()
    indate: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;

    @CreateApiPropertyDoc('商品重量')
    @Column()
    weight: number;

    @CreateApiPropertyDoc('商品月售')
    @Column()
    sales: number;

    @CreateApiPropertyDoc('商品尺寸')
    @Column()
    size: string;

    @CreateApiPropertyDoc('商品服务')
    @Column()
    serve: string;

    @CreateApiPropertyDoc('商品评价标签')
    @Column()
    evaluate: string;

    @CreateApiPropertyDoc('商品属性')
    @Column()
    attribute_list: string;
}