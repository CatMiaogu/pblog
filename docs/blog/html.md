### 1. H5的新特性有哪些？CSS3的新特性有哪些？
   - HTML5
      1. 画布 `Canvas
      2. 语义化元素 `artical footer header sider section nav`
      3. 音/视频标签 `audio video`
      4. 更好的本地离线存储
      5. 表单控件 `email search date time calender url `
      6. 新技术 `webworker websocket`
      7. 自定`义属性 `data-xxx`
   - CSS3
      1. 颜色 `RGBA HSLA`
      2. 文字阴影 `text-shadow`
      3. 边框圆角`border-radius` 边框阴影 `border-shadow`
      4. 渐变`linear-gradient radial-gradient`
      5. 过渡`transition`
      6. 自定义动画`animate @keyfrom`
      7. 2D/3D转换 `transform translate rotate scale`
### 2. 盒子垂直居中
1. flex
  ```html 
  <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .parent {
          width: 500px;
          height: 600px;
          display: flex;
          background-color: blueviolet;
          align-items: center;
          justify-content: center;
        }

        .child {
          width: 100px;
          height: 100px;
          background-color: aquamarine;
        }
      </style>
    </head>

    <body>
      <div class="parent">
        <div class="child"></div>
      </div>
    </body>
    </html>
   ```
2. 定位
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .parent {
          width: 500px;
          height: 600px;
          background-color:bisque;
          position: relative;
        }

        .child {
          width: 100px;
          height: 100px;
          background-color: aquamarine;
          position: absolute;
          top: 50%;
          left: 50%;
          margin-top: -50px;
          margin-left: -50px;
        }
      </style>
    </head>
    <body>
      <div class="parent">
        <div class="child"></div>
      </div>
    </body>
    </html>
   ```
3. transform
   ```html
   <!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Document</title>
      <style>
        .parent {
          width: 500px;
          height: 600px;
          background-color:bisque;
          position: relative;
        }

        .child {
          width: 100px;
          height: 100px;
          background-color: aquamarine;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
        }
      </style>
    </head>

    <body>
      <div class="parent">
        <div class="child"></div>
      </div>
    </body>
    </html>
   ```
### 3. 双飞翼（圣杯）布局
> 效果：左右固定宽度，中间内容区自适应
> 参考 [双飞翼/圣杯](https://segmentfault.com/a/1190000041713571)

### 4. BFC(块级格式化上下文)
> 参考 https://zhuanlan.zhihu.com/p/127187654