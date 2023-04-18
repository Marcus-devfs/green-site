import { useMediaQuery, useTheme } from "@mui/material"
import Link from "next/link"
import { useRouter } from "next/router"
import { useState } from "react"
import { Box, ContentContainer, Text } from "../../atoms"
import { Colors } from "./Colors"

const menuFooter = [
    {
        id: '01',
        menu: 'A empresa',
        submenus: [
            { text: "Insights", link: '' },
            { text: "Sobre nós", link: '' },
            { text: "Carreiras", link: '' },
        ]
    },
    {
        id: '01',
        menu: 'Soluções',
        submenus: [
            { text: "Data Center Services", link: '' },
            { text: "Data Center Modular", link: '' }
        ]
    },
    {
        id: '01',
        menu: 'Governança',
        submenus: [
            { text: "Administração", link: '' },
            { text: "Estrutua acionária", link: '' },
            { text: "Compliance", link: '' },
        ]
    },
    {
        id: '01',
        menu: 'Contato',
        submenus: [
            { text: "Fale Conosco", link: '' },
            { text: "Imprensa", link: '' },
            { text: "Fale com um Especialista", link: '' }
        ]
    },
]

const mediaIcons = [
    { id: '01', name: 'facebook', url: '/icons/facebook_logo.png' },
    { id: '02', name: 'instagram', url: '/icons/instagram_logo.webp' },
    { id: '03', name: 'linkedin', url: '/icons/linkedin_logo.webp' },
    { id: '04', name: 'youtube', url: '/icons/youtube_icon.svg' },
    { id: '05', name: 'spotify', url: '/icons/spotify_icon.png' },
]

export const Footer = () => {

    const router = useRouter()

    return (
        <>
            <Box sx={styles.container} id={'#footer'}>
                <Box sx={{
                    ...styles.icon,
                    backgroundImage: `url('/icons/logo_green.svg')`,
                    backgroundSize: 'contain',
                    width: 90,
                    left: 90,
                    height: 80,
                    "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                    }
                }} onClick={() => router.push('/')} />
                <Box sx={styles.containerBox}>
                    {menuFooter.map((item) => (
                        <ContentContainer style={{
                            alignItems: 'center',
                            display: 'flex',
                            boxShadow: 'none',
                            backgroundColor: 'none'
                        }} key={item.id}>
                            <Text large bold style={{ ...styles.text }}>{item.menu}</Text>
                            {item.submenus &&
                                item.submenus.map((submenu) => (
                                    <Box sx={{ display: 'flex', justifyContent: 'center' }} key={submenu.text}>
                                        <Link href={submenu.link} target='_blank'>
                                            <Text style={{ ...styles.text, }}>{submenu.text}</Text>
                                        </Link>
                                    </Box>
                                ))
                            }
                        </ContentContainer>
                    ))}
                </Box>
                <Box sx={{ position: 'absolute', right: 50, bottom: 30, display: 'flex', flexDirection: 'column', }}>
                    <Text bold large style={{ color: '#fff' }}>Siga a green4T</Text>
                    <Box sx={{ display: 'flex', marginTop: '5px'  }}>
                        {mediaIcons.map((item) => (
                            <Box key={item.id} sx={{ width: '100%', justifyContent: 'space-between', }}>
                                <Box sx={{
                                    ...styles.icon,
                                    position: 'relative',
                                    backgroundImage: `url(${item.url})`,
                                    filter: 'grayscale(1)',
                                    color: '#fff',
                                }} />
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Box>

        </>
    )
}


const styles = {
    container: {
        position: 'absolute',
        width: '100%',
        backgroundColor: 'black',
        alignItems: 'center',
        justifyContent: { xs: `center`, xm: 'space-between', md: 'space-between', lg: 'space-between' },
        display: 'flex',
        padding: { xs: `30px`, xm: `0px 25px`, md: `50px`, lg: ` 50px` },

    },
    containerBox: {
        height: '100%',
        display: 'flex',
        width: '100%',
        padding: '10px',
        justifyContent: { xs: `center`, xm: 'space-between', md: 'space-between', lg: 'space-between' },
        marginBottom: 5
    },
    text: {
        marginTop: '5px',
        color: '#fff'
    },
    icon: {
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center center',
        width: '20px',
        height: '20px',
        marginRight: '0px',
        top: 0,
        position: 'absolute',
        backgroundImage: `url('/icons/engine_icon.png')`,
    },

}