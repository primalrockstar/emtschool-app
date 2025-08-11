import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, 
  BookOpen, 
  Stethoscope, 
  Activity, 
  AlertCircle, 
  Users, 
  FileText, 
  Settings,
  CheckCircle,
  Clock,
  TrendingUp,
  Search,
  Filter,
  ChevronRight,
  User,
  GraduationCap,
  Shield,
  Eye,
  EyeOff,
  Calculator,
  Calendar,
  Star
} from 'lucide-react';

console.log("🏥 CLINICAL MEDSCAPE-INSPIRED PROMEDIXEMS LOADING!");

// Clinical EMT-B Protocol Data - Evidence-Based Format
const clinicalProtocols = [
  { 
    id: 1, 
    title: "Adult Cardiac Arrest Protocol", 
    category: "Cardiac Emergency", 
    priority: "Critical", 
    lastUpdated: "Dec 15, 2024",
    evidenceLevel: "AHA Guidelines 2020",
    description: "High-performance CPR and early defibrillation protocol for adult cardiac arrest patients.",
    keyPoints: ["Minimize interruptions", "30:2 compression-ventilation ratio", "Early AED deployment"],
    scope: "EMT-B"
  },
  { 
    id: 2, 
    title: "Respiratory Distress Assessment", 
    category: "Respiratory", 
    priority: "High", 
    lastUpdated: "Nov 28, 2024",
    evidenceLevel: "Clinical Evidence",
    description: "Systematic assessment and oxygen therapy for patients with breathing difficulties.",
    keyPoints: ["OPQRST assessment", "SpO2 monitoring", "Appropriate O2 delivery"],
    scope: "EMT-B"
  },
  { 
    id: 3, 
    title: "Hemorrhage Control & Shock Prevention", 
    category: "Trauma", 
    priority: "Critical", 
    lastUpdated: "Dec 08, 2024",
    evidenceLevel: "TCCC Guidelines",
    description: "Evidence-based hemorrhage control techniques and shock management.",
    keyPoints: ["Direct pressure first", "Tourniquet application", "Monitor perfusion"],
    scope: "EMT-B"
  },
  { 
    id: 4, 
    title: "Chest Pain Assessment Protocol", 
    category: "Cardiac", 
    priority: "High", 
    lastUpdated: "Nov 20, 2024",
    evidenceLevel: "ACC/AHA Guidelines",
    description: "Systematic approach to chest pain evaluation and pre-hospital management.",
    keyPoints: ["OPQRST history", "12-lead indications", "Aspirin administration"],
    scope: "EMT-B"
  },
  { 
    id: 5, 
    title: "Altered Mental Status Evaluation", 
    category: "Medical", 
    priority: "High", 
    lastUpdated: "Dec 01, 2024",
    evidenceLevel: "Clinical Practice",
    description: "Comprehensive evaluation protocol for patients with altered consciousness.",
    keyPoints: ["AEIOU-TIPS differential", "Glucose assessment", "Neurological exam"],
    scope: "EMT-B"
  },
  { 
    id: 6, 
    title: "Pediatric Assessment Protocol", 
    category: "Pediatric", 
    priority: "High", 
    lastUpdated: "Nov 15, 2024",
    evidenceLevel: "PALS Guidelines",
    description: "Age-appropriate assessment techniques for pediatric emergency patients.",
    keyPoints: ["Pediatric Assessment Triangle", "Age-specific vitals", "Family-centered care"],
    scope: "EMT-B"
  }
];

const clinicalSkills = [
  { 
    id: 1, 
    title: "High-Performance CPR", 
    category: "Resuscitation", 
    lastPracticed: "Dec 10, 2024",
    proficiency: 92,
    evidenceLevel: "AHA 2020",
    nextDue: "Mar 10, 2025"
  },
  { 
    id: 2, 
    title: "Advanced Airway Management", 
    category: "Airway", 
    lastPracticed: "Dec 05, 2024",
    proficiency: 88,
    evidenceLevel: "Clinical Standards",
    nextDue: "Feb 28, 2025"
  },
  { 
    id: 3, 
    title: "Clinical Assessment Skills", 
    category: "Assessment", 
    lastPracticed: "Dec 12, 2024",
    proficiency: 95,
    evidenceLevel: "Best Practice",
    nextDue: "Mar 12, 2025"
  }
];

