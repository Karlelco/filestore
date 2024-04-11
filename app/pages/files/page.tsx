"use client";
import NewFile from "@/app/custom/addFile";
import { api } from "@/convex/_generated/api";
import { useKindeBrowserClient } from "@kinde-oss/kinde-auth-nextjs";
import { useQuery } from "convex/react";

export default function Component() {
  const { user } = useKindeBrowserClient();



    const files =
      useQuery(api.myFunctions.getFilesByDirectoryId, {
        directoryI: user?.id as string,
      }) 
      console.log(files);

    return (
      <main className="flex flex-1 items-center justify-center rounded-lg border border-dashed shadow-sm">
        <div className="flex flex-col items-center gap-1 text-center">
          {files ? (
            <h3 className="text-2xl font-bold tracking-tight">
              <div>
                <NewFile />
              </div>
              <div className="grid grid-cols-2 gap-3">
                {files?.map((file: any) => (
                  <div key={file._id} className="bg-gray-200 p-4 rounded-lg">
                    <h3 className="text-lg font-semibold">{file.filename}</h3>
                    <p className="text-sm text-gray-500">{file.storageId}</p>
                  </div>
                ))}
              </div>
            </h3>
          ) : (
            <div>
              <h3 className="text-2xl font-bold tracking-tight">
                You have no Files
              </h3>
              <p className="text-sm text-gray-500">
                You can start by adding some Files.
              </p>
              <div>
                <NewFile />
              </div>
            </div>
          )}
        </div>
      </main>
    );
}
      
       
        
