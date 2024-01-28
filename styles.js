import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({

    container: {
        display: 'flex',
        backgroundColor: 'rgb(10 10 14)',
        alignItems: 'center',
        justifyContent: 'center',
        width: '100%',
        height: '100%',
    },
    wrapper: {
        backgroundColor: 'rgb(22 22 35)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 25,
        borderRadius: 8,
        width: '70%',
        gap: 30,
        color: 'white',
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        gap: 15,
    },
    button: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#1a56db',
        borderRadius: 8,
        padding: 10,
    },
    text: {
        color: 'white',
    },
    headWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: '70%',
    },
    header: {
        position: 'fixed',
        top: 0,
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',   
        padding: 15,
    },
    wrapperSnack: {
        backgroundColor: 'rgb(22 22 35)',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'stretch',
        justifyContent: 'center',
        padding: 15,
        borderRadius: 8,
        width: '85%',
        gap: 10,
        color: 'white',
    }
});

export { styles };
