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

var MainCard = React.createClass({
  displayName: 'MainCard',

  render: function () {
    return(
      //react element props
      React.createElement(
        'div',
        null,
        React.createElement(
          'h1',
          null,
          'React Components by : ',
          this.props.name
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
      this.props.date
    );
  }
});

setInterval(function () {
  ReactDOM.render(React.createElement(HelloWorld, { date: new Date().toString() }), document.getElementById('example'));
}, 500);

ReactDOM.render(React.createElement(MainCard, { name: 'Simon\'s Town' }), document.getElementById('card'));

ReactDOM.render(React.createElement(HeaderSection, null), document.getElementById('container'));