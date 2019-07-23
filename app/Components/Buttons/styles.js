import EStyleSheet from 'react-native-extended-stylesheet';

const styles = EStyleSheet.create({
  btnBox: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1DD3F9',
    borderRadius: 10,
    marginBottom: 12
  },
	btnText: {
    padding: 8,
    color: '#FFF',
		// borderColor: '$primaryBorderColor',
    fontSize: '$primaryFontSize',
    textAlign: 'center'
  }
});

export default styles;