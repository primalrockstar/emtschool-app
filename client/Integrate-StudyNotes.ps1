# Direct PowerShell Commands for EMT-B Study Notes Integration
# Run these commands one by one in your PowerShell terminal

# 1. Create directories (if they don't exist)
Write-Host "Creating directories..." -ForegroundColor Yellow
New-Item -Path "src\data\emtb" -ItemType Directory -Force | Out-Null
New-Item -Path "src\components\emtb" -ItemType Directory -Force | Out-Null

# 2. Create chapter2-study-notes.ts
Write-Host "Creating chapter2-study-notes.ts..." -ForegroundColor Yellow
@'
// Chapter 2: Safety Protocols for Responders - Study Notes Data
export interface StudySection {
  id: string;
  title: string;
  content: string;
  keyPoints: string[];
  clinicalNote?: string;
  rememberThis?: string;
}

export interface StudyChapter {
  id: string;
  chapterNumber: number;
  title: string;
  description: string;
  estimatedStudyTime: string;
  learningObjectives: string[];
  sections: StudySection[];
  keyTerms: { term: string; definition: string }[];
  criticalConcepts: string[];
}

export const chapter2StudyNotes: StudyChapter = {
  id: "ch2-safety-protocols-responders",
  chapterNumber: 2,
  title: "Safety Protocols for Responders",
  description: "Essential knowledge for EMT personal safety, wellness practices, stress management, and professional development in emergency medical services.",
  estimatedStudyTime: "45-60 minutes",
  learningObjectives: [
    "Understand the unique risks and stressors faced by emergency responders",
    "Identify strategies for maintaining physical, mental, and emotional wellness",
    "Recognize the difference between eustress and distress",
    "Apply proper infection control and safety protocols",
    "Demonstrate appropriate responses to critical incidents and grief situations",
    "Implement stress management and fatigue prevention strategies"
  ],
  sections: [
    {
      id: "intro-safety",
      title: "Introduction to Workforce Safety and Wellness",
      content: "Emergency responders face significantly more occupational risks than most other professions. EMTs work in challenging, rapidly changing environments with exposure to infectious diseases, physical injuries, and violence.",
      keyPoints: [
        "84% of first responders have experienced traumatic events",
        "34% have been diagnosed with mental health conditions (depression, PTSD)",
        "EMT/Paramedic suicide rates are significantly higher than general population",
        "Physical, mental, and emotional health are interconnected",
        "Proactive wellness maintenance is essential for effective patient care"
      ],
      clinicalNote: "Personal wellness directly impacts your ability to provide quality patient care. Neglecting self-care can lead to medical errors and compromised patient safety.",
      rememberThis: "You cannot effectively care for others if you don't first care for yourself."
    },
    {
      id: "stress-types",
      title: "Understanding Stress: Eustress vs. Distress",
      content: "Not all stress is harmful. Understanding the difference between positive and negative stress responses helps EMTs manage their reactions to challenging situations.",
      keyPoints: [
        "Eustress: Positive stress responses (increased focus, job satisfaction)",
        "Distress: Negative stress responses (feeling overwhelmed, anxious)",
        "Stress can be acute (short-term) or chronic (long-term)",
        "Individual stress reactions vary based on mood, health, and other stressors",
        "One stressor can trigger another, creating difficult cycles"
      ],
      clinicalNote: "Understanding your stress response helps you recognize when positive stress becomes harmful distress requiring intervention.",
      rememberThis: "Eustress improves performance; distress impairs it. Know the difference."
    },
    {
      id: "wellness-resilience",
      title: "Strategies for Wellness and Resilience",
      content: "Wellness involves actively working toward good health, while resilience is the ability to handle and recover from stress. Both require intentional effort and practice.",
      keyPoints: [
        "Eat a healthy diet with complex carbohydrates for sustained energy",
        "Get 7-9 hours of sleep daily for optimal cognitive function",
        "Build strong relationships with family, friends, and coworkers",
        "Exercise at least 30 minutes, 5 days per week (cardiovascular, strength, flexibility)",
        "Practice mindfulness and stress management techniques",
        "Limit sugar, fats, sodium, and alcohol intake",
        "Stay hydrated - light yellow urine indicates proper hydration"
      ],
      clinicalNote: "Physical conditioning and proper nutrition are the foundation elements EMTs can control to prepare for uncontrollable job stressors.",
      rememberThis: "Resilience is built daily through consistent wellness practices, not developed during crisis."
    },
    {
      id: "fatigue-sleep",
      title: "Sleep and Fatigue Management", 
      content: "Sleep deprivation significantly impacts EMT performance and can lead to medical errors, vehicle crashes, and long-term health problems including hypertension and diabetes.",
      keyPoints: [
        "Adults need 7-9 hours of sleep each night",
        "Work shifts shorter than 24 hours when possible",
        "Use fatigue assessment surveys to monitor impairment",
        "Strategic caffeine use and napping during shifts",
        "Maintain consistent sleep schedules",
        "Expose yourself to natural light during waking hours",
        "Avoid caffeine and alcohol before sleep",
        "Create optimal sleep environment (dark, quiet, cool)"
      ],
      clinicalNote: "Fatigue-related errors can be life-threatening. Recognize your limitations and use available countermeasures.",
      rememberThis: "Quality sleep is not a luxury - it's a patient safety requirement."
    },
    {
      id: "infection-control",
      title: "Disease Prevention and Standard Precautions",
      content: "EMTs regularly encounter infectious and communicable diseases. Proper infection control protects both providers and patients from disease transmission.",
      keyPoints: [
        "Standard Precautions: Assume every person might be infected",
        "PPE donning order: Gown → Mask → Eyewear → Gloves",
        "PPE doffing: Remove mask LAST to avoid contamination",
        "Hand washing is the most effective disease prevention method",
        "Dispose of sharps in approved, closed containers",
        "Key transmission routes: Contact, airborne, foodborne, vector-borne",
        "OSHA requires bloodborne pathogen training for all EMTs"
      ],
      clinicalNote: "Proper PPE use and hand hygiene prevent 90% of healthcare-associated infections.",
      rememb