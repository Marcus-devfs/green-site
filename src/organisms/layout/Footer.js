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
            { text: "Sustentabilidade", link: '' },
            { text: "Tour 360°", link: '' },
        ]
    },
    {
        id: '01',
        menu: 'Soluções',
        submenus: [
            { text: "Data Center Services", link: '' },
            { text: "Data Center Carbon Zero", link: '' },
            { text: "Data Center Modular", link: '' },
            { text: "IoT Solutions", link: '' },
            { text: "Cloud Services", link: '' },
            { text: "Smart Cities", link: '' },
        ]
    },
    {
        id: '01',
        menu: 'Governança',
        submenus: [
            { text: "Administração", link: '' },
            { text: "Estrutua acionária", link: '' },
            { text: "Compliance", link: '' },
            { text: "Canal de denúncias", link: '' },
            { text: "Código de ética", link: '' },
            { text: "Política anticorrupção", link: '' },
            { text: "Política empresarial", link: '' },
        ]
    },
    {
        id: '01',
        menu: 'Contato',
        submenus: [
            { text: "Fale Conosco", link: '' },
            { text: "Imprensa", link: '' },
            { text: "Fale com um Especialista", link: '' },
            { text: "Política de privacidade", link: '' },
            { text: "Política de Cookies", link: '' },
            { text: "Área do Cliente", link: '' },
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
                    filter: 'grayscale(1)',
                    width: 120,
                    left: 90,
                    height: 100,
                    "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                    }
                }} onClick={() => router.push('/')} />
                <Box sx={styles.containerBox}>
                    {menuFooter.map((item) => (
                        <ContentContainer style={{
                            // alignItems: 'center',
                            display: 'flex',
                            boxShadow: 'none',
                            backgroundColor: 'none',
                            marginBottom: 7
                        }} key={item.id}>
                            <Text large bold style={{ ...styles.text }}>{item.menu}</Text>
                            {item.submenus &&
                                item.submenus.map((submenu) => (
                                    <Box sx={{ display: 'flex',  }} key={submenu.text}>
                                        <Link href={submenu.link} target='_blank'>
                                            <Text style={{ ...styles.text, }}>{submenu.text}</Text>
                                        </Link>
                                    </Box>
                                ))
                            }
                        </ContentContainer>
                    ))}
                </Box>
                <Box sx={{ position: 'absolute', right: 135, bottom: 110, display: 'flex', flexDirection: 'column', }}>
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
                <Box sx={{
                    display: 'flex',
                    position: 'absolute',
                    width: '90%',
                    height: '20px',
                    bottom: 20,
                    padding: '30px',
                    borderTop: 'solid 1px rgba(255,255,255,.16)',
                    }}>
                    <Text style={{color: 'gray'}}>© 2023 W3lib. Todos os direitos reservados.</Text>
                </Box>
            </Box>

        </>
    )
}


const styles = {
    container: {
        position: 'absolute',
        display: 'flex',
        flexDirection: 'column',
        width: '100%',
        backgroundColor: '#212121',
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