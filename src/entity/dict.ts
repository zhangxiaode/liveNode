import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Dict {
    @CreateApiPropertyDoc('编码')
    @PrimaryColumn({
        length: 128
    })
    code: string;

    @CreateApiPropertyDoc('类型code')
    @Column({
        length: 128
    })
    type_code: string;

    @CreateApiPropertyDoc('字典名（展示用）')
    @Column({
        length: 256
    })
    name: string;

    @CreateApiPropertyDoc('字典值（使用值）')
    @Column({
        length: 256
    })
    value: string;

    @CreateApiPropertyDoc('是否是固定的（1固定，0不固定）')
    @Column()
    fixed: number;
}