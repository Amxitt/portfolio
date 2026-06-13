import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import ProjectCard from "./components/ProjectCard";
import Topbar from "./components/Topbar";
import Reveal from "./components/Reveal";


export default function Home() {
  return (
    <div className="min-h-screen bg-black text-white">
      <main className="max-w-6xl mx-auto px-8 ">
      
    <Topbar/>
    <Reveal>  <HeroSection/></Reveal>
   

      <div id="selected_work_title" className="opacity: 1; transform: none;"> 
        <h3 className=" text-sm uppercase tracking-[0.3em] text-neutral-500 md:text-xl">Selected Works</h3>
      </div>

<div id="projects" className="flex flex-col gap-8">
  <Reveal>
     <ProjectCard title="SketchSpace"
       description="Collaborative whiteboard with authenticated WebSocket connections, room-based synchronization, and real-time drawing updates."
       highlights={[
      "Real-time WebSocket collaboration",
      "JWT-authenticated socket connections",
      "Room-based shared canvases",
    ]}
    techStack={[
    "Node.js",
    "TypeScript",
    "WebSockets",
    "PostgreSQL",
    "Nextjs",
    "TailwindCSS",
  ]} 
  githubURL="http://github.com/Amxitt/SketchSpace"
  LiveURL="http://sketchspace.13.206.68.125.nip.io" 
  imageURL="/projects/SketchSpace.png"/>
  </Reveal>

<Reveal>
  <ProjectCard 
  title="Brain Share"
  description="A second-brain platform for saving tweets, videos, and documents. Users can organize content into a personal knowledge base and share it publicly through unique links."
  highlights={[
    "JWT-authenticated personal knowledge spaces",
  "Public brain sharing through unique hash-based URLs",
  "Dynamic embedding of tweet images and YouTube thumbnails",
  ]}
  techStack={[
     "Node.js",
  "Express",
  "TypeScript",
  "MongoDB",
  "React",
  "TailwindCSS",
  "JWT",
  "Zod",
  ]}
  
  githubURL="https://github.com/Amxitt/second-brain"
  imageURL="/projects/sb-3.png"
  />
  </Reveal>
</div>
     
       
      </main>
      <Reveal>  <Footer/></Reveal>
      
    </div>
  );
}