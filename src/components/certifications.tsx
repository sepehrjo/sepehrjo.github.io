"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { certifications } from "@/lib/data";
import { motion } from "framer-motion";
import { Award } from "lucide-react";

export function Certifications() {
  const { pte } = certifications;
  const scores = [
    { label: "Listening", score: pte.listening },
    { label: "Reading", score: pte.reading },
    { label: "Speaking", score: pte.speaking },
    { label: "Writing", score: pte.writing },
  ];

  return (
    <SectionWrapper id="certifications" className="bg-background/50">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Certifications & <span className="text-gradient">Scores</span>
      </h2>
      
      <div className="max-w-3xl mx-auto">
        <Card className="glass p-8">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-4">
              <div className="p-3 bg-primary/10 rounded-full">
                <Award className="w-8 h-8 text-primary" />
              </div>
              <div>
                <h3 className="text-2xl font-bold">PTE Academic</h3>
                <p className="text-muted-foreground">English Proficiency Test</p>
              </div>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-primary">{pte.overall}</div>
              <div className="text-sm text-muted-foreground">Overall Score</div>
            </div>
          </div>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {scores.map((item, index) => (
              <div key={index} className="text-center space-y-3">
                <div className="relative w-24 h-24 mx-auto flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90">
                    <circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      className="text-muted/20"
                    />
                    <motion.circle
                      cx="48"
                      cy="48"
                      r="40"
                      stroke="currentColor"
                      strokeWidth="8"
                      fill="transparent"
                      strokeDasharray={251.2}
                      strokeDashoffset={251.2}
                      initial={{ strokeDashoffset: 251.2 }}
                      whileInView={{ strokeDashoffset: 251.2 - (251.2 * item.score) / 90 }}
                      transition={{ duration: 1.5, delay: index * 0.2 }}
                      className="text-primary"
                      strokeLinecap="round"
                    />
                  </svg>
                  <span className="absolute text-xl font-bold">{item.score}</span>
                </div>
                <span className="text-sm font-medium text-muted-foreground">{item.label}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>
    </SectionWrapper>
  );
}
