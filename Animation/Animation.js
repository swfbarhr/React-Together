var CSSTransitionGroup = React.addons.CSSTransitionGroup;

//基础CSS3的动画
var AnimationCSS = React.createClass({
	getInitialState: function() {
		return {
			target: null
		};
	},
	addDiv: function() {
		this.setState({target:<div className='test' key='k1'></div>})
	},
	removeDiv: function() {
		this.setState({target:null});
	},
    render: function() {
    	return (<div>
    				<input type='button' onClick={this.addDiv} value='点我添加' />
	    			<input type='button' onClick={this.removeDiv} value='点我移除' />
    				<CSSTransitionGroup transitionName='test'>
	    				{this.state.target}
	    			</CSSTransitionGroup>
    			</div>);
    }
});

React.render(<AnimationCSS />, document.body);


//基于间隔渲染的动画
/*
var AnimationFrame = React.createClass({
	getInitialState: function() {
		return {
			position:{
				right:500
			}
		};
	},
	changePosition: function() {
	    var timeStamp = new Date();

	    var temp = this.props.end - timeStamp;

	    if (temp > 0) {
	        this.setState({
	            position: {
	                right: temp > 1000 ? 1000 : temp
	            }
	        });
	    } else {
	        this.setState({
	            position: {
	                right: 0
	            }
	        });
	    }
	},
	componentDidMount: function() {
		requestAnimationFrame(this.changePosition);
	},
	componentDidUpdate: function() {
		requestAnimationFrame(this.changePosition);
	},
	render: function() {
		var style = {
		    position: 'absolute',
		    right: this.state.position.right
		};

		return (<div className='test' style={style}></div>);
	}
});

React.render(<AnimationFrame end={new Date(new Date().valueOf() + 1000)} /> , document.body)
*/

//基于setTimeout间隔渲染动画
/*
var AnimationTimeout = React.createClass({
	getInitialState: function() {
		return {
			position:{
				right:500
			}
		};
	},
	changePosition: function() {
	    var timeStamp = new Date();

	    var temp = this.props.end - timeStamp;

	    if (temp > 0) {
	        this.setState({
	            position: {
	                right: temp > 1000 ? 1000 : temp
	            }
	        });
	    } else {
	        this.setState({
	            position: {
	                right: 0
	            }
	        });
	    }
	},
	componentDidMount: function() {
		setTimeout(this.changePosition, 50);
	},
	componentDidUpdate: function() {
		setTimeout(this.changePosition, 50);
	},
	render: function() {
		var style = {
		    position: 'absolute',
		    right: this.state.position.right
		};

		return (<div className='test' style={style}></div>);
	}
});

React.render(<AnimationTimeout end={new Date(new Date().valueOf() + 1000)} /> , document.body)
*/