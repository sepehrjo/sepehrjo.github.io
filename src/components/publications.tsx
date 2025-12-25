"use client";

import { SectionWrapper } from "@/components/ui/section-wrapper";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { publications } from "@/lib/data";
import { BookOpen, ExternalLink } from "lucide-react";

export function Publications() {
  return (
    <SectionWrapper id="publications">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
        Research & <span className="text-gradient">Publications</span>
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {publications.map((pub, index) => (
          <Card key={index} className="glass flex flex-col h-full hover:border-accent/50 transition-colors group">
            <div className="flex items-start justify-between mb-4">
              <BookOpen className="w-8 h-8 text-accent mb-4" />
              {pub.status && (
                <span className="px-2 py-1 rounded-full bg-accent/10 text-accent text-xs font-medium">
                  {pub.status}
                </span>
              )}
            </div>
            
            <h3 className="text-lg font-bold mb-3 group-hover:text-accent transition-colors">
              {pub.title}
            </h3>
            
            <p className="text-sm text-muted-foreground mb-2">
              <span className="font-semibold text-foreground">Authors:</span> {pub.authors}
            </p>
            
            <p className="text-sm text-muted-foreground mb-6 flex-grow">
              <span className="font-semibold text-foreground">Journal:</span> {pub.journal}
            </p>
            
            {pub.link && (
              <a href={pub.link} target="_blank" rel="noopener noreferrer" className="mt-auto">
                <Button variant="outline" size="sm" className="w-full">
                  Read Paper <ExternalLink className="ml-2 w-4 h-4" />
                </Button>
              </a>
            )}
          </Card>
        ))}
      </div>
    </SectionWrapper>
  );
}
