import React from 'react';
import PropTypes from 'prop-types';

import MuiBox from '@mui/material/Box';
import MuiFormControl from '@mui/material/FormControl';
import MuiButton from '@mui/material/Button';

import Select from './Select';
import TextField from './TextField';

const supportedComponents = {
  Select: Select,
  TextField: TextField,
};

const Form = (props) => {
  return (
    <>
      <MuiBox sx={{ padding: '0px 10px' }}>
        {/* Render form components from contents */}
        {props.contents.map((d, i) => {
          let Component = supportedComponents[d.componentName];

          return (
            <MuiFormControl
              key={`${d.componentName}-${d.label}-${i}`}
              fullWidth
              sx={{ marginTop: '15px' }}
            >
              <Component {...d}></Component>
            </MuiFormControl>
          );
        })}
        {/* Render Cancel and Submit Buttons */}
        <MuiBox
          sx={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'center',
            marginTop: '20px',
          }}
        >
          <MuiButton
            sx={{
              borderRadius: '5px',
              padding: '6px 40px',
              color: '#7E8299',
              backgroundColor: '#f5f8fa',
              '&:hover': { backgroundColor: '#eff2f5' },
            }}
            variant="contained"
            onClick={
              props.cancelCallback ||
              (() => {
                console.log('Cancel');
              })
            }
          >
            Cancel
          </MuiButton>
          <MuiButton
            sx={{
              borderRadius: '5px',
              padding: '6px 40px',
              marginLeft: '20px',
              backgroundColor: '#1DA259',
              '&:hover': {
                backgroundColor: '#1a9150',
              },
            }}
            variant="contained"
            onClick={
              props.submitCallback ||
              (() => {
                console.log('Submit');
              })
            }
          >
            Submit
          </MuiButton>
        </MuiBox>
      </MuiBox>
    </>
  );
};

Form.propTypes = {
  styles: PropTypes.object,
  opts: PropTypes.object,
  id: PropTypes.string,
  classes: PropTypes.string,
  componentName: PropTypes.string.isRequired,
  contents: PropTypes.arrayOf(
    PropTypes.shape({
      componentName: PropTypes.string.isRequired,
    })
  ).isRequired,
  cancelCallback: PropTypes.func,
  submitCallback: PropTypes.func,
};

export default Form;
