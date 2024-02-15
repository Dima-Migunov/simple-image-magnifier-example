import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import { useEffect, useRef } from 'react'

export default function ExampleCode() {
    const codeRef = useRef(null)

    useEffect(() => {
        if (codeRef?.current) {
            hljs.registerLanguage('javascript', javascript)
            hljs.highlightBlock(codeRef.current)
        }
    }, [codeRef])

    return (
        <pre>
            <code ref={codeRef}>
                {`import { useState } from 'react'
import ReactImageMagnifier from 'simple-image-magnifier/react'

import imagePreview1 from './assets/image-preview-1.jpg'
import imageOriginal1 from './assets/image-original-1.jpg'
import imagePreview2 from './assets/image-preview-2.jpg'
import imageOriginal2 from './assets/image-original-2.jpg'
import imagePreview3 from './assets/image-preview-3.jpg'
import imageOriginal3 from './assets/image-original-3.jpg'
import imagePreview4 from './assets/image-preview-4.jpg'
import imageOriginal4 from './assets/image-original-4.jpg'

function App() {
    const previews = [imagePreview1, imagePreview2, imagePreview3, imagePreview4]
    const originals = [imageOriginal1, imageOriginal2, imageOriginal3, imageOriginal4]

    const [imgActive, setImgActive] = useState(0)

    return (
        <div className='flex flex-col items-center justify-center w-screen'>
            <div className='m-5 prose text-center'>
                <h1 className='text-4xl'>Introducing "Image Magnifier"</h1>
                <p>
                    The Ultimate Product Image Zoom Solution
                    for Your Online Store!
                </p>
            </div>

            <div className='flex flex-row gap-2'>
                <div className='flex flex-col gap-2'>
                    {previews.map((src, i) => (
                        <img
                            key={'preview-' + i}
                            src={src}
                            alt=''
                            className='object-cover w-16 h-16 rounded cursor-pointer'
                            onClick={() => setImgActive(i)}
                        />
                    ))}
                </div>

                <ReactImageMagnifier
                    srcPreview={previews[imgActive]}
                    srcOriginal={originals[imgActive]}
                    className='bg-gray-200 rounded-lg'
                />
            </div>
        </div>
    )
}

export default App`}
            </code>
        </pre>
    )
}
