var React = require("react");
var ReactDom = require("react-dom");

//Create component
var TodoComponent = React.createClass({
  render: function() {
      return (
        <div>
          <h1>Ninjaaaaaaaaaaaaas</h1>
          <p>Hellooooooooooooooooo</p>
          <p>{this.props.msg}</p>
          <p><strong>Cheese name:</strong>{this.props.cheese.name}</p>
          <p><strong>Cheese smell factor:</strong>{this.props.cheese.smellFactor}</p>
          <p><strong>Cheese price:</strong>{this.props.cheese.price}</p>
        </div>
      );
  }
});
//Put component into html page
var myCheese = {name: "Camembert", smellFactor: "Extreme pong", price: "3.5"};
ReactDom.render(<TodoComponent msg="I like cheese" cheese={myCheese}/>, document.getElementById("todo-wrapper"));
