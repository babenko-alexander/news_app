import EStyleSheet from 'react-native-extended-stylesheet';

const theme = () =>
  EStyleSheet.build({
    $primaryFontSize: 25,
    $primaryColor: '#5D6AC0',
    $primaryBorderColor: '#CFCFCF',
    $primaryBackgroundColor: '#A6F9F9',
    $secondaryFontSize: 15,
    $secondaryColor: '#5D5660',
    $secondaryBorderColor: '#CFCFCF',
    $secondaryBackgroundColor: '#FFF'
  });

export default theme;
