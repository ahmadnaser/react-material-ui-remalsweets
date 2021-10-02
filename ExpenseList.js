import React, { Component } from 'react';
import Paper from 'material-ui/Paper';
import SelectField from 'material-ui/SelectField';
import MenuItem from 'material-ui/MenuItem';
import DateIcon from 'material-ui/svg-icons/action/date-range';
import { red500, grey500, blue500 } from 'material-ui/styles/colors';
import data from './branches.json';
import data2 from './branches.json';
import { Link } from 'react-router-dom';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import SendIcon from '@mui/icons-material/Send';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import RoomIcon from '@mui/icons-material/Room';
import IconButton from '@mui/material/IconButton';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import { useTheme } from '@mui/material/styles';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import OutlinedInput from '@mui/material/OutlinedInput';
import AppBar from 'material-ui/AppBar';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography ';
const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};

function getStyles(name, branchName, theme) {
  return {
    fontWeight:
      branchName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function ExpenseList() {
  const style = {
    height: '70px',
    padding: '20px',
    marginBottom: '10px',
    borderLeft: '5px solid #033f48',
  };

  const styleTitle = {
    padding: '5px',
    marginBottom: '0px',
  };

  const styleFooter = {
    padding: '5px',
    marginBottom: '0px',
    textDecoration: 'none',
    lineHeight: '1em',
    textAlign: 'center',
    fontFamily: 'Tajawal',
  };

  const Totalstyle = {
    background: '',
    padding: '10px',
    display: 'flex',
  };

  const Item = styled(Paper)(({ theme }) => ({
    padding: theme.spacing(0),
    textAlign: 'center',
    boxShadow: 'none',
  }));

  const wtsbBtn = { backgroundColor: '#00e676', boxShadow: 'none' };
  const wtsbBtn2 = {
    backgroundColor: '#00e676',
    boxShadow: 'none',
    position: 'relative',
    top: '-15px',
  };
  const gglBtn = { backgroundColor: '#df493b', boxShadow: 'none' };

  const [loading, setLoading] = React.useState(false);

  const theme = useTheme();
  const [branchName, setBranchName] = React.useState([]);
  const [branches, setBranches] = React.useState([...data.branches]);
  console.log(branches);
  function handleClick(link) {
    console.log(link);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      window.location.href = link;
    }, 1000);
  }

  const handleSelectChange = (event) => {
    const {
      target: { value },
    } = event;

    setBranchName(
      // On autofill we get a the stringified value.
      typeof value === 'string' ? value.split(',') : value
    );

    let itemNames = typeof value === 'string' ? value.split(',') : value;

    let result = [];
    let results = [];
    let i = 0;
    console.log(itemNames);
    if (itemNames.length == 0 || !itemNames) {
      setBranches(data.branches);
    } else if (itemNames.length > 1) {
      itemNames.map((item) => {
        result = data.branches.filter((branch) => {
          return branch.name === item;
        });

        results.push(result[0]);
      });

      setBranches(results);
    } else if (itemNames.length == 1) {
      result = [...data.branches].filter((branch) => {
        return branch.name === itemNames[0];
      });

      setBranches(result);
      console.log(result);
    }
  };

  return (
    <div style={{ marginTop: 1 + 'em' }}>
      <Paper zDepth={1} style={Totalstyle}>
        <div style={{ display: 'flex', width: '75%' }}>
          <div>
            <FormControl sx={{ m: 1, width: 300, mt: 3 }}>
              <Select
                multiple
                displayEmpty
                value={branchName}
                onChange={handleSelectChange}
                input={<OutlinedInput />}
                renderValue={(selected) => {
                  if (selected.length === 0) {
                    return <em>جميع الفروع</em>;
                  }

                  return selected.join(', ');
                }}
                MenuProps={MenuProps}
                inputProps={{ 'aria-label': 'Without label' }}
              >
                <MenuItem disabled value="">
                  <em>جميع الفروع</em>
                </MenuItem>
                {data.branches.map((branch) => (
                  <MenuItem
                    key={branch.id}
                    value={branch.name}
                    style={getStyles(branch.name, branch.name, theme)}
                  >
                    {branch.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>
        </div>
      </Paper>
      <div style={{ marginTop: 1 + 'em' }}>
        {branches.map((branch) => {
          return (
            <Paper zDepth={3} style={style}>
              <div style={{ display: 'inline-block' }}>
                <Stack direction="row" spacing={1}>
                  <Item style={styleTitle}> {branch.name}</Item>
                  <Divider orientation="vertical" flexItem />
                  <Item>
                    <LoadingButton
                      onClick={(e) => {
                        handleClick(branch.whatsapp);
                      }}
                      loading={loading}
                      style={wtsbBtn}
                      size="small"
                      variant="contained"
                    >
                      واتساب <WhatsAppIcon />
                    </LoadingButton>
                  </Item>
                  <Item>
                    {' '}
                    <LoadingButton
                      style={gglBtn}
                      onClick={(e) => {
                        handleClick(branch.location);
                      }}
                      size="small"
                      loading={loading}
                      variant="contained"
                    >
                      الموقع <RoomIcon />
                    </LoadingButton>
                  </Item>
                </Stack>
              </div>
            </Paper>
          );
        })}
      </div>
      <Paper zDepth={3}>
        <Container maxWidth="md">
          <Toolbar>
            <Typography variant="body1" color="inherit">
              <Link
                style={styleFooter}
                component="a"
                variant="body2"
                onClick={() => {
                  handleClick('https://wa.me/message/6ZPQMAEI63NME1');
                }}
              >
                أدارة الحفلات <WhatsAppIcon stlye={wtsbBtn2} />
              </Link>
            </Typography>
          </Toolbar>
        </Container>
      </Paper>
    </div>
  );
}
