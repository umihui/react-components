// TODO
//
var groceryItems = ['Cucumbers','Kale','Cat Food']

class GroceryListItem extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <li>{this.props.item}</li>
    );
  }

}
var GroceryList = (props) => (
  <ul>
    {props.items.map(item =>
      <GroceryListItem item={item} />
    )}
  </ul>
);

var App = () => (
  <div>
  <h2>Grocery List</h2>
  <GroceryList items={groceryItems}/>
  </div>
);

// var GroceryListItem = (props) => (
//   <ul>
//     <li>{props.todos[0]}</li>
//     <li>{props.todos[1]}</li>
//     <li>{props.todos[2]}</li>
//   </ul>
// );

//ReactDOM.render(<GroceryList />, document.getElementById("app"));


// A class component can be defined as an ES6 class
// that extends the base Component class included in the React library
// class TodoListItem extends React.Component {
//
//   // A `constructor` method is expected on all ES6 classes
//   // When React instantiates the component,
//   // it will pass `props` to the constructor
//   constructor(props) {
//     // Equivalent to ES5's React.Component.call(this, props)
//     super(props);
//     //console.log(props);
//   }
//   onListItemClick(event) {
//       console.log('I got clicked');
//     };
//   // Every class component must have a `render` method
//   // Stateless functional components are pretty much just this method
//   render() {
//
//     // `props` is no longer passed as an argument,
//     // but instead accessed with `this.props`
//     return (
//       <li onClick={this.onListItemClick}>{this.props.todo}</li>
//     );
//
//   }
//
// }
//
// // Update our `TodoList` to use the new `TodoListItem` component
// // This can still be a stateless function component!
// var TodoList = (props) => (
//   <ul>
//     {props.todos.map(todo =>
//       <TodoListItem todo={todo} />
//     )}
//   </ul>
// );
//
// var App = () => (
//   <div>
//     <h2>My Todo List</h2>
//     <TodoList todos={['Learn React', 'Crush Recast.ly', 'Maybe sleep','clean' ,'cat']}/> // Here we are creating an instance of the `TodoList` component
//   </div>
// );
//
ReactDOM.render(<App />, document.getElementById("app"));
