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


# watch vs. watchEffect
watch 和 watchEffect 都能响应式地执行有副作用的回调。它们之间的主要区别是追踪响应式依赖的方式：

watch 只追踪明确侦听的数据源。它不会追踪任何在回调中访问到的东西。另外，仅在数据源确实改变时才会触发回调。watch 会避免在发生副作用时追踪依赖，因此，我们能更加精确地控制回调函数的触发时机。

watchEffect，则会在改变发生期间追踪依赖。它会在同步执行过程中，自动追踪所有能访问到的响应式属性。这更方便，而且代码往往更简洁，但有时其响应性依赖关系会不那么明确。

# ref 和 reactive 的使用区别
1. 很多时候可以使用ref来创建任何响应式数据；

2. 如果有很多基本类型需要定义的，可以包装成一个对象，一次性使用reactive转化成响应式

3. 解决reactive生成的proxy对象解构会失去响应式的问题，可以使用toRefs响应式对象转换为一个个的ref使用，
