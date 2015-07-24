## 生命周期（一）

react的生命周期大致可以分为三个阶段：实例化、存在期、销毁清理期。


## 实例化

这个阶段会有五个函数被依次执行getDefaultProps、getInitialState、componentWillMount、render、componentDidMount，我们可以利用一段代码来验证下
这五个函数真正的执行顺序。
```js
var Instance = React.createClass({
    getDefaultProps: function() {
    	console.log(1);
        return null;
    },
    getInitialState: function() {
		console.log(2);
        return null;
    },
    componentWillMount: function() {
    	console.log(3);
    },
    render: function() {
    	console.log(4);
    	return <h1>Reactjs生命周期</h1>;
    },
    componentDidMount: function(){
    	console.log(5);
    }
});

React.render(<Instance />, document.body);
```
页面运行之后，我们可以看到页面上出现了“Reactjs生命周期”几个大字，关键我们需要打开控制台，控制台会依次打印出1、2、3、4、5，这就说明了这五个函数是按照我们的书写顺序执行的。

* getDefaultProps 之前我们在[Interaction](https://github.com/swfbarhr/React-Together/tree/master/Interaction)中提及过，此函数对于组件指执行一次并且对于某些复杂的props值（例如：数组、对象）是对于所有实例共享的。
* getInitialState 此函数对于单个实例只执行一次，每次更新state都会导致组件重绘，所以对于复杂的组件来说，需要尽量减少对于顶层state的更新，避免性能
开销（虽然react的Diff算法已经把时间复杂度从o(n^3)降到了几乎o(n)，但是我们能优化的地方还是手动优化比较好）。
* componentWillMount 此方法是在完成首次渲染之前被调用
* render 产生一个虚拟的dom，且只能返回一个React对象。
* componentDidMount 此方法是在render成功执行时候，并且dom被渲染完成之后执行，在此方法中我们可以利用this.getDOMNode方法来获取真正的dom


## 总结

此将中，我们进一步了解了getDefaultProps和getInitialState方法，通知也引入了两个新的方法：componentWillMount和componentDidMount。搞定生命周期，可以让我们更清晰的coding和定位问题，什么阶段应该干什么，什么阶段不能干什么都应该按照生命周期来走。