import { Box, ContentContainer, Text } from "../../atoms";
import { TextButton } from "../../atoms/TextButton";

const dataBanner = '/banner-exe.jpeg'

export const Insights = (props) => {

   return (
      <>
         <Box sx={styles.container}>
            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around',  }}>
               <Box sx={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${dataBanner})`,
                  borderRadius: '24px',
                  width: { xs: '100%', xm: '528px', md: '528px', lg: '528px' },
                  height: { xs: '50%', xm: '496px', md: '496px', lg: '496px' }
               }} />
               <ContentContainer style={{ width: '450px', boxShadow: 'none', alignItems: 'center', justifyContent: 'center'}}>
                  <Text title bold style={styles.text}>Últimos insights</Text>
                  <Text style={styles.text}>We are a company engaged in the field of home repair and maintenance services.
                     We have a team of technicians who are trained and experienced in handling various types of home repairs,
                     such as air conditioning, plumbing, electricity, and so on.</Text>
                  <TextButton text="Veja mais" />
               </ContentContainer>
            </Box>

            <Box sx={{ display: 'flex', flexDirection: 'row', justifyContent: 'space-around', padding: '70px 0px' }}>
               <ContentContainer style={{ width: '450px', boxShadow: 'none', alignItems: 'center', justifyContent: 'center'}}>
                  <Text title bold style={styles.text}>green4T na mídia</Text>
                  <Text style={styles.text}>a team of technicians who are skilled and experienced in dealing with home repair issues.
                     services that are flexible and according to your schedule, including 24-hour emergency services.
                     warranty on every service we offer to ensure customer satisfaction
                     prioritizing customer satisfaction in every service we provide</Text>
                  <TextButton text="Veja mais" />
               </ContentContainer>
               <Box sx={{
                  backgroundSize: 'cover',
                  backgroundRepeat: 'no-repeat',
                  backgroundPosition: 'center center',
                  backgroundImage: `url(${dataBanner})`,
                  borderRadius: '24px',
                  width: { xs: '100%', xm: '528px', md: '528px', lg: '528px' },
                  height: { xs: '50%', xm: '496px', md: '496px', lg: '496px' }
               }} />
            </Box>
         </Box>
      </>
   )
}


const styles = {
   container: {
      marginTop: 15,
      display: 'flex',
      flexDirection: 'column',
      // alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff',
      width: '100%',
      gap: 2,
      padding: { xs: `30px`, xm: `0px 25px`, md: `0px 50px`, lg: `0px 50px` },
   },
   text:{
      textAlign: 'center'
   }
}