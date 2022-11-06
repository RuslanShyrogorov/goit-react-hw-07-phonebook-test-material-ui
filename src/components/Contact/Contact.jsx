import { Card, CardContent, Typography, IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';

import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function Contact() {
  return (
    <Grid>
      <Item>
        <Card variant="outlined" sx={{ minWidth: '320px' }}>
          <CardContent sx={{ position: 'relative' }}>
            <IconButton
              aria-label="delete"
              sx={{
                // color: 'grey',
                position: 'absolute',
                right: '0px',
                top: '0px',
              }}
            >
              {/* <DeleteForeverIcon sx={{ color: 'red', ml: 'auto' }} /> */}
              <DeleteOutlineIcon
                color="error"
                sx={{ width: '1rem', height: '1rem' }}
              />
            </IconButton>
            <Typography variant="h5" gutterBottom sx={{ fontSize: '1.2rem' }}>
              Name :
            </Typography>
            <Typography
              variant="h5"
              color="text.secondary"
              sx={{ fontSize: '1.2rem' }}
            >
              Number:
            </Typography>
          </CardContent>
        </Card>
      </Item>
    </Grid>
  );
}
