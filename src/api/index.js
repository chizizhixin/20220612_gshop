/*
包含多个接口请求函数的模块
函数的返回值时promise对象
*/
import ajax from './ajax'
// 根据经纬度获取位置详情](#1根据经纬度获取位置详情)
export const  reqAddress = (geohash) => ajax(`//${geohash}`)
// 获取食品分类列表](#2获取食品分类列表)
export const  reqFootTypes = () => ajax('/')
// 根据经纬度获取商铺列表](#3根据经纬度获取商铺列表)
export const  reqShops = (longitude,latitude) => ajax('/',{longitude,latitude})
// 根据经纬度和关键字搜索商铺列表](#4根据经纬度和关键字搜索商铺列表)
// export const  reqAddress = () => ajax()
// 获取一次性验证码](#5获取一次性验证码)
// export const  reqAddress = () => ajax()
// 用户名密码登陆](#6用户名密码登陆)
// export const  reqAddress = () => ajax()
// 发送短信验证码](#7发送短信验证码)
// export const  reqAddress = () => ajax()
// 手机号验证码登陆](#8手机号验证码登陆)
// export const  reqAddress = () => ajax()
// 根据会话获取用户信息](#9根据会话获取用户信息)
// export const  reqAddress = () => ajax()
// 用户登出](#10用户登出)
// export const  reqAddress = () => ajax()



