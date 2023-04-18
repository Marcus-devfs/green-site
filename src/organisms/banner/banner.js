import { Box, Text } from "../../atoms";

const dataBanner = '/banner-exe.jpeg'

export const Banner = (props) => {

   return (
      <>
         <Box sx={styles.bannerContainer}>
            <Box sx={{
               backgroundSize: 'cover',
               backgroundRepeat: 'no-repeat',
               backgroundPosition: 'center center',
               backgroundImage: `url(${dataBanner})`,
               width: { xs: '100%', xm: '100%', md: '100%', lg: '100%' },
               height: { xs: '50%', xm: '100%', md: '100%', lg: '100%' }
            }} />
         </Box>
      </>
   )
}


const styles = {
   bannerContainer: {
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      overflow: 'hidden',
      height: 400,
      padding: { xs: `30px`, xm: `0px 25px`, md: `0px 50px`, lg: `0px 50px` },
   },
}