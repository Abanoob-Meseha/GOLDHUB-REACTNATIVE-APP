import {colors} from '../../constants/theme.json'
export const styles = {
    container: {
        flexDirection: "column",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
    },
    title: {
        color: "#fff",
        fontSize: 25,
        fontWeight: "bold"
    },
    box: {
        width: "90%",
        minHeight: 80,
        backgroundColor: colors.primary,
        marginVertical: 2,
        borderColor: "#fff",
        borderWidth: 3,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    inputContainer: {
        paddingHorizontal:'10%',
        flexDirection: "row",
        justifyContent: "space-around",
        width: "100%",
        paddingHorizontal: 10,
        // marginTop: 5,
    },
    input:{
        width:"40%",
        fontSize:20,
        marginBottom:5,
    },
    
    borderLessInput: {
        width: "100%",
        height: 40,
        backgroundColor: "#ffffff",
        borderRadius: 7,
        paddingHorizontal: 10,
    }
};