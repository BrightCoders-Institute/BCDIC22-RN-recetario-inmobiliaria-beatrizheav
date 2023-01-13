import {
    StyleSheet,
} from "react-native";

export const containers = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingTop: '10%',
        paddingBottom: '5%',
    },
    cardContainer: {
        width: 340,
        height: 160,
        backgroundColor: '#EAFCFA',
        margin: '3%',
        borderRadius: 15,
        padding: 15,
        flexDirection: 'row',
        alignItems: 'center',
    },
    imageContainer: {
        widht: 200,
        height: 105,
        position: 'relative',
        marginRight: 18,
    },
    dataContainer: {
        width: '60%',
        height: 105,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    addressContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    infoContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    infoIndividualContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
})

export const texts = StyleSheet.create({
    textName: {
        fontSize: 17.5,
        fontWeight: '700'
    },
    addressText: {
        fontSize: 15,
        opacity: 0.5,
    },
    infoText: {
        fontSize: 15,
        fontWeight: '700',
        marginLeft: 5,
    },
    priceText: {
        fontSize: 17.5,
        fontWeight: 'bold',
    }
})

export const graphics = StyleSheet.create({
    iconsInfo: {
        color: 'black',
        opacity: 0.5
    },
    imgPlace: {
        width: 105,
        height: 105,
        borderRadius: 10,
    },
})