export default function HeroSection(){
    return         <div id="herosection" className="min-h-[800px] flex flex-col pt-8 ">
          <div className="flex flex-col md:flex-row flex-1 p-4 md:gap-42">
                <div id="left-container" className="
                    flex-1
                    flex
                    items-center
                    justify-center
                    text-center md:text-left
                    ">
                 <div className="text-3xl md:text-5xl leading-tight">
                    <div className="text-white">
                      Building backend systems,
                      <br />
                      real-time applications,
                    </div>

                    <div className="text-white/50">
                      and cloud infrastructure.
                    </div>
              </div>
</div>
    <div id="right-container" className="
flex-1
flex
flex-col
items-center md:items-start
justify-center
text-lg md:text-2xl
mt-12 md:mt-0
">
                 <div className="space-y-6 text-white/80">
                  <div>
                        <h3 className="text-xl font-medium text-white">
                          Full-Stack Developer
                        </h3>
                  </div>

                  <div>
                      <p className="text-sm uppercase tracking-wider text-white/50">
                        Focused on
                      </p>

              <div className="mt-2 space-y-1">
                  <p>Backend Engineering</p>
                  <p>System Design</p>
                  <p>Cloud Infrastructure</p>
                </div>
            </div>

  <div>
    <p className="text-sm uppercase tracking-wider text-white/50">
      Open to
    </p>

    <div className="mt-2 space-y-1">
      <p>Internships</p>
      <p>Freelance Work</p>
      <p>Software Engineering Roles</p>
    </div>
  </div>
</div>
          
                 </div>
          </div>
          <div
                      id="tech-stacks"
                      className="py-8"
                    >
                      <div className="text-xl md:text-3xl flex justify-center">Tech Stack</div>

                    <div className="pt-6">
                        <p className="text-[13px]  md:text-sm uppercase tracking-wider text-white/50 flex justify-center">Backend</p>
                    
                      <div className="
                      flex
                      flex-wrap
                      gap-4 md:gap-6
                      justify-center
                      text-white/90
                      text-sm md:text-base
                      ">
                      <span>Nodejs</span>
                      <span>Express</span>
                      <span>TypeScript</span>
                      <span>WebSockets</span>
                      <span>PostgreSQL</span>
                      <span>MongoDB</span>
                      </div>
                    </div>

                    <div className="pt-6">
                        <p className="text-[13px]  md:text-sm uppercase tracking-wider text-white/50 flex justify-center">Frontend</p>
                    
                      <div className="
flex
flex-wrap
gap-4 md:gap-6
justify-center
text-white/90
text-sm md:text-base
">
                      <span>React</span>
                      <span>NextJs</span>
                      <span>Tailwindcss</span>
                      </div>
                    </div>

                  <div className="pt-6">
                        <p className="text-[13px]  md:text-sm uppercase tracking-wider text-white/50 flex justify-center">Devops</p>
                    
                      <div className="
flex
flex-wrap
gap-4 md:gap-6
justify-center
text-white/90
text-sm md:text-base
">
                      <span>AWS</span>
                      <span>Docker</span>
                      <span>Nginx</span>
                      </div>
                    </div>
            </div>

      </div>
}


