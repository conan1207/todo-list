import React, { Component } from 'react';
import TodoItem from './TodoItem';

class TodoItemList extends Component {
	render() {
		const { todos, onToggle, onRemove } = this.props;

		return (
			<div>
				<TodoItem text="행복하기" />
				<TodoItem text="자만하지 않기" />
				<TodoItem text="부지런하기" />
			</div>
		);
	}
}

export default TodoItemList; 