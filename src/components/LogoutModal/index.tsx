import {
    FlatList,
    Image,
    ImageBackground,
    SafeAreaView,
    StyleSheet,
    Text,
    TouchableOpacity,
    View,
  } from 'react-native';
  import React, {useState} from 'react';
  
  import Modal from 'react-native-modal';
  import CustomText from '../CustomText';
  import {Spacer} from '../Spacer';
  import {colors} from '../../utils/colors';
  import CustomButton from '../CustomButton';
  import {scale, verticalScale} from 'react-native-size-matters';
  import {images} from '../../assets/images';
  import {font} from '../../utils/font';
  import {windowWidth} from '../../utils/Dimensions';
import { appStyles } from '../../utils/AppStyles';
  
  const LogoutModal = ({
    modalVisible,
    setModalVisible,
    onCancel,
    onLogout
  }: any) => {
    const [isEnabled, setIsEnabled] = useState(true);
  
    return (
      <Modal
        isVisible={modalVisible}
        deviceWidth={windowWidth}
        onBackButtonPress={() => setModalVisible?.(false)}
        onBackdropPress={() => setModalVisible?.(false)}
        backdropColor="rgba(0,0,0,0.2)"
        style={{flex: 1}}>
        <View
          style={{
            width: '85%',
            alignSelf: 'center',
            alignItems: 'center',
            backgroundColor: colors.white,
            borderRadius: scale(20),
            paddingHorizontal: scale(20),
            paddingVertical: verticalScale(25),
            gap: verticalScale(20),
          }}>
          <Image
            style={{width: scale(75), height: scale(75)}}
            source={ images.logout}
          />
          <View
            style={{
              gap: verticalScale(10),
              alignItems: 'center',
              paddingVertical: verticalScale(10),
            }}>
            <CustomText
              text={"Logout?"}
              fontFam={font.WorkSans_SemiBold}
              fontWeight="600"
              size={20}
            />
            <CustomText
              style={{textAlign: 'center'}}
              lineHeight={18}
              text={"Are you sure you want to logout of this beautiful platform full of knowledge and stories and fascinating stuff?"}
             
              color={colors.grey}
              size={14}
            />
          </View>
          <View style={{...appStyles.rowjustify,width:"100%"}}>
          <CustomButton
          width={"45%"}
           text={'Cancel!'} onPress={onCancel} />
            <CustomButton
          width={"45%"}
          bgColor={colors.dull_white}
        textColor={colors.primary}
           text={'Logout!'} onPress={onLogout} />


          </View>
  
        </View>
      </Modal>
    );
  };
  
  export default LogoutModal;
  
  const styles = StyleSheet.create({
    imgContainer: {
      width: 160,
      height: 160,
      borderRadius: 999,
      // backgroundColor: colors.grey400,
      alignItems: 'center',
      justifyContent: 'center',
    },
  });
  