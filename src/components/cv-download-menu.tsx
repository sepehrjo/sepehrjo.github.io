"use client";

import React, { useEffect, useRef, useState } from "react";
import { Download, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface CvDownloadMenuProps {
  buttonLabel: string;
  buttonVariant?: "primary" | "secondary" | "outline" | "ghost";
  buttonSize?: "sm" | "md" | "lg";
  className?: string;
}

export function CvDownloadMenu({
  buttonLabel,
  buttonVariant = "outline",
  buttonSize = "lg",
  className,
}: CvDownloadMenuProps) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const onPointerDown = (e: PointerEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (e.target instanceof Node && !el.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("pointerdown", onPointerDown);
    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, []);

  return (
    <div ref={rootRef} className={cn("relative inline-block", className)}>
      <Button
        type="button"
        variant={buttonVariant}
        size={buttonSize}
        className="group"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <Download className="mr-2 h-5 w-5 group-hover:translate-y-1 transition-transform" />
        {buttonLabel}
        <ChevronDown className="ml-2 h-4 w-4 opacity-70" />
      </Button>

      {open && (
        <div
          role="menu"
          aria-label="Download CV options"
          className="absolute left-1/2 z-20 mt-2 w-56 -translate-x-1/2 overflow-hidden rounded-xl border border-border bg-card shadow-md"
        >
          <a
            role="menuitem"
            href="/Sepehr_Jokanian_CV.pdf"
            download
            className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            Normal CV
          </a>
          <a
            role="menuitem"
            href="/Sepehr_Europass_CV.pdf"
            download
            className="block px-4 py-3 text-sm text-foreground hover:bg-accent/10 transition-colors"
            onClick={() => setOpen(false)}
          >
            Europass CV
          </a>
        </div>
      )}
    </div>
  );
}
