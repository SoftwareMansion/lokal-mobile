import React from "react";
import { Text, View, ScrollView } from "react-native";
import styles from './styles';

const APP_TITLE = 'LOK.AL';
const TITLE_TEXT = 'Osiedle Afrykańskie, Krakuf';

export default class Home extends React.Component<any, any> {
  onEventsPressed() {
    this.props.navigation.navigate('ToDos');
  };

  render() {
    return (
      <View style={styles.container}>
        <ScrollView contentContainerStyle={{flex:1}}>
        <View style={styles.topBar}>
          <View style={styles.topBarMessage}>
            <Text style={styles.topBarTitleText}>{TITLE_TEXT}</Text>
          </View>
          <View style={styles.topBarButtonsContainer}>
            <View style={[styles.topBarButton, styles.userButton]}>
              <Text style={styles.topBarButtonText}>8</Text>
            </View>
            <View style={[styles.topBarButton, styles.settingsButton]}>
              <Text style={styles.topBarButtonText}>*</Text>
            </View>
          </View>
        </View>
        <View style={styles.headerContainer}>
          <Text style={styles.headerContainerText}>Witaj, lokatorze!</Text>
        </View>
        <View style={styles.capRow}>
          <View>
            <Text style={styles.pollsText}>&nbsp;</Text>
          </View>
        </View>
        <View style={styles.tileContainerRow}>
          <View style={[styles.tileElement, styles.tileElementNormal, styles.tileElementEvents]}>
            <Text 
              style={[styles.tileElementCaptionText, styles.eventsText]}
              onPress={() => this.onEventsPressed()}
            >
              WYDARZENIA
            </Text>
          </View>
          <View style={[styles.tileElement, styles.tileElementNormal, styles.tileElementAds]}>
            <Text style={[styles.tileElementCaptionText, styles.adsText]}>OGŁOSZENIA</Text>
          </View>
        </View>
        <View style={styles.tileContainerRow}>
          <View style={[styles.tileElement, styles.tileElementNormal, styles.tileElementProblems]}>
            <Text style={[styles.tileElementCaptionText, styles.problemsText]}>USTERKI</Text>
          </View>
          <View style={[styles.tileElement, styles.tileElementNormal, styles.tileElementMessages]}>
            <Text style={[styles.tileElementCaptionText, styles.messagesText ]}>WIADOMOŚCI</Text>
          </View>
        </View>
        <View style={[styles.tileContainerRow, styles.tileContainerRowWide]}>
          <View style={[styles.tileElement, styles.tileElementWide, styles.tileElementPolls]}>
            <Text style={[styles.tileElementCaptionText, styles.pollsText]}>GŁOSOWANIA</Text>
          </View>
        </View>
        <View style={styles.baseRow}>
          <View>
            <Text style={styles.pollsText}>&nbsp;</Text>
          </View>
        </View>
        </ScrollView>
      </View>
    );
  }
}


