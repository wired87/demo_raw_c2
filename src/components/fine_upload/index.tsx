/**
 * v0 by Vercel.
 * @see https://v0.dev/t/SKYCnB6RarU
 * Documentation: https://v0.dev/docs#integrating-generated-code-into-your-nextjs-app
 */
import {DefaultBtn} from "@/components/Btns/contact";

export default function Component() {
  return (
    <div className="bg-background p-6 rounded-lg shadow-lg">
      <div className="space-y-4">
        <div>
          <h3 className="text-2xl font-bold">Upload Files</h3>
          <p className="text-muted-foreground">Drag and drop your files or click to select.</p>
        </div>
        <div className="border-2 border-dashed border-primary rounded-lg p-8 flex flex-col items-center justify-center space-y-4 cursor-pointer">
          <UploadIcon className="w-12 h-12 text-primary" />
          <p className="text-primary">Drag and drop files here</p>
          <p className="text-muted-foreground text-sm">or</p>
          <DefaultBtn text={"Select Files (optimal)"} path={}/>
        </div>
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileIcon className="w-6 h-6 text-muted-foreground" />
              <p>example.jpg</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-muted-foreground">50%</p>
              <div className="w-24 h-2 bg-muted rounded-full">
                <div className="h-full bg-primary rounded-full w-1/2" />
              </div>
            </div>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <FileIcon className="w-6 h-6 text-muted-foreground" />
              <p>document.pdf</p>
            </div>
            <div className="flex items-center space-x-2">
              <p className="text-muted-foreground">100%</p>
              <div className="w-24 h-2 bg-muted rounded-full">
                <div className="h-full bg-primary rounded-full w-full" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function FileIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z" />
      <path d="M14 2v4a2 2 0 0 0 2 2h4" />
    </svg>
  )
}


function UploadIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="17 8 12 3 7 8" />
      <line x1="12" x2="12" y1="3" y2="15" />
    </svg>
  )
}