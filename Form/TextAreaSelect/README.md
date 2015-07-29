# textarea

在[交互](https://github.com/swfbarhr/React-Together/tree/master/Interaction)这一讲中，我们提到过react将事件都封装了，并且消除了浏览器不一致性。在表单元素上，react同样也做了很多的工作：react给JSX中的textarea和我们将要提到的select添加了value和defaultValue属性，使得我们在做react的时候更加顺当。代码如下：
```js
render: function() {
   	return (<textarea value={this.state.test} onChange={this.textChange} />);
}
```
我们在示例中同时列出了“约束”和“非约束”的写法，具体可以查看[demo](https://github.com/swfbarhr/React-Together/blob/master/Form/TextAreaSelect/TextAreaSelect.js)。


## select

上面我们提到，select也可以设置value和defaultValue，这里我们就不再赘述。但是需要提要的一点是，select开启多选时value或defaultValue可以传入数组。代码如下：
```js
getInitialState: function(){
	return {
		test: ['test1','test2']
	};
},
render: function() {
   	return (<select multiple="true" value={this.state.test} onChange={this.selectChange} >
   				<option value="test1">测试1</option>
   				<option value="test2">测试2</option>
   				<option value="test3">测试3</option>
   				<option value="test4">测试4</option>
   			</select>);
}
```
我们可以看到，传入的test时一个数组，界面上显示的效果就是前两项被选中。但是需要注意的时，在选择select的时候，value值不会发生变化，而是每个option的selected属性会发生变化，所以我们在selectChange事件中做了特殊处理（循环每一个option，技术所有selected属性，然后在更新状态，具体代码可以看示例）。


## 注意
将文件放置到Apache或IIS中访问（直接浏览器打开可能会报错--“跨域访问”），就可以看到效果！


#  总结

这一讲的内容并不是很多，但是也有要注意的地方（select多选时的状态更新）。虽然说内容很简单，但是也要练习才能熟悉其中的奥妙--我是一个不择不扣的实践主义者。