import React, {version} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {scale, verticalScale} from 'react-native-size-matters'; // If using for scaling
import {colors} from '../../../utils/colors';
import CustomText from '../../../components/CustomText';
import {font} from '../../../utils/font';
import { OrderTracking } from '../../../components/OrderTracking';

// const steps = ['Received', 'Dispatched', 'Delivering', 'Completed']; // Status steps

const OrderTrackingCard = ({
  orderNumber = 'ORDER123456',
  eta = '2 days (Approximately)',
  currentStep = 1,
}) => {
    const steps = [
        { title: 'Received', completed: true },
        { title: 'Dispatched', completed: false },
        { title: 'Delivering', completed: false },
        { title: 'Received', completed: false },
      ];
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={{gap: verticalScale(8),
          paddingHorizontal: scale(15),
          paddingTop:verticalScale(15)

    }}>
        <CustomText
          fontWeight="600"
          fontFam={font.WorkSans_SemiBold}
          text={'ORDER123456'}
          color={colors.black}
          size={14}
        />
        <View style={styles.header}>
          <CustomText text={'ETA'} color={colors.grey} size={12} />
          <CustomText
            text={'2 days (Approximately)'}
            color={colors.black}
            size={12}
          />
        </View>
      </View>

      {/* Status Row */}
     <OrderTracking/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: scale(10),
    gap:verticalScale(8),
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderNumber: {
    fontSize: scale(16),
    fontWeight: 'bold',
    color: '#000',
  },
  eta: {
    fontSize: scale(14),
    color: '#888',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: scale(10),
  },
 
  circle: {
    width: scale(8),
    height: scale(8),
    borderRadius: 999,
    backgroundColor: '#ddd',
    // position:"absolute"
  },
  statusLabel: {
    fontSize: scale(12),
    marginLeft: scale(5),
  },
  line: {
    width: "100%",
    height: scale(2),
    backgroundColor: '#ddd',
    // marginLeft: scale(5),
    // marginRight: scale(5),
  },
  progressBar: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  stepContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    width:scale(70)
  },
  label: {
    fontSize: scale(12),
  },

  labelActive: {
    color: '#28a745',
    fontWeight: '600',
  },
  labelInactive: {
    color: '#a9a9a9',
  },
  circleActive: {
    backgroundColor: '#28a745',
  },
  circleInactive: {
    backgroundColor: '#d3d3d3',
  }
  ,
  lineActive: {
    backgroundColor: '#28a745', // Active green color
  },
  lineInactive: {
    backgroundColor: '#d3d3d3', // Inactive grey color
  },
});

export default OrderTrackingCard;
