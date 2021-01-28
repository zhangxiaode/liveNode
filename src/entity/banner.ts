import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Banner {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('banner资源路径')
    @Column({
        length: 256
    })
    resource: string;

    @CreateApiPropertyDoc('banner类型，1首页banner -1全部')
    @Column()
    type: number;


    @CreateApiPropertyDoc('是否推送：0不推送，1推送 -1全部')
    @Column()
    publish: number;
}