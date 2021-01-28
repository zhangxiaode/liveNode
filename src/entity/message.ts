import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Message {
    @CreateApiPropertyDoc('关联站内信id')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('站内信id')
    @Column()
    message_txt_id: number;

    @CreateApiPropertyDoc('站内信接收者id')
    @Column()
    receive_id: number;

    @CreateApiPropertyDoc('站内信发送者id')
    @Column()
    send_id: number;

    @CreateApiPropertyDoc('站内信发送者头像')
    @Column()
    send_photo: number;

    @CreateApiPropertyDoc('用户查看站内信状态')
    @Column()
    status: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}