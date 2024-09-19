const Main=()=>{
    return(
        <div >
            <h1>Learn web devlopment</h1>
            <br/>
            <p>Welcome to the MDN learing area.This get of articles aims to guide complete beginners to web development with all that they need to start coding websites.</p>
            <br/>
            <p>This aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "compfortable".From there, you should be able to start marking youe way, learning from the <a href="#">rest of MDN</a>, and other intermedate to advanced resources that assume a lot of previous knowledge.</p>
            <br/>
            <p>If you are a complete beginner, web development can be challenging-- we will hold your hand and provide wnough detail for you to feel compfortable and learn the topics properly.
                You should feel at home wheteher you a student learning web development(on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just  want to understand more about how web technologies work. 
            </p>

        </div>
    )
}
const MainComainter=()=>{
    return(
        <div id="main-container" style={{backgroundColor:"cyan", height:"550px",width:"600px",margin:"50px 50px 40px 500px",fontSize:"1.2rem",color:"black", textAlign:"center"}}>
            <Main/>
        </div>
    )
}
ReactDOM.render(<MainComainter />,document.querySelector('#react-root'))