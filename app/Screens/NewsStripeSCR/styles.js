import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '$primaryBackgroundColor',
    paddingHorizontal: 15
  },
  primaryText: {
    color: '$primaryColor',
    borderColor: '$primaryBorderColor',
    fontSize: '$primaryFontSize',
    textAlign: 'center',
    marginVertical: 15
  },
  filterBox: {
    padding: 10,
    paddingBottom: 0,
    backgroundColor: '#FFF'
  }
});

export default styles;
