import {StyleSheet} from 'react-native';
import {Colors} from '../../styles/themes/tokens';

export default StyleSheet.create({
  languageWidget: {
    flex: 1,
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 8,
    paddingHorizontal: 15,
    backgroundColor: Colors.bgSecondary,
    borderRadius: 12,
    borderWidth: 0.5,
    borderColor: Colors.divider + '20',
  },
  flagWrapper: {
    height: 32,
    width: 32,
    // borderWidth: 1,
    justifyContent: 'center',
    borderRadius: 50,
  },
  flag: {
    ...StyleSheet.absoluteFillObject,
    height: 32,
    width: 32,
    borderRadius: 20,
  },
  title: {
    fontSize: 14,
    textTransform: 'capitalize',
    color: Colors.textPrimary,
    fontWeight: '500',
  },
});
