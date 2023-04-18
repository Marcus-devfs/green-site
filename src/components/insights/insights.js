import { Box, Text } from "../../atoms";

export const Insights = (props) => {

   return (
      <>
         <Box sx={styles.insightsContainer}>
         </Box>
      </>
   )
}


const styles = {
    insightsContainer: {
      display: 'flex',
      alignItems: 'center',
      backgroundColor: '#fff',
      width: '100%',
      borderRadius: `12px`,
      overflow: 'hidden',
      gap: 2,
      padding: `0px 8px`,
   },
}