import {useState} from 'react'
import { StyleSheet } from 'react-native';
import { Modal, Portal, Text, Button, PaperProvider,Searchbar } from 'react-native-paper';
import { IconButton, MD3Colors } from 'react-native-paper';

export default SearchFilterModal = ({ArrayToSearch})=> {
    const [visible, setVisible] = useState(false);
    const [searchQuery, setSearchQuery] = useState('');
    const hideModal =()=>setVisible(false)
  return (
    <PaperProvider>
      <Portal>
        <Modal visible={visible} onDismiss={hideModal} contentContainerStyle={styles.containerStyle}>
          <Text>البحث باستخدام العديد من الطرق</Text>
          <Searchbar
            placeholder="Search"
            onChangeText={setSearchQuery}
            value={searchQuery}
          />
          {/* other Filters Later */}
        </Modal>
      </Portal>
      <IconButton
        icon="database-search"
        iconColor={MD3Colors.error50}
        size={50}
        onPress={()=>setVisible(!visible)}
        style={{position:'absolute' , bottom:10 ,right:2 , zIndex:9999}}
      />
    </PaperProvider>
  );
};
const styles = StyleSheet.create({
  containerStyle:{
    backgroundColor: 'white',
    padding: 20,
    width:'50%',
    zIndex:99999,
    position:'fixed',
    bottom:'80%',
    alignItems:'center',
    borderRadius:15,
    left:'25%'
  }

})