import './custom.css'
function Mycomponent(){
    const myStyle ={
        color:"purple",
        backgroundColor:"grey",
        fontSize:"25px"
    }
     const myStyle1 ={
        color:"purple",
        backgroundColor:"grey",
        fontSize:"25px"
    }
    return (
        <div>
            {/* inline css */}
            <h1 style={{color:"red",backgroundColor:"yellow"}}>Compponent created by Me....</h1>
            <h3 style={myStyle}>this is text</h3>
            <div className='box'>Lorem ipsum dolor sit amet consectetur, adipisicing eli.</div>
        </div>
    )
}
export default Mycomponent