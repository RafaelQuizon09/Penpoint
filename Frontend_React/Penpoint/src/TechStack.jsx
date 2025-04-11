import ReactIcon from "./assets/logo-react.png"
import Python from "./assets/logo-python.png"
import { motion } from "framer-motion"

function TechStack() {

    return (
        <>
            <div className="flex text-white">
                <div className="flex flex-col">
                    <div className="flex flex-col items-center">
                        <h1 className="chonburi-regular text-white">
                            Tech-Stack
                        </h1>
                        <p className="crimson-text-regular text-4xl px-40 text-center text-white">
                            Penpoint uses the following Tech Stack
                        </p>
                    </div>
                    <div className="flex flex-row">
                        <div className="flex flex-col">
                            <img src={ReactIcon} alt="React Icon" className="lg:block max-w-x self-center tablet-size"/>
                            <p className="crimson-text-regular text-3xl">React.js as the Frontend Framework</p>
                        </div>
                        <div className="flex flex-col">
                            <img src={Python} alt="Python Icon" className="lg:block max-w-xs self-center tablet-size"/>
                            <p className="crimson-text-regular text-3xl">React.js as the Frontend Framework</p>
                        </div>
                    </div>
                </div>
            </div>
            </>
    )
}
export default TechStack