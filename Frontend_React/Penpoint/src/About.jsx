import TechStack from "./TechStack"

function About() {
    return (
        <>
        <div className="min-h-screen p-10 box-border w-screen h-lvh flex flex-col items-center justify-center scroll">
          <div className="border-white sticky border-4 md:border-8 w-full h-full box-border px-4 sm:px-10 md:px-40 border-radius" style={{borderRadius: '50px'}}>
            <div className="flex flex-row justify-around items-center text-white crimson-text-semibold text-xl sm:text-2xl md:text-3xl p-8 sticky">
                <div>About</div>
                <div>Login</div>
                <div>Sign Up</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around text-center lg:text-left">
              <div className="flex flex-col items-center ">
                <h1 className="chonburi-regular text-white">
                  What is Penpoint?
                </h1>
                <p className="crimson-text-regular text-4xl px-40 text-center text-white">Penpoint is a refined space for thoughts, stories, and ideas. With a timeless design and distraction-free reading experience, it’s where words take center stage.</p>
              </div>
            </div>
            <TechStack/>
            </div>        
        </div>
      </>
    )
}

export default About