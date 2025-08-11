// EMT-B Route Configuration
// Add these routes to your main App.js Router

import EMTBNavigation from './components/EMTBNavigation';
import EMTBCalculators from './components/EMTBCalculators';
import EMTBProtocols from './components/EMTBProtocols';
import EMTBMedications from './components/EMTBMedications';

// Routes to add:
/*
<Route path="/emtb" element={<EMTBNavigation />} />
<Route path="/emtb/module/:id" element={<EMTBModulePage />} />
<Route path="/emtb/calculators" element={<EMTBCalculators />} />
<Route path="/emtb/protocols" element={<EMTBProtocols />} />
<Route path="/emtb/medications" element={<EMTBMedications />} />
*/

export { EMTBNavigation, EMTBCalculators, EMTBProtocols, EMTBMedications };
