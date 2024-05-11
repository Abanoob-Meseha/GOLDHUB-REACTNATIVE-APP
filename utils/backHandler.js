import  { React, useEffect } from 'react';
import { BackHandler, Alert } from 'react-native';

export default function BackButtonHandler() {
  useEffect(() => {
    const backAction = () => {
      Alert.alert(
        'اغلاق',
        'هل تريد ان تغلق التطبيق ؟',
        [
          {
            text: 'لا',
            onPress: () => null,
            style: 'cancel',
          },
          { text: 'نعم', onPress: () => BackHandler.exitApp() },
        ],
        { cancelable: false }
      );
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return null; // This component doesn't render anything
}
