import ReactIcon from "./assets/logo-react.png"
import Python from "./assets/logo-python.png"
import { motion } from "framer-motion"

function TechStack() {

    return (
        <>
        <motion.div
        initial={{ opacity: 0, y: 75 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease: "easeIn" }}
        viewport={{ once: true }}
        >
        <div className="flex text-white mb-5 text-center justify-center items-center margin-bottom">
            <div className="flex flex-col">
                <div className="flex flex-col items-center">
                    <h1 className="chonburi-regular text-white">
                        Tech-Stack
                    </h1>
                    <p className="crimson-text-regular text-xl lg:text-4xl px-40 text-center text-white">
                        Penpoint uses the following Tech Stack
                    </p>
                </div>
                <div className="flex flex-col lg:flex-row gap-12 lg:gap-40 justify-center items-center">
                    <div className="flex flex-col items-center">
                        <img src={ReactIcon} alt="React Icon" className="lg:block max-w-x self-center max-h-60"/>
                        <p className="crimson-text-regular text-xl lg:text-3xl break-words whitespace-normal max-w-40">
                            React.js as the Frontend Framework
                        </p>
                    </div>
                    <div className="flex flex-col items-center">
                        <img src={Python} alt="Python Icon" className="lg:block max-w-xs self-center max-h-60"/>
                        <p className="crimson-text-regular text-xl lg:text-3xl break-words whitespace-normal max-w-50">
                            Python/Django as the Backend Framework
                        </p>
                    </div>
                </div>
            </div>
        </div>
        </motion.div>
            </>
    )
}
export default TechStack