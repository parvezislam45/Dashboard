import { Axios } from 'axios';
import { saveAs } from 'file-saver';
import fileDownload from 'js-file-download';
import React from 'react';
import { useState } from 'react';

const Download = () => {
    // const fileSave=(e)=>{
    //     e.preventDefault()
    //     Axios({
    //         url:"http://localhost:3000",
    //         method:"GET",
    //         responseType:"blob",
    //     }).then((res)=>{
    //         console.log(res);
    //         fileDownload(res.data,"file Download")
    //     })
    // }
    const [url,setUrl]=useState("")
    function downloadFile(){
        console.log("download hou")
        saveAs(url)
    }
    return (
        <div className='bg-white'>
            <input value={url}onInput={(e)=>setUrl(e.target.value)} placeholder="Type here" class="input w-full max-w-xs" />
            <button onClick={downloadFile} class="btn btn-active btn-secondary">Button</button>
        </div>
    );
};

export default Download;