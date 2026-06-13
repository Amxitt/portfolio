export default function Topbar(){
    return   <div id="top-bar" className="pt-8 
          flex justify-between items-center border-b border-white/10"> 
            <div className="text-xl md:text-4xl font-normal tracking-tight">
                Amrit.
            </div>
            <div id="right-container" className="text-[13px] md:text-[18px] flex justify-between gap-20 text-white/60 font-light">
                  <a href="https://x.com/amxit_" className="hover:text-white transition:0.5s cursor-pointer">
                  @amxit_
                </a>
                              <a href="https://github.com/Amxitt" className="hover:text-white transition:2s cursor-pointer">
                  github
                </a>
                            <a href="mailto:me.amritt@gmail.com" className="hover:text-white transition:0.5s cursor-pointer">
                  me.amritt@gmail.com
                </a>
    
            </div>
          </div>
}