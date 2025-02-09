import hljs from 'highlight.js/lib/core'
import javascript from 'highlight.js/lib/languages/javascript'
import 'highlight.js/styles/atom-one-dark.css'
import { useEffect, useRef } from 'react'

export default function ExampleHtmlCode() {
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
                {`<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Example</title>

    <style>
        .container {
            display: flex;
            flex-direction: column-reverse;
            align-items: center;
            justify-content: center;
            width: 100%;
        }

        .product-wrapper{
            display: flex;
            position: relative;
            overflow: hidden;
            width: 100%;
            height: 100%
        }

        .product-thumbs{
            display: flex;
            flex-direction: column;
            gap: 0.5rem;
        }

        .product-image-preview{
            position: relative;
            z-index: 1;
            object-fit: cover;
            width: 100%;
            height: 100%;
            transition-property: opacity;
            transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
            transition-duration: 300ms;
        }

        .product-image-original{
            position: absolute;
            max-width: none;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="product-wrapper">
            <img src="./image-preview-1.jpg" class="product-image-preview" alt='' />
            <img src="./image-original-1.jpg" class="product-image-original" alt='' />
        </div>
    </div>
    <script type="module">
        import ImageMagnifier from "./simple-image-magnifier.js"
        
        const refreshImage = ImageMagnifier(
            '.product-wrapper',
            '.product-image-preview',
            '.product-image-original'
        )
    </script>
</body>
</html>`}
            </code>
        </pre>
    )
}
