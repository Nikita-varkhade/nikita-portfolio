import React from 'react';
import { motion } from 'framer-motion';
import { Code2, Clock, Trophy, TrendingUp } from 'lucide-react';

/* =========================================================================
   Official Brand Logos & Specialized Icons (Exact Brand Colors & Geometry)
   ========================================================================= */

// 1. React.js — Official Cyan Atom (#61DAFB)
function ReactLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="-11.5 -10.23174 23 20.46348" fill="none">
      <circle cx="0" cy="0" r="2.2" fill="#61DAFB" />
      <g stroke="#61DAFB" strokeWidth="1.2">
        <ellipse rx="11" ry="4.2" />
        <ellipse rx="11" ry="4.2" transform="rotate(60)" />
        <ellipse rx="11" ry="4.2" transform="rotate(120)" />
      </g>
    </svg>
  );
}

// 2. JavaScript — Official Yellow Square & Black JS Badge (#F7DF1E)
function JavaScriptLogo() {
  return (
    <svg className="w-5 h-5 rounded-[4px] transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <rect width="24" height="24" rx="3.5" fill="#F7DF1E" />
      <path
        d="M7.2 16.6c.5.8 1.2 1.3 2 1.3 1.1 0 1.8-.6 1.8-2V10.6h1.9v5.3c0 2.4-1.4 3.5-3.7 3.5-1.7 0-2.8-.8-3.4-2l1.4-.8zm7.5.3c.7.4 1.5.7 2.3.7 1 0 1.6-.4 1.6-1.1 0-.7-.6-1-1.7-1.4-1.6-.6-2.6-1.5-2.6-2.8 0-1.6 1.3-2.8 3.3-2.8 1.1 0 2 .3 2.6.7l-.6 1.4c-.5-.3-1.2-.6-2-.6-1 0-1.5.5-1.5 1 0 .6.5.9 1.6 1.3 1.7.6 2.7 1.4 2.7 2.9 0 1.7-1.3 2.9-3.6 2.9-1.3 0-2.3-.4-3-1l.8-1.2z"
        fill="#000000"
      />
    </svg>
  );
}

// 3. Tailwind CSS — Official Cyan Waves (#38BDF8)
function TailwindLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="#38BDF8">
      <path d="M12.001 4.8c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624C13.666 10.618 15.027 12 18.001 12c3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C16.335 6.182 14.974 4.8 12.001 4.8zm-6 7.2c-3.2 0-5.2 1.6-6 4.8 1.2-1.6 2.6-2.2 4.2-1.8.913.228 1.565.89 2.288 1.624 1.177 1.194 2.538 2.576 5.512 2.576 3.2 0 5.2-1.6 6-4.8-1.2 1.6-2.6 2.2-4.2 1.8-.913-.228-1.565-.89-2.288-1.624C10.335 13.382 8.974 12 6.001 12z" />
    </svg>
  );
}

// 4. HTML5 & CSS3 — Official HTML5 (#E34F26) and CSS3 (#1572B6) Shields
function HtmlCssLogo() {
  return (
    <div className="flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
      {/* HTML5 */}
      <svg className="w-4 h-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" viewBox="0 0 24 24" fill="none">
        <path d="M2 3l2 16.5 8 2.5 8-2.5L22 3H2z" fill="#E34F26" />
        <path d="M12 4.5v15.9l6.5-2 1.6-13.9H12z" fill="#EF652A" />
        <path d="M6 7.5h12l-.3 2.5H8.7l.3 2.5h8.4l-.7 7.5-4.7 1.3-4.7-1.3-.3-3.8h2.3l.2 2 2.5.7 2.5-.7.3-3.2H6.5L6 7.5z" fill="#FFFFFF" />
      </svg>
      {/* CSS3 */}
      <svg className="w-4 h-5 drop-shadow-[0_1px_2px_rgba(0,0,0,0.4)]" viewBox="0 0 24 24" fill="none">
        <path d="M2 3l2 16.5 8 2.5 8-2.5L22 3H2z" fill="#1572B6" />
        <path d="M12 4.5v15.9l6.5-2 1.6-13.9H12z" fill="#33A9DC" />
        <path d="M6 7.5h12l-.3 2.5H8.7l.3 2.5h8.4l-.7 7.5-4.7 1.3-4.7-1.3-.3-3.8h2.3l.2 2 2.5.7 2.5-.7.3-3.2H6.5L6 7.5z" fill="#FFFFFF" />
      </svg>
    </div>
  );
}

