// src/lib/skillIcons.js

import { FaHtml5, FaCss3Alt, FaJs, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { SiTailwindcss, SiExpress, SiMongodb, SiGithub } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";

export const skillIcons = {
  "HTML/CSS": () => (
    <div className="flex gap-1 text-xl">
      <FaHtml5 className="text-orange-500" />
      <FaCss3Alt className="text-blue-500" />
    </div>
  ),
  JavaScript: () => <FaJs className="text-yellow-400 text-xl" />,
  React: () => <FaReact className="text-cyan-400 text-xl animate-spin-slow" />,
  "Tailwind CSS": () => <SiTailwindcss className="text-sky-400 text-xl" />,
  "Node.js": () => <FaNodeJs className="text-green-600 text-xl" />,
  Express: () => <SiExpress className="text-gray-500 text-xl" />,
  MongoDB: () => <SiMongodb className="text-green-700 text-xl" />,
  "Git/GitHub": () => (
    <div className="flex gap-1 text-xl">
      <FaGitAlt className="text-orange-500" />
      <SiGithub className="text-white" />
    </div>
  ),
  "VS Code": () => <VscVscode className="text-blue-500 text-xl" />,
};
