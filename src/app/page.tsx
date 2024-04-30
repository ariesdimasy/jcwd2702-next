"use client"

import { useState } from "react";
import axios from "axios";

export default function Home() {

  const [files, setFiles] = useState<any>([])

  const handleSubmit = async () => {
    const formData = new FormData()
    formData.append("file", files)
    // formData.append("name","")
    // formData.append("age","0")
    // for(let i = 0; i < files.length; i++) { 
    //   formData.append("files", files[i])
    // }
    
    const res = await axios.post("http://localhost:5678/single-upload", formData, {
      headers: {
        'content-type': 'multipart/form-data'
      }
    })
    alert(JSON.stringify(res.data))
  }

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30">
          Lets Upload
        
        </p>
        
      </div>
      <div>
        <input multiple type='file' name="files" onChange={(e) => {
          setFiles(e.target.files[0])
        }} />
       
      </div>
      <div>
        <button onClick={() => handleSubmit()}> Submit </button>
      </div>
    </main>
  );
}
