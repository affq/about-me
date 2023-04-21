import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
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
      <Box sx={{ display: 'flex', justifyContent: 'left', alignItems: 'center', width: '100%', height: '10vh', padding: '0 1rem' }}>
          <Typography style={{ textTransform: 'none', color: "#eee" }} className='text-base'>
                    adrianfabisiewicz.pl
          </Typography>
        </Box>
      <Box
      sx={{
        display: 'flex',
        justifyContent: 'right',
        alignItems: 'center',
        width: '100%',
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