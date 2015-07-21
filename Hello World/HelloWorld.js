var HelloWorld = React.createClass({
    render: function() {
        return <h1>Hello World!</h1>;
    }
});

React.render(<HelloWorld/>, document.body);

/*var HelloWorld = React.createClass({
    render: function() {
        return React.createElement('h1', null, 'Hello World!');
    }
});

React.render(React.createElement(HelloWorld, null), document.body);*/