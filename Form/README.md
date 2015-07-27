# 表单

很多时候表单在我们的应用中起到了至关重要的作用，所以今天我们就来研究一下react中的表单是怎么玩的。


## 约束的组件和无约束的组件

在我们研究表单之前，先要熟悉两个概念：约束的组件、无约束的组件。很多人仅仅在字面理解这两个概念时会有一些摸不着头脑，到底是啥意思呢？其实把概念如果换成“受react约束的组件”、“不受react约束的组件”，这样是不是可以轻松的理解。其实所谓的约束，就是受react约束，react能否控制该组件的意思。很多人看到这里会有疑问，那到底怎么样的组件是约束的组件，怎么样的又无约束的组件呢，下面我们就来用代码理解下这两个概念。


## 无约束的组件

首先我们先来看一下无约束的组件，上面提到，无约束的组件就是不受react控制的组件。如果要实现一个无约束的组件，我们要做的就是给组件设置一个与react无关的defaultValue属性，这样我们的组件就是无约束的组件了。
```js
var UncontrolledComponent = React.createClass({
    render: function() {
    	return <input type="text" id="test" name="test" defaultValue="abc" />
    }
});
```
无约束的组件的值不会与react挂钩，是完全独立于react存在的，我们只能通过dom来访问它。


## 约束的组件

约束的组件就是状态完全受react控制的组件，我们可以通过react来访问其状态。如果我们要获取组件的状态，直接this.state就可以了。
```js
var ControlledComponent = React.createClass({
	getInitialState:function(){
		return {
			test:'abc'
		};
	},
	formChange: function(event){
		var formState = {};

		formState[event.target.name] = event.target.value;
		this.setState(formState);
	},
    render: function() {
    	return <input type="text" id="test" name="test" value={this.state.test} onChange={this.formChange} />
    }
});
```
约束组件的使用场景有很多，比如我们要自动的将输入的字母转换成大写，我们可以在onChange时间中转换完成然后做setState操作，即使这样我们也不会感受到刷屏。   
需要注意的是，如果我们不设置onChange事件，大家猜猜会出现什么样的效果。代码如下：
```js
var ControlledComponent = React.createClass({
	getInitialState:function(){
		return {
			test:'abc'
		};
	},
    render: function() {
    	return <input type="text" id="test" name="test" value={this.state.test} />
    }
});
```
因为我们只设置了组件的value值，但是又没有告诉react当值改变的时候该怎么更新状态，所以我们渲染出来的input控件的值在界面上是无法改变的。 


#  总结

到这里，大家应该可以初步理解约束组件和无约束组件的含义了吧。所谓的约束，就是受react约束。通过约束我们可以做很多事情（例如验证）。我们说，如果要实现一个无约束的组件，需要设置defaultValue，但是如果我们即设置了defaultValue又设置的跟react状态有关的value会出现什么情况呢，大家可以自己试试。