import { Configuration } from '@midwayjs/decorator';
import * as swagger from '@midwayjs/swagger';
import * as orm from '@midwayjs/orm';
import { join } from 'path';

@Configuration({
  imports: [
    {
        component: swagger,
        enabledEnvironment: ['local']
    },
    orm           // 加载 orm 组件
  ],
  importConfigs: [
    join(__dirname, './config/config.default'),
    join(__dirname, './config/config.local'),
  ]
})
export class ContainerConfiguratin {

}