const clinicalCalculators = [
  {
    id: 1,
    title: "Glasgow Coma Scale Calculator",
    category: "Neurological Assessment",
    lastUpdated: "Dec 2024",
    evidenceLevel: "Clinical Standard",
    description: "Standardized neurological assessment tool for consciousness evaluation."
  },
  {
    id: 2,
    title: "Pediatric Medication Dosing",
    category: "Pharmacology",
    lastUpdated: "Nov 2024", 
    evidenceLevel: "Clinical Guidelines",
    description: "Weight-based medication calculations for pediatric emergency care."
  },
  {
    id: 3,
    title: "Burn Assessment (Rule of 9s)",
    category: "Trauma Assessment",
    lastUpdated: "Dec 2024",
    evidenceLevel: "Clinical Standard",
    description: "Systematic burn surface area calculation for trauma patients."
  }
];

// Instructor Context
const InstructorContext = React.createContext({
  instructorMode: false,
  toggleInstructorMode: () => {}
});

// Clinical Header Component
const ClinicalHeader = () => {
  const { instructorMode, toggleInstructorMode } = React.useContext(InstructorContext);

  return (
    <div className="bg-white border-b border-slate-200">
      {/* Top utility bar */}
      <div className="bg-slate-50 border-b border-slate-200 px-6 py-2">
        <div className="flex items-center justify-between text-sm">
          <div className="text-slate-600">Professional Emergency Medical Services Education</div>
          <div className="flex items-center gap-4 text-slate-600">
            <span className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-500 rounded-full"></div>
              System Online
            </span>
            <span>EMT-B</span>
            <span>About</span>
          </div>
        </div>
      </div>

      {/* Main header */}
      <div className="px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-6">
            <div className="text-2xl font-bold text-blue-600">ProMedix EMS</div>
            <div className="text-sm text-slate-500">© 2024 ProMedix EMS</div>
          </div>
          
          <div className="flex items-center gap-4">
            {/* Instructor Toggle */}
            <div className="flex items-center gap-2 text-sm">
              <span className="text-slate-600">Instructor Mode</span>
              <button
                onClick={toggleInstructorMode}
                className={`relative inline-flex h-5 w-9 items-center rounded-full transition-colors ${
                  instructorMode ? 'bg-blue-600' : 'bg-slate-300'
                }`}
              >
                <span
                  className={`inline-block h-3 w-3 transform rounded-full bg-white transition-transform ${
                    instructorMode ? 'translate-x-5' : 'translate-x-1'
                  }`}
                />
              </button>
            </div>
            
            <div className="flex items-center gap-2 text-sm text-slate-600">
              <span>Welcome, {instructorMode ? 'Instructor' : 'Student'}</span>
            </div>
            
            <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
              {instructorMode ? <GraduationCap className="h-4 w-4 text-blue-600" /> : <User className="h-4 w-4 text-blue-600" />}
            </div>
          </div>
        </div>

        {/* Search bar */}
        <div className="mt-4 max-w-2xl">
          <div className="relative">
            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search protocols, procedures, medications and more"
              className="w-full pl-12 pr-4 py-3 border border-slate-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent bg-slate-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

// Clinical Navigation
const ClinicalNavigation = () => {
  const location = useLocation();
  const { instructorMode } = React.useContext(InstructorContext);
  
  const isActive = (path: string) => location.pathname === path;
  
  const navItems = [
    { path: '/', label: 'Clinical Guidelines', icon: Home },
    { path: '/protocols', label: 'Protocols & Procedures', icon: BookOpen },
    { path: '/calculators', label: 'Clinical Calculators', icon: Calculator },
    { path: '/skills', label: 'Skills Assessment', icon: Stethoscope },
    { path: '/scenarios', label: 'Case Studies', icon: Activity },
  ];

  const instructorNavItems = [
    { path: '/instructor-tools', label: 'Instructor Resources', icon: Settings },
  ];

  return (
    <div className="bg-white border-b border-slate-200">
      <div className="px-6">
        <nav className="flex gap-8">
          {navItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? 'text-blue-600 border-blue-600'
                    : 'text-slate-700 border-transparent hover:text-blue-600 hover:border-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
              </Link>
            );
          })}
          
          {instructorMode && instructorNavItems.map((item) => {
            const Icon = item.icon;
            const active = isActive(item.path);
            
            return (
              <Link
                key={item.path}
                to={item.path}
                className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                  active
                    ? 'text-blue-600 border-blue-600'
                    : 'text-slate-700 border-transparent hover:text-blue-600 hover:border-slate-300'
                }`}
              >
                <Icon className="h-4 w-4" />
                {item.label}
                <Shield className="h-3 w-3 text-amber-500" />
              </Link>
            );
          })}
        </nav>
      </div>
    </div>
  );
};

// Clinical Dashboard
const ClinicalGuidelines = () => {
  const { instructorMode } = React.useContext(InstructorContext);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8 space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-3xl font-normal text-slate-800 mb-2">Clinical Practice Guidelines</h1>
        <p className="text-slate-600 leading-relaxed">
          Evidence-based emergency medical protocols are published quarterly after evaluation of guidelines recently released 
          in the United States and internationally by major medical organizations. Following systematic evidence review, 
          recommendations are provided in an abbreviated format, with particular attention paid to specific areas of 
          emergency care such as assessment, treatment protocols, and medication administration.
        </p>
        {instructorMode && (
          <div className="mt-3 text-sm text-amber-700 bg-amber-50 px-4 py-3 rounded border border-amber-200">
            <strong>Instructor Mode Active:</strong> Advanced protocols and assessment tools are visible. All certification levels accessible.
          </div>
        )}
      </div>

      {/* Recent Updates */}
      <div className="bg-blue-50 border border-blue-200 rounded p-6">
        <h2 className="text-xl font-medium text-slate-800 mb-4">Recent Protocol Updates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white rounded p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Dec 15, 2024</span>
            </div>
            <h3 className="font-medium text-slate-800 mb-1">Updated Adult Cardiac Arrest Protocol</h3>
            <p className="text-sm text-slate-600">Revised compression-ventilation ratios based on latest AHA guidelines.</p>
          </div>
          <div className="bg-white rounded p-4 border border-blue-100">
            <div className="flex items-center gap-2 mb-2">
              <Calendar className="h-4 w-4 text-blue-600" />
              <span className="text-sm text-blue-600 font-medium">Dec 08, 2024</span>
            </div>
            <h3 className="font-medium text-slate-800 mb-1">Hemorrhage Control Protocol Revision</h3>
            <p className="text-sm text-slate-600">Updated tourniquet application guidelines per TCCC recommendations.</p>
          </div>
        </div>
      </div>

      {/* Clinical Statistics */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <div className="bg-white rounded border border-slate-200 p-6 text-center">
          <div className="text-2xl font-light text-slate-800 mb-1">{clinicalProtocols.length}</div>
          <div className="text-sm text-slate-600">Active Protocols</div>
        </div>
        <div className="bg-white rounded border border-slate-200 p-6 text-center">
          <div className="text-2xl font-light text-slate-800 mb-1">
            {clinicalProtocols.filter(p => p.priority === 'Critical').length}
          </div>
          <div className="text-sm text-slate-600">Critical Protocols</div>
        </div>
        <div className="bg-white rounded border border-slate-200 p-6 text-center">
          <div className="text-2xl font-light text-slate-800 mb-1">{clinicalSkills.length}</div>
          <div className="text-sm text-slate-600">Skills Assessments</div>
        </div>
        <div className="bg-white rounded border border-slate-200 p-6 text-center">
          <div className="text-2xl font-light text-slate-800 mb-1">
            {Math.round(clinicalSkills.reduce((acc, skill) => acc + skill.proficiency, 0) / clinicalSkills.length)}%
          </div>
          <div className="text-sm text-slate-600">Avg Proficiency</div>
        </div>
      </div>

      {/* Featured Protocols */}
      <div>
        <h2 className="text-xl font-medium text-slate-800 mb-6">Featured Clinical Protocols</h2>
        <div className="space-y-6">
          {clinicalProtocols.slice(0, 3).map(protocol => (
            <div key={protocol.id} className="bg-white rounded border border-slate-200 hover:border-blue-300 transition-colors">
              <div className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex-1">
                    <h3 className="text-lg font-medium text-slate-800 mb-2">{protocol.title}</h3>
                    <p className="text-slate-600 leading-relaxed mb-3">{protocol.description}</p>
                    
                    {/* Key Points */}
                    <div className="mb-4">
                      <div className="text-sm font-medium text-slate-700 mb-2">Key Clinical Points:</div>
                      <ul className="text-sm text-slate-600 space-y-1">
                        {protocol.keyPoints.map((point, index) => (
                          <li key={index} className="flex items-center gap-2">
                            <div className="w-1 h-1 bg-blue-600 rounded-full"></div>
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Metadata */}
                    <div className="flex items-center gap-6 text-sm text-slate-500">
                      <span>Updated: {protocol.lastUpdated}</span>
                      <span>Evidence Level: {protocol.evidenceLevel}</span>
                      <span className="flex items-center gap-1">
                        <Star className="h-3 w-3" />
                        {protocol.category}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-3 ml-6">
                    {protocol.priority === 'Critical' && (
                      <span className="bg-red-100 text-red-800 px-3 py-1 rounded-full text-xs font-medium">
                        Critical
                      </span>
                    )}
                    <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs font-medium">
                      EMT-B
                    </span>
                    <ChevronRight className="h-5 w-5 text-slate-400" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

// Clinical Protocols Page
const ClinicalProtocols = () => {
  const { instructorMode } = React.useContext(InstructorContext);
  const [searchTerm, setSearchTerm] = React.useState('');
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const categories = ['All', ...Array.from(new Set(clinicalProtocols.map(p => p.category)))];
  
  const filteredProtocols = clinicalProtocols.filter(protocol => {
    const matchesSearch = protocol.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         protocol.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'All' || protocol.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-normal text-slate-800 mb-2">Clinical Protocols & Procedures</h1>
        <p className="text-slate-600 leading-relaxed">
          Comprehensive evidence-based emergency medical protocols for pre-hospital care. Each protocol includes 
          clinical decision points, contraindications, and scope of practice guidelines.
        </p>
      </div>

      {/* Search and Filter */}
      <div className="bg-white rounded border border-slate-200 p-6 mb-8">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400 h-5 w-5" />
            <input
              type="text"
              placeholder="Search clinical protocols and procedures..."
              className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <select
            className="px-4 py-3 border border-slate-300 rounded focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
          >
            {categories.map(cat => (
              <option key={cat} value={cat}>{cat}</option>
            ))}
          </select>
        </div>
      </div>

      {/* Protocols List */}
      <div className="space-y-6">
        {filteredProtocols.map(protocol => (
          <div key={protocol.id} className="bg-white rounded border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="p-6">
              <div className="flex items-start justify-between mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h2 className="text-xl font-medium text-slate-800">{protocol.title}</h2>
                    {protocol.priority === 'Critical' && (
                      <span className="bg-red-100 text-red-800 px-2 py-1 rounded text-xs font-medium">
                        Critical Protocol
                      </span>
                    )}
                  </div>
                  
                  <p className="text-slate-600 mb-4 leading-relaxed">{protocol.description}</p>
                  
                  <div className="mb-4">
                    <div className="text-sm font-medium text-slate-700 mb-2">Clinical Key Points:</div>
                    <ul className="text-sm text-slate-600 space-y-1">
                      {protocol.keyPoints.map((point, index) => (
                        <li key={index} className="flex items-start gap-2">
                          <CheckCircle className="h-4 w-4 text-blue-600 mt-0.5 flex-shrink-0" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <div className="flex items-center gap-6 text-sm text-slate-500 border-t border-slate-100 pt-4">
                    <span>Last Updated: {protocol.lastUpdated}</span>
                    <span>Evidence: {protocol.evidenceLevel}</span>
                    <span>Category: {protocol.category}</span>
                  </div>
                </div>
                
                <div className="ml-6 text-center">
                  <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded text-sm font-medium mb-3">
                    {protocol.scope}
                  </div>
                  <ChevronRight className="h-6 w-6 text-slate-400 mx-auto" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Clinical Calculators Page
const ClinicalCalculators = () => {
  const { instructorMode } = React.useContext(InstructorContext);

  return (
    <div className="max-w-6xl mx-auto px-6 py-8">
      <div className="mb-8">
        <h1 className="text-3xl font-normal text-slate-800 mb-2">Clinical Calculators</h1>
        <p className="text-slate-600 leading-relaxed">
          Evidence-based medical calculation tools for emergency care assessment and medication dosing. 
          Each calculator follows current clinical guidelines and best practices.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {clinicalCalculators.map(calculator => (
          <div key={calculator.id} className="bg-white rounded border border-slate-200 hover:border-blue-300 transition-colors">
            <div className="p-6">
              <h3 className="text-lg font-medium text-slate-800 mb-2">{calculator.title}</h3>
              <div className="text-sm text-slate-600 mb-3">{calculator.category}</div>
              <p className="text-sm text-slate-600 mb-4 leading-relaxed">{calculator.description}</p>
              
              <div className="text-xs text-slate-500 mb-4 border-t border-slate-100 pt-3">
                <div>Updated: {calculator.lastUpdated}</div>
                <div>Evidence: {calculator.evidenceLevel}</div>
              </div>
              
              <button className="w-full py-2 px-4 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors text-sm font-medium">
                Open Calculator
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Simplified other components
const ClinicalSkills = () => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-normal text-slate-800 mb-2">Skills Assessment</h1>
    <p className="text-slate-600 mb-8">Clinical competency tracking and skills verification.</p>
    <div className="bg-white rounded border border-slate-200 p-8 text-center">
      <div className="text-slate-500">Skills assessment module in development</div>
    </div>
  </div>
);

const ClinicalScenarios = () => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-normal text-slate-800 mb-2">Clinical Case Studies</h1>
    <p className="text-slate-600 mb-8">Evidence-based case scenarios for clinical education.</p>
    <div className="bg-white rounded border border-slate-200 p-8 text-center">
      <div className="text-slate-500">Case study module in development</div>
    </div>
  </div>
);

const InstructorResources = () => (
  <div className="max-w-6xl mx-auto px-6 py-8">
    <h1 className="text-3xl font-normal text-slate-800 mb-2">Instructor Resources</h1>
    <p className="text-slate-600 mb-8">Advanced tools for curriculum management and student assessment.</p>
    <div className="bg-white rounded border border-slate-200 p-8 text-center">
      <div className="text-slate-500">Instructor tools in development</div>
    </div>
  </div>
);

const App = () => {
  const [instructorMode, setInstructorMode] = React.useState(false);

  const toggleInstructorMode = () => {
    setInstructorMode(prev => !prev);
  };

  return (
    <InstructorContext.Provider value={{ instructorMode, toggleInstructorMode }}>
      <Router>
        <div className="min-h-screen bg-white">
          <ClinicalHeader />
          <ClinicalNavigation />
          
          <main className="py-0">
            <Routes>
              <Route path="/" element={<ClinicalGuidelines />} />
              <Route path="/protocols" element={<ClinicalProtocols />} />
              <Route path="/calculators" element={<ClinicalCalculators />} />
              <Route path="/skills" element={<ClinicalSkills />} />
              <Route path="/scenarios" element={<ClinicalScenarios />} />
              <Route path="/instructor-tools" element={<InstructorResources />} />
            </Routes>
          </main>
        </div>
      </Router>
    </InstructorContext.Provider>
  );
};

export default App;