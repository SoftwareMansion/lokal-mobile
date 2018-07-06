import React from "react";
import { FlatList, Button, View, Text, TextInput, StyleSheet } from 'react-native';
import { TodoEntity, CreateTodoEntity } from 'service-entities/todos';

interface TodosListState {
 todoText: string;
}

export interface TodosListComponentProps {
 todos: TodoEntity[];
 refresh: () => void;
 addTodo: (todo: CreateTodoEntity) => void;
 removeTodo: (id: string) => void;
 completeTodo: (item: TodoEntity) => void;
}

export class TodosListComponent extends React.PureComponent<TodosListComponentProps, TodosListState> {
  state = {
    todoText: ''
  };

  completeTodo = (item: TodoEntity) => {
    this.props.completeTodo(item);
  }

  removeTodo = (id: string) => {
    this.props.removeTodo(id);
  }

  renderItem = ({item}: {item:TodoEntity}) => (
    <View key={item._id}>
      <Text style={item.status === 'completed' && styles.strike}>{item.task}</Text>
      <View>
        <Text>{item.status}</Text>
        <Button title="Done" onPress={() => this.completeTodo(item)} />
        <Button title="Remove" onPress={() => this.removeTodo(item._id)} />
      </View>
    </View>
  )

  render() {
    const {todos} = this.props;
    return (
      <View style={{ flex: 1, marginTop: 20 }}>
        <View style={{ flexDirection: 'row', height: 40, justifyContent: 'center' }}>
          <Text>Add todo:</Text>
          <TextInput
            style={{ backgroundColor: 'white', flex: 1}}
            value={this.state.todoText}
            onChangeText={this.updateTodoText}
          />
        </View>
        <Button onPress={this.addTodo} title='add' />
        <Text>Your todos:</Text>

        <FlatList
          data={todos}
          renderItem={this.renderItem}
        />
      </View>
    );
  }

  componentDidMount() {
    console.log('props', this.props);
    this.props.refresh();
  }

  updateTodoText = (todoText: string) => this.setState({ todoText });

  addTodo = () => {
    this.props.addTodo({task: this.state.todoText});
    this.setState({todoText: ''});
  };
}

const styles = StyleSheet.create({
  strike: { textDecorationLine: 'line-through' },
});
