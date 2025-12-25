"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { projects } from "@/lib/data";
import { Code, Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { ProjectCarousel } from "@/components/project-carousel";

export function Projects() {
  return (
    <SectionWrapper id="projects" className="bg-background/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Featured <span className="text-gradient">Projects</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <Card 
            key={index} 
            className={cn(
              "glass flex flex-col h-full hover:shadow-lg transition-all duration-300 group relative overflow-hidden",
              project.featured ? "md:col-span-2 lg:col-span-2 border-primary/50 bg-primary/5" : "hover:border-primary/30"
            )}
          >
            {project.featured && project.images ? (
              <div className="mb-6 -mx-6 -mt-6">
                <ProjectCarousel images={project.images} />
              </div>
            ) : (
              <>
                {project.featured && (
                  <div className="absolute top-4 right-4">
                    <span className="flex items-center px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold shadow-lg animate-pulse">
                      <Star className="w-3 h-3 mr-1 fill-current" /> Featured
                    </span>
                  </div>
                )}
              </>
            )}
            
            <div className="mb-4">
              {!project.featured && (
                <div className="p-3 bg-primary/10 rounded-lg w-fit mb-4 group-hover:bg-primary/20 transition-colors">
                  <Code className="w-6 h-6 text-primary" />
                </div>
              )}
              
              <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {project.title}
              </h3>
              
              <p className="text-sm text-muted-foreground mb-4">
                {project.year}
              </p>
            </div>
            
            <p className="text-muted-foreground mb-6 flex-grow">
              {project.description}
            </p>
            
            <div className="flex flex-wrap gap-2 mt-auto">
              {project.tech.map((tech, i) => (
                <span
                  key={i}
                  className="px-2 py-1 rounded-md bg-background/50 border border-border text-xs font-medium text-muted-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
