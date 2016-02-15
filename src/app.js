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

var HelloWorld = React.createClass({
  render: function() {
    return (
      <p>
        React Js component!
        It is {this.props.date.toTimeString()}
      </p>
    );
  }
});

setInterval(function() {
  ReactDOM.render(
    <HelloWorld date={new Date().getMilliseconds()} />,
    document.getElementById('example')
  );
}, 500);


ReactDOM.render(<HeaderSection />, document.getElementById('container'));
