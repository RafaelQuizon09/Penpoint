import TechStack from "./TechStack"

function About() {
    return (
        <>
        <div className="min-h-screen p-10 box-border w-screen h-screen flex flex-col items-center justify-center scroll">
          <div className="border-white sticky border-4 md:border-8 w-full h-full box-border px-4 sm:px-10 md:px-40 border-radius" style={{borderRadius: '50px'}}>
          <div className="h-full overflow-y-scroll rounded-[30px] p-4 hide-scrollbar">
          <div className="flex flex-row justify-around items-center text-white crimson-text-semibold text-xl sm:text-2xl md:text-2xl px-8 my-3 sticky">
                <div>About</div>
                <div>Login</div>
                <div>Sign Up</div>
            </div>
            <div className="flex flex-col lg:flex-row items-center justify-center lg:justify-around text-center lg:text-left mt-5 landing-mt-20 ">
              <div className="flex flex-col items-center gap-y-5 x-4">
                <h1 className="chonburi-regular text-white text-center text-size">
                  What is Penpoint?
                </h1>
                <p className="crimson-text-regular text-xl landing-paragraph text-center text-white px-10">Penpoint is a refined space for thoughtful expression—a home for stories, reflections, and ideas that deserve to be read without noise. Designed with elegance and clarity in mind, Penpoint offers a timeless aesthetic and a distraction-free reading experience that puts your words front and center. Whether you're sharing personal essays, in-depth articles, or creative writing</p>
                <button 
                  className="crimson-text-bold text-white px-6 py-2 mt-6 md:mt-12 rounded-md shadow-lg"
                  style={{backgroundColor:'#1E3E69', fontSize:'22px', border:'3px solid #fff'}}
                >
                  Get Started
                </button>
              </div>
            </div>
            <div className="h-[190px]"/>
            <TechStack/>

          </div>
            </div>        
        </div>
      </>
    )
}

export default About

