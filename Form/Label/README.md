# Label

label标签是一个非常重要但是简单的html元素，我们要讲解的第一个form组件就是它。


## for

我们都知道，label有一个很有用的属性叫做for，这是一个很有用的属性，但是在JavaScript里面for是关键字，如果直接写for的话会有问题，但是也是有解决方法的。


## htmlFor

为了解决for关键字的问题，我们在JSX里面可以使用htmlFor这个属性，等页面渲染之后会把htmlFor换成for。代码如下：
```js
var FormLabel = React.createClass({
    render: function() {
    	return (<div>
    				<label htmlFor="chkTest" >Test:</label>
    				<input type="checkbox" id="chkTest" />
    			</div>);
    }
});

```


## 注意
将文件放置到Apache或IIS中访问（直接浏览器打开可能会报错--“跨域访问”），就可以看到效果！


#  总结

这一节很简单，主要是介绍了如果在JSX中遇到了JavaScript的保留字，需要注意的问题（class也是保留字，我们需要使用className来替代）。好了，今天就先这样，我们[下一节](https://github.com/swfbarhr/React-Together/tree/master/Form/TextAreaSelect)再见。