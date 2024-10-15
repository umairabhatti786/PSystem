import {
  TouchableOpacity,
} from 'react-native';
import CustomText from '../CustomText';
import { colors } from '../../utils/colors';
import { font } from '../../utils/font';
import { scale, verticalScale } from 'react-native-size-matters';
type Props = {
  text?: string;
  onPress?: ()=>void;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  disable?: boolean;
  borderWidth?: number;
  paddingHorizontal?: number;
};

const CustomButton = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  disable,
  borderWidth,
  paddingHorizontal,

}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      disabled={disable}
      activeOpacity={0.5}
      style={{
        ...style,
        width: width || '100%',
        height:verticalScale(height|| 38),
        backgroundColor: bgColor || colors.primary,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: scale(borderRadius || 10),
        borderWidth: borderWidth || -1,
        borderColor: borderColor ,
        paddingHorizontal: paddingHorizontal,
  
      }}>
      <CustomText
          text={text}
          color={textColor || colors.white}
          size={size ||  14}
          fontWeight='500'
          fontFam={fontFam || font.WorkSans_Regular}
        />
    </TouchableOpacity>
  );
};
export default CustomButton;
