import * as React from 'react';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from 'next/link';

export default function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const options = [
    { buttonText: 'home', link: 'https://adrianfabisiewicz.pl' },
    { buttonText: 'kontakt', link: 'https://adrianfabisiewicz.pl' },
  ];

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
      {options.map((option) => (
        <Button key={option.buttonText} href={option.link}
        >
                <Typography variant="button" style={{ textTransform: 'none', color: "#eee" }} className='text-base'>
                    {option.buttonText}
                </Typography>
        </Button>
        ))}
        </Box>
    </div>
  );
}