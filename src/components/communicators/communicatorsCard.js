import { Box, ContentContainer, Text } from "../../atoms";

export const CommunicatorsCard = (props) => {

    const { data = [] } = props

    return (
        <>
            <Box sx={styles.container}>
                {data?.map((item) => (
                    <ContentContainer center key={item.id} style={{boxShadow: 'none'}}>
                        <Text bold large>{item?.title}</Text>
                        <Text>{item?.text}</Text>
                    </ContentContainer>
                ))
                }
            </Box>
        </>
    )
}


const styles = {
    container: {
        marginTop: 5,
        display: 'flex',
        alignItems: 'center',
        backgroundColor: '#fff',
        gap: 2,
        padding: '0px 180px'
    },
}