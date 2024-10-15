import {Image, StyleSheet, View} from 'react-native';
import {colors} from '../../utils/colors';
import {images} from '../../assets/images';
import {scale, verticalScale} from 'react-native-size-matters';
import {font} from '../../utils/font';
import {windowWidth} from '../../utils/Dimensions';
import CustomText from '../CustomText';
import {appStyles} from '../../utils/AppStyles';

type Props = {
  width?: any;
};

const AddressCard = ({width}: Props) => {
  return (
    <View style={{...style.main, width: width || windowWidth / 1.4}}>
      <View style={{...appStyles.rowjustify, width: '100%'}}>
        <CustomText
          text={'359 American Schme Block B9'}
          color={colors.black}
          fontWeight="600"
          fontFam={font.WorkSans_SemiBold}
          size={14}
        />
        <View style={style.checkBox}>
          <View style={style.checkBoxInner}></View>
        </View>
      </View>

      <View style={{gap: verticalScale(2)}}>
        <CustomText
          text={'Lahore, Pakistan'}
          color={colors.grey}
          fontWeight="500"
          fontFam={font.WorkSans_Regular}
          size={12}
        />
         <CustomText
          text={'54009'}
          color={colors.grey}
          fontWeight="500"
          fontFam={font.WorkSans_Regular}
          size={12}
        />
         <CustomText
          text={'+92 345 678 9012'}
          color={colors.grey}
          fontWeight="500"
          fontFam={font.WorkSans_Regular}
          size={12}
        />
        <CustomText
          text={'email@example.com'}
          color={colors.grey}
          fontWeight="500"
          fontFam={font.WorkSans_Regular}
          size={12}
        />
      </View>
    </View>
  );
};
export default AddressCard;

const style = StyleSheet.create({
  main: {
    backgroundColor: colors.white,
    padding: scale(15),
    borderRadius: scale(10),
    gap: verticalScale(10),
  },
  visaCard: {
    width: scale(38),
    height: scale(38),
    backgroundColor: colors.dull_white,
    borderRadius: scale(7),
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkBox: {
    width: scale(16),
    height: scale(16),
    borderRadius: 999,
    borderWidth: 1.5,
    borderColor: colors.orange,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: scale(5),
  },
  checkBoxInner: {
    width: scale(7),
    height: scale(7),
    borderRadius: 999,
    backgroundColor: colors.orange,
  },
});
