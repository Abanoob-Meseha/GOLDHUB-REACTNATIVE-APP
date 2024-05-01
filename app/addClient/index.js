import { useEffect } from 'react';
import { StyleSheet, Text, View } from 'react-native'
import {changeOrientaionToPortrait , changeOrientationToLandscape} from '../../utils/screenOrientaion.util'

export default function index() {
  
  useEffect(() => {
    changeOrientationToLandscape()
    return(()=>changeOrientaionToPortrait() )   
  }, []);

  return (
    <View>
        <Text> Welcome to To Landscape</Text>
    </View>
  )
}

const styles = StyleSheet.create({

})