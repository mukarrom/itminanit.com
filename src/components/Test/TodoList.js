import React from 'react';
// eslint-disable-next-line import/no-unresolved
import ReactCSSTransitionGroup from 'react-transition-group'; // ES6

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { items: ['hello', 'world', 'click', 'me'] };
    this.handleAdd = this.handleAdd.bind(this);
  }

  handleAdd() {
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    const newItems = this.state.items.concat([prompt('Enter some text')]);
    this.setState({ items: newItems });
  }

  handleRemove(i) {
    // eslint-disable-next-line react/destructuring-assignment, react/no-access-state-in-setstate
    const newItems = this.state.items.slice();
    newItems.splice(i, 1);
    this.setState({ items: newItems });
  }

  render() {
    // eslint-disable-next-line react/destructuring-assignment
    const items = this.state.items.map((item, i) => (
      // eslint-disable-next-line jsx-a11y/click-events-have-key-events, jsx-a11y/no-static-element-interactions, react/no-array-index-key
      <div key={i} onClick={() => this.handleRemove(i)}>
        {item}
      </div>
    ));

    return (
      <div>
        <button onClick={this.handleAdd}>Add Item</button>
        <ReactCSSTransitionGroup
          transitionName="example"
          transitionEnterTimeout={500}
          transitionLeaveTimeout={300}
        >
          {items}
        </ReactCSSTransitionGroup>
      </div>
    );
  }
}

export default TodoList;
