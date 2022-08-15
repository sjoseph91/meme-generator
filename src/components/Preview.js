import React from "react";

export default function Preview({img, refresh, addMeme}){

    const initialFormData = {topText: "", bottomText: ""}
    const [formData, setFormData] = React.useState(initialFormData)
      
    //To toggle font color because of differing meme backgrounds
    const colors= ["black", "white", "gray", "red", "blue", "orange"]
    const [colorIndex, setColorIndex] = React.useState(0);

    const style = {
        color: colors[colorIndex]
    }
    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevData => ({...prevData, [name]: value}))

    }
    function changeColor(){

        setColorIndex(prev => colors[prev + 1] ? prev + 1 : 0)
    }
    function saveMeme(){
        const newMeme = 
            {...formData,
                img: img,
                id: Math.floor(Math.random() * 1000),
                color: colors[colorIndex]
            }
        //inherited through props
        addMeme(newMeme)

        //clear form
        setFormData(initialFormData);
    }

    return (
        <div className="preview">
            <div className="imgContainer">
                <img src={img} alt="preview" />
                <div className="top" style={style}>{formData.topText}</div>
                <div className="bottom" style={style}>{formData.bottomText}</div>
            </div>
            <form>
                <input
                    type="text"
                    name="topText"
                    placeholder="Top Text"
                    value={formData.topText}
                    onChange={handleChange}
                >
                </input>
                <input
                    type="text"
                    name="bottomText"
                    placeholder="Bottom Text"
                    value={formData.bottomText}
                    onChange={handleChange}
                >
                </input>
            </form>
            <div className="previewButtons">
                <button onClick={refresh}>Refresh</button>
                <button onClick={changeColor}>Toggle Color</button>
                <button onClick={saveMeme}>Save Meme</button>
            </div>
        </div>
    )
}