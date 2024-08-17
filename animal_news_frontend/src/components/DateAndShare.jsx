import { Typography, Grid } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import EmailIcon from '@mui/icons-material/Email';

function DateAndShare(props) {
    return (
        <Grid container alignContent={'space-between'} justifyContent={'center'} sx={{
            padding: "25px",
            maxWidth: "1200px",
            margin: 'auto'
        }}>
            <Grid item xs={6}>
                <Typography variant="body1" align='left' fontWeight={'bold'}>
                    {props.data}
                </Typography>
            </Grid>
            <Grid item xs={6}>
                <Typography variant="body1" align='right' sx={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'right'
                }}>
                    <span>Share:</span>
                    <span sx={{
                        marginTop: '1%'
                    }}>
                        <a><FacebookIcon sx={{ fontSize: 35 }}></FacebookIcon></a>
                        <a><TwitterIcon sx={{ fontSize: 35 }}></TwitterIcon></a>
                        <a><EmailIcon sx={{ fontSize: 35 }}></EmailIcon></a>
                    </span>

                </Typography>

            </Grid>
        </Grid>
    )
}

export default DateAndShare
