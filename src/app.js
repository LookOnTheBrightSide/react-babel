var HeaderSection = React.createClass({
	render: function(){
		return(
				<div>
					<h1>React Components</h1>
					<h3>React 101</h3>
					<p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
				</div>
			);
	}
});

var MainCard =  React.createClass({
  getInitialState: function(){
    return { count: 0 }
  },
  increment: function(){
    this.setState({ count: this.state.count + 1 });
  }
  ,

  render: function(){
    return(
        //react element props
        <div onClick= {this.increment}>
          <h1>React Components by : {this.props.name}</h1>
          <h3>React 101. Clicked : {this.state.count}</h3>
          <p>Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum</p>
        </div>
      )
  }
})

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        React Js component!
        It is {this.props.date}

      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date().toString()} />,
    document.getElementById('example')
  );
}, 500);

ReactDOM.render(<MainCard name="Simon's Town"/>, document.getElementById('card'))

ReactDOM.render(<HeaderSection />, document.getElementById('container'));
