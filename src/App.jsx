import AnimatedCursor from "react-animated-cursor";
import { GoArrowRight } from "react-icons/go";

export default function App() {
  return (
    <main className="bg-slate-950 text-white font-outfit">
      <main className="mx-auto space-y-28 max-w-full xl:max-w-7xl px-5 xl:px-0 overflow-x-hidden">
        <nav className="flex items-center justify-between pt-7">
          <img src="/MotionArtEffect-logo.png" alt="MotionArtEffect-logo" className="w-1/2 sm:w-auto" />
          <button className="bg-white hover:bg-transparent text-black hover:text-white border-2 border-white duration-200 rounded-md pt-2 pb-2.5 px-7 text-lg hidden sm:block">Purchase Now</button>
        </nav>

        <section className="relative text-center sm:text-start space-y-7 sm:space-y-0">
          <section className="w-fit top-0 text-xl font-sora space-y-2.5 static sm:absolute mx-auto sm:mx-0">
            <p className="text-gradient font-semibold w-52 sm:w-36">Transform Your Website</p>
            <p className="font-light text-base w-52 sm:w-[8.5rem]">With Motion Art Effect</p>
          </section>
          <section className="mx-auto space-y-5 w-full sm:w-1/2">
            <h1 className="font-sora leading-tight font-medium text-4xl sm:text-5xl xl:text-[4rem]">
              Attract Your Visitors Attention With Colorful <span className="text-gradient">Motion Art Effect</span>
            </h1>
            <p className="text-slate-400 text-lg font-light w-full xl:w-[90%]">Unleash the power of creativity with Motion Art for Elementor - your ultimate solution for seamlessly integrating captivating animations into your website.</p>
          </section>
        </section>

        <section className="space-y-12">
          <h2 className="text-center text-[22px]">Trusted by thousands of users around the world</h2>
          <section className="flex flex-col md:flex-row items-center justify-between space-y-10 md:space-y-0">
            <div className="flex items-center space-x-2.5">
              <img src="/motionarteffect-img2.png" alt="motionarteffect-img2" />
              <div className="flex flex-col space-y-4">
                <img src="/motionarteffect-img4.png" alt="motionarteffect-img4" />
                <span className="text-slate-400">4.5 Score, 9 Reviews</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <img src="/motionarteffect-img1.png" alt="motionarteffect-img1" />
              <div className="flex flex-col space-y-4">
                <img src="/motionarteffect-img4.png" alt="motionarteffect-img4" />
                <span className="text-slate-400">4.5 Score, 9 Reviews</span>
              </div>
            </div>
            <div className="flex items-center space-x-2.5">
              <img src="/motionarteffect-img3.png" alt="motionarteffect-img3" />
              <div className="flex flex-col space-y-4">
                <img src="/motionarteffect-img4.png" alt="motionarteffect-img4" />
                <span className="text-slate-400">4.5 Score, 9 Reviews</span>
              </div>
            </div>
          </section>
        </section>

        <section className="font-sora flex flex-col md:flex-row items-center justify-between text-center sm:text-start space-y-5 md:space-y-0">
          <div className="space-y-5 w-full md:w-3/5">
            <h1 className="text-2xl sm:text-[2.5rem] leading-snug">Turn Your Cursor Into A Colorful Magic Wand & Charm Your Visitors</h1>
            <p className="text-slate-400 font-light leading-relaxed pb-2.5">Motion Art for Elementor is a groundbreaking plugin that empowers you to effortlessly infuse your website with visually stunning motion art elements.</p>
            <button className="bg-gradient-reverse text-xl font-light pt-3 pb-3.5 px-7 rounded-2xl flex items-center space-x-2.5 mx-auto md:mx-0">
              <span>Purchase From Envato</span>
              <GoArrowRight className="text-2xl" />
            </button>
          </div>
          <img src="/motionarteffect-img5.png" alt="motionarteffect-img5" />
        </section>

        <section className="space-y-12 font-sora">
          <h1 className="text-2xl sm:text-[2.5rem] leading-snug text-center w-full sm:w-[55%] mx-auto">Apply On Any Section Or Enable For Whole Page</h1>
          <div className="flex flex-col sm:flex-row space-y-5 sm:space-y-0 space-x-0 sm:space-x-5 text-center sm:text-start">
            <div className="space-y-5 bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden p-7 h-fit">
              <h2 className="text-[22px]">Apply On Section</h2>
              <p className="text-slate-400 font-light leading-relaxed">Apply on section is a game-changer, offering an unparalleled way to manage applications directly from your website.</p>
              <img src="/motionarteffect-img11.png" alt="motionarteffect-img11" className="w-full" />
            </div>
            <div className="space-y-5 bg-gradient-to-b from-slate-950 to-slate-900 border-2 border-slate-800 rounded-2xl overflow-hidden p-7 h-fit relative top-0 sm:top-[4.5rem]">
              <h2 className="text-[22px]">Apply On Page</h2>
              <p className="text-slate-400 font-light leading-relaxed">Take your website to new heights with Motion Art for Elementor. Embrace the power of motion and animation.</p>
              <img src="/motionarteffect-img10.png" alt="motionarteffect-img10" className="w-full" />
            </div>
          </div>
        </section>

        <section className="pt-0 sm:pt-[4.5rem]">
          <div className="flex flex-col items-center justify-between px-5 py-12 text-center border-2 border-slate-800 bg-gradient-to-b from-slate-950 to-slate-900 rounded-2xl font-sora">
            <h2 className="text-[22px] mb-5">Supported by All Popular Browsers</h2>
            <p className="text-slate-400 font-light leading-relaxed w-full sm:w-[35%] mb-7">Rest assured, Motion Art is designed to be compatible with all major web browsers.</p>
            <img src="/motionarteffect-img8.png" alt="motionarteffect-img8" />
          </div>
        </section>

        <section className="font-sora">
          <h1 className="text-2xl sm:text-[2.5rem] leading-snug text-center w-full sm:w-1/2 mb-5 mx-auto">An All-Round Plugin With Powerful Features</h1>
          <p className="text-slate-400 font-light leading-relaxed w-full sm:w-1/2 mb-10 text-center mx-auto">
            Whether you're a seasoned web designer or just starting out, Motion Art for Elementor seamlessly integrates with the Elementor platform, providing you with a seamless and intuitive experience.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 p-7 pt-0 rounded-2xl border-2 border-slate-800">
              <img src="/motionarteffect-img9.png" alt="motionarteffect-img9" />
              <h2 className="text-2xl mb-4 mt-2">Light Weight</h2>
              <p className="text-slate-400 font-light leading-relaxed">Motion Art for Elementor is designed to be lightweight.</p>
            </div>
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 p-7 pt-0 rounded-2xl border-2 border-slate-800">
              <img src="/motionarteffect-img6.png" alt="motionarteffect-img6" />
              <h2 className="text-2xl mb-4 mt-2">100% Responsive</h2>
              <p className="text-slate-400 font-light leading-relaxed">Create a consistent visual experience across all devices.</p>
            </div>
            <div className="bg-gradient-to-b from-slate-950 to-slate-900 p-7 pt-0 rounded-2xl border-2 border-slate-800 md:col-span-2 lg:col-span-1">
              <img src="/motionarteffect-img7.png" alt="motionarteffect-img7" />
              <h2 className="text-2xl mb-4 mt-2">User Friendly Interface</h2>
              <p className="text-slate-400 font-light leading-relaxed">Ensure a smooth experience for both applicants and administrators.</p>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gradient py-4 mt-28 text-slate-300 text-[15px]">
        <div className="flex flex-col-reverse sm:flex-row justify-between items-center max-w-full xl:max-w-7xl px-5 xl:px-0 mx-auto">
          <p className="text-center">© 2023 Copywrite. All rights reserved by QodeMatrix</p>
          <div className="space-x-5 mb-5 sm:mb-0">
            <a href="">Documentation</a>
            <a href="">Support</a>
          </div>
        </div>
      </footer>
      <AnimatedCursor
        innerSize={7}
        outerSize={50}
        innerScale={1}
        outerScale={2}
        outerAlpha={0}
        hasBlendMode={true}
        innerStyle={{
          backgroundColor: "white",
        }}
        outerStyle={{
          border: "2px solid white",
        }}
      />
    </main>
  );
}
