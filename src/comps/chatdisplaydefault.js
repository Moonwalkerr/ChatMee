const ChatDisplayDefault = () => {
    return ( <div style={{
        flex:1,
        padding:"100px",
        textAlign:"center",
        backgroundColor:"white",
    }} className="chat__defaultDisplay">
        <img 
        style={{
            height:"100%",
            objectFit:"contain"}}
        className="image" src="https://raw.githubusercontent.com/Moonwalkerr/FolksChat/test/public/FolksChatFavicon.png" alt="" />
    </div> );
}
 
export default ChatDisplayDefault;