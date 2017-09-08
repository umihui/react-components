// TODO
//
var groceryItems = ['Cucumbers'];

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
    console.log('this',props);
    this.state = {
      done : false
    };
  }

  onListItemClick() {
    this.setState({
      done: !this.state.done
    });
  }

  render() {
    var style = {
      'font-weight': this.state.done ? 'bold' : 'normal'
    };

    return (
      <li onClick={this.onListItemClick.bind(this)} style={style}>{this.props.item}</li>
    );
  }

}
var GroceryList = (props) => {

  console.log(props);

  return (
    <ul>
      {props.items.map(item =>
        <GroceryListItem item={item} />
      )}
    </ul>
  );
};

var App = () => (
  <div>
  <h2>Grocery List</h2>
  <GroceryList items={groceryItems}/>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
