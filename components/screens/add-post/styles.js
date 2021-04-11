import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    title: {
        marginTop: 10,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.5,
        height: 50,
        fontSize: 24,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign: 'left'
    },
    body: {
        marginTop: 20,
        borderColor: 'black',
        borderRadius: 5,
        borderWidth: 0.5,
        height: 100,
        fontSize: 20,
        fontWeight: 'bold',
        paddingHorizontal: 5,
        textAlign: 'left'
    },
    submitBtn: {
        marginTop: 20,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
    },
    cancelBtn: {
        marginTop: 20,
        borderColor: 'black',
        backgroundColor: 'white',
        borderRadius: 5,
        borderWidth: 1,
    }
})

export default styles;