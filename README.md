# 笔记

## vue 中作用域插槽的使用场景

**父组件给子组件插槽传递内容时，要使用子组件的内容**
使组件的样式定义更加灵活以适用于不同的场景与业务
使组件可以只包括逻辑而不需要自己来渲染内容样式
在需要同时封装逻辑和组合视图界面使很有用。

### 使用 keep-alive 标签包裹组件可以使组件进行缓存

```js
<keep-alive>//组件名</keep-alive>
```

如果组件使用动态组件的方式那么被取消显示的那个组件使用$refs 访问不了组件内的方法

## 生命周期函数

### created 和 beforeCreate

1.created 组件被创建的的时候可以调用的函数，常用于在此函数中存放网络请求的逻辑
2.created 组件被创建之前

### updated 和 beforeupdate

1.updated 组件更新数据后调用的方法
2.beforeupdate 组件更新前调用的方法

### mounted 和 beforemounted

1.mounted 组件挂载后调用的方法
2.beforemounted 组件过载前调用的方法

### unmounted 和 beforeunmounted

1.unmounted 组件被卸载后调用的方法
2.beforeunmounted 组件被卸载前调用的方法
