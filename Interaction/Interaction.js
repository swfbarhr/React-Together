var Interaction = React.createClass({
    btnClick: function(target) {
		this.setState({welcome: '欢迎来到React的世界！'});
    },
    getInitialState: function() {
    	return {
    		welcome: '默认欢迎语。'
    	};
    },
    render: function() {
    	return <div>
		    		<span>{this.state.welcome}</span><br/>
		    		<input type="button" value="点我" onClick={this.btnClick} />
		       </div>;
    }
});

React.render(<Interaction />, document.body);