import React, { useState } from "react";

export default function MemeBox({info, deleteMeme}){

    const style={color: info.color}
    const [editMode, setEditMode] = useState(false);

    const initialTextData = {topText: info.topText, bottomText: info.bottomText};

    const [formData, setFormData] = useState(initialTextData);

    function handleChange(event){
        const {name, value} = event.target;
        setFormData(prevData => ({...prevData, [name]: value}))
    }

    function handleEdit(){
        setEditMode(prev => !prev);
    }
    return (
        <div className="memeBox">
            <div className="imgContainer">
                <img src={info.img} alt="meme" />
                <div className="top" style={style}>{formData.topText}</div>
                <div className="bottom" style={style}>{formData.bottomText}</div>
            </div>

            {/*Only displays form if editing*/}
            {editMode && <form>
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
            </form>}
            <div className="memeBoxButtons">
                <button onClick={handleEdit}>{editMode ? "Save" : "Edit"}</button>
                <button onClick={() => deleteMeme(info.id)} >Delete</button>
                
            </div>
        </div>
    )
}