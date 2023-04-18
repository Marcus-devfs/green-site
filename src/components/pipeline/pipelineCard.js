import { useState } from "react";
import { Box, ContentContainer, Text } from "../../atoms";
import { Colors } from "../../organisms";
import { TextButton } from "../../atoms/TextButton";

export const PipelineCard = (props) => {

    const { data = [] } = props

    return (
        <>
            <Box sx={styles.container}>
                {data?.map((item) => (
                    <ContentContainer center key={item.id} style={{
                        boxShadow: 'none',
                        border: `1px solid ${Colors.greenLight}`,
                        width: '300px',
                        gap: 1,
                        
                        cursor: 'pointer',
                        "&:hover": {
                            backgroundColor: Colors.greenLight,
                            color: '#fff',
                        }
                    }}>
                        <Text bold large style={{ color: 'inherit' }}>{item?.title}</Text>
                        <Text style={{ color: 'inherit' }}>{item?.text}</Text>
                        <TextButton text="Veja mais"/>
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
        justifyContent: 'center',
        padding: { xs: `30px`, xm: `0px 25px`, md: `0px 80px`, lg: `0px 80px` },
        backgroundColor: Colors.background,
        gap: 2,
        flexWrap: 'wrap'
    },
  
}