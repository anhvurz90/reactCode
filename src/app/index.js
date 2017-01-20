var React = require("react");
var ReactDom = require("react-dom");

//Create component
var TodoComponent = React.createClass({
  render: function() {
      return (
        <h1>Hellooooooooooooooooo</h1>
      );
  }
});
//Put component into html page
ReactDom.render(<TodoComponent/>, document.getElementById("todo-wrapper"));
