import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
	primaryText: {
		color: '$primaryColor',
		borderColor: '$primaryBorderColor',
    fontSize: '$primaryFontSize',
    textAlign: 'center',
    marginBottom: 35
  },
  centeredBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E8F9D0',
    padding: 20
  }
});

export default styles;