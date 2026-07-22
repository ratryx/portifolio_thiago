import type { ComponentType } from 'react';
import { Database } from 'lucide-react';
import { DiJava } from 'react-icons/di';
import {
  SiC,
  SiCplusplus,
  SiDjango,
  SiFastapi,
  SiFlask,
  SiFramer,
  SiGit,
  SiGithub,
  SiJavascript,
  SiNodedotjs,
  SiNumpy,
  SiPandas,
  SiPostgresql,
  SiPytest,
  SiReact,
  SiSharp,
  SiTailwindcss,
  SiVite,
} from 'react-icons/si';

interface IconProps {
  className?: string;
  color?: string;
  'aria-hidden'?: boolean;
}

export interface TechIconDefinition {
  Icon: ComponentType<IconProps>;
  color: string;
}

export const techIcons: Record<string, TechIconDefinition> = {
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  c: { Icon: SiC, color: '#A8B9CC' },
  cpp: { Icon: SiCplusplus, color: '#659AD2' },
  csharp: { Icon: SiSharp, color: '#9B4F96' },
  java: { Icon: DiJava, color: '#ED8B00' },
  vite: { Icon: SiVite, color: '#A855F7' },
  react: { Icon: SiReact, color: '#61DAFB' },
  node: { Icon: SiNodedotjs, color: '#5FA04E' },
  postgres: { Icon: SiPostgresql, color: '#4169E1' },
  sql: { Icon: Database, color: '#D7D7D7' },
  django: { Icon: SiDjango, color: '#44B78B' },
  fastapi: { Icon: SiFastapi, color: '#009688' },
  flask: { Icon: SiFlask, color: '#E8E8E8' },
  pandas: { Icon: SiPandas, color: '#E70488' },
  numpy: { Icon: SiNumpy, color: '#4DABCF' },
  pytest: { Icon: SiPytest, color: '#F3C63F' },
  tailwind: { Icon: SiTailwindcss, color: '#38BDF8' },
  framer: { Icon: SiFramer, color: '#F4F4F5' },
  git: { Icon: SiGit, color: '#F05032' },
  github: { Icon: SiGithub, color: '#F4F4F5' },
};
