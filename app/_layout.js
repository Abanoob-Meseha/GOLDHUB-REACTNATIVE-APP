import { Slot } from 'expo-router';
import { MD3LightTheme as DefaultTheme, PaperProvider } from 'react-native-paper';
import themeColors from "../constants/theme.json"
import { StyleSheet , ScrollView} from 'react-native';


const theme = {
    ...DefaultTheme,
    colors: themeColors.colors
    
  };
  
export default function appLayout() {
  return (
      <PaperProvider theme={theme}>
        {/* <ScrollView contentContainerStyle={styles.container}> */}
          <Slot/>
        {/* </ScrollView> */}
      </PaperProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    width:'100%',
    justifyContent: 'center',
  },
});