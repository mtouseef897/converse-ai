'use client'
import { uploadToS3 } from '@/lib/s3'
import { useMutation } from '@tanstack/react-query'
import axios from 'axios'
import { Inbox } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useDropzone } from 'react-dropzone'
import toast from 'react-hot-toast'
type Props={}

const FileUpload =(props:Props ) =>{
   // const {} = React.useState(false)
   const router = useRouter();
   const { mutate } = useMutation({
    mutationFn: async ({
      file_key, 
      file_name,
    }: {
      file_key: string;
      file_name: string;
    }) => {
      const response = await axios.post("/api/create-chat", {
        file_key,
        file_name,
      });
      return response.data;
    }
  });
  
    const {getRootProps ,getInputProps} = useDropzone({
        accept: {"application/pdf" : [".pdf"] ,
        "application/msword": [".doc", ".docx"],
         "application/vnd.ms-powerpoint": [".ppt", ".pptx"]},
        maxFiles:1,
onDrop:async (acceptedFiles) =>{
    console.log(acceptedFiles);
    const file =acceptedFiles[0];
    if (file.size > 10*1024 *1024 ) {
        toast.error('file too larges')
        
        return;
    }
    try{
        const data =await uploadToS3(file);
        if(!data?.file_key || !data.file_name){
            toast.error("something went wrong")   
            return;
        }
        mutate(data, {
          onSuccess: ({ chat_id }) => {
            toast.success("Chat created!");
            router.push(`/chat/${chat_id}`);
          },
            onError:(err) =>{
                toast.error('error creating chat')
                console.log(err);
                
            }
        })
    }catch(error){
console.log(error)
    }
    

}
    
    })
    return  <div className='p-2 bg-white rounded-xl'>
    

    <div {...getRootProps({
className:"m-4 border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col"
    }
    
    )}> 
        
        <input {...getInputProps()}/>
        <>
        <Inbox className='w-10 h-10 text-pink-500'/>
        <p className='mt-2 text-sm text-slate-400 text-blue'>Drop pdf here</p>
        </>
    </div>
</div>;
}

export default FileUpload;