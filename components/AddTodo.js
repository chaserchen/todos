import React, {Component, PropTypes} from 'react';

export default class AddTodo extends Component {
    handleClick = () => {
        const node = this.refs.input;
        const text = node.value.trim();
        this.props.onAddClick(text);
        node.value = '';
    };

    render() {
        return (
            <div>
                <input type="text" ref="input"/>
                <button onClick={this.handleClick}>
                    添加
                </button>
            </div>
        );
    }
}

AddTodo.displayName = 'AddTodo';
AddTodo.PropTypes = {
    onAddClick: PropTypes.func.isRequired
};
