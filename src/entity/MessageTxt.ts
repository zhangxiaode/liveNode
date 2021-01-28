import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class MessageTxt {
    @CreateApiPropertyDoc('站内信id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('站内信标题50字以内')
    @Column({
        length: 50
    })
    title: string;

    @CreateApiPropertyDoc('站内信内容')
    @Column()
    message: string;

    @CreateApiPropertyDoc('站内信发送时间')
    @Column()
    send_time: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}