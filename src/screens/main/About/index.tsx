import React, {useState} from 'react';
import { StyleSheet, ScrollView, View} from 'react-native';
import ScreenLayout from '../../../components/ScreenLayout';
import CustomText from '../../../components/CustomText';
import {scale, verticalScale} from 'react-native-size-matters';
import TopHeader from '../../../components/TopHeader';
import {colors} from '../../../utils/colors';

const AboutScreen = () => {
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
      <TopHeader title="About" />
    </View>
      
      <ScrollView
        style={{flex: 1, backgroundColor: colors.dull_white,paddingTop:verticalScale(10)}}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          backgroundColor: colors.dull_white,
          paddingBottom: verticalScale(20),
        }}>
        <CustomText
          text={`Lörem ipsum spess spest söjisåktiga emedan prenade om än ivönar hyperkemi rerat. Malalig or nyde i pappografi respektive diahyd fast pore fanysam pobel onade i ponat. Lososat sement decisongen förutom eudände fyll primagen euroderat att teler. Dyns dyssion krodäktigt besaliga att ren fonofoni prejarade i sus. Multid mynas samt pagon ifall poledes. Krosyr bedisa rena. Inade kroböskade kulturkofta pevis primafas anasm apfälla. Ponade fomo beligt bivågen rena nejymysk robotdräkt.\nDens bessa fajeplana prerade, euren inte nyjyrade titt esk. Kvasisyren nilosade jäning utan past astrona bulingar, för mirar. Pusa parar, kajobelt kvasiskade inte dyr dev för att nynosm epitris groupie i bloggare. Paktig hingen. Labunat belore don divis ast teranesm sosk vad kemkastrering eftersom alig. Diavaska gigasm. Ånera egode böse epira. Plaskapet dide krobönera sel beska kontraspede prenyr plus nism, genuskänslig så laska. Du kan vara drabbad.\nNynyling hexadett. Telera dogäck renat mobildagis spenar, e-demokrati utire obur monolog en tisk. Tidoliga raska anav: en. Loheten kar prebitt, vikagt falig, dekanade bäkogt dänar ber: i nisår. Doledes trityp, det dektig: bios. Anat plan i tiss sekundärkränkt inte dilig alltså mybusm. Tena otrohetsdejting. Kosörat nipure bös än sojiment om laddstolpe, i jäs.\nLasyd dibire vas. Sperade dira innan dang för att soskade: och rav, spår poren. Sång loktiga dissa presunde hemise backflyt. Hyras nysm att kalongar tisol sus: prebär varade. Böspesade prore. Nimisade fall saska ultrasåt hyska i antirade, inklusive nylig sas tresöheten de fyd. Sojydeligt tresk. Kong translog beling, predonat så triggervarning plabäst i bengen postnomi tinat trenas. `}
          lineHeight={20}
          style={{textAlign: 'justify'}}

          size={14}
        />
      </ScrollView>
    </ScreenLayout>
  );
};

export default AboutScreen;

const styles = StyleSheet.create({});
