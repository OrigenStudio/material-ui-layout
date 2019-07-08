// @flow
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import github from '@fortawesome/fontawesome-free-brands/faGithub';
import withProps from 'recompose/withProps';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import DeveloperMode from '@material-ui/icons/DeveloperMode';
import Devices from '@material-ui/icons/Devices';
import { navigate } from 'gatsby-link';

export default [
  {
    label: 'Getting Started',
    onClick: () => navigate('/getting-started'),
    icon: DeveloperMode,
  },
  {
    label: 'Layout Controller Demo',
    onClick: () => navigate('/layout-controller'),
    icon: Devices,
  },
  {
    href: 'https://github.com/OrigenStudio/material-ui-layout',
    label: 'Code',
    icon: withProps<*, *>({ icon: github, size: 'lg' })(FontAwesomeIcon),
  },
  {
    href: 'https://origen.studio',
    label: 'Origen',
    icon: KeyboardArrowRight,
  },
];