// 5. Vite — Official Purple Shield & Yellow Lightning (#BD34FE / #FFDD35)
function ViteLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 32 32" fill="none">
      <defs>
        <linearGradient id="viteGradSkills" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#41D1FF" />
          <stop offset="100%" stopColor="#BD34FE" />
        </linearGradient>
        <linearGradient id="viteBoltSkills" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#FFEA83" />
          <stop offset="100%" stopColor="#FFDD35" />
        </linearGradient>
      </defs>
      <path d="M29.5 5.5L16.8 28.5c-.4.7-1.2.7-1.6 0L2.5 5.5c-.5-.9.3-1.9 1.3-1.7l12.2 2.5 12.2-2.5c1-.2 1.8.8 1.3 1.7z" fill="url(#viteGradSkills)" />
      <path d="M21.5 4.5L12 18h4.5l-2.5 7.5 9-13.5h-4.5l3-7.5z" fill="url(#viteBoltSkills)" />
    </svg>
  );
}

// 6. Java — Official Coffee Cup with Steam (#5382A1 / #E76F00)
function JavaLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <path d="M8.5 18.5c2.5.5 5.5.5 7.5-1 0 0-.7 1.2-3.2 1.7-2.7.5-5.3-.2-4.3-.7z" fill="#5382A1" />
      <path d="M7 21c3 .5 6.5.5 9-1 0 0-1 1.2-3.8 1.8-3 .5-6.2-.2-5.2-.8z" fill="#5382A1" />
      <path d="M12.5 1c-1.5 2-2.5 3.5-.5 5.5 2.5 2.5 1.5 4.5 0 6 2.5-2.5 2.5-4.5.5-6.5-1.5-1.5-1.5-3 0-5z" fill="#E76F00" />
      <path d="M15.5 3c-1.2 1.5-2 2.7-.4 4.3 2 2 1.2 3.5 0 4.7 2-2 2-3.5.4-5-1.2-1.2-1.2-2.5 0-4z" fill="#E76F00" />
      <path d="M6 14.5c0 0-.5 2 2.5 2.5 3.5.5 6.5.2 8.5-.7.5-.2 1-.7 1-1.3-.2.3-.5.5-.9.7-2 .7-5 .9-8 .5-2.5-.3-3.1-1.7-3.1-1.7z" fill="#E76F00" />
      <path d="M17.5 13.5c1.5 0 2.5-.5 2.5-1.5s-1-1.5-2.5-1.5h-.5v3h.5zm-2-4.5h2.5c2.5 0 4 1.2 4 3s-1.5 3-4 3h-2.5v-6z" fill="#5382A1" />
    </svg>
  );
}

// 7. Spring & Spring Boot — Official Green Leaf (#6DB33F)
function SpringLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <path d="M21.5 3.5c-4.8-.4-11.2 2-15 6-3.8 4-4.8 9.5-3 12 2.5 1.8 8 .8 12-3 4-3.8 6.4-10.2 6-15zm-8.8 12.8c-2.4 2.4-5.8 3.2-7.5 1.7-1.5-1.7-.7-5.1 1.7-7.5 2.4-2.4 5.8-3.2 7.5-1.7 1.5 1.7.7 5.1-1.7 7.5z" fill="#6DB33F" />
      <path d="M9.8 13.2c-1.5 1.5-3.6 2-4.7 1.1-1-1.1-.4-3.2 1.1-4.7 1.5-1.5 3.6-2 4.7-1.1 1 1.1.4 3.2-1.1 4.7z" fill="#FFFFFF" opacity="0.45" />
    </svg>
  );
}

