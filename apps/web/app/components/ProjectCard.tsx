import { ArrowIcon } from "./arrowicon";

type PropType = {
    title: string,
    description: string,
    highlights: string[],
    techStack: string[],
    imageURL?: string,
    githubURL: string,
    LiveURL?: string
}

export default function ProjectCard({title, description, highlights, techStack, imageURL, githubURL, LiveURL} : PropType){
    return <div className="max-w-9xl  min-h-[400px] mt-4 flex">
            <a href={LiveURL} className="group relative flex-1 overflow-hidden cursor-pointer rounded-xl
    border border-white/10">
            
  <img
    src={imageURL}
    className="w-full h-full object-cover
transition-transform duration-500
group-hover:scale-105 "
  />

  <div className="
    absolute inset-0
    bg-black/30
    opacity-0
    group-hover:opacity-100
    transition-all
    flex items-center justify-center
  ">
    <div className="font-normal rounded-xl p-2 px-4 bg-white text-black">
      View Live
    </div>
  </div>
</a>
            <div id="content of project" className="pl-5 flex flex-1 flex-col gap-2">
                <a href={githubURL} className="group flex gap-2">
                    
                    <h1 className="text-3xl">{title}</h1>
                    <ArrowIcon/>
                
                </a>
            <p className="pt-4 text-white/70">{description}</p>
            <div id="highilights" className="pt-4 flex flex-col
            gap-2">
                Highlights
                 {
                highlights.map((highlight, index) => (
                    <div key={highlight} className="flex gap-1 flex items-center">
                    <span className="text-neutral-500 min-w-[30px] p-2">
                        {String(index + 1).padStart(2, "0")}.
                    </span>

                    <p>{highlight}</p>
                    </div>
                ))
                }

            </div>
                <div id="technologies" className="mt-8">
                    <h3 className="text-white/70 mb-3">
                        Tech Stack
                    </h3>

                    <div className="flex flex-wrap gap-2">
                        {techStack.map((tech) => (
                        <span
                            key={tech}
                            className="
                            px-3 py-1
                            text-sm
                            border border-white/10
                            rounded-full
                            text-white/80
                            hover:border-white/30
                            transition-colors
                            "
                        >
                            {tech}
                        </span>
                        ))}
    </div>
</div>
            </div>
    </div>
}


