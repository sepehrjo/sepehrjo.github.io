"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { experience } from "@/lib/data";
import { Briefcase, Calendar } from "lucide-react";

export function Experience() {
  return (
    <SectionWrapper id="experience" className="bg-background/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Work <span className="text-gradient">Experience</span>
      </h2>
      
      <div className="relative border-l border-border ml-4 md:ml-8 space-y-12">
        {experience.map((exp, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-0 bg-background border-2 border-secondary rounded-full p-1">
              <Briefcase className="w-4 h-4 text-secondary" />
            </div>
            
            <Card className="glass hover:border-secondary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{exp.role}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  {exp.year}
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-secondary mb-4">{exp.company}</h4>
              
              <p className="text-muted-foreground mb-4">{exp.description}</p>
              
              <div className="flex flex-wrap gap-2">
                {exp.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="px-3 py-1 rounded-full bg-secondary/10 text-secondary text-xs font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
