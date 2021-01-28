const crypto: any = require('crypto')

export const WXBizDataCrypt = (appId: string, sessionKey: string, encryptedData: string, iv: string) => {
  var sessionKeyBuffer = Buffer.from(sessionKey, 'base64')
  var encryptedDataBuffer = Buffer.from(encryptedData, 'base64')
  var ivBuffer = Buffer.from(iv, 'base64')
  try {
     // 解密
    var decipher = crypto.createDecipheriv('aes-128-cbc', sessionKeyBuffer, ivBuffer)
    // 设置自动 padding 为 true，删除填充补位
    decipher.setAutoPadding(true)
    var decoded = decipher.update(encryptedDataBuffer, 'binary', 'utf8')
    decoded += decipher.final('utf8')
    
    decoded = JSON.parse(decoded)

  } catch (err) {
    throw new Error('Illegal Buffer')
  }

  if (decoded.watermark.appid !== appId) {
    throw new Error('Illegal Buffer')
  }

  return decoded
}
