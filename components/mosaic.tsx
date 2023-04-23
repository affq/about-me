import Box from '@mui/material/Box';

const Mosaic = () => {
    return(
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'left',
                alignItems: 'top',
                width: '100%',
                height: '90vh',
                backgroundColor: "#00ADB5"
                }}
        >
            <Box
                sx={{
                    width: '50%',
                    height: '90vh',
                    backgroundColor: "#393E46"
                }}
                >

                </Box>

            <Box
                sx={{
                    width: '50%',
                    height: '45vh',
                    backgroundColor: "#342522"
                }}
                >
            </Box>

            <Box
                sx={{
                    width: '50%',
                    height: '45vh',
                    backgroundColor: "#393E46"
                }}
                >
            
            </Box>

        </Box>
    )
}

export default Mosaic;