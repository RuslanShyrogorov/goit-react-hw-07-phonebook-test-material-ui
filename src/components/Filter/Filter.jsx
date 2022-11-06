// import React from 'react';
// // import { useDispatch, useSelector } from 'react-redux';
// // import { getFilter } from 'redux/selectors';
// // import { setFilter } from 'redux/contactsSlice';

// // import { FilterWrapper, FilterLable, FilterInput } from './Filter.styled';
// import { Button, Container, TextField } from '@mui/material';
// import SearchIcon from '@mui/icons-material/Search';
// ======================
// import { styled, alpha } from '@mui/material/styles';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Button, styled, alpha } from '@mui/material';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    marginLeft: theme.spacing(3),
    width: 'auto',
  },
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(1)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: '20ch',
    },
  },
}));
// ======================

export default function ContactsFilter() {
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  const handleChange = e => {
    // dispatch(setFilter(e.target.value));
  };
  // ======================

  // ======================

  return (
    // <Container sx={{ display: 'flex' }}>
    //   <TextField
    //     sx={{
    //       mr: 1,
    //       width: '320px',
    //       // height: '40px',
    //       backgroundColor: 'white',
    //     }}
    //     size="small"
    //     id="standard-basic"
    //     label="Name"
    //     variant="filled"
    //     type="text"
    //     name="filter"
    //     // value={filter}
    //     onChange={handleChange}
    //   />
    // <Button
    //   type="text"
    //   variant="outlined"
    //   sx={{ color: 'white', border: '1px solid white' }}
    //   endIcon={<SearchIcon />}
    // >
    //     Search
    //   </Button>
    // </Container>
    // ======================
    <>
      <Search>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <Button
        type="text"
        variant="outlined"
        sx={{ color: 'white', border: '1px solid white' }}
        endIcon={<SearchIcon />}
      >
        Search
      </Button>
    </>
    // ======================
  );
}
