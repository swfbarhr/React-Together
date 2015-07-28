var FormLabel = React.createClass({
    render: function() {
    	return (<div>
    				<label htmlFor="chkTest" >Test:</label>
    				<input type="checkbox" id="chkTest" />
    			</div>);
    }
});

React.render(<FormLabel />, document.body);