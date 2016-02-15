var HeaderSection = React.createClass({
  displayName: 'HeaderSection',

  render: function () {
    return React.createElement(
      'div',
      null,
      React.createElement(
        'h1',
        null,
        'React Components'
      ),
      React.createElement(
        'h3',
        null,
        'React 101'
      ),
      React.createElement(
        'p',
        null,
        'Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum'
      )
    );
  }
});

var HelloWorld = React.createClass({
  displayName: 'HelloWorld',

  render: function () {
    return React.createElement(
      'p',
      null,
      'React Js component! It is ',
      this.props.date.toTimeString()
    );
  }
});

setInterval(function () {
  ReactDOM.render(React.createElement(HelloWorld, { date: new Date().getMilliseconds() }), document.getElementById('example'));
}, 500);

ReactDOM.render(React.createElement(HeaderSection, null), document.getElementById('container'));