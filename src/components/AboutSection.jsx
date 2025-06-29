import { Briefcase, Code, User } from "lucide-react";
import resume from "../assets/resume.pdf";

export const AboutSection = () => {
  return (
    <section id="about" className="py-24 px-4 relative">
      {" "}
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          About <span className="text-primary"> Me</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-semibold">
              Passionate Full Stack Developer & Tech Explorer
            </h3>

            <p className="text-muted-foreground">
              With hands-on experience building full-stack web applications
              using the MERN stack, I specialize in crafting fast, scalable, and
              responsive solutions. I focus on clean architecture, performance,
              and accessibility to deliver exceptional user experiences.
            </p>

            <p className="text-muted-foreground">
              I’m driven by the thrill of solving real-world problems through
              code. Constantly learning and adapting, I stay up-to-date with the
              latest tools, frameworks, and best practices shaping today’s
              digital landscape.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center">
              <a href="#contact" className="cosmic-button">
                {" "}
                Get In Touch
              </a>

              <a
                href={resume}
                download
                className="px-6 py-2 rounded-full border border-primary text-primary hover:bg-primary/10 transition-colors duration-300"
              >
                Download CV
              </a>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6">
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Code className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg"> Web Development</h4>
                  <p className="text-muted-foreground">
                    Developing modern full-stack web apps using React, Node.js,
                    Express, and MongoDB with a focus on performance and
                    scalability.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <User className="h-6 w-6 text-primary" />
                </div>
                <div className="text-left">
                  <h4 className="font-semibold text-lg">UI/UX Development</h4>
                  <p className="text-muted-foreground">
                    Building intuitive, accessible, and responsive user
                    interfaces with React that enhance user satisfaction and
                    engagement.
                  </p>
                </div>
              </div>
            </div>
            <div className="gradient-border p-6 card-hover">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-full bg-primary/10">
                  <Briefcase className="h-6 w-6 text-primary" />
                </div>

                <div className="text-left">
                  <h4 className="font-semibold text-lg">
                    Backend & API Integration
                  </h4>
                  <p className="text-muted-foreground">
                    Creating robust RESTful APIs with Node.js and Express,
                    integrating databases with MongoDB, and managing full-stack
                    data flow.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
