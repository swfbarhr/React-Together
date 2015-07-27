/*var ControlledComponent = React.createClass({
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

React.render(<ControlledComponent />, document.body);*/

var UncontrolledComponent = React.createClass({
    render: function() {
    	return <input type="text" id="test" name="test" defaultValue="abc" />
    }
});

React.render(<UncontrolledComponent />, document.body);