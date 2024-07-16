import React, {useState} from 'react'


export default function TextForm(props) {
    const [text, setText] = useState('');

    const handleUpClick=()=> {
       console.log("Button Was Clicked" + text);
       let newText = text.toUpperCase();
       setText(newText);
       props.showAlert("Converted To Uppercase! ","success");
    }
    const handleLOClick=()=> {
        console.log("Button Was Clicked" + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted To Lowercase! ","success");
     }


    const handleOnChange =(event) =>{
        console.log("On Change");
        setText(event.target.value);

    }
    const handleClearClick=()=>{
        let newText=""
        setText(newText)
        props.showAlert("Oopps Cleared! ","success");
    }

    const handleCopy = () => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        document.getSelection().removeAllRanges();
        props.showAlert("Copid To Clipboard! ","success");
    }

    const handleExtraSpaces=()=>{
        let newText=text.split(/[ ]+/);
        setText(newText.join(" "))
        props.showAlert("Removed Extra Spaces ","success");
    }

    return (
        <>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#062D5E' }}>
                <h1>{props.heading}</h1>
                <div className="mb-3">
                    <textarea className="form-control" value={text} onChange={handleOnChange}
                        style={{
                            backgroundColor: props.mode === 'dark' ? 'gray' : 'white',
                            color: props.mode === 'dark' ? 'white' : '#062D5E'
                        }}
                        id="myBox" rows="8"></textarea>
                </div>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>Convert to Uppercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLOClick}>Convert to Lowercase</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopy}>Copy Text</button>
                <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleExtraSpaces}>Remove Extra Spaces</button>
            </div>
            <div className="container" style={{ color: props.mode === 'dark' ? 'white' : '#062D5E' }}>
                <h1>Your Text Summary</h1>
                <p>{text.split(/\s+/).filter(word => word.length > 0).length} words and {text.replace(/\s+/g, '').length} characters</p>
                <p>Time to Read {0.008 * text.split(/\s+/).filter(word => word.length > 0).length} minutes</p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : "Nothing To Preview...!"}</p>
            </div>
        </>


    )
}
