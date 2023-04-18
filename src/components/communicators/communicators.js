import { Box, Text } from "../../atoms";
import { CommunicatorsCard } from "./communicatorsCard";

const data = [
   {
      id: '01',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
   {
      id: '02',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
   {
      id: '03',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
]

export const Communicators = () => {

   return (
      <>
         <Box sx={styles.communicatorContainer}>
            <Box sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center'}}>
               <Text bold title>Últimos comunicados</Text>
               <CommunicatorsCard data={data} />
            </Box>
         </Box>
      </>
   )
}


const styles = {
   communicatorContainer: {
      marginTop: 15,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      gap: 2,
      padding: { xs: `30px`, xm: `0px 25px`, md: `0px 50px`, lg: `0px 50px` },
   },
}