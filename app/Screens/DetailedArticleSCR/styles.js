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
    marginBottom: 15
  },
  secondaryText: {
    color: '$secondaryColor',
    borderColor: '$secondaryBorderColor',
    fontSize: '$secondaryFontSize',
    textAlign: 'right',
    paddingRight: 12,
    marginBottom: 15
  },
  articleText: {
    color: '$secondaryColor',
    borderColor: '$secondaryBorderColor',
    fontSize: 20,
    textAlign: 'center',
    marginBottom: 15 
  }
});

export default styles;