// 8. Hibernate — Official Hexagon Badge with Gold 'H' (#BCAE79 / #F4B41A)
function HibernateLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <path d="M12 2.5l7.5 4.3v9.4L12 20.5l-7.5-4.3V6.8L12 2.5z" fill="#BCAE79" fillOpacity="0.2" stroke="#BCAE79" strokeWidth="1.2" />
      <path d="M8 8v8M16 8v8M8 12h8" stroke="#F4B41A" strokeWidth="2.2" strokeLinecap="round" />
    </svg>
  );
}

// 9. REST APIs — Clean Modern Network API Badge (#00B4D8 / #009688)
function RestApiLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <rect x="2" y="4.5" width="20" height="15" rx="4" fill="#00B4D8" fillOpacity="0.15" stroke="#00B4D8" strokeWidth="1.5" />
      <path d="M6.5 14.5V9.5h1.8a1.4 1.4 0 011.4 1.4v0a1.4 1.4 0 01-1.4 1.4H6.5m1.8 0l1.5 2.2" stroke="#00B4D8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M12.5 14.5V9.5h2.2M12.5 12h1.8M16.5 9.5H19v5h-2.5" stroke="#00B4D8" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

// 10. Node.js & Laravel — Official Node Green (#5FA04E) & Laravel Red (#FF2D20)
function NodeLaravelLogo() {
  return (
    <div className="flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
      {/* Node.js */}
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#5FA04E">
        <path d="M12 2l9 5.2v10.4l-9 5.2-9-5.2V7.2L12 2zm0 2.3L4.8 8.5v7l7.2 4.2 7.2-4.2v-7L12 4.3z" />
        <path d="M11 8.5h2v7h-2z" fill="#5FA04E" />
      </svg>
      {/* Laravel */}
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#FF2D20">
        <path d="M19.7 7.7l-7.2-4.1c-.3-.2-.7-.2-1 0L4.3 7.7c-.3.2-.5.5-.5.9v8.3c0 .3.2.7.5.9l7.2 4.1c.3.2.7.2 1 0l7.2-4.1c.3-.2.5-.5.5-.9V8.6c0-.4-.2-.7-.5-.9zm-7.7 11.2l-6-3.4V9.8l6 3.4v5.7zm1-5.7l6-3.4v5.7l-6 3.4v-5.7zm5-4.5l-5 2.8-5-2.8 5-2.8 5 2.8z" />
      </svg>
    </div>
  );
}

// 11. MySQL Database — Official MySQL Dolphin (#00758F & #F29111)
function MySqlLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <path d="M18.5 7.5C16 4.5 12 4 9 5c-3.5 1.2-5 4-5.5 7.5-.5 3.5 1 6.5 4 7.5 3.5 1 7-.5 9-3 1.5-2 2-4.5 2-9.5z" fill="#00758F" />
      <path d="M16 8c-1.5-1.5-3.5-1.5-5-.5-1.5 1-2 2.5-2 4 0 1.5.5 3 2 3.5 1.5.5 3 0 4-1.5" stroke="#FFFFFF" strokeWidth="1.2" strokeLinecap="round" />
      <path d="M19 16c-1 1-3 1.5-4.5 1.5 2.5 1 5 .5 6.5-1-.7 0-1.5-.2-2-.5z" fill="#F29111" />
    </svg>
  );
}

// 12. OOPs & MVC — Modular Programming Architecture (#8B5CF6)
function OopsMvcLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#A78BFA" strokeWidth="1.5">
      <rect x="3" y="3" width="7" height="7" rx="1.5" fill="#8B5CF6" fillOpacity="0.3" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" fill="#8B5CF6" fillOpacity="0.3" />
      <rect x="8.5" y="14" width="7" height="7" rx="1.5" fill="#8B5CF6" fillOpacity="0.4" />
      <path d="M6.5 10v2a2 2 0 002 2h7a2 2 0 002-2v-2M12 14v-2" strokeDasharray="1.5 1.5" />
    </svg>
  );
}

