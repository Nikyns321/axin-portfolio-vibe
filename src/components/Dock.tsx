import { cn } from "@/lib/utils";
import { ReactNode, useState } from "react";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

interface DockProps {
  children: ReactNode;
  className?: string;
}

export const Dock = ({ children, className }: DockProps) => {
  const [coolMode, setCoolMode] = useState(false);

  return (
    <div
      className={cn(
        "fixed bottom-8 left-1/2 -translate-x-1/2 bg-primary/80 backdrop-blur-lg rounded-full p-4 flex items-center gap-4",
        coolMode && "animate-float bg-primary",
        className
      )}
      onClick={() => setCoolMode(!coolMode)}
    >
      {children}
    </div>
  );
};

interface DockIconProps {
  href: string;
  children: ReactNode;
  label: string;
}

export const DockIcon = ({ href, children, label }: DockIconProps) => {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group relative"
      aria-label={label}
    >
      <div className="transition-transform group-hover:animate-dock-scale text-white w-8 h-8">
        {children}
      </div>
      <span className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
        {label}
      </span>
    </a>
  );
};