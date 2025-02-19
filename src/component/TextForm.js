import React,{useState} from 'react'
export default function TextForm(props) {
  const [text, setText]=useState('');

    const handleTrim=()=>{
      let newText=text.split(/[ ]+/);  //rejex btn
      setText(newText.join(" "));
      props.showAlert("the text has been trimed","success");
    }

    const handleClick = () => {
        
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("the text has been in upper-case","success");
      }
    const handleclearClick = () => {
        let newText = " ";
        setText(newText);
        props.showAlert("the text has been cleared","success");
      }
    const handleClick2 = () => {
        
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("the text has been in lowerCase","success");
      }

      const handlesentenceClick = () => {
        
        let newText = text.charAt(0).toUpperCase()+ text.slice(1);
        setText(newText);
        props.showAlert("the text has been in Sentence case","success");
      }
      
      

    const handleonChange=(event)=>{
        
        setText(event.target.value);
    }
    const handleCopy=()=>{
      
      navigator.clipboard.writeText(document.getElementById("myBox").value);

      alert("text copied to clipboard!")
    }    
    
    const handlealternateClick = (event) => {
      let newText = Array.from(text).map((char, index) => {
        if (index % 2 === 0) {
          return char.toUpperCase();
        } else {
          return char;
        }
      }).join('');

      setText(newText);
      props.showAlert("the text has been in alternative-case","success");
    };
    const handleCapitalizedClick=(event)=>{
      let newText=text.split(" ").map(word=>word.charAt(0).toUpperCase()+ word.slice(1)).join(" ");
      setText(newText);
      props.showAlert("the first letter of the sentence has been in upercase","success")
    }
   
    
    
    //text="hloo this is jai here"              worng way to change the text.
    // setText="enter text here again"          this is the right way to change the text.
    return (
        <>
        <div className="container">
        
        <h1>{props.heading}</h1>
        <div className="mb-3">
            {/* <label htmlFor="myBox" className="form-label">{props.TextArea}</label> */}
            <textarea className="form-control" value={text} onChange={handleonChange} style={{ backgroundColor:'transparent', color: props.mode==='dark'?'white':'black'}} id="myBox" rows="8" ></textarea>
        </div>
        <div className='btnFlex'>
        
        <button className='btn btn-primary mx-2' onClick={handleClick}>Convert into Upercase</button>
        <button className='btn btn-primary mx-2' onClick={handleClick2}>Convert into lowercase</button>
        <button className='btn btn-primary mx-2' onClick={handleclearClick}>clear text</button>
        <button className='btn btn-primary mx-2' onClick={handlesentenceClick}>sentence case</button>
        <button className='btn btn-primary mx-2' onClick={handleCapitalizedClick}>Capitalized case</button>
        <button className='btn btn-primary mx-2' onClick={handlealternateClick}>aLtErNaTiNg case</button>
        <button className='btn btn-primary mx-2' onClick={handleCopy}>Copy Text</button>
        <button className='btn btn-primary mx-2' onClick={handleTrim}>Trim Text</button>
        
        </div>
        </div>
        <div className='container my-3'>
            <h2> Your Text summary</h2>
            <p> {text.split(" ").length} words and {text.split("").length}charectors are in the text your entered</p>
            <p>{0.008 * text.split(" ").length} minutes to read</p>
            <h2>Preview</h2>
            <p>{text===""?"enter something into the above textarea to preview": text}</p>
        </div>
        </>
  )
}
