import { Box, ContentContainer, Text } from "../../atoms"
import { TextButton } from "../../atoms/TextButton"
import { Communicators, Pipeline } from "../../components"
import { Banner, Colors } from "../../organisms"
import { Footer } from "../../organisms/layout/Footer"

export default function HomePage() {

   return (
      <>
         <Box sx={styles.container}>
            <Banner />
            <Communicators />
            <Pipeline />
            <Box sx={{ minHeight: '250px', backgroundColor: Colors.background, display: 'flex', justifyContent: 'center', alignItem: 'center', }}>
               <ContentContainer gap={1} style={{width: '400px', margin: '0px 30px', height: '200px'}}>
                  <Text large bold style={{padding: '0px 0px 10px 0px'}}>Links rápidos</Text>
                  <Text>Faça login na sua conta do Salesforce</Text>
                  <Text>Abra um chamado no Safira</Text>
                  <Text>Tenha acesso ao seu contrato</Text>
               </ContentContainer>
               <ContentContainer gap={2} style={{width: '400px', margin: '0px 30px', height: '200px', justifyContent: 'center'}}>
                  <Text>Sabia que você Pode acessar o
                     organograma do time comercial?</Text>
                  <TextButton bold text="Veja mais" />
               </ContentContainer>
            </Box>
            <Footer />
         </Box>
      </>
   )
}

const styles = {
   container: {
      marginTop: 20,
   }
}