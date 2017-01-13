import React, {Component} from 'react'

class Todo extends Component {
  render(){
    if (this.props.editingTodoId === this.props.todo.id){
      console.log(`${this.props.todo.body} is being edited`);
    }
    return(
      <p data-todos-index={this.props.todo.id}>
        <span onClick={() => this.props.onEditTodo(this.props.todo)}>
          {this.props.todo.body}
        </span>
        <span
          className='deleteButton'
          onClick={ () => this.props.onDeleteTodo(this.props.todo) }>
            (X)
        </span>
      </p>
    )
  }
}

export default Todo