// 13. Responsive Web Design — Multi-device Screens (#10B981)
function ResponsiveLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="1.5">
      <rect x="2" y="3" width="13" height="10" rx="1.5" fill="#10B981" fillOpacity="0.2" />
      <path d="M5.5 16h6M8.5 13v3" />
      <rect x="14.5" y="7" width="7.5" height="14" rx="1.5" fill="#10B981" fillOpacity="0.3" />
      <circle cx="18.25" cy="18" r="0.75" fill="#10B981" />
    </svg>
  );
}

// 14. Data Structures — Connected Network Graph (#F59E0B)
function DataStructuresLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <circle cx="12" cy="5" r="2.5" fill="#F59E0B" />
      <circle cx="6" cy="17" r="2.5" fill="#F59E0B" />
      <circle cx="18" cy="17" r="2.5" fill="#F59E0B" />
      <path d="M12 7.5L6 14.5M12 7.5L18 14.5" stroke="#F59E0B" strokeWidth="1.6" strokeLinecap="round" />
    </svg>
  );
}

// 15. Git, GitHub & GitLab — Official Git (#F05032), GitHub (#FFFFFF), GitLab (#FC6D26)
function GitGithubGitlabLogo() {
  return (
    <div className="flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
      {/* Git */}
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#F05032">
        <path d="M21.6 10.9L13.1 2.4c-.6-.6-1.5-.6-2.1 0L8.7 4.7l2.7 2.7c.6-.2 1.4 0 1.9.5.5.5.7 1.3.5 1.9l2.6 2.6c.6-.2 1.4 0 1.9.5.7.7.7 1.9 0 2.7s-1.9.7-2.7 0c-.6-.6-.7-1.4-.4-2.1l-2.4-2.4v5.3c.2.2.4.5.4.9 0 .8-.7 1.5-1.5 1.5s-1.5-.7-1.5-1.5c0-.6.4-1.2.9-1.4V8.5c-.5-.2-.9-.8-.9-1.4 0-.4.2-.7.4-.9L7.8 3.8 2.4 9.2c-.6.6-.6 1.5 0 2.1l8.5 8.5c.6.6 1.5.6 2.1 0l8.5-8.5c.6-.6.6-1.5.1-2.4z" />
      </svg>
      {/* GitHub */}
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FFFFFF">
        <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.53 1.032 1.53 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" />
      </svg>
      {/* GitLab */}
      <svg className="w-3.5 h-3.5" viewBox="0 0 24 24" fill="#FC6D26">
        <path d="M22.65 14.39L12 22.13 1.35 14.39a.84.84 0 01-.3-.94l1.22-3.78 2.44-7.51c.06-.17.26-.26.43-.19.06.02.1.07.13.12l2.31 7.08h8.84l2.31-7.08c.07-.2.3-.29.5-.21.08.03.14.09.16.16l2.44 7.51 1.22 3.78c.1.31 0 .68-.3.94z" />
      </svg>
    </div>
  );
}

