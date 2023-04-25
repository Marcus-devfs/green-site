import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Box, Text } from "../../atoms"
import { Colors } from "./Colors"
import Hamburger from "hamburger-react"
import { useAppContext } from "../../context/AppContext"
import { DialogBoxUser } from "../user/DialogBoxUser"

export const HeaderMenu = ({ menuItems = [] }) => {

   const { user, logout } = useAppContext()
   const router = useRouter()

   let userName = (user?.name?.split(' ')[0])?.toUpperCase()
   const pathname = router.pathname === '/' ? null : router.pathname.split('/')[1]
   let companyName = user?.companyId?.name;

   const [showMenuMobile, setShowMenuMobile] = useState(false)
   const [showMenuUser, setShowMenuUser] = useState(false)
   const [showUserOptions, setShowUserOptions] = useState(false)
   const [showNewPasswordDialog, setShowNewPasswordDialog] = useState(false)
   const [showChangePassword, setShowChangePassword] = useState(false)
   const theme = useTheme()
   const navBar = useMediaQuery(theme.breakpoints.down('md'))

   return (
      <>
         {!navBar ?
            <>
               <Box sx={styles.leftMenuMainContainer}>
                  <Box sx={{
                     ...styles.icon,
                     backgroundImage: `url('/logo_green_partner.svg')`,
                     backgroundSize: 'contain',
                     width: 119,
                     height: 80,
                     marginTop: 1,
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/')} />
                  < Box sx={{ display: 'flex', flexDirection: 'row', gap: 0.5 }}>
                     {menuItems.map((item, index) =>
                        <MenuItem
                           currentPage={item.to.includes(pathname)}
                           key={`${index}_${item.to}`}
                           to={item.to}
                           text={item.text}
                           icon={item.icon}
                        />
                     )}
                  </Box>
                  <Box sx={{ ...styles.userBox }} onClick={() => setShowMenuUser(!showMenuUser)}>
                     <Box
                        sx={{
                           display: 'flex',
                           borderColor: Colors.background,
                           justifyContent: 'center',
                           alignItems: 'center',
                           cursor: 'pointer',
                           gap: 2,
                           padding: '1px 10px'
                        }}
                     >
                        <Text small>{`${userName || 'Fazer Login'} | ${companyName || 'Company'}`}</Text>
                     </Box>

                     {showMenuUser &&
                        <>
                           <Box sx={styles.containerUserOpitions}>
                              <Box onClick={() => {
                                 setShowUserOptions(!showUserOptions)
                                 setShowNewPasswordDialog(true)
                              }} sx={{ borderRadius: 1, padding: `4px 8px`, "&:hover": { backgroundColor: '#ddd', cursor: 'pointer' }, }}>
                                 <Text style={{ ...styles.text, textAlign: 'center', }}>Alterar Senha</Text>
                              </Box>
                              <Box onClick={logout} sx={{ borderRadius: 1, padding: `4px 8px`, "&:hover": { backgroundColor: '#ddd', cursor: 'pointer' } }}>
                                 <Text style={{ ...styles.text, textAlign: 'center' }}>Sair</Text>
                              </Box>
                           </Box>
                        </>
                     }
                  </Box>
               </Box>
            </>
            :
            <>
               <Box sx={styles.menuResponsive}>
                  <Box sx={{
                     backgroundImage: `url('/logo_green_partner.svg')`,
                     backgroundSize: 'contain',
                     backgroundRepeat: 'no-repeat',
                     width: 1,
                     height: 30,
                     marginTop: 1,
                     "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                     }
                  }} onClick={() => router.push('/')} />
                  <Hamburger toggled={showMenuMobile} toggle={setShowMenuMobile} duration={0.8} />
               </Box>
               {showMenuMobile ?
                  <>
                     <Box sx={styles.menuMobileContainer}>
                        <Box sx={{
                           ...styles.icon,
                           backgroundImage: `url('/logo_green_partner.svg')`,
                           backgroundSize: 'contain',
                           width: 1,
                           height: 50,
                           marginTop: 1,
                           left: 0,
                           "&:hover": {
                              cursor: 'pointer', opacity: 0.8
                           }
                        }} onClick={() => {
                           router.push('/')
                        }} />
                        < Box sx={{ display: 'flex', flexDirection: 'column', gap: 1, justifyContent: 'center', alignItems: 'center' }}>
                           {menuItems.map((item, index) =>
                              <MenuItem
                                 currentPage={item.to.includes(pathname)}
                                 key={`${index}_${item.to}`}
                                 to={item.to}
                                 text={item.text}
                                 icon={item.icon}
                                 onClick={() => setShowMenuMobile(false)}
                              />
                           )}
                        </Box>
                        <Box sx={{ ...styles.userBox }}>
                           <Box
                              sx={{
                                 display: 'flex',
                                 borderColor: Colors.background,
                                 justifyContent: 'center',
                                 alignItems: 'center',
                                 cursor: 'pointer',
                                 gap: 2,
                              }}
                           >
                              <Text small>{`${userName} | ${companyName}`}</Text>
                           </Box>
                        </Box>
                     </Box>
                  </> : ''}
            </>
         }
         {showNewPasswordDialog && (
            <DialogBoxUser
               onClick={(value) => setShowNewPasswordDialog(value)}
               value={showNewPasswordDialog}
            />
         )}
      </>
   )
}

const MenuItem = (props) => {

   const { to, text, icon, currentPage, onClick } = props

   return (
      <Link href={to} onClick={onClick}>
         <Box sx={{
            display: 'flex',
            borderRadius: 2,
            padding: '12px 20px',
            color: currentPage ? Colors.lightBlue : Colors.paleDarkBlue,
            "&:hover": {
               color: Colors.lightBlue,
            }
         }}>
            <Box sx={{ display: 'flex', alignItems: 'center', color: 'inherit', }}>
               <Text style={{ color: 'inherit', textAlign: 'center' }}>{text}</Text>
            </Box>
         </Box>
      </Link>

   )
}

const styles = {
   leftMenuMainContainer: {
      position: 'fixed',
      display: { xs: 'none', sm: 'flex', md: 'flex', lg: 'flex' },
      alignItems: 'center',
      justifyContent: 'space-between',
      minHeight: '95px',
      width: '100%',
      backgroundColor: '#fff',
      padding: `25px 50px`,
      gap: 4,
   },
   userBox: {
      backgroundColor: '#F2F2F2',
      padding: `8px 20px`,
      borderRadius: '5px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      gap: 1,
   },
   userButtonContainer: {
      borderRadius: '5px',
      width: '100%',
      alignItems: 'center',
      justifyContent: 'center',
      textAlign: 'center',
      padding: `5px 0px`,
      "&:hover": {
         backgroundColor: '#ddd',
         // transitionDelay: '1s',
         cursor: 'pointer'
      }
   },
   icon: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '15px',
      height: '15px',
      marginRight: '0px',
      backgroundImage: `url('/icons/engine_icon.png')`,
   },
   menuResponsive: {
      position: 'fixed',
      maxHeight: '40px',
      width: '100%',
      backgroundColor: '#f9f9f9',
      borderRight: `1px solid #00000010`,
      padding: `30px`,
      alignItems: 'center',
      justifyContent: 'right',
      display: 'flex',
      zIndex: 99999
   },
   iconMenuOpen: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '35px',
      height: '35px',
      marginLeft: '0px',
      backgroundImage: `url('/icons/Hamburger_icon.png')`,
      opacity: 0.7
   },
   iconMenuClose: {
      backgroundSize: 'cover',
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center center',
      width: '55px',
      height: '55px',
      marginLeft: '0px',
      backgroundImage: `url('/icons/close_menu_icon.png')`,
      opacity: 0.7
   },
   menuMobileContainer: {
      position: 'fixed',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      minHeight: '100vh',
      backgroundColor: '#f9f9f9',
      borderRight: `1px solid #00000010`,
      padding: `40px 20px`,
      gap: 4,
      zIndex: 99999999,
   },
   containerUserOpitions: {
      backgroundColor: Colors.background,
      borderRadius: '0px 0px 10px 10px',
      padding: 1,
      display: 'flex',
      flexDirection: 'column',
      position: 'absolute',
      top: 90,
      width: '165px ',
      boxSizing: 'border-box',
   },
}