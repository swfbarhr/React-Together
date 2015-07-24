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