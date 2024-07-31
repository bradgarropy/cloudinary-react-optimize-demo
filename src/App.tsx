import "~/src/App.css"

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
                    return <img key={image} src={`/${image}.jpg`} />
                })}
            </div> */}

            {/* STEP 2 */}
            {/* <div className="grid">
                {images.map(image => {
                    return (
                        <img
                            key={image}
                            src={`https://res.cloudinary.com/bradgarropy/image/upload/cloudinary-react-optimize-demo/${image}.jpg`}
                        />
                    )
                })}
            </div> */}

            {/* STEP 3 */}
            <div className="grid">
                {images.map(image => {
                    const imageUrl = cloudinary
                        .image(`cloudinary-react-optimize-demo/${image}.jpg`)
                        .format("auto")
                        .quality("auto")
                        .resize(scale().width(400))
                        .toURL()

                    return <img key={image} src={imageUrl} />
                })}
            </div>
        </>
    )
}

export default App
