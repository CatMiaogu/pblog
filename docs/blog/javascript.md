### 1. JavaScript 的基本类型？引用类型？null 和 undefined 的区别?

- 基本类型 `Number String Boolean null undefined Symbol`
- 引用类型 ` Object Function Array`
- undefined 变量声明未初始化；null 变量声明并赋值为 null

### 2. 判断 JavaScript 数据类型

- typeof 判断 null 为 object
- instanceof 判断引用类型
- `Object.prototype.toString`

### 3.创建函数的几种方式

- 函数声明

```javascript
function sum1(a, b) {
  return a + b;
}
```

- 函数表达式

```javascript
const sum1 = function (a, b) {
  return a + b;
};
```

### 4.JavaScript 创建对象的几种方式

- 对象字面量

```javascript
let cat = {};
cat.name = "Tom";
```

### 5.JavaScript 原生对象及宿主对象

| 原生对象                                                                                                                               | 宿主对象                | 内部对象      |
| :------------------------------------------------------------------------------------------------------------------------------------- | :---------------------- | :------------ |
| 独立于宿主环境的 ECMScript 实现提供的对象，包含`Object Function Array String Boolean Date RegExp Error SyntaxError TypeError URIError` | `BOM DOM`都是宿主对象。 | `Global Math` |

### 6.=== ==区别

| ===                  | ==                                                   |
| :------------------- | :--------------------------------------------------- |
| 等同符，比较值和类型 | 等值符，类型相同直接比值，类型不同会自动转化类型比较 |

### 7.null undefined 区别

| null                      | undefined    |
| :------------------------ | :----------- |
| 变量声明并定义,值为'空值' | 表示值不存在 |

### 8.区分数组和对象

- ES6 的`Array.isArray()`
- instanceof
- constructor
- `Object.prototype.toString.call()`

### 9.多维数组降维

- 数组字符串化
  ```javascript
  let arr = [
    [222, 333, 444],
    [55, 66, 77],
  ];
  arr += "";
  arr = arr.split(",");
  ```
- 递归
  ```javascript
  function reduceDimension(arr) {
    let ret = [];
    let toArr = function (ar) {
      ar.forEach((el) => {
        el instanceof Array ? toArr(el) : ret.push(el);
      });
    };
    toArr(arr);
    return ret;
  }
  ```
- `Array.prototype.flat()`

  ```javascript
  // 传入参数可以实现几维数组的降维，传入Infinity，展开任意维度的数组
  let arr = [
    [1, 2, 3],
    [4, [5, [6]]],
  ];
  console.error(arr.flat()); // [ 1, 2, 3, 4, [ 5, [ 6 ] ] ]
  console.error(arr.flat(2)); // [ 1, 2, 3, 4, 5, [ 6 ] ]
  console.error(arr.flat(3)); // [ 1, 2, 3, 4, 5, 6 ]
  console.error(arr.flat(Infinity)); //[ 1, 2, 3, 4, 5, 6 ]
  ```

### 10.判断俩对象是否相等

- ES6 的`Object.is`，判断两个对象的引用地址是否一致
- 判断内容是否一致，遍历所有键名和键值是否一致
  ```javascript
  // 思路：
  // 判断两个对象是否指向同一内存
  // 使用Object.getOwnPropertyNames获取所有键名数组
  // 判断两个键名数组是否相等
  // 遍历键名，判断键值是否相等
  function isObjectValueEqual(o1, o2) {
    // 同一内存
    if (o1 === o2) return true;
    // 获取键名数组
    let oProp1 = Object.getOwnPropertyNames(o1);
    let oProp2 = Object.getOwnPropertyNames(o2);
    // 判断数组长度是否一致
    if (oProp1.length !== oProp2.length) return false;
    // 遍历对象的键值
    for (const key in o1) {
      // 判断o1的键 ，在o2中是否存在
      if (Object.hasOwnProperty.call(o2, key)) {
        // 判断o1的键值是否为对象，是则递归，不是则直接判断是否相等
        if (typeof o1[key] === "object") {
          if (!isObjectValueEqual(o1[key], o2[key])) return false;
        } else if (o1[key] !== o2[key]) {
          return false;
        }
      } else {
        return false;
      }
    }
    return true;
  }
  ```

### 11.遍历对象的属性

| `Object.keys()`                          | `Object.getOwnPropertyNames()`                   | `for...in`                                                                                                                 |
| :--------------------------------------- | :----------------------------------------------- | :------------------------------------------------------------------------------------------------------------------------- |
| 遍历自身可枚举属性（可枚举，非继承属性） | 遍历自身所有属性（可枚举，不可枚举，非继承属性） | 遍历可枚举的自身属性和继承属性（可枚举，可继承）`for...in `返回的 key 顺序与`Object.keys`一致，for in 会枚举原型链上的属性 |

### 12.防抖和节流

```javascript
// 防抖
function debounce(fn, delay) {
  let timeId = null;
  return function () {
    const contxt = this;
    const args = arguments;
    if (timeId) {
      clearTimeout(timeId);
    }
    timeId = setTimeout(() => {
      fn.apply(contxt, args);
    }, delay);
  };
}

// 节流
function throttle(fn, delay) {
  let timeId = null;
  return function () {
    const contxt = this;
    const args = arguments;
    if (timeId) return;
    timeId = setTimeout(() => {
      fn.apply(contxt, args);
      timeId = null;
    }, delay);
  };
}
```

### 13. 将数字 12345678 转化成 RMB 形式 如： 12,345,678

```javascript
// 先转化为字符串
let str = 12345678 + "";
// 封装一个反转字符串的方法
function res(str) {
  // split(转换为数组)  reverse(反转数组) join(转化为字符串)
  return str.split("").reverse().join("");
}
// 调用反转数组的方法
str = res(str);
//每三位字符加一个 ','的方法
function toRMB(str) {
  var rmb = "";
  for (let i = 1; i <= str.length; i++) {
    rmb += str[i - 1];
    if (i % 3 === 0 && i != str.length) {
      rmb += ",";
    }
  }
  return rmb;
}
console.log(res(toRMB(str))); // 12,345,678
```

### 14. 数组去重

```javascript
// 1. ES6的Set去重
let arr = [1, 2, 3, 4, 3, 2, 3, 4, 6, 7, 6];
let unique = (arr) => [...new Set(arr)];
console.log(unique(arr));
```
