# 动画

为了赢得更好的用户体验，动画在web项目的应用是必不可少的，react也可以提供了动画的功能。react中实现动画有两种主要的方式，第一种就是利用CSS3原生的动画，其优点就是：代码简洁，性能开销低；第二种方式是采用间隔渲染的方式，其优点就是可兼容低版本的浏览器，但是可能会有部分的性能损耗，毕竟这种方式采用的是多次渲染方法来达到效果的。


## react插件库（Add-ons）
这个插件库中包含了很多FB封装的基于react的使用库，也包括我们接下来会用到的动画部分CSSTransitionGroup。但是现阶段（写此文档时），FB还是把这个插件库看做是实验性质的，但是最终还是会合并到核心类库中去。我们可以使用如下的方法引用：
```js
<script src="../react/react-with-addons.min.js"></script>
```


## CSS3原生动画

我们都知道CSS3可以实现简单的动画效果，而且代码简洁、行为流畅。但是这一类型的动画也有限制，比如：低版本浏览器对CSS3支持不是很好，动画简单往往达不到业务的需求等，但是很多时候还是值得一用的。

### CSS3原生动画 SETP1

第一步我们要做的就是引入CSSTransitionGroup对象
```js
var CSSTransitionGroup = React.addons.CSSTransitionGroup;
```
CSSTransitionGroup是react对于CSS3动画的顶层api，我们可以直接使用。需要提及的是，CSSTransitionGroup可以认为是对底层api（TransitionGroup）的进一步封装。

### CSS3原生动画 SETP2

第二步我们在render函数中把动画的对象用CSSTransitionGroup包裹起来，并且给其tansitionName属性一个值
```js
render: function() {
 	return (<div>
   				<input type='button' onClick={this.addDiv} value='点我添加' />
    			<input type='button' onClick={this.removeDiv} value='点我移除' />
   				<CSSTransitionGroup transitionName='test'>
    				{this.state.target}
    			</CSSTransitionGroup>
   			</div>);
}
```
同事我们要给出4个时间点的CSS，CSS的名称是与刚刚的transitionName有关联的。
```css
.test-enter {width:50px;}
.test-enter-active {width:150px;transition: width 2s;-moz-transition: width 2s;-webkit-transition: width 2s;-o-transition: width 2s;}
.test-leave {width:150px;}
.test-leave-active {height:0;transition: height 2s;}
```
如果我们transitionName为test，那么我们需要添加四个CSS分别是test-enter、test-enter-active、test-leave、test-leave-active。react会在适当的时候给我们的组件
应用这四个样式。例如：在页面渲染的时候会给组件先添加test-enter样式，之后是test-enter-active，这样我们就可以清楚的知道test-enter是最初的样式而test-enter-active
其实是执行的动画。

### CSS3原生动画 SETP3

组件的渲染与移除。准备工作完成之后，我们只要对组件进行渲染和移除操作就可以看到对应的动画了。在[示例](https://github.com/swfbarhr/React-Together/tree/master/Animation/Animation.js)我们使用按钮来触发动画。


## 间隔渲染动画之requestAnimationFrame

我们知道不是所有的浏览器都支持CSS3，不过没关系，react为我们准备了其他的解决方案，我们先来看看第一个解决方案--requestAnimationFrame。requestAnimationFrame是
浏览器专门为动画提供的api，虽然是递归调用，但是在性能上浏览器会做一定的优化。
```js
changePosition: function() {
    var timeStamp = new Date();

    var temp = this.props.end - timeStamp;

    if (temp > 0) {
        this.setState({
            position: {
                right: temp > 1000 ? 1000 : temp
            }
        });
    } else {
        this.setState({
            position: {
                right: 0
            }
        });
    }
},
componentDidMount: function() {
	requestAnimationFrame(this.changePosition);
},
componentDidUpdate: function() {
	requestAnimationFrame(this.changePosition);
}
```
我们这里的实现是利用了componentDidMount和componentDidUpdate方法，在初次渲染完成之后我们调用了requestAnimationFrame函数，在处理函数（changePosition）更改了state使得组件再次渲染进入componentDidUpdate函数，之后又是一次requestAnimationFrame，直至我们需要达到的效果停止。这里的效果就是浏览器中的红色色块从中间处向右移动，直到浏览器的右边缘。


## 间隔渲染动画之setTimeout

更可怕的是有些古老的浏览器连requestAnimationFrame都不支持，那我们只能退而求其次--使用setTimeout来达到效果。我们使用setTimeout时还有一个好处，就是我们可以自定义执行的时间间隔。由于setTimeout与requestAnimationFrame代码差不多，在这里我们就不一一说明，大家可以到[示例](https://github.com/swfbarhr/React-Together/tree/master/Animation/Animation.js)中查看。


#  总结

到这里我们的react动画之旅就结束了，三种方式各有优缺点。需要提到的是requestAnimationFrame之所以在性能上优于setTimeout是因为requestAnimationFrame专门为动画提供的api，而且如果当前页面不在激活状态，动画是暂停的。所以如果可以用requestAnimationFrame就尽可能不用setTimeout，以保证最小的开销。