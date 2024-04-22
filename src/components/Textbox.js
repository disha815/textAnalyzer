import React, { useState } from 'react'

export default function Textbox(props) {
    const handleOnChange = (event) => {
        setText(event.target.value)
    }
    const handleUpClick = () => {
        let upperText = text.toUpperCase(); 
        setText(upperText)
    }
    const handleDownClick = () => {
        let lowerText = text.toLowerCase(); 
        setText(lowerText)
    }
    const handleOnClick = () => {
        let ClearText = ''
        setText(ClearText)
    }
    const handleOnExtraSpace = () => {
        let newString = text.replace(/\s+/g,' ').trim();
        setText(newString)
    }
    const handleOnCopy = () => {
        let copyText = document.getElementById('exampleFormControlTextarea1')

        copyText.select(); 
        copyText.setSelectionRange(0,99999); 

        navigator.clipboard.writeText(copyText.value); 
    }
    const [text, setText] = useState('Hey! You can type here');
    return (
        <>
            <form>
                <h2>{props.heading}</h2>
                <div>
                    <div className="form-group">
                        <label htmlFor="exampleFormControlTextarea1" className='py-3'>Entering the text</label>
                        <textarea className="form-control" id="exampleFormControlTextarea1" rows="10"  value={text} onChange={handleOnChange}></textarea>
                    </div>
                    <div>
                    <button className="btn btn-primary mx-1 my-3" type="button" onClick={handleUpClick}>Convert to Uppercase</button>
                    <button className="btn btn-primary mx-1 my-3" type="button" onClick={handleDownClick}>Convert to Lowercase</button>
                    <button className="btn btn-primary mx-1 my-3" type="button" onClick={handleOnClick}>Clear Text</button>
                    <button className="btn btn-primary mx-1 my-3" type="button" onClick={handleOnExtraSpace}>Remove Extra Space</button>
                    <button className="btn btn-primary mx-1 my-3" type="button" onClick={handleOnCopy}>Copy</button>
                    </div>

                </div>
                <div>
                <h2>Text Summary:</h2>
                <p>{text.split(/\s+/).length} words and {text.length} characters.</p>
                <h4>Time to read: </h4><span>{(text.split(' ').length*2.33).toFixed(2)} Seconds</span>
                </div>
            </form >

            <h4>Preview:</h4>
            <p>{text}</p>
        </>
    )
}
