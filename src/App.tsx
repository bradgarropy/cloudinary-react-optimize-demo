import "~/src/App.css"

import {AdvancedImage} from "@cloudinary/react"
import {Cloudinary} from "@cloudinary/url-gen"
import {scale} from "@cloudinary/url-gen/actions/resize"

const cloudinary = new Cloudinary({
    cloud: {
        cloudName: "bradgarropy",
    },
})

const images = ["001", "002", "003", "004", "005", "006", "007", "008", "009"]

const App = () => {
    return (
        <>
            <h1>Skylines</h1>

            {/* STEP 1 */}
            {/* <div className="grid">
                {images.map(image => {
                    return <img key={image} src={`/${image}`} />
                })}
            </div> */}

            {/* STEP 2 */}
            {/* <div className="grid">
                {images.map(image => {
                    return (
                        <img
                            key={image}
                            src={`https://res.cloudinary.com/bradgarropy/image/upload/cloudinary-react-optimize-demo/${image}`}
                        />
                    )
                })}
            </div> */}

            {/* STEP 3 */}
            <div className="grid">
                {images.map(image => {
                    const cldImg = cloudinary
                        .image(`cloudinary-react-optimize-demo/${image}`)
                        .format("auto")
                        .quality("auto")
                        .resize(scale().width(400))

                    return <AdvancedImage cldImg={cldImg} />
                })}
            </div>
        </>
    )
}

export default App
