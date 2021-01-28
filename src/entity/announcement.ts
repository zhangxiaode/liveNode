import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Announcement {
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('发布公告用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('公告标题')
    @Column({
        length: 128
    })
    title: string;

    @CreateApiPropertyDoc('公告内容')
    @Column({
        length: 200
    })
    content: string;

    @CreateApiPropertyDoc('公告创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('公告最后修改时间')
    @Column()
    modified_time: number;
}