import React from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { getFilter } from 'redux/selectors';
// import { setFilter } from 'redux/contactsSlice';

// import { FilterWrapper, FilterLable, FilterInput } from './Filter.styled';
import { Button, Container, TextField } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';

export default function ContactsFilter() {
  // const filter = useSelector(getFilter);
  // const dispatch = useDispatch();

  const handleChange = e => {
    // dispatch(setFilter(e.target.value));
  };

  return (
    <Container variant="div" sx={{ display: 'flex' }}>
      <TextField
        sx={{
          mr: 1,
          width: '320px',
          // height: '40px',
          backgroundColor: 'white',
        }}
        size="small"
        id="standard-basic"
        label="Name"
        variant="filled"
        type="text"
        name="filter"
        // value={filter}
        onChange={handleChange}
      />
      <Button
        type="text"
        variant="outlined"
        sx={{ color: 'white', border: '1px solid white' }}
        endIcon={<SearchIcon />}
      >
        Search
      </Button>
    </Container>
  );
}
