import React, { useState } from 'react';
import { ChevronRight, ChevronDown, AlertTriangle, Heart, Stethoscope, Brain, FileText, Clock, Users, BookOpen } from 'lucide-react';

const UniversalAssessment = () => {
  const [expandedSections, setExpandedSections] = useState({});
  
  const toggleSection = (section) => {
    setExpandedSections(prev => ({ ...prev, [section]: !prev[section] }));
  };

  return (
    <div className="max-w-6xl mx-auto p-6 bg-white">
      <div className="border-b border-gray-200 pb-6 mb-8">
        <div className="flex items-center gap-3 mb-4">
          <Users className="h-8 w-8 text-blue-600" />
          <div>
            <h1 className="text-3xl font-bold text-gray-900">Universal Patient Assessment</h1>
            <p className="text-lg text-gray-600">EMT-Basic Protocol • Systematic Patient Evaluation</p>
          </div>
        </div>
      </div>

      {/* Scene Assessment */}
      <div className="border border-gray-200 rounded-lg mb-6">
        <button
          onClick={() => toggleSection('scene')}
          className="w-full flex items-center justify-between p-4 bg-red-50 hover:bg-red-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <AlertTriangle className="h-5 w-5 text-red-600" />
            <span className="font-semibold text-gray-900">1. Scene Assessment & Safety</span>
          </div>
          {expandedSections.scene ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
        {expandedSections.scene && (
          <div className="p-6 border-t border-gray-200">
            <div className="grid md:grid-cols-3 gap-6">
              <div>
                <h4 className="font-semibold text-red-800 mb-3">Scene Safety</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Assess immediate hazards</li>
                  <li>• Environmental dangers</li>
                  <li>• Secure scene before care</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3">PPE Selection</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Risk-based PPE selection</li>
                  <li>• Standard precautions</li>
                  <li>• High-visibility gear</li>
                </ul>
              </div>
              <div>
                <h4 className="font-semibold text-red-800 mb-3">Resource Assessment</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Number of patients</li>
                  <li>• Mechanism of injury</li>
                  <li>• Additional resources</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Primary Assessment */}
      <div className="border border-gray-200 rounded-lg mb-6">
        <button
          onClick={() => toggleSection('primary')}
          className="w-full flex items-center justify-between p-4 bg-green-50 hover:bg-green-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Heart className="h-5 w-5 text-green-600" />
            <span className="font-semibold text-gray-900">2. Primary Assessment (ABC/CAB)</span>
          </div>
          {expandedSections.primary ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
        {expandedSections.primary && (
          <div className="p-6 border-t border-gray-200">
            <div className="space-y-4">
              <div className="border border-green-200 rounded-lg p-4">
                <h4 className="font-semibold text-green-800 mb-3 flex items-center gap-2">
                  <span className="bg-green-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">A</span>
                  Airway Assessment & Management
                </h4>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="font-medium mb-2">Assessment:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Airway patency and protection</li>
                      <li>• Ability to speak/cough</li>
                      <li>• Immediate threats</li>
                    </ul>
                  </div>
                  <div>
                    <p className="font-medium mb-2">EMT-B Interventions:</p>
                    <ul className="text-sm space-y-1">
                      <li>• Head-tilt/chin-lift, jaw-thrust</li>
                      <li>• Airway suctioning</li>
                      <li>• OPA/NPA adjuncts</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="border border-blue-200 rounded-lg p-4">
                <h4 className="font-semibold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="bg-blue-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">B</span>
                  Breathing Assessment & Support
                </h4>
                <p className="text-sm text-blue-700"><strong>Target:</strong> SpO2 94-98%</p>
              </div>
              <div className="border border-red-200 rounded-lg p-4">
                <h4 className="font-semibold text-red-800 mb-3 flex items-center gap-2">
                  <span className="bg-red-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">C</span>
                  Circulation Assessment & Control
                </h4>
                <p className="text-sm text-red-700"><strong>Focus:</strong> Pulse, perfusion, hemorrhage control</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* AVPU Assessment */}
      <div className="border border-gray-200 rounded-lg mb-6">
        <button
          onClick={() => toggleSection('avpu')}
          className="w-full flex items-center justify-between p-4 bg-purple-50 hover:bg-purple-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <Brain className="h-5 w-5 text-purple-600" />
            <span className="font-semibold text-gray-900">3. AVPU Neurological Assessment</span>
          </div>
          {expandedSections.avpu ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
        {expandedSections.avpu && (
          <div className="p-6 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-3">
                <div className="flex items-center gap-3 p-3 bg-green-50 rounded border">
                  <span className="bg-green-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">A</span>
                  <div>
                    <p className="font-medium">Alert</p>
                    <p className="text-sm text-gray-600">Awake and oriented</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-yellow-50 rounded border">
                  <span className="bg-yellow-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">V</span>
                  <div>
                    <p className="font-medium">Verbal</p>
                    <p className="text-sm text-gray-600">Responds to verbal stimuli</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-orange-50 rounded border">
                  <span className="bg-orange-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">P</span>
                  <div>
                    <p className="font-medium">Painful</p>
                    <p className="text-sm text-gray-600">Responds to painful stimuli</p>
                  </div>
                </div>
                <div className="flex items-center gap-3 p-3 bg-red-50 rounded border">
                  <span className="bg-red-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">U</span>
                  <div>
                    <p className="font-medium">Unresponsive</p>
                    <p className="text-sm text-gray-600">No response to stimuli</p>
                  </div>
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-purple-800 mb-3">Additional Assessment</h4>
                <ul className="space-y-2 text-sm">
                  <li>• Gross motor function</li>
                  <li>• Blood glucose (if equipped)</li>
                  <li>• Pupil assessment</li>
                  <li>• Orientation check</li>
                </ul>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* History Taking */}
      <div className="border border-gray-200 rounded-lg mb-6">
        <button
          onClick={() => toggleSection('history')}
          className="w-full flex items-center justify-between p-4 bg-indigo-50 hover:bg-indigo-100 transition-colors"
        >
          <div className="flex items-center gap-3">
            <FileText className="h-5 w-5 text-indigo-600" />
            <span className="font-semibold text-gray-900">4. OPQRST & SAMPLE History</span>
          </div>
          {expandedSections.history ? <ChevronDown className="h-5 w-5" /> : <ChevronRight className="h-5 w-5" />}
        </button>
        {expandedSections.history && (
          <div className="p-6 border-t border-gray-200">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-semibold text-indigo-800 mb-4">OPQRST - Symptom Analysis</h4>
                <div className="space-y-2">
                  {[
                    { letter: 'O', term: 'Onset', desc: 'When did symptoms begin?' },
                    { letter: 'P', term: 'Provocation', desc: 'What makes it better/worse?' },
                    { letter: 'Q', term: 'Quality', desc: 'How would you describe it?' },
                    { letter: 'R', term: 'Radiation', desc: 'Does pain travel anywhere?' },
                    { letter: 'S', term: 'Severity', desc: 'Scale of 1-10?' },
                    { letter: 'T', term: 'Time', desc: 'How long have you had this?' }
                  ].map((item) => (
                    <div key={item.letter} className="flex items-center gap-3 p-2 border rounded">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {item.letter}
                      </span>
                      <div>
                        <p className="font-medium text-sm">{item.term}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div>
                <h4 className="font-semibold text-indigo-800 mb-4">SAMPLE - Medical History</h4>
                <div className="space-y-2">
                  {[
                    { letter: 'S', term: 'Signs/Symptoms', desc: 'Current complaints' },
                    { letter: 'A', term: 'Allergies', desc: 'Medications, foods, environment' },
                    { letter: 'M', term: 'Medications', desc: 'Prescription and OTC' },
                    { letter: 'P', term: 'Past Medical History', desc: 'Previous conditions' },
                    { letter: 'L', term: 'Last Oral Intake', desc: 'Food and fluid timing' },
                    { letter: 'E', term: 'Events', desc: 'Circumstances leading to call' }
                  ].map((item) => (
                    <div key={item.letter} className="flex items-center gap-3 p-2 border rounded">
                      <span className="bg-indigo-600 text-white rounded-full w-6 h-6 flex items-center justify-center text-sm font-bold">
                        {item.letter}
                      </span>
                      <div>
                        <p className="font-medium text-sm">{item.term}</p>
                        <p className="text-xs text-gray-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Educational Pearls */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 rounded-lg p-6">
        <div className="flex items-center gap-3 mb-4">
          <BookOpen className="h-5 w-5 text-blue-600" />
          <h3 className="font-semibold text-gray-900">EMT-Basic Pearls</h3>
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <ul className="space-y-2 text-sm">
            <li>• Scene safety assessment must be ongoing</li>
            <li>• Trending vitals more important than individual readings</li>
            <li>• AVPU provides rapid neurological assessment</li>
          </ul>
          <ul className="space-y-2 text-sm">
            <li>• Clear communication ensures care continuity</li>
            <li>• When in doubt, treat most serious condition</li>
            <li>• Family/witnesses provide crucial information</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UniversalAssessment;
