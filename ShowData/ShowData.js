var ShowTime = React.createClass({
    getDefaultProps: function() {
        return {
            time: null
        };
    },
    render: function() {
        return <span>当前时间：{this.props.time.toString()}</span>;
    }
})

React.render(<ShowTime time = {new Date()} />, document.body);