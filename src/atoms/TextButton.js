import { Box, Text } from "../atoms";
import { Colors } from "../organisms";

export const TextButton = (props) => {

    const {
        secondary = false,
        tertiary = false,
        onClick = () => { },
        text = '',
        style = {},
        showText = false,
        bold = false
    } = props;

    return (
        <>
            <Box sx={{
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
                width: 90,
                color: Colors.greenLight,
                cursor: 'pointer',
                ...style
            }}>
                <Text style={{ color: showText ? '#fff' : Colors.greenLight, fontWeight: bold && 'bold' }}>{text}</Text>
                <Box sx={{
                    ...styles.icon,
                    backgroundImage: `url('/icons/seta_right.png')`,
                    backgroundSize: 'contain',
                    color: Colors.greenLight,
                    
                    "&:hover": {
                        cursor: 'pointer', opacity: 0.8
                    }
                }} onClick={onClick} />
            </Box>
        </>
    )
}

const styles = {
    buttonContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Colors.green,
        color: '#f0f0f0',
        padding: { xs: `6px 10px`, xm: `8px 16px`, md: `8px 16px`, lg: `8px 16px` },
        borderRadius: 2,
        "&:hover": {
            backgroundColor: Colors.green + 'dd',
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
}