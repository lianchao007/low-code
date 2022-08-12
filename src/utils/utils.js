/*
 * @Descripttion: 
 * @version: 
 * @Author: lc
 * @Date: 2022-02-15 16:11:20
 * @LastEditors: lc
 * @LastEditTime: 2022-08-12 16:07:22
 */
// 读取本地缓存
const getStorage = (key) => {
    try {
        let data =
            localStorage.getItem(key) && JSON.parse(localStorage.getItem(key));
        if (data.exdate > new Date().getTime()) {
            return data.value;
        } else {
            localStorage.removeItem(key);
            return "";
        }
    } catch (error) {
        return "";
    }
};
// 本地缓存数据
const setStorage = (key, value, expiredays = 30) => {
    var exdate = new Date();
    exdate.setDate(exdate.getDate() + expiredays);
    let data = {
        value: value,
        exdate: exdate.getTime(),
    };
    localStorage.setItem(key, JSON.stringify(data));
};
// 删除本地缓存
const removeStorage = (key) => {
    localStorage.removeItem(key);
}
export {
    getStorage,
    setStorage,
    removeStorage
}