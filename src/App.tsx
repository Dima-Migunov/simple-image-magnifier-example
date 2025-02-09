import ReactImageMagnifier from "simple-image-magnifier/react"
import imagePreview1 from "./assets/image-preview-1.jpg"
import imageOriginal1 from "./assets/image-original-1.jpg"
import imagePreview2 from "./assets/image-preview-2.jpg"
import imageOriginal2 from "./assets/image-original-2.jpg"
import imagePreview3 from "./assets/image-preview-3.jpg"
import imageOriginal3 from "./assets/image-original-3.jpg"
import imagePreview4 from "./assets/image-preview-4.jpg"
import imageOriginal4 from "./assets/image-original-4.jpg"
import { useState } from "react"
import ExampleCode from "./ExampleCode"
import ExampleHtmlCode from "./ExampleHtmlCode"

function App() {
  const previews = [imagePreview1, imagePreview2, imagePreview3, imagePreview4]
  const originals = [
    imageOriginal1,
    imageOriginal2,
    imageOriginal3,
    imageOriginal4,
  ]

  const [imgActive, setImgActive] = useState(0)

  return (
    <div className="flex items-center justify-center w-screen max-w-screen-xl pt-10 pb-20 mx-auto">
      <div className="grid grid-cols-3 gap-5">
        <div className="col-span-3 m-5 prose text-center max-w-none">
          <h1 className="text-2xl md:text-4xl">
            Introducing React "Image Magnifier"
          </h1>
          <p>
            The Ultimate Product Image Zoom Solution
            <span className="ml-1 whitespace-nowrap">
              for Your Online Store!
            </span>
          </p>
        </div>

        <div className="flex flex-col-reverse gap-2 md:flex-row">
          <div className="flex flex-row gap-2 md:flex-col ">
            {previews.map((src, i) => (
              <img
                key={"preview-" + i}
                src={src}
                alt=""
                className="object-cover w-16 h-16 rounded cursor-pointer"
                onClick={() => setImgActive(i)}
              />
            ))}
          </div>

          <ReactImageMagnifier
            srcPreview={previews[imgActive]}
            srcOriginal={originals[imgActive]}
            className="max-w-xs bg-gray-200 rounded-lg md:max-w-none max-h-80 md:max-h-none"
            objectFit="cover"
          />
        </div>

        <div className="col-span-2">
          <ExampleCode />
        </div>

        <div className="col-span-3 m-5 prose text-center max-w-none">
          <hr />
          <h1 className="text-2xl md:text-4xl">
            Introducing "Simple Image Magnifier" HTML+Javascript
          </h1>
          <p>
            The Ultimate Product Image Zoom Solution
            <span className="ml-1 whitespace-nowrap">
              for Your Online Store!
            </span>
          </p>
        </div>

        <div className="col-span-2">
          <ExampleHtmlCode />
        </div>

        <div className="flex flex-col-reverse gap-2 md:flex-row">
          <iframe src="./simple.html"></iframe>
        </div>
      </div>
    </div>
  )
}

export default App
