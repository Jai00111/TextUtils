import React from "react"

export default function About(props){
    // const [myStyle,setMyStyle]=useState({
    //     color:"white",
    //     backgroundColor: 'black'
    
    // })
    const myStyle={
        color:props.mode==="dark"?"white":"black",
        backgroundColor:"transparent"
    }
   
    return(
        <div className='container'style={myStyle}>
                            <h1 className='my-3' style={{justifyContent:"center"}}>About us</h1>
                            <div className="accordion" id="accordionExample">
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Analyze your text 
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtils gives you a way to analyze your text quickly and efficiently. Be it word count, character count or</strong>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Free to use
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>TextUtil is a free charactor counter tool that provides instant character cound & word statistics for a given text. TextUtils reports the number of words and characters. Thus it is suitable for writing text with word/ character limit.</strong> 
                    </div>
                    </div>
                </div>
                <div className="accordion-item" style={myStyle}>
                    <h2 className="accordion-header">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                        Browser Compatible
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="accordion-body">
                        <strong>This word counter software works in any web browsers such a chrome, Firefox, Internet Explorer, Safari, Opera. It suits to count  characters in facebook, blog, books,excel document, pdf document, essays, etc.</strong>
                    </div>
                    </div>
                </div>
                </div>
    </div>
    </div>
    )
}
