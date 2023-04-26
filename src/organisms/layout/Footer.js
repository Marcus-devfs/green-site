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
            { text: "Insights", link: 'https://www.green4t.com/insights/' },
            { text: "Sobre nós", link: 'https://www.green4t.com/sobre-nos/' },
            { text: "Carreiras", link: 'https://www.green4t.com/career/' },
            { text: "Sustentabilidade", link: 'https://www.green4t.com/sustentabilidade/' },
            { text: "Tour 360°", link: 'https://www.green4t.com/tour-360/' },
        ]
    },
    {
        id: '01',
        menu: 'Soluções',
        submenus: [
            { text: "Data Center Services", link: 'https://www.green4t.com/solucoes/data-center-services/' },
            { text: "Data Center Carbon Zero", link: 'https://www.green4t.com/solucoes/data-center-carbon-zero/' },
            { text: "Data Center Modular", link: 'https://www.green4t.com/solucoes/data-center-modulares/' },
            { text: "IoT Solutions", link: 'https://www.green4t.com/es/soluciones/iot-solutions/' },
            { text: "Cloud Services", link: 'https://www.green4t.com/es/soluciones/cloud-services/' },
            { text: "Smart Cities", link: 'https://www.green4t.com/solucoes/smart-cities/' },
        ]
    },
    {
        id: '01',
        menu: 'Governança',
        submenus: [
            { text: "Administração", link: 'https://www.green4t.com/administracao/#administracao' },
            { text: "Estrutua acionária", link: 'https://www.green4t.com/administracao/' },
            { text: "Compliance", link: 'https://www.green4t.com/compliance/' },
            { text: "Canal de denúncias", link: 'https://www.green4t.com/canal-de-denuncias/' },
            { text: "Código de ética", link: 'https://www.green4t.com/wp-content/uploads/2021/09/Codigo_de_Conduta_Etica_green4T.pdf' },
            { text: "Política anticorrupção", link: 'https://www.green4t.com/wp-content/uploads/2021/09/Politica_Anticorrupcao_green4T.pdf' },
            { text: "Política empresarial", link: 'https://www.green4t.com/wp-content/uploads/2023/01/politica_empresarial_green4T.pdf' },
        ]
    },
    {
        id: '01',
        menu: 'Contato',
        submenus: [
            { text: "Fale Conosco", link: 'https://www.green4t.com/contato/' },
            { text: "Fale com um Especialista", link: 'https://www.green4t.com/fale-com-um-especialista/' },
            { text: "Imprensa", link: 'https://www.green4t.com/imprensa/' },
            { text: "Política de privacidade", link: 'https://www.green4t.com/politica-de-privacidade/' },
            { text: "Política de Cookies", link: 'https://www.green4t.com/politica-de-cookies/' },
            { text: "Área do Cliente", link: 'https://clientes.green4t.com/' },
        ]
    },
]

const mediaIcons = [
    { id: '01', name: 'facebook', url: 'https://www.green4t.com/wp-content/uploads/2021/07/facebook-2.png', link: 'https://www.facebook.com/green4t/' },
    { id: '02', name: 'instagram', url: 'https://www.green4t.com/wp-content/uploads/2021/07/instagram.png', link: 'https://www.instagram.com/green4t/' },
    { id: '03', name: 'linkedin', url: 'https://www.green4t.com/wp-content/uploads/2021/07/linkedin.png', link: 'https://www.linkedin.com/company/green4t/' },
    { id: '04', name: 'youtube', url: 'https://www.green4t.com/wp-content/uploads/2021/07/youtube.png', link: 'https://www.youtube.com/channel/UCrviQBC1rZ47yRu-nHadqCg' },
    { id: '05', name: 'spotify', url: 'https://www.green4t.com/wp-content/uploads/2021/07/logotipo-spotify.png', link: 'https://open.spotify.com/show/7Hm6CmUbxKrzUmKbXsZHFl?si=f3c137bffdfa4dad&nd=1' },
]

export const Footer = () => {

    const router = useRouter()

    return (
        <>
            <Box sx={styles.container} id={'#footer'}>
                <Box sx={{
                    ...styles.icon,
                    backgroundImage: `url('https://www.green4t.com/wp-content/uploads/2021/07/logo-green4t-b.svg')`,
                    backgroundSize: 'contain',
                    width: 120,
                    left: 90,
                    top: 30,
                    height: 34,
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
                                    <Box sx={{ display: 'flex', }} key={submenu.text}>
                                        <Link href={submenu.link} target='_blank'>
                                            <Text style={{ ...styles.text, }}>{submenu.text}</Text>
                                        </Link>
                                    </Box>
                                ))
                            }
                        </ContentContainer>
                    ))}
                </Box>
                <Box sx={{ position: 'absolute', right: 135, bottom: 120, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                    <Text bold large style={{ color: '#fff' }}>Siga a green4T</Text>
                    <Box sx={{ display: 'flex', marginTop: '5px', }}>
                        {mediaIcons.map((item) => (
                            <Box key={item.id} sx={{ width: '100%', justifyContent: 'space-between', padding: '0px 2px' }}>
                                <Link href={item.link} target='_blank'>
                                    <Box sx={{
                                        ...styles.icon,
                                        width: 25,
                                        height: 25,
                                        position: 'relative',
                                        backgroundImage: `url(${item.url})`,
                                        color: '#fff',
                                        cursor: 'pointer'
                                    }} />
                                </Link>
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
                    <Text style={{ color: 'gray' }}>© 2023 W3lib. Todos os direitos reservados.</Text>
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
        marginBottom: 8
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