// 16. VS Code & Eclipse — VS Code Blue (#007ACC) & Eclipse Purple/Orange (#2C2255 / #F7941E)
function VsCodeEclipseLogo() {
  return (
    <div className="flex items-center gap-1.5 transition-transform duration-200 group-hover:scale-105">
      {/* VS Code */}
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="#007ACC">
        <path d="M17.4 2.2L12 6.8 5.7 2 2.5 3.5v17L5.7 22l6.3-4.8 5.4 4.6L21.5 20V4l-4.1-1.8zM5 16.5V7.5L8.9 12 5 16.5zm12.4 1.3L12 13.7v-3.4l5.4-4.1v11.6z" />
      </svg>
      {/* Eclipse */}
      <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none">
        <circle cx="12" cy="12" r="9" fill="#2C2255" />
        <path d="M7 12c0-2.8 2.2-5 5-5 1.5 0 2.8.6 3.7 1.6-1-.5-2.2-.8-3.5-.8-3.5 0-6.4 2.8-6.4 6.3 0 1.4.5 2.8 1.3 3.8-.8-1.5-1.1-3.3-1.1-4.9z" fill="#F7941E" />
        <path d="M8 11h8v2H8z" fill="#FFFFFF" opacity="0.3" />
      </svg>
    </div>
  );
}

// 17. Postman — Official Orange Astronaut (#FF6C37)
function PostmanLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 32 32" fill="none">
      <circle cx="16" cy="16" r="14" fill="#FF6C37" />
      <path d="M11 20l10-8-5 11-2-4-3 1z" fill="#FFFFFF" />
      <circle cx="21" cy="12" r="1.5" fill="#FFFFFF" />
    </svg>
  );
}

// 18. Maven — Official Apache Maven Wing (#C71A36 & #2962FF)
function MavenLogo() {
  return (
    <svg className="w-5 h-5 transition-transform duration-200 group-hover:scale-110" viewBox="0 0 24 24" fill="none">
      <path d="M18.5 2L8.5 12.5l3.5 1.5L22 4.5 18.5 2z" fill="#C71A36" />
      <path d="M6 14.5l-3.5 3 5 2.5 4.5-4-6-1.5z" fill="#C71A36" opacity="0.8" />
      <path d="M8.5 12.5L2 17l6.5 5 3.5-6.5-3.5-3z" fill="#2962FF" />
    </svg>
  );
}

/* =========================================================================
   Categories Data with Soft Brand-Colored Border Hover Highlights
   ========================================================================= */

const skillCategories = [
  {
    title: 'Frontend Development',
    subtitle: 'Client-side technologies & UI frameworks',
    skills: [
      { name: 'React.js', icon: ReactLogo, hoverBorder: 'hover:border-[#61DAFB]/40' },
      { name: 'JavaScript', icon: JavaScriptLogo, hoverBorder: 'hover:border-[#F7DF1E]/40' },
      { name: 'Tailwind CSS', icon: TailwindLogo, hoverBorder: 'hover:border-[#38BDF8]/40' },
      { name: 'HTML5 & CSS3', icon: HtmlCssLogo, hoverBorder: 'hover:border-[#E34F26]/40' },
      { name: 'Vite', icon: ViteLogo, hoverBorder: 'hover:border-[#BD34FE]/40' },
    ],
  },
  {
    title: 'Backend & APIs',
    subtitle: 'Server logic, architectures & REST services',
    skills: [
      { name: 'Java', icon: JavaLogo, hoverBorder: 'hover:border-[#E76F00]/40' },
      { name: 'Spring & Spring Boot', icon: SpringLogo, hoverBorder: 'hover:border-[#6DB33F]/40' },
      { name: 'Hibernate', icon: HibernateLogo, hoverBorder: 'hover:border-[#F4B41A]/40' },
      { name: 'REST APIs', icon: RestApiLogo, hoverBorder: 'hover:border-[#00B4D8]/40' },
      { name: 'Node.js & Laravel', icon: NodeLaravelLogo, hoverBorder: 'hover:border-[#5FA04E]/40' },
    ],
  },
  {
    title: 'Database & Concepts',
    subtitle: 'Data storage, engineering & design patterns',
    skills: [
      { name: 'MySQL Database', icon: MySqlLogo, hoverBorder: 'hover:border-[#00758F]/40' },
      { name: 'OOPs & MVC', icon: OopsMvcLogo, hoverBorder: 'hover:border-[#8B5CF6]/40' },
      { name: 'Responsive Web Design', icon: ResponsiveLogo, hoverBorder: 'hover:border-[#10B981]/40' },
      { name: 'Data Structures', icon: DataStructuresLogo, hoverBorder: 'hover:border-[#F59E0B]/40' },
    ],
  },
  {
    title: 'Tools & Workflow',
    subtitle: 'Version control, development tools & build systems',
    skills: [
      { name: 'Git, GitHub & GitLab', icon: GitGithubGitlabLogo, hoverBorder: 'hover:border-[#F05032]/40' },
      { name: 'VS Code & Eclipse', icon: VsCodeEclipseLogo, hoverBorder: 'hover:border-[#007ACC]/40' },
      { name: 'Postman', icon: PostmanLogo, hoverBorder: 'hover:border-[#FF6C37]/40' },
      { name: 'Maven', icon: MavenLogo, hoverBorder: 'hover:border-[#C71A36]/40' },
    ],
  },
];

