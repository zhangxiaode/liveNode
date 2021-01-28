import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class User {
    @CreateApiPropertyDoc('用户ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('小程序用户openid')
    @Column({
        length: 28
    })
    openid: string;

    @CreateApiPropertyDoc('用户昵称')
    @Column({
        length: 100
    })
    nickname: string;

    @CreateApiPropertyDoc('用户头像')
    @Column({
        length: 256
    })
    avatarurl: string;

    @CreateApiPropertyDoc('性别   0 保密  1  男  2 女')
    @Column()
    gender: number;

    @CreateApiPropertyDoc('所在国家')
    @Column({
        length: 100
    })
    country: string;

    @CreateApiPropertyDoc('省份')
    @Column({
        length: 100
    })
    province: string;

    @CreateApiPropertyDoc('城市')
    @Column({
        length: 100
    })
    city: string;

    @CreateApiPropertyDoc('语言')
    @Column({
        length: 100
    })
    language: string;

    @CreateApiPropertyDoc('小程序用户unionid')
    @Column({
        length: 28
    })
    unionid: string;

    @CreateApiPropertyDoc('创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;

    @CreateApiPropertyDoc('用户是否删除：0删除 1显示')
    @Column()
    del: number;
}