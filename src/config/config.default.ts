import { EggAppConfig, EggAppInfo, PowerPartial } from 'egg';

export type DefaultConfig = PowerPartial<EggAppConfig>;

export default (appInfo: EggAppInfo) => {
  const config = {} as DefaultConfig;

  // use for cookie sign key, should change to your own and keep security
  config.keys = appInfo.name + '_1606726343544_8597';

  // add your config here
  config.middleware = [
    // 'reportMiddleware'
  ];
  
  config.security = {
    // csrf: {
    //   headerName: 'x-csrf-token' // 自定义请求头
    // },
    csrf: {
      enable: false,
    }
  };

  config.cluster = {
    listen: {
      path: '',
      port: 8899,
      hostname: '0.0.0.0',
    }
  };

  config.redis = {
    client: {
      port: 6379,
      host: '127.0.0.1',
      password: '',
      db: 0
    }
  }
  config.redisExpireTime = 24 * 60 * 60

  config.orm = {
    type: 'mysql',
    host: 'localhost',
    port: 3306,
    username: 'root',
    password: '05Cqwsbsy27!',
    database: 'live',
    synchronize: false,
    logging: false,
  }

  return config;
};
