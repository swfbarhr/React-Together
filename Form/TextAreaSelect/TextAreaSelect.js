//textarea
//约束的
var FormTextArea = React.createClass({
	getInitialState: function(){
		return {
			test: 'Test'
		};
	},
	textChange: function(event){
		this.setState({test: event.target.value});
	},
    render: function() {
    	return (<textarea value={this.state.test} onChange={this.textChange} />);
    }
});

React.render(<FormTextArea />, document.body);


/*
//非约束的
var FormTextArea = React.createClass({
    render: function() {
    	return (<textarea defaultValue="Test" />);
    }
});

React.render(<FormTextArea />, document.body);
*/


//select
/*
var FormSelect = React.createClass({
	getInitialState: function(){
		return {
			test: ['test1','test2']
		};
	},
	selectChange: function(event) {
	    var checked, sel;

	    checked = [];
	    sel = event.target;

	    for (var i = 0; i < sel.length; i++) {
	    	var option;

	    	option = sel[i];

	    	if(option.selected) {
	    		checked.push(option.value);
	    	}
	    }

	    this.setState({test: checked});
	},
    render: function() {
    	return (<select multiple="true" value={this.state.test} onChange={this.selectChange} >
    				<option value="test1">测试1</option>
    				<option value="test2">测试2</option>
    				<option value="test3">测试3</option>
    				<option value="test4">测试4</option>
    			</select>);
    }
});

React.render(<FormSelect />, document.body);
*/