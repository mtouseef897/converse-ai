"use client";
import { uploadToS3 } from "@/lib/s3";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { Inbox } from "lucide-react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { useDropzone } from "react-dropzone";
import toast from "react-hot-toast";
import { Oval } from "react-loader-spinner";
type Props = {};

const FileUpload = (props: Props) => {
  const [loading, setLoading] = useState<boolean>(false);
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
    },
  });

  const { getRootProps, getInputProps } = useDropzone({
    accept: {
      "application/pdf": [".pdf"],
      "application/msword": [".doc", ".docx"],
      "application/vnd.ms-powerpoint": [".ppt", ".pptx"],
    },
    maxFiles: 1,
    onDrop: async (acceptedFiles) => {
      console.log(acceptedFiles);
      setLoading(true);
      const file = acceptedFiles[0];
      if (file.size > 10 * 1024 * 1024) {
        toast.error("file too larges");

        return;
      }
      try {
        const data = await uploadToS3(file);
        if (!data?.file_key || !data.file_name) {
          toast.error("something went wrong");
          return;
        }
        mutate(data, {
          onSuccess: ({ chat_id }) => {
            toast.success("Chat created!");
            setLoading(false);
            router.push(`/chat/${chat_id}`);
          },
          onError: (err) => {
            toast.error("error creating chat");
            setLoading(false);
            console.log(err);
          },
        });
      } catch (error) {
        console.log(error);
      } finally {
      }
    },
  });
  return (
    <div className="p-2 bg-white rounded-xl">
      <div
        {...getRootProps({
          className:
            "m-4 border-dashed border-2 rounded-xl cursor-pointer bg-gray-50 py-8 flex justify-center items-center flex-col",
        })}
      >
        <input {...getInputProps()} />
        <>
          <Inbox className="w-10 h-10 text-pink-500 mb-2" />
          {loading ? (
            <Oval
              visible={true}
              height="40"
              width="40"
              color="#ec4899"
              ariaLabel="oval-loading"
              wrapperStyle={{}}
              wrapperClass=""
            />
          ) : (
            <p className="text-sm text-slate-400 text-blue">Drop pdf here</p>
          )}
        </>
      </div>
    </div>
  );
};

export default FileUpload;
