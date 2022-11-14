import React from 'react';
import PropTypes from 'prop-types';

import MuiTooltip from '@mui/material/Tooltip';
import MuiIconButton from '@mui/material/IconButton';
import MuiButton from '@mui/material/Button';

import DynamicIcon from '../DynamicIcon';
import ButtonMenu from './ButtonMenu';
import ButtonLink from './ButtonLink';

const Button = (props) => {
  // Pick button based on specified type
  let Button;
  switch (props.type) {
    case 'Menu':
      Button = ButtonMenu;
      break;
    case 'Link':
      Button = ButtonLink;
      break;
    default:
      Button = (
        <MuiTooltip title={props.tooltipText}>
          {props.icon ? (
            <MuiIconButton
              sx={{
                ...props.styles,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
              {...props.opts}
              id={props.id}
              className={props.classes}
              color="inherit"
            >
              <DynamicIcon icon={props.icon}></DynamicIcon>
            </MuiIconButton>
          ) : (
            <MuiButton
              sx={{
                ...props.styles,
                flexDirection: { xs: 'column', sm: 'row' },
              }}
              {...props.opts}
              id={props.id}
              className={props.classes}
              color="inherit"
            >
              {props.name}
            </MuiButton>
          )}
        </MuiTooltip>
      );
      break;
  }

  return (
    <>
      <Button {...props}></Button>
    </>
  );
};

Button.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  type: PropTypes.string.isRequired,
  icon: PropTypes.string,
  name: PropTypes.string,
  tooltipText: PropTypes.string,
};

export default Button;
