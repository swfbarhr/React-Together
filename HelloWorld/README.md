# Hello World!

## 你的Hello World！是你的Hello World！

至于为什么要写Hello World，我也不知道，也许是条件反射：程序猿接触到一门新的语言或者新的框架，都得来一次Hello World！


## JSX的引入

JSX其实就是js+html的混合怪胎。JSX拥有与html相似的语法，但是又可以在其基础上玩js。是不是觉得很酷！
其实如果你牛掰的话，完全可以不用JSX也可以很顺畅的试用react（本猿也在尝试，搞得我很是凌乱）。其实react的
作者（Facebook）还是推荐JSX的，因为效率确实比不用的要高出很多。


## Let's go!

废话说了那么多，让咱们玩起来！


## 2种实现方式

既然说好的react可以使用JSX，也可以不使用。那我们的Hello World就用2中方式同时实现。


## STEP1

其实react也不能算是一个真正的前端框架，最多可以说是实用类库而已。
实用之前我们当然需要引入js资源文件react.min.js和JSXTransformer.js（如果需要使用JSX必须引入此资源）
当然，也需要引入我们自己的HelloWorld.js


## STEP2

OK，准备工作做完之后，我们就可以开始coding了！我们的目的是在页面上输出“Hello Wolrd!”，首先在js中键入如下代码：
```js
var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World!</h1>;
    }
});
```
或者
```js
var HelloWorld = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Hello World!');
    }
});
```

## STEP3

将Hello World!渲染到页面上
```js
React.render(<HelloWorld/>, document.body);
```
或者
```js
React.render(React.createElement(HelloWorld, null), document.body);
```

## STEP4
将文件放置到Apache或IIS中访问（直接浏览器打开可能会报错--“跨域访问”），就可以看到效果！


#  总结

React.render就是讲react对象渲染到指定的dom元素中，React.createElement是创建一个组件实例。具体的参数意义我们
会在后面讲到。是不是感觉很easy，其实react提供了很简单的api，就是为了保证开发者们不被淹没在密密麻麻的api海洋中，
OK，我们的Hello World已经成功了！下一次我们会研究react中几个基本的内置函数以及它们的作用。