## 交互

在[ShowData](https://github.com/swfbarhr/React-Together/tree/master/ShowData)中我们讲到了输入、输出中的输出，现在我们来探索一下输入，
简单的说，就是记录用户的信息。


## 场景

我们假设页面上有一个按钮，一点击按钮就在页面上显示“欢迎进入React的世界！”。


## 事件

在此例中，我们将涉及到绑定事件的操作。需要说明的是，react的时间处理不是仅仅简单的把事件传递给事件处理的对象，而是把原生的事件封装在一个SyntheticEvent实例中。
SyntheticEvent与浏览器的原生的事件一致，并且消除了跨浏览器的差异。可以使我们在coding时使用一致的事件名称。   
getInitialState函数，此函数为react内置函数，对于每个实例来说，此方法只调用一次。此方法与getDefaultProps一样（getDefaultProps每个组件调用一次），返回一个JSON对象。我们可以通过this.setState来改变其值，每调用一次this.setState，react就会重绘一次组件。


## SETP1

第一步我们先来定义getInitialState即设置this.state的默认值。
```js
getInitialState: function() {
   	return {
   		welcome: '默认欢迎语。'
   	};
}
```

## STEP2

实现render方法，在此方法中我们定义了一个span与一个button，点击button然后把span中的文字换掉
```js
render: function() {
	return <div>
   			   <span>{this.state.welcome}</span><br/>
   			   <input type="button" value="点我" onClick={this.btnClick} />
    	   </div>;
}
```

## STEP3

定义btnClick，用来处理点击button的效果。这里我们是把state重新设置成“欢迎来到React的世界！”（这时组件就会重绘）
```js
btnClick: function(target) {
	this.setState({welcome: '欢迎来到React的世界！'});
}
```

## STEP4

渲染页面
```js
React.render(<Interaction />, document.body);
```

## STEP5

将文件放置到Apache或IIS中访问（直接浏览器打开可能会报错--“跨域访问”），就可以看到效果！


# 总结

此例中，我们引入了一个新的内置函数getInitialState和setState方法，getInitialState的作用就是初始化state的值，而setState值改变state的值
（注意：更改state的值一定要使用setState而不要直接更改state的属性值，如果直接更改会导致一些副作用。例如：render函数中取到的不是最新的state）。   
而render函数返回的对象永远是一个JSX对象，不能返回多个，否则react会报错。   
需要说明的是，react将组件的所有属性和事件都已经封装成小驼峰的形式（此例中的onClick既是如此）。