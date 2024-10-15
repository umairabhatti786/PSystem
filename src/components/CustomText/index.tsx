import {Text} from 'react-native';
import {colors} from '../../utils/colors';
import {font} from '../../utils/font';

type Props = {
  color?: string;
  size?: number;
  fontFam?: string;
  text?: any;
  style?: any;
  lineHeight?: number;
  numberOfLines?: number;
  fontWeight?: string;
  textDecorationLine?: string;
  label?: string;
};

const CustomText = ({
  color,
  size,
  fontFam,
  text,
  style,
  lineHeight,
  numberOfLines,
  fontWeight,
  textDecorationLine,
  label,
}: Props) => {
  return (
    <Text
      numberOfLines={numberOfLines}
    
      style={[

        {
          color: color || colors.black,
        
          fontSize: size || 10,
          fontWeight: fontWeight || '400',
          fontFamily: fontFam || font.WorkSans_Light,
          
        
          textDecorationLine: textDecorationLine,
          

          ...(lineHeight && {lineHeight: lineHeight}),
        },
        style,
      ]}>
      {text}
      {label}
    </Text>
  );
};
export default CustomText;
