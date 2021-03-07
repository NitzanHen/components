import React from 'react';

/**
 * Contains basic props that almost any component should be able to receive.
 * I've found this simple interface to be very useful for most of the components I write
 * (here and elsewhere).
 */
export interface BaseComponentProps {
  className?: string;
  style?: React.CSSProperties;
  /** @todo determine if this is really necessary (or we can get away with setting rtl on a wrapping element) */
  dir?: 'ltr' | 'rtl'
};