import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';

const options = ['home', 'kontakt'];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  return (
    <div style={{display: 'flex'}}>
      <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', width: '50%', height: '10vh', padding: '0 1rem' }}>
          <Typography variant="button" style={{ textTransform: 'none', color: "#eee" }} className='text-base'>
                    <a href="https://www.adrianfabisiewicz.pl">adrianfabisiewicz.pl</a>
          </Typography>
        </Box>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        width: '50%',
        height: '10vh',
        padding: '0 1rem'
      }}
    >
      {options.map((buttonText) => (
        <Button key={buttonText} 
        >
                <Typography variant="button" style={{ textTransform: 'none', color: "#eee" }} className='text-base'>
                    {buttonText}
                </Typography>
        </Button>
        ))}
        </Box>
    </div>
  );
}