const stats = [
  { icon: Code2, value: '10+', label: 'Technologies' },
  { icon: Clock, value: '2+', label: 'Years Experience' },
  { icon: Trophy, value: '15+', label: 'Projects Built' },
  { icon: TrendingUp, value: '100%', label: 'Continuous Learning' },
];

export default function Skills() {
  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-6 md:px-12">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/10 border border-primary/20 mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" />
            <span className="text-primary font-medium tracking-wider text-xs uppercase">Tech Stack</span>
          </div>
          <motion.h2
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35 }}
            className="text-3xl md:text-5xl font-bold tracking-tight mb-4 text-white"
          >
            Skills &amp; Technologies
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.35, delay: 0.05 }}
            className="text-white/60 text-base md:text-lg max-w-xl mx-auto leading-relaxed"
          >
            Technologies I use to build reliable digital experiences.
          </motion.p>
        </div>

        {/* Grouped Minimal Technology Grid with Official Logos */}
        <div className="space-y-10 mb-16">
          {skillCategories.map((category) => (
            <div key={category.title}>
              {/* Compact Category Label */}
              <div className="flex items-center gap-3 mb-4">
                <span className="text-xs font-semibold uppercase tracking-wider text-white/50">
                  {category.title}
                </span>
                <div className="h-px bg-white/5 flex-1" />
                <span className="text-xs text-white/30 hidden sm:inline">
                  {category.subtitle}
                </span>
              </div>

              {/* Individual Technology Tiles */}
              <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3">
                {category.skills.map((skill) => {
                  const Logo = skill.icon;
                  return (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.3 }}
                      className={`flex items-center gap-3 p-3 sm:p-3.5 rounded-xl bg-surface/40 border border-white/5 ${skill.hoverBorder} hover:bg-surface/80 hover:-translate-y-0.5 transition-all duration-200 group cursor-default shadow-sm`}
                    >
                      {/* Subtle, elegant logo container with soft border & dark background */}
                      <div className="h-9 min-w-9 px-1.5 rounded-xl bg-white/[0.04] border border-white/10 flex items-center justify-center shrink-0 group-hover:bg-white/[0.08] group-hover:border-white/20 transition-all duration-200 shadow-sm">
                        <Logo />
                      </div>
                      <span className="text-xs sm:text-sm font-medium text-white/85 group-hover:text-white transition-colors duration-150 leading-snug truncate">
                        {skill.name}
                      </span>
                    </motion.div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Minimal Metrics Bar */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.35 }}
          className="glass-card border border-white/5 rounded-2xl p-6 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {stats.map((stat, i) => {
            const StatIcon = stat.icon;
            return (
              <div key={i} className="flex items-center gap-3.5">
                <div className="w-8 h-8 rounded-lg bg-primary/10 border border-primary/20 flex items-center justify-center text-primary shrink-0">
                  <StatIcon className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xl md:text-2xl font-bold text-white tracking-tight leading-tight">{stat.value}</div>
                  <div className="text-xs text-white/50 font-medium">{stat.label}</div>
                </div>
              </div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
