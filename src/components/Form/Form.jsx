// import { useState } from 'react';
// import { useDispatch } from 'react-redux';
// import { addContact } from 'redux/contactsSlice';

import { Button, Container, TextField } from '@mui/material';
import Tooltip from '@mui/material/Tooltip';

export default function Form() {
  // const [name, setName] = useState('');
  // const [number, setNumber] = useState('');

  // const dispatch = useDispatch();

  const handleChange = e => {
    // switch (e.target.name) {
    //   case 'name':
    //     setName(e.target.value);
    //     break;
    //   case 'number':
    //     setNumber(e.target.value);
    //     break;
    //   default:
    //     return;
    // }
  };

  const resetState = () => {
    // setName('');
    // setNumber('');
  };

  const handleSubmit = e => {
    // e.preventDefault();
    // dispatch(addContact({ name, number }));
    resetState();
  };

  return (
    <Container
      component={'div'}
      sx={{ display: 'flex', flexDirection: 'column' }}
      onSubmit={handleSubmit}
    >
      <TextField
        sx={{
          mb: 1,
          width: '320px',
        }}
        size="small"
        id="standard-basic"
        label="Name"
        variant="outlined"
        type="text"
        name="name"
        // value={name}
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
        title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
        required
        onChange={handleChange}
      />

      <TextField
        sx={{
          mb: 1,
          width: '320px',
          // height: '40px',
          // backgroundColor: 'white',
        }}
        size="small"
        id="standard-basic"
        label="Number"
        variant="outlined"
        type="tel"
        name="number"
        // value={number}
        pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
        title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
        required
        onChange={handleChange}
      />
      <Tooltip title="Add" placement="bottom">
        <Button
          type="text"
          variant="outlined"
          size="medium"
          sx={{ minWidth: '132px' }}
        >
          Add contact
        </Button>
      </Tooltip>
    </Container>
  );
}
