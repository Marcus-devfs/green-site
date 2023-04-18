import { Box, Text } from "../../atoms";
import { Colors } from "../../organisms";
import { PipelineCard } from "./pipelineCard";

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
   {
      id: '04',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
   {
      id: '05',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
   {
      id: '06',
      title: 'Lorem ipsum',
      text: 'We strive to constantly pursue innovation of our products and services'
   },
]

export const Pipeline = () => {

   return (
      <>
         <Box sx={styles.container}>
            <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
               <Text bold title style={{padding: 5}}>Pipeline de vendas</Text>
               <Box sx={{display: 'flex', justifyContent: 'center', padding: '20px'}}>
                  <Text style={{ width: '60%', top: 20 }}>We have a team of experts who are experienced in various fields such as electricians,
                     carpenters, plumbers, AC technicians,
                     and many more. Our team is ready to assist you in every stage of your home improvement,
                     from diagnosis to maintenance.</Text>
               </Box>
               <PipelineCard data={data} />
            </Box>
         </Box>
      </>
   )
}


const styles = {
   container: {
      marginTop: 15,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: Colors.background,
      width: '100%',
      gap: 2,
      padding: { xs: `30px`, xm: `0px 25px`, md: `50px`, lg: `50px` },
   },
}