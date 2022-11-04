import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import { IconButton } from '@mui/material';
import Grid from '@mui/material/Unstable_Grid2';
import Item from '@mui/material/Unstable_Grid2';

export default function Contact() {
  return (
    <Grid>
      <Item>
        <Card
          variant="outlined"
          // sx={{ width: '320px' }}
          sx={{ minWidth: '320px' }}
        >
          <CardContent sx={{ position: 'relative' }}>
            <IconButton
              aria-label="delete"
              sx={{
                color: 'grey',
                position: 'absolute',
                right: '0px',
                top: 'center',
              }}
            >
              {/* <DeleteForeverIcon sx={{ color: 'red', ml: 'auto' }} /> */}
              <DeleteForeverIcon sx={{ width: '2rem', height: '2rem' }} />
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
