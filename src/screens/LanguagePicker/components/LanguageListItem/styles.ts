import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  languageListItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    paddingHorizontal: 20,
    justifyContent: 'space-between',
  },
  flagWrapper: {
    height: 32,
    width: 32,
    justifyContent: 'center',
    borderRadius: 50,
  },
  flag: {
    ...StyleSheet.absoluteFillObject,
    height: 32,
    width: 32,
    borderRadius: 20,
  },
});
