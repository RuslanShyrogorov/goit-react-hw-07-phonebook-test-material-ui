import { AppBar, Button, Toolbar, Typography } from '@mui/material';
import ContactPhoneIcon from '@mui/icons-material/ContactPhone';
import ContactsFilter from 'components/Filter/Filter';
import { useState } from 'react';
import BasicModal from 'components/Modal/Modal';

export default function Header() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <AppBar position="fixed" sx={{ mb: 2 }}>
        <Toolbar sx={{ display: 'flex' }}>
          <ContactPhoneIcon sx={{ mr: 2 }} />
          <Typography variant="h6" sx={{ mr: 4 }}>
            Contacts
          </Typography>
          <ContactsFilter />
          <Button
            onClick={handleOpen}
            type="text"
            variant="outlined"
            sx={{
              minWidth: '132px',
              color: 'white',
              border: '1px solid white',
            }}
          >
            Add contact
          </Button>
        </Toolbar>
      </AppBar>
      <BasicModal open={open} handleClose={handleClose} />
    </>
  );
}
