import { IconType } from 'react-icons';
import {
  SiTypescript,
  SiJavascript,
  SiPostgresql,
  SiPhp,
  SiC,
  SiSharp,
} from 'react-icons/si';
import { DiJava } from 'react-icons/di';
import { Workflow } from 'lucide-react';

export interface TechIconDef {
  Icon: IconType;
  color: string;
}

export const techIcons: Record<string, TechIconDef> = {
  typescript: { Icon: SiTypescript, color: '#3178C6' },
  javascript: { Icon: SiJavascript, color: '#F7DF1E' },
  postgresql: { Icon: SiPostgresql, color: '#4169E1' },
  php: { Icon: SiPhp, color: '#8892BF' },
  c: { Icon: SiC, color: '#A8B9CC' },
  java: { Icon: DiJava, color: '#F58219' },
  csharp: { Icon: SiSharp, color: '#8E5CE0' },
  async: { Icon: Workflow, color: '#4ADE80' },
};
