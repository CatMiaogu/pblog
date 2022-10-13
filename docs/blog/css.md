### 1. display: none、visibility: hidden、opacity: 0
||DOM结构|事件监听|性能|继承|场景|transition|
|--|--|--|--|--|--|--|
|display: none|浏览器不会渲染 display 属性为 none 的元素，会让元素完全从渲染树中消失，渲染的时候不占据任何空间|无法进行 DOM 事件监听，不能点击|修改元素会造成文档回流（reflow重排 与 repaint重绘）,读屏器不会读取display: none元素内容，性能消耗较大|是非继承属性，由于元素从渲染树消失，造成子孙节点消失，即使修改子孙节点属性子孙节点也无法显示，毕竟子类也不会被渲染|显示出原来这里不存在的结构|transition 不支持 display|
|visibility: hidden|不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见|无法进行 DOM 事件监听，不能点击|修改元素只会造成本元素的重绘（repaint），是重绘操作，比回流操作性能高一些，性能消耗较少；读屏器读取visibility: hidden元素内容|是继承属性，子孙节点消失是由于继承了visibility: hidden，子元素可以通过设置 visibility: visible 来取消隐藏|显示不会导致页面结构发生变动，不会撑开|transition 支持 visibility，visible  会立即显示，隐藏时会延时|
|opacity: 0|透明度为 100%，不会让元素从渲染树消失，渲染元素继续占据空间，只是内容不可见|可以进行 DOM 事件监听，可以点击|提升为合成层，是重建图层，不和动画属性一起则不会产生repaint（不脱离文档流，不会触发重绘），性能消耗较少|会被子元素继承，且子元素并不能通过 opacity: 1 来取消隐藏|可以跟transition搭配|transition 支持 opacity，opacity 可以延时显示和隐藏|