import React from "react";
import { FlatList, Button, View, Text, TextInput } from 'react-native';
import { TodoEntity, CreateTodoEntity } from 'service-entities/todos';

interface TodosListState {
 todoText: string;
}

export interface TodosListComponentProps {
 todos: TodoEntity[];
 refresh: () => void;
 addTodo: (todo: CreateTodoEntity) => void;
}

export class TodosListComponent extends React.PureComponent<TodosListComponentProps, TodosListState> {
  constructor(props: any) {
    super(props);
    console.log('todoliscompo');
  }

  state = {
    todoText: ''
  };

  renderItem = ({item}: {item:TodoEntity}) => (
    <Text>{item.text}</Text>
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
    this.props.addTodo({text: this.state.todoText});
    this.setState({todoText: ''});
  };
}