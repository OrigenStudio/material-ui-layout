// @flow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import PiedPiper from '@fortawesome/fontawesome-free-brands/faPiedPiperAlt';
import Hooli from '@fortawesome/fontawesome-free-brands/faHooli';
import Aviato from '@fortawesome/fontawesome-free-brands/faAviato';
import withProps from 'recompose/withProps';



export default [
  {
    href: 'http://www.piedpiper.com',
    label: 'Pied Pipper',
    icon: withProps<*, *>({ icon: PiedPiper, size: '4x' })(FontAwesomeIcon),
  },
  {
    href: 'https://www.linkedin.com/company/hooli/',
    label: 'Hooli',
    icon: withProps<*, *>({ icon: Hooli, size: '4x' })(FontAwesomeIcon),
  },
  {
    href: 'https://twitter.com/AviatoInc',
    label: 'Aviato',
    icon: withProps<*, *>({ icon: Aviato, size: '4x' })(FontAwesomeIcon),
  },
];
