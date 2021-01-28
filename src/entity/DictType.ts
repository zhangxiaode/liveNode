import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class DictType {
    @CreateApiPropertyDoc('字典项类型编码')
    @PrimaryColumn({
        length: 128
    })
    code: string;

    @CreateApiPropertyDoc('字典项类型名')
    @Column({
        length: 256
    })
    name: string;
}