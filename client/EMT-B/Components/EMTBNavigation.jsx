import React from 'react';
import { Link } from 'react-router-dom';
import { Calculator, FileText, Pill, Users } from 'lucide-react';

const EMTBNavigation = () => {
  const emtbModules = [
    { id: 1, name: "Preparatory", chapters: "1-4", icon: "🚑" },
    { id: 3, name: "Patient Assessment", chapters: "10", icon: "📋" },
    { id: 4, name: "Airway Management", chapters: "11", icon: "🫁" },
    { id: 5, name: "Pharmacology", chapters: "12", icon: "💊" },
    { id: 6, name: "Shock & BLS", chapters: "13-14", icon: "❤️" },
    { id: 10, name: "Trauma I", chapters: "25-27", icon: "🩹" }
  ];

  return (
    <div className="emtb-navigation bg-white rounded-lg shadow-sm border border-gray-200 p-6">
      <h2 className="text-2xl font-bold text-gray-900 mb-6">EMT-B Training Modules</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {emtbModules.map(module => (
          <Link 
            key={module.id}
            to={/emtb/module/}
            className="p-4 border rounded-lg hover:bg-blue-50 transition-colors"
          >
            <div className="text-2xl mb-2">{module.icon}</div>
            <h3 className="font-semibold">Module {module.id}</h3>
            <p className="text-sm text-gray-600">{module.name}</p>
            <p className="text-xs text-gray-500">Chapters {module.chapters}</p>
          </Link>
        ))}
      </div>
      
      <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
        <Link to="/emtb/calculators" className="flex items-center space-x-2 p-3 bg-blue-50 rounded-lg hover:bg-blue-100">
          <Calculator className="w-5 h-5 text-blue-600" />
          <span className="font-medium">EMT-B Calculators</span>
        </Link>
        <Link to="/emtb/protocols" className="flex items-center space-x-2 p-3 bg-red-50 rounded-lg hover:bg-red-100">
          <FileText className="w-5 h-5 text-red-600" />
          <span className="font-medium">BLS Protocols</span>
        </Link>
        <Link to="/emtb/medications" className="flex items-center space-x-2 p-3 bg-green-50 rounded-lg hover:bg-green-100">
          <Pill className="w-5 h-5 text-green-600" />
          <span className="font-medium">EMT-B Medications</span>
        </Link>
      </div>
    </div>
  );
};

export default EMTBNavigation;
