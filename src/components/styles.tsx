import { StyleSheet } from "react-native";

const MAIN_THEME_DARK = '#00BB99';
const MAIN_THEME_LIGHT = '#CCFFDD';
const TOP_BAR = '#00CCAA';
const EVENTS_THEME = '#FFFFAA';
const ADS_THEME = '#AAFFAA';
const PROBLEMS_THEME = '#FFAAAA';
const MESSAGES_THEME = '#AAFFFF';
const POLLS_THEME = '#CCAACC';
const BUTTON_CAPTION_LIGHT = '#FFF';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: MAIN_THEME_LIGHT,
    justifyContent: "space-between",
    alignItems: "stretch",

  },

  topBar: {
    flexDirection: 'row',
    height: 50,
    backgroundColor: TOP_BAR,
    justifyContent: "space-between",
    alignContent: 'flex-start',
    
  },

  topBarTitleText: {
    fontSize: 18,
    color: MAIN_THEME_LIGHT,
  },

  topBarButtonText: {
    fontSize: 16,
    color: MAIN_THEME_LIGHT,
  },

  topBarMessage: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  topBarButtonsContainer: {
    width: 100,
    justifyContent: 'space-around',
    flexDirection: 'row',
  },

  topBarButton: {
    height: 40,
    width: 40,
    backgroundColor: '#00DDBB',
    margin: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },

  userButton: {
    backgroundColor: '#00DDBB',
  },

  settingsButton: {
    backgroundColor: '#00DDBB',
  },

  headerContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 2,
    height: 100,
    justifyContent: "center",
  },

  headerContainerText: {
    color: MAIN_THEME_DARK,
    fontSize: 36,
    fontWeight: '200',

  },

  capRow: {
    flex: 0.5,
    backgroundColor: MAIN_THEME_DARK,
    margin: 10,
    borderRadius: 15,
    borderBottomLeftRadius: 0,
    borderBottomRightRadius: 0,
    borderWidth: 2,
    borderColor: MAIN_THEME_DARK,
  },

  tileContainerRow: {
    flex: 2,
    flexDirection: "row",
    flexWrap: "wrap",
    alignContent: "flex-start",
    justifyContent: "space-evenly",
  },

  tileContainerRowWide: {
    flex: 1,
  },

  tileElement: {
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: MAIN_THEME_DARK,
    margin: 10,
    borderRadius: 15,
    borderWidth: 3,
    borderColor: MAIN_THEME_DARK,
  },

  tileElementNormal: {
    flex: 1,
  },

  tileElementWide: {
    flex: 1,
  },

  tileElementEvents: {
    borderColor: EVENTS_THEME,
  },
  
  tileElementAds: {
    borderColor: ADS_THEME,
  },

  tileElementProblems: {
    borderColor: PROBLEMS_THEME,
  },

  tileElementMessages: {
    borderColor: MESSAGES_THEME,
  },

  tileElementPolls: {
    borderColor: POLLS_THEME,
  },

  tileElementCaptionText: {
    color: '#fff',
    fontSize: 20,
    fontWeight: '200',
  },

  eventsText: {
    // color: EVENTS_THEME,
    color: BUTTON_CAPTION_LIGHT,
  },

  adsText: {
    // color: ADS_THEME,
    color: BUTTON_CAPTION_LIGHT,
  },

  problemsText: {
    // color: PROBLEMS_THEME,
    color: BUTTON_CAPTION_LIGHT,
  },

  messagesText: {
    // color: MESSAGES_THEME,
    color: BUTTON_CAPTION_LIGHT,
  },

  pollsText: {
    // color: POLLS_THEME,
    color: BUTTON_CAPTION_LIGHT,
  },

  baseRow: {
    flex: 0.25,
    backgroundColor: MAIN_THEME_DARK,
    margin: 10,
    borderRadius: 0,
    borderWidth: 2,
    borderColor: MAIN_THEME_DARK,
    display: 'none',
  },
});

export default styles;
