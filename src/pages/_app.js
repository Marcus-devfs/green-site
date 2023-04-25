import { useEffect } from 'react';
import { Box } from '../atoms'
import { AppProvider } from '../context/AppContext'
import { Colors, HeaderMenu } from '../organisms'
import '../styles/globals.css'
import { useRouter } from 'next/router';
import { ProtectRoute } from '../context/ProtectRoute';

const menuItems = [
   { to: '/home/Home', text: 'Processos' },
   { to: '/', text: 'Treinamentos' },
   { to: '/', text: 'Campanhas', },
   { to: '/', text: 'Marketing' },
   { to: '/', text: 'Ferramentas' },
];

function App({ Component, pageProps }) {

   const router = useRouter()


   useEffect(() => {
      router.push('/home/Home')
   }, [])


   return (
      <AppProvider>
         <ProtectRoute>
            <Box sx={styles.bodyContainer}>
               <HeaderMenu menuItems={menuItems} />
               <Box sx={styles.contentContainer}>
                  <Component {...pageProps} />
               </Box>
            </Box>
         </ProtectRoute>
      </AppProvider>
   )
}

export default App;

const styles = {
   bodyContainer: {
      display: "flex",
      minHeight: "100vh",
      flexDirection: "row",
      width: '100%',
   },
   contentContainer: {
      display: "flex",
      width: '100%',
      flexDirection: 'column',
      flex: 1,
      gap: `35px`,
      backgroundColor: '#fff',
      paddingBottom: `60px`,
      overflowY: 'hidden',
      marginTop: { xs: `60px`, xm: `0px`, md: `0px`, lg: `0px` }
   },
}