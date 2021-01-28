import { EntityModel } from '@midwayjs/orm';
import { Column, PrimaryGeneratedColumn } from 'typeorm';
import { CreateApiPropertyDoc } from '@midwayjs/swagger';

@EntityModel()
export class Category {
    @CreateApiPropertyDoc('类目ID')
    @PrimaryGeneratedColumn()
    id: number;

    @CreateApiPropertyDoc('层级')
    @Column()
    level: number;

    @CreateApiPropertyDoc('父ID')
    @Column()
    parent_id: number;

    @CreateApiPropertyDoc('排序，暂未使用')
    @Column()
    sort: number;

    @CreateApiPropertyDoc('类目id，关联pid使用')
    @Column()
    catid: number;

    @CreateApiPropertyDoc('是否使用catid查询：0不使用，1使用')
    @Column()
    catid_use: number;

    @CreateApiPropertyDoc('淘宝查询')
    @Column({
        length: 255
    })
    query: string;

    @CreateApiPropertyDoc('是否使用query：0不使用，1使用')
    @Column()
    query_use: number;

    @CreateApiPropertyDoc('类目单元配重')
    @Column()
    weight: number;

    @CreateApiPropertyDoc('状态 0下架 1上架')
    @Column()
    status: number;

    @CreateApiPropertyDoc('是否在首页展示：0否，1是')
    @Column()
    is_index: number;

    @CreateApiPropertyDoc('分类创建时间')
    @Column()
    create_time: number;

    @CreateApiPropertyDoc('最后修改时间')
    @Column()
    modified_time: number;
}