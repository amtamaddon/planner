import React from 'react';
import { Sun, Moon, Star, Battery, Coffee, Brain } from "lucide-react";

export const seasons = {
  WINTER_DEPTH: {
    name: "WINTER DEPTH",
    span: "Dec 20 - Mid Feb",
    weeks: 7,
    focus: "Deep Understanding & Foundation",
    energy: "Internal wisdom gathering, Vision gestation",
    practices: ["Candlelit practice", "Deep rest cycles", "Internal work"]
  },
  SPRING_EMERGENCE: {
    name: "SPRING EMERGENCE",
    span: "Mid Feb - April",
    weeks: 9,
    focus: "Expansion & New Growth",
    energy: "Rising energy, Vision activation",
    practices: ["Dawn practice", "New project seeding", "Growth momentum"]
  },
  SUMMER_PEAK: {
    name: "SUMMER PEAK",
    span: "May - July",
    weeks: 14,
    focus: "Full Expression & Power",
    energy: "Maximum creativity, Peak performance",
    practices: ["First light advantage", "Evening light extension", "Power window"]
  },
  AUGUST_INTEGRATION: {
    name: "AUGUST INTEGRATION",
    span: "August",
    weeks: 4,
    focus: "Strategic Pause",
    energy: "Recovery, Integration, System evaluation",
    practices: ["Practice refinement", "Wisdom integration", "Recovery emphasis"]
  },
  FALL_MOMENTUM: {
    name: "FALL MOMENTUM",
    span: "Sept - Oct",
    weeks: 9,
    focus: "Refined Implementation",
    energy: "Harvest energy, Project completion",
    practices: ["Evening practice depth", "Clear execution", "Completion energy"]
  },
  YEAR_END: {
    name: "YEAR END",
    span: "Nov - Dec 19",
    weeks: 7,
    focus: "Integration & Preparation",
    energy: "Wisdom gathering, Winter preparation",
    practices: ["Foundation setting", "Completion cycles", "Integration depth"]
  }
};

export const timeBlocks = [
  {
    name: 'VISION',
    time: '5-9AM',
    icon: <Sun className="w-6 h-6" />,
    focuses: ['Love of Training', 'Unobstructed Express', 'Somatic Intelligence'],
    solar: 'Rising Dawn',
    kabb: 'Chesed'
  },
  {
    name: 'STUDIO',
    time: '9-2PM',
    icon: <Brain className="w-6 h-6" />,
    focuses: ['MIQ Implementation', 'Creative Hunt', 'Internal Orient'],
    solar: 'Peak Sun',
    kabb: 'Gevurah'
  },
  {
    name: 'POWER',
    time: '2-3:30PM',
    icon: <Battery className="w-6 h-6" />,
    focuses: ['Physical Resilience', 'Conscious Compete'],
    solar: 'Sun Descent',
    kabb: 'Tiferet'
  },
  {
    name: 'SIESTA',
    time: '3:30-5PM',
    icon: <Coffee className="w-6 h-6" />,
    focuses: ['Subtraction', 'Non-local Learning'],
    solar: 'Reflection',
    kabb: 'Netzach'
  },
  {
    name: 'FINAL',
    time: '5-7PM',
    icon: <Star className="w-6 h-6" />,
    focuses: ['Peak Creativity', 'Feedback Loop'],
    solar: 'Golden Hour',
    kabb: 'Hod'
  },
  {
    name: 'EVENING',
    time: '7-11PM',
    icon: <Moon className="w-6 h-6" />,
    focuses: ['Frictionless Flow', 'Embracing Funk'],
    solar: 'Sunset',
    kabb: 'Yesod'
  }
];

export const seasonStartDates = {
  WINTER_DEPTH: new Date(2024, 11, 20),
  SPRING_EMERGENCE: new Date(2024, 1, 18),
  SUMMER_PEAK: new Date(2024, 4, 1),
  AUGUST_INTEGRATION: new Date(2024, 7, 1),
  FALL_MOMENTUM: new Date(2024, 8, 1),
  YEAR_END: new Date(2024, 10, 1)
};