import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Feedback {
    @CreateApiPropertyDoc('意见反馈ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('用户ID')
    @Column()
    user_id: number;

    @CreateApiPropertyDoc('反馈标题')
    @Column({
        length: 64
    })
    title: string;

    @CreateApiPropertyDoc('反馈内容')
    @Column()
    content: string;

    @CreateApiPropertyDoc('反馈截图')
    @Column({
        length: 128
    })
    resource: string;

    @CreateApiPropertyDoc('创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('反馈更新时间')
    @Column()
    modified_time: number;
}