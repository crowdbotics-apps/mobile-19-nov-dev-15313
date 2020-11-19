import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import CopyOfBlankScreen114702Navigator from '../features/CopyOfBlankScreen114702/navigator';
import BlankScreen114700Navigator from '../features/BlankScreen114700/navigator';
import BlankScreen014686Navigator from '../features/BlankScreen014686/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
CopyOfBlankScreen114702: { screen: CopyOfBlankScreen114702Navigator },
BlankScreen114700: { screen: BlankScreen114700Navigator },
BlankScreen014686: { screen: BlankScreen014686Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
