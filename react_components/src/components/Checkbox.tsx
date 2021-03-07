import clsx from 'clsx';
import { HTMLProps } from 'react';
import { createUseStyles } from 'react-jss';
import { BaseComponentProps } from '../utils/BaseComponentProps';

const useStyles = createUseStyles({
  root: {
    cursor: 'pointer',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  checkContainer: {
    position: 'relative',
    display: 'inline-block',
    minHeight: '0.8em',
    minWidth: '0.8em',
    height: '100%',
    border: '1px solid black',
    borderRadius: 3,
    '&:dir(ltr)': {
      marginRight: '0.4em',
    },
    '&:dir(rtl)': {
      marginLeft: '0.4em',
    },

    '& input': {
      position: 'absolute',
      margin: 0,
      width: '100%',
      height: '100%',
      visibility: 'hidden',
      cursor: 'pointer',
    },

    '& input:checked ~ $checkmark': {
      //Show $checkmark when the input is checked
      display: 'block'
    }
  },
  checkmark: {
    //$checkmark is hidden by default (overriden when input is checked)
    display: 'none',
    position: 'absolute',
    top: 0,
    bottom: 0,
    right: 0,
    left: 0
  }
}, { name: 'checkbox' })

export interface CheckboxProps extends BaseComponentProps,
  /** 
   * @todo figure out which checkbox props need to be implemented in this interface, 
   * and a clean way to implement them (not a monstrous Pick).
   * (Or, as a fallback, a `checkboxProps` prop may be added)
   */
  Pick<HTMLProps<HTMLInputElement>, 'checked' | 'defaultChecked' | 'onChange'> {
  label: string;
}

/**
 * Basic implementation of a custom Checkbox.
 * Inspired by {@link https://www.w3schools.com/howto/howto_css_custom_checkbox.asp}
 */
const Checkbox: React.VFC<CheckboxProps> = ({ label, className, style, dir, ...checkboxProps }) => {

  const classes = useStyles();

  return (
    <label className={clsx(classes.root, className)} style={style} dir={dir}>
      <span className={classes.checkContainer}>
        <input type='checkbox' {...checkboxProps} />
        <svg viewBox="0 0 48 48" className={classes.checkmark}>
          <path d="M8 25 l 10 10 l 22 -22" fill='none' stroke='black' strokeWidth={4} />
        </svg>
      </span>
      <span>{label}</span>
    </label>
  )
};

export default Checkbox;