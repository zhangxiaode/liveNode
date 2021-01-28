import { Inject, Controller, Provide, Get, Del, Put, Post, Param, Query, Body, ALL, Config } from '@midwayjs/decorator';
import { Context } from 'egg';
import { UserService } from '../service/UserService';
import { User } from '../entity/User';
import { CreateApiDoc } from '@midwayjs/swagger';
import { WXBizDataCrypt } from '../utils/wechat';
const crypto: any = require('crypto')
import { Pager } from '../types/index';

@Provide()
@Controller('/apis', { middleware: [ 'reportMiddleware' ], tagName: 'User', description: '用户信息' })
export class UserController {

  @Config('wechat')
  wechat: any;

  @Inject()
  ctx: Context;

  // @Inject()
  // app: Application;

  @Inject()
  userService: UserService;

  @CreateApiDoc()
  .param('用户ID')
  .build()
  @Get('/user', { summary: '用户列表' })
  async getUser(@Query() page: number, @Query() size: number): Promise<Pager> {
    const userPage: Pager = await this.userService.getUser({
      order: {
          // name: "DESC",
          // columnName: "create_time"
      },
      skip: page - 1,
      take: size,
    }) as Pager;
    return userPage;
  }

  @Get('/user/:openid', { summary: '用户详情' })
  async getUserDetail(@Param() openid: string): Promise<User> {
    const user: User = await this.userService.getUserDetail(openid);
    return user;
  }

  @Del('/user/:id', { summary: '删除用户' })
  async deleteUser(@Param() id: number): Promise<User> {
    const user: User = await this.userService.deleteUser(id);
    return user;
  }

  @Put('/user', { summary: '更新用户' })
  async updateUser(@Body(ALL) user: User): Promise<User> {
    const result: User = await this.userService.updateUser(user);
    return result;
  }

  @Post('/login', { summary: '小程序登录' })
  async login(@Body(ALL) params: any): Promise<any> {
    const sessionData = await this.ctx.curl(this.wechat.sessionHost + `?appid=${this.wechat.appId}&secret=${this.wechat.secret}&js_code=${params.code}&grant_type=${this.wechat.grantType}`, {
      dataType: 'json',
      timeout: 3000
    });
    let data = WXBizDataCrypt(this.wechat.appId, sessionData.data.session_key,params.encryptedData , params.iv);
    
    const userArr: Array<User> = await this.userService.getUser({ openid: data.openId }) as Array<User>;
    var user: User;
    if(userArr.length > 0) {
      user = await this.userService.getUserDetail(data.openId);
    } else {
      user = new User()
      user.openid = data.openId;
      user.nickname = data.nickName;
      user.avatarurl = data.avatarUrl;
      user.gender = data.gender;
      user.country = data.country;
      user.province = data.province;
      user.city = data.city;
      user.language = data.language;
      user.unionid = data.unionId;
      user.del = 1;
    }
    await this.userService.updateUser(user);

    const plaintext: string = JSON.stringify(user) + "," + sessionData.data.session_key;
    const salt: string = "zxdkxljfnx123456";
    const iv: string = "123456zxdkxljfnx";

    const cipher = crypto.createCipheriv('aes-128-cbc', salt, iv);
    const aesEncode: string = cipher.update(plaintext, 'binary', 'base64') + cipher.final('base64');
    
    // this.app.redis.set(aesEncode,user.openid)
    // console.log(aesEncode)
    
    // const decipher = crypto.createDecipheriv('aes-128-cbc', salt, iv);
    // const aesDecode = decipher.update(Buffer.from(aesEncode, 'base64').toString('binary'), 'binary', 'utf8') + decipher.final('utf8');

    // const decipher = crypto.createDecipheriv('aes-128-cbc', salt, iv);
    // var decrypted = decipher.update(aesEncode, 'hex', 'utf8');
    // decrypted += decipher.final('utf8');
    // console.log(this.ctx.app.redis.get(aesEncode))
    // console.log(JSON.parse(decrypted))
    return {
      authorization: aesEncode
    };
  }

}