"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { education } from "@/lib/data";
import { GraduationCap, Calendar } from "lucide-react";

export function Education() {
  return (
    <SectionWrapper id="education">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        <span className="text-gradient">Education</span>
      </h2>
      
      <div className="relative border-l border-border ml-4 md:ml-8 space-y-12">
        {education.map((edu, index) => (
          <div key={index} className="relative pl-8 md:pl-12">
            {/* Timeline Dot */}
            <div className="absolute -left-3 top-0 bg-background border-2 border-primary rounded-full p-1">
              <GraduationCap className="w-4 h-4 text-primary" />
            </div>
            
            <Card className="glass hover:border-primary/50 transition-colors">
              <div className="flex flex-col md:flex-row md:items-center justify-between mb-4">
                <h3 className="text-xl font-bold text-foreground">{edu.degree}</h3>
                <div className="flex items-center text-muted-foreground text-sm mt-2 md:mt-0">
                  <Calendar className="w-4 h-4 mr-2" />
                  {edu.year}
                </div>
              </div>
              
              <h4 className="text-lg font-medium text-primary mb-4">{edu.institution}</h4>
              
              <ul className="space-y-2">
                {edu.details.map((detail, i) => (
                  <li key={i} className="text-muted-foreground flex items-start">
                    <span className="mr-2 mt-1.5 w-1.5 h-1.5 bg-accent rounded-full flex-shrink-0" />
                    {detail}
                  </li>
                ))}
              </ul>
            </Card>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
