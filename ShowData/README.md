## 展示数据

我们说无论是学习一门语言还是一个框架，都不能停止在Hello World的阶段，我们学习的目的是为了运用在实际的项目中。
无论什么类型的语言还是框架，无非就是输入与输出，输入就是根据用户的操作我们进行的信息的收集；输出就是根据用户
的需求，把用户想要的信息输出显示给用户。所以我们今天先来玩一玩怎么用react把想要的数据展现给用户。


## 场景

我们的需求是：在页面打开的时候，把当前的时间显示给用户。


## 基本函数getDefaultProps和render

getDefaultProps此方法为react的内置方法，在这里我们需要去实现它。getDefaultProps作用就是设置默认的props（可以
把它认为是默认属性，如果在实例化组件时没有传入对应的属性，则使用默认属性），以便在适当的时候使用，本例中在render
方法中用到。此方法中需要有一个返回值（JSON），否则会报错。
render此方法同样为react内置方法，我们也需要并且是必须实现的，此方法返回一个react对象（虚拟的dom）。render会产生一个虚拟的dom，
react会比较这个虚拟dom和真正的dom，然后做出必要的修改。


## STEP1

第一步让我们来实现getDefaultProps，给time一个默认值null
```js
getDefaultProps: function() {
    return {
        time: null
    };
}
```


## STEP2

第二步并且是必须的，实现render。注意：render方法是react中唯一一个必须实现的方法。
```js
render: function() {
    return <span>当前时间：{this.props.time.toString()}</span>;
}
```
在render方法中，我们访问了实例传过来的time属性，并且将其显示在页面上。


## STEP3

实例化
```js
React.render(<ShowTime time = {new Date()} />, document.body);
```
我们可以看到，在实例化的时候，我把当前时间传了进去，也就是说，一会页面上显示的就是我现在传入的时间。


## STEP4
将文件放置到Apache或IIS中访问（直接浏览器打开可能会报错--“跨域访问”），就可以看到效果！


## 总结
到这里，我们的数据展示已经完成。在此过程中，我们新学习到了2个内置方法getDefaultProps和render。
getDefaultProps的作用设置默认属性，render是产生一个虚拟dom以便react进行有针对的渲染。
疑问：在render方法中，我将传入的time进行可toString的操作，至于为什么要进行这一个操作，大家可以
试一试没有toString是什么效果，或者试试传入的是一个数组、Object又是什么效果。