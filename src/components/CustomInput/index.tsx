import {Image, TextInput, TouchableOpacity, View} from 'react-native';
import {colors} from '../../utils/colors';
import CustomText from '../CustomText';
import {windowWidth} from '../../utils/Dimensions';
import {scale, verticalScale} from 'react-native-size-matters';
import {font} from '../../utils/font';
type Props = {
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  rightSource?: any;
  keyboard?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  onShowPassword?: any;
  editable?: boolean;
  color?: string;
  maxLength?: number;
  leftSource?: any;
  fontWeight?: any;
  multiline?: boolean;
  height?: any;
  width?: any;
  fontSize?: any;
  placeholderTextColor?: any;
  borderWidth?: any;
  borderRadius?: any;
  backgroundColor?: any;
  borderColor?: any;
  rightSourceSize?:any
  textAlign?:any
  textAlignVertical?:any
};

const CustomInput = ({
  placeholder,
  keyboard,
  secureTextEntry,
  rightSource,
  props,
  fontWeight,
  multiline,
  height,
  fontSize,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  color,
  maxLength,
  leftSource,
  width,
  placeholderTextColor,
  borderWidth,
  borderRadius,
  backgroundColor,
  borderColor,
  rightSourceSize,
  textAlign,
  textAlignVertical
}: Props) => {
  return (
    <View style={{...props, width: width || '100%'}}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: scale(15),
          height:height|| 49,
          alignItems: 'center',
          borderColor: borderColor ,
          borderWidth: borderWidth,
          borderRadius: borderRadius || scale(18),
          backgroundColor: backgroundColor || colors.white,
        }}>
       
        <TextInput
          value={value}
          editable={editable}
          style={{
            fontSize: fontSize || 14,
            width: rightSource ? "92%": "98%",
            alignItems: 'center',
            justifyContent: 'center',
            textAlign:textAlign ||"left",
            textAlignVertical:textAlignVertical,
            paddingVertical: 0, // Adjust as needed for centering
            fontFamily: font.Ubuntu_Regular,
            fontWeight: fontWeight||"500",
            color: color || colors.black,
            
          }}
          placeholder={placeholder}
          multiline={multiline}
          placeholderTextColor={placeholderTextColor || colors.black+"40"}
          keyboardType={keyboard}
          maxLength={maxLength}
          secureTextEntry={secureTextEntry || false}
          onChangeText={onChangeText}
          onBlur={onBlur}
          autoCapitalize="none"
        />
       
      </View>

      {error && (
        <View
          style={{
            marginTop: verticalScale(5),
          }}>
          <CustomText
            fontFam={font.Ubuntu_Regular}
            size={12}
            text={error}
            color={colors.primary}
          />
        </View>
      )}
    </View>
  );
};
export default CustomInput;
