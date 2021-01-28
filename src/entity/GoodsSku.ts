import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class GoodsSku {
    @CreateApiPropertyDoc('规格属性ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('规格属性组id')
    @Column()
    sku_group_id: number;

    @CreateApiPropertyDoc('规格属性名')
    @Column({
        length: 255
    })
    name: string;
}