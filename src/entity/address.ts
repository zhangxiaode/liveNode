import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Address {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('父级行政区域ID')
    @Column()
    parent_id: number;

    @CreateApiPropertyDoc('行政区域名称')
    @Column({
        length: 64
    })
    name: string;
}