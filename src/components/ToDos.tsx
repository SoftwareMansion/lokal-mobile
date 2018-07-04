import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from './styles';


const TITLE_TEXT = 'Skrzynka odbiorcza';

export default class ToDos extends React.Component<any, any> {
  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex:1}}>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>ToDo</Text>
        </View>
        </ScrollView>
      </View>
    );
  }
}
