import { ArrowUp } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-10 px-4 bg-card border-t border-border mt-12 pt-8">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
        {/* Left: copyright */}
        <p className="text-sm text-muted-foreground text-center md:text-left">
          &copy; {new Date().getFullYear()} tarunp032.co. All rights reserved.
        </p>

        {/* Optional: Tech stack / Powered by */}
        <p className="text-sm text-muted-foreground text-center">
          Built with ❤️ using React & TailwindCSS
        </p>

        {/* Right: Back to top */}
        <a
          href="#hero"
          className="p-2 rounded-full bg-primary/10 hover:bg-primary/20 text-primary transition-colors"
        >
          <ArrowUp size={20} />
        </a>
      </div>
    </footer>
  );
};
