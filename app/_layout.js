import { Slot } from 'expo-router';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import COLORS from '../constants/colors';
import themeColors from "../constants/theme.json"
// import { RealmProvider } from "@realm/react";
// import { userSchema } from '../models/userModel';

const theme = {
    ...DefaultTheme,
    colors: themeColors.colors
    
  };
  
export default function appLayout() {
  return (
      <PaperProvider theme={theme}>
          <Slot />
      </PaperProvider>
  )
}

