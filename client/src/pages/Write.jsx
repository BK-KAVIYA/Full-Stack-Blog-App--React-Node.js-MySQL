import React,{useState} from 'react'
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

export default function Write() {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [file, setFile] = useState(null);
  const [cat, setCat] = useState('');

  const handleSubmit=()=>{
    e.preventDefault();
  }
  return (
    <div className='add'>
      <div className="content">
        <input type="text" placeholder="Title" onChange={e=>setTitle(e.target.value)}/>
        <div className="editeContainer">
        <ReactQuill className="editor" theme="snow" value={value} onChange={setValue} />
        </div>
      </div>
      <div className="menu">
        <div className="item">
          <h1>Publish</h1>
          <span><b>Status :</b> Draft</span>
          <span><b>Visibility :</b> Public</span>
          <input style={{display:"none"}} type="file" placeholder="Tag" id="file" onChange={e=>setFile(e.target.files[0])}/>
          <label className='file' htmlFor="file">Upload Image</label>
          <div className="buttons">
            <button>Save as Draft</button>
            <button onClick={handleSubmit}>Publish</button>
          </div>
        </div>
        <div className="item">
          <h1>Categories</h1>
          <div className="cat">
            <input type="radio" name="cat" value="art" id="art" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="art">Art</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="science" id="science" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="science">Science</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="technology" id="technology" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="technology">Technology</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="cinema" id="cinema" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="cinema">Cinema</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="design" id="design" onChange={e=>setCat(e.target.value)}/>
            <label htmlFor="design">Design</label>
          </div>
          <div className="cat">
            <input type="radio" name="cat" value="food" id="food"/>
            <label htmlFor="food">Food</label>
          </div>
        </div>
      </div>
    </div>
  )
}
