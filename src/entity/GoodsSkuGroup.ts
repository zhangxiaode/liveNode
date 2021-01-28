import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class GoodsSkuGroup {
    @CreateApiPropertyDoc('规格属性组id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('规格属性组名')
    @Column({
        length: 64
    })
    name: string;
}