import * as ScreenOrientation from 'expo-screen-orientation';

const changeOrientationToLandscape = async ()=>{
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.LANDSCAPE_RIGHT);
  }

const changeOrientaionToPortrait = async ()=>{
    await ScreenOrientation.lockAsync(ScreenOrientation.OrientationLock.PORTRAIT_UP);
}

module.exports = {changeOrientaionToPortrait , changeOrientationToLandscape}