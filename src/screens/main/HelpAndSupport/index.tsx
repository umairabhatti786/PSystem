import React, {useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import {colors} from '../../../utils/colors';
import {font} from '../../../utils/font';
const HelpAndSupportScreen = () => {
  return (
    <ScreenLayout
    style={{
      paddingHorizontal: scale(20),
      // gap: verticalScale(20),
    }}>
    <View
      style={{
        paddingBottom: verticalScale(10),
      }}>
      <TopHeader title="Help & Support" />
    </View>
      <ScrollView
        style={{flex: 1, backgroundColor: colors.dull_white}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          paddingBottom: verticalScale(20),
          gap: verticalScale(10),
          paddingTop:verticalScale(10)
        }}>
        <CustomText
          text={
            'Here are some commonly asked questions by our customers. If you can’t find your answers, reach out to our customer support.'
          }
          color={colors.grey}
          size={14}
        />

        <View
          style={styles.detailConainer}>
          <View style={{gap: verticalScale(10)}}>
            <CustomText
              text={'What Payment Methods Are Accepted?'}
              fontFam={font.WorkSans_SemiBold}
              fontWeight="600"
              color={colors.black}
              size={14}
            />
            <CustomText
              text={
                'Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.'
              }
              style={{textAlign: 'justify'}}
              lineHeight={20}
              color={colors.grey}
              size={14}
            />

            <CustomText
              text={'Action'}
              fontFam={font.WorkSans_SemiBold}
              fontWeight="600"
              color={colors.primary}
              size={14}
            />
          </View>

          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
          <CustomText
            text={'How can I request a book that is not available?'}
            fontFam={font.WorkSans_SemiBold}
            fontWeight="600"
            color={colors.black}
            size={14}
          />
        </View>
        <CustomText
          text={
            'Please make sure to report any issues promptly and adhere to the guidelines for a smooth returns or refund process. For further assistance, feel free to reach out to us.'
          }
          color={colors.black}
          size={14}
        />
        <CustomText
          text={'Cant find what you re looking for? Were Here for You!'}
          color={colors.grey}
          size={14}
        />

        <View
          style={{...styles.detailConainer,
            gap:verticalScale(15)
          }}>
          <CustomText
            text={
              'Our offices are open Monday to Saturday from 9:00 AM to 5:00 PM.'
            }
            color={colors.orange}
            size={12}
          />

          <View style={{gap: verticalScale(2)}}>
            <CustomText
              text={`Contact Us:\n* Phone: 042-35292627 (Available during office hours)`}
              color={colors.black}
              size={12}
            />
            <CustomText
              text={'* WhatsApp: 0300-0450227 (Available during office hours)'}
              color={colors.black}
              size={12}
            />
            <CustomText
              text={'* Email: orders@readings.com.pk'}
              color={colors.black}
              size={12}
            />
          </View>

          <CustomText
            text={
              'Feel free to reach out to us during working hours. We re happy to assist you!'
            }
            color={colors.black}
            size={12}
          />
        </View>
      </ScrollView>
    </ScreenLayout>
  );
};

export default HelpAndSupportScreen;

const styles = StyleSheet.create({
    detailConainer:{
        width: '100%',
        borderRadius: scale(10),
        padding: scale(15),
        backgroundColor: colors.white,
        gap: verticalScale(20),
      }

});
