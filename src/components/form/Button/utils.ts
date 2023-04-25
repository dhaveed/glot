import {ButtonStyleProps, ButtonVariant} from './@types';
import styles from './styles';

export const getButtonStyles = (type: ButtonVariant): ButtonStyleProps => {
  switch (type) {
    case 'primary':
      return {
        buttonStyle: styles.primary,
        textStyle: styles.text,
      };
    case 'secondary':
      return {
        buttonStyle: styles.secondary,
        textStyle: styles.text,
      };
    case 'outline':
      return {
        buttonStyle: styles.outline,
        textStyle: styles.outlineText,
      };
    default:
      return {
        buttonStyle: styles.primary,
        textStyle: styles.text,
      };
  }
};
