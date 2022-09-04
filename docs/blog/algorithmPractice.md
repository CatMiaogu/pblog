# 算法实战

### 1. 扁平数据结构转Tree
```javascript 
// 示例
 let arr = [
  { id: 1, name: '部门1', pid: 0 },
  { id: 2, name: '部门2', pid: 1 },
  { id: 3, name: '部门3', pid: 1 },
  { id: 4, name: '部门4', pid: 3 },
  { id: 5, name: '部门5', pid: 4 }
]
// 输出
[
  {
    "id": 1,
    "name": "部门1",
    "pid": 0,
    "children": [
      {
        "id": 2,
        "name": "部门2",
        "pid": 1,
        "children": []
      },
      {
        "id": 3,
        "name": "部门3",
        "pid": 1,
        "children": [
          // 结果 ,,,
        ]
      }
    ]
  }
]
```
**1. 递归 时间复杂度为O(2^n)**
```javascript
const getChildren = (data, result, pid) => {
  for (let item of data) {
    if (item.pid === pid) {
      const newItem = { ...item, children: [] }
      result.push(newItem)
      getChildren(data, newItem.children, item.id)
    }
  }
}
const arrayToTree = (data, pid) => {
  let result = []
  getChildren(arr, result, pid)
  return result
}

let j = JSON.stringify
console.log(j(arrayToTree(arr, 0)))
```
**2. map 时间复杂度为O(2n)**
>主要思路是先把数据转成Map去存储，之后遍历的同时借助对象的引用，直接从Map找对应的数据做存储
```JavaScript 
const arrayToTree = (items) => {
  const result = []
  const itemMap = {}
  for (const item of items) {
    itemMap[item.id] = {...item, children:[]}
  }

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    const treeItem = itemMap[id]
    if(pid === 0) {
      result.push(treeItem)
    } else {
      if(!itemMap[pid]) {
        itemMap[pid] = {
          children: []
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
```
**3. map仅循环一次 时间复杂度为O(n)**
>区别：循环一次同时存储map和处理children
```JavaScript
const arrayToTree = (items) => {
  const result = []
  const itemMap = {} 

  for (const item of items) {
    const id = item.id
    const pid = item.pid
    
    if(!itemMap[id]) {
      itemMap[id] = {
        children: []
      }
    }
    itemMap[id] = {
      ...item, children: itemMap[id]['children']
    }

    const treeItem = itemMap[id]

    if(pid === 0) {
      result.push(treeItem)
    } else {
      if (!itemMap[pid]) {
        itemMap[pid] = {
          children: [],
        }
      }
      itemMap[pid].children.push(treeItem)
    }
  }
  return result
}
```