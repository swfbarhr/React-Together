//生命周期（一）--实例化阶段
/*
var LifeCycle = React.createClass({
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

React.render(<LifeCycle />, document.body);
*/


//生命周期（二）--存在期
/*
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
*/

/*
var LifeCycleSub = React.createClass({
    getDefaultProps: function() {
        return {
            content:'我是子组件'
        };
    },
    shouldComponentUpdate: function() {
        return false;
    },
    render: function() {
        return <h2>{this.props.content}</h2>;
    }
});

var LifeCycle = React.createClass({
    getInitialState: function() {
        return {
            updated:'我是父组件',
            subUpdated:'我是子组件'
        };
    },
    btnClick: function(){
        this.setState({updated:'父组件已更新',subUpdated:'子组件已更新'})
    },
    render: function() {
        return  (<div>
                    <h1>{this.state.updated}</h1>
                    <LifeCycleSub content={this.state.subUpdated} />
                    <input type="button" value="点我" onClick={this.btnClick} />
                 </div>);
    }
});

React.render(<LifeCycle />, document.body);
*/