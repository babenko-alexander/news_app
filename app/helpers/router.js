import { createStackNavigator, createAppContainer } from 'react-navigation';

import WelcomeSCR from '../Screens/WelcomeSCR';
import NewsStripeSCR from '../Screens/NewsStripeSCR';
import DetailedArticleSCR from '../Screens/DetailedArticleSCR';

const RootNavigator = createStackNavigator(
  {
    WelcomeSCR: {
      screen: WelcomeSCR,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    NewsStripeSCR: {
      screen: NewsStripeSCR,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    },
    DetailedArticleSCR: {
      screen: DetailedArticleSCR,
      navigationOptions: {
        header: null,
        gesturesEnabled: false
      }
    }
  },
    {
      initialRouteName: 'WelcomeSCR',
    }
  );

export const AppContainer = createAppContainer(RootNavigator);
