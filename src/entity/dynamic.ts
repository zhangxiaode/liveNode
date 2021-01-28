import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Dynamic {
    @CreateApiPropertyDoc('动态ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('推送内容')
    @Column()
    content: string;

    @CreateApiPropertyDoc('推送图片')
    @Column({
        length: 11
    })
    resource: string;

    @CreateApiPropertyDoc('是否推送，0不推送，1推送')
    @Column()
    publish: number;

    @CreateApiPropertyDoc('创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('更新时间')
    @Column()
    modified_time: number;
}