export const styles = { 
    container: {
      paddingTop:10,
      flexDirection: "column",
      alignItems: "center",
      width: "100%",
      height: "100%",
      backgroundColor: '#D9D9D9',
      gap:10
    },
    row:{
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: "center",
      width: "90%",
      marginBottom: 5,
      height: "20%"
    },
    field:{
      height:"100%"
    },
    goldenInput: {
      width: "100%",
      height: "90%",
      backgroundColor: "#F5D061",
      borderColor: "#000000",
      borderWidth: 1,
      borderRadius: 7,
      paddingHorizontal: 2,
      color: "black"
  },
  normalInput: {
    width: "100%",
    height: "90%",
    backgroundColor: "#fff",
    borderColor: "#000000",
    borderWidth: 1,
    borderRadius: 7,
    paddingHorizontal: 2,
    color: "black"
  },
  dropdown: {
    width: '100%',
    borderWidth: 1,
    borderColor: 'gray',
    alignItems:"center",
    justifyContent:"center",
    height: "100%",
    zIndex:1,
    borderRadius: 5,
    backgroundColor:"#fff"
  },
  dropdownMenu: {
    width: '100%', 
    zIndex:3
  },
  dropdownText:{
    fontSize:15,
    marginRight:'10%'
  }
}