import userInfo from '@/config/user';
import { bus } from '@/components/bus';

/* 参考： https://segmentfault.com/a/1190000007535316
 * 
 * async / await
 * 
 * async 申明一个 function 是异步的。
 * 	async 函数（包含函数语句、函数表达式、Lambda表达式）会返回一个 Promise 对象，
 *  如果在函数中 return 一个直接量，async 会把这个直接量通过 Promise.resolve() 封装成 Promise 对象。
 *  
 * await 用于等待一个异步方法执行完成。
 * 	等待的是一个表达式，这个表达式就是Promise resolve方法里的参数。
 *  如下 为 userInfo[type] && userInfo[type] == value
 * 
 *  【await 只能出现在 async 函数中】
 * 
 * */
export async function validate(type, value) {
    const delay = bus.$_.random(10, 400);
    //模拟异步请求返回结果
    const result = await new Promise(resolve => 
    	setTimeout(() => resolve(userInfo[type] && userInfo[type] == value), delay)
	);
	
	return result;
}

export async function storageSave(key, value) {
	//模拟登录成功失败， 随机的，所以失败了请多点几次登录
	if ((Math.random() - 0.5) > 0 ? true : false) {
		sessionStorage.setItem(key, JSON.stringify(value));
    	return true;
	}
    return false;
}

export function storageSaveSync(key, value) {
	sessionStorage.setItem(key, JSON.stringify(value));
	
	return true;
}

export async function storageDel(key) {
    sessionStorage.removeItem(key);
    return true;
}

export function storageGetSync(key) {
    return sessionStorage.getItem(key);
}

export async function storageGet(key) {
    return sessionStorage.getItem(key);
}