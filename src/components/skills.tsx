"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { skills } from "@/lib/data";
import { motion } from "framer-motion";
import { Cpu, Code2, BookOpen } from "lucide-react";

export function Skills() {
  return (
    <SectionWrapper id="skills">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Technical <span className="text-gradient">Skills</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Programming Languages */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-primary/10 rounded-lg">
              <Code2 className="w-6 h-6 text-primary" />
            </div>
            <h3 className="text-xl font-bold">Languages</h3>
          </div>
          
          <div className="space-y-4">
            {skills.languages.map((skill, index) => (
              <div key={index} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}</span>
                </div>
                <div className="h-2 bg-secondary/10 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ 
                      width: skill.level === "Advanced" ? "90%" : "70%" 
                    }}
                    transition={{ duration: 1, delay: index * 0.1 }}
                    className="h-full bg-gradient-to-r from-primary to-secondary rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Frameworks & Tools */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-secondary/10 rounded-lg">
              <Cpu className="w-6 h-6 text-secondary" />
            </div>
            <h3 className="text-xl font-bold">AI/ML Frameworks</h3>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {skills.frameworks.map((framework, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ delay: index * 0.05 }}
                className="px-4 py-3 rounded-xl bg-card border border-border hover:border-secondary/50 hover:shadow-md transition-all cursor-default"
              >
                {framework}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Specialized Courses */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 mb-6">
            <div className="p-2 bg-accent/10 rounded-lg">
              <BookOpen className="w-6 h-6 text-accent" />
            </div>
            <h3 className="text-xl font-bold">Specialized Courses</h3>
          </div>
          
          <div className="space-y-3">
            {skills.courses.map((course, index) => (
              <motion.div
                key={index}
                initial={{ x: -20, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
                className="flex items-center gap-3 p-3 rounded-lg bg-accent/5 border border-transparent hover:border-accent/20 transition-colors"
              >
                <div className="w-2 h-2 rounded-full bg-accent" />
                <span className="text-sm font-medium">{course}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
