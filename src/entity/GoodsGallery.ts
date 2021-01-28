import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class GoodsGallery {
    @CreateApiPropertyDoc('商品图片ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('所属商品ID')
    @Column()
    goods_id: number;

    @CreateApiPropertyDoc('图片URL')
    @Column({
        length: 200
    })
    pic_url: string;

    @CreateApiPropertyDoc('图片描述')
    @Column({
        length: 50
    })
    pic_desc: string;

    @CreateApiPropertyDoc('是否主图：0.非主图1.主图')
    @Column()
    is_master: number;

    @CreateApiPropertyDoc('图片排序')
    @Column()
    pic_order: number;

    @CreateApiPropertyDoc('图片是否有效：0无效 1有效')
    @Column()
    pic_status: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}