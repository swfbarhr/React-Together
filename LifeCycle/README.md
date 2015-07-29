# 生命周期（一）

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

此讲中，我们进一步了解了getDefaultProps和getInitialState方法，通知也引入了两个新的方法：componentWillMount和componentDidMount。搞定生命周期，可以让我们更清晰的coding和定位问题，什么阶段应该干什么，什么阶段不能干什么都应该按照生命周期来走。


# 生命周期（二）

在生命周期（一）中，我们介绍到在实例化阶段会有五个函数依次执行。在这一节中，依然会有五个函数被依次执行分别是：componentWillReceiveProps、shouldComponentUpdate、componentWillUpdate、render、componentDidUpdate。后面三个函数我们已经在上一节中介绍过了，这一节中我们重点介绍前两个函数。


## componentWillReceiveProps

在任何时候，我们都可以通过父组件来更改子组件的props（通过setProps方法），这时就会促发子组件的componentWillReceiveProps方法，并且导致父组件整体重绘（不止setSate会重绘组件哦）。下面我们引入一段代码来形象的展示一下componentWillReceiveProps方法。
```js
//子组件
var LifeCycleSub = React.createClass({
    getDefaultProps: function() {
        return {
            content:'默认子组件内容'
        };
    },
    componentWillReceiveProps: function(_props) {
        console.log(_props.content);
    },
    render: function() {
        return <h2>{this.props.content}</h2>;
    }
});

//父组件
var LifeCycle = React.createClass({
    getDefaultProps: function() {
        return {
            subContent:'默认子组件内容'
        };
    },
    render: function() {
        return  (<div>
                    <h1>Reactjs生命周期</h1>
                    <LifeCycleSub content={this.props.subContent} />
                 </div>);
    }
});

var instanceLC = React.render(<LifeCycle />, document.body);

setTimeout(function(){
    instanceLC.setProps({subContent:'父组已经更改了子组件的props'});
}, 1000);
```
上述代码中，我们有两个组件：LifeCycleSub组件（子组件）和LifeCycle组件（父组件）。实现的步骤如下：
* 1.在父组件中我们中使用了子组件（LifeCycleSub）
* 2.React.render
* 3.我们把React.render返回的实例对象赋值给了instanceLC
* 4.然后我们调用了instanceLC的setProps方法，重置了子组件的props。这样我们就实现了在父组件中更新子组件的props，从而子组件的componentWillReceiveProps方法被调用。此时，在控制台我们会打印出我们设置的"subContent"的内容。   
一般情况下，我们不需要调用setProps，而是props也是看做只读的属性（如有需要，我们可以使用state）。


## shouldComponentUpdate

我们说react是非常快的，但是通过我们合理的代码可以让其更快。这里我们就要讲到shouldComponentUpdate方法，如果我们可以确定某个组件是不需要渲染，那么我们可以实现其shouldComponentUpdate方法，代码如下：
```js
shouldComponentUpdate: function() {
        return false;
}
```
shouldComponentUpdate方法中我们返回了一个false，这就告诉了react这个组件不需要渲染，之后react在渲染的时候就会跳过此组件，这是该组件的render方法就不会执行，同时位于render方法前后的钩子函数componentWillUpdate和componentDidUpdate也不会执行。详细代码可以见例子"生命周期（二）--存在期"。


## 总结

在此讲中我们介绍了两个新的函数componentWillReceiveProps和shouldComponentUpdate，当在父组件中改变子组件的props（setProps）就会触发componentWillReceiveProps函数，sholdComponentUpdate函数可以使我们的react更快，但是要确认使用sholdComponentUpdate函数的组件确实不需要渲染。


# 生命周期（三）

在生命的最后阶段，我们常做的就是料理后事，擦擦屁股什么的。在react中也是如此，在这个阶段只有一个函数componentWillUnmount被执行，此函数只有在组件被移除时才会出发。到底什么才算移除，react在渲染的时候会有一个diff算法，会计算此次渲染与上次的不同之处，如果发现此次少了一个组件，渲染的时候就直接把少了的组件移除，这样就起到了移除组件的效果。代码如下：
```js
var LifeCycleSub = React.createClass({
    getDefaultProps: function() {
        return {
            content:'我是子组件'
        };
    },
    componentWillUnmount: function() {
        console.log('子组件将移除');
    },
    render: function() {
        return <h2>{this.props.content}</h2>;
    }
});

var LifeCycle = React.createClass({
    getInitialState: function() {
        return {
            updated: false
        };
    },
    btnClick: function(){
        this.setState({updated:true})
    },
    render: function() {
        var instanceSub = !this.state.updated ? <LifeCycleSub /> : null;

        return  (<div>
                    <h1>Reactjs生命周期</h1>
                    {instanceSub}
                    <input type="button" value="点我移出" onClick={this.btnClick} />
                 </div>);
    }
});

React.render(<LifeCycle />, document.body);
```
上述代码中，我们在点击按钮之后子组件被移除，在移除之前触发了子组件的componentWillUnmount方法，在控制台打印出“子组件将移除”，之后界面上的效果就是子组件消失了。


## 总结

在清理期，我们通常做的就是移除计时器等一系列操作，保证在组件移除之后不会有后遗症。至此，react生命周期我们就走完了，具体每一个函数应该在什么情况下时候使用，那就得看业务需求了。要融会贯通，还是要多联系。我是一个不择不扣的实践主义者！