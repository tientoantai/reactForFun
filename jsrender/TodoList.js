var TodoList = React.createClass({
    render : function () {

        return <h1>{this.props.name}</h1>;
    }
});

ReactDOM.render(<TodoList name="Tien"/>, document.getElementById('todolist'));