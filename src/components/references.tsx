"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { references } from "@/lib/data";
import { Quote } from "lucide-react";

export function References() {
  return (
    <SectionWrapper id="references">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Professional <span className="text-gradient">References</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {references.map((ref, index) => (
          <Card key={index} className="glass relative hover:border-primary/50 transition-colors">
            <Quote className="absolute top-6 right-6 w-8 h-8 text-primary/20" />
            
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-xl font-bold text-white">
                {ref.name.charAt(0)}
              </div>
              <div>
                <h3 className="text-lg font-bold">{ref.name}</h3>
                <p className="text-sm text-primary">{ref.institution}</p>
              </div>
            </div>
            
            <p className="text-muted-foreground">
              {ref.position}
            </p>
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
