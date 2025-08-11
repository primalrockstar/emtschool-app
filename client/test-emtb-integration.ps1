Write-Host "🧪 EMT-B Integration Test" -ForegroundColor Green
Write-Host "=========================" -ForegroundColor Green

$requiredFiles = @(
    "components\emtb\EMTBNavigation.tsx",
    "data\emtb\emtb-protocols.ts", 
    "data\emtb\emtb-medications.ts"
)

Write-Host "`n📁 File Structure Check:" -ForegroundColor Yellow
foreach ($file in $requiredFiles) {
    if (Test-Path $file) {
        Write-Host "✅ $file" -ForegroundColor Green
    } else {
        Write-Host "❌ $file" -ForegroundColor Red
    }
}

$componentFiles = @("EMTBCalculators.tsx", "EMTBProtocols.tsx", "EMTBMedications.tsx")
Write-Host "`n🔧 Component Location Check:" -ForegroundColor Yellow
foreach ($file in $componentFiles) {
    if (Test-Path "components\emtb\$file") {
        Write-Host "✅ $file moved to components\emtb\" -ForegroundColor Green
    } elseif (Test-Path $file) {
        Write-Host "⚠️  $file still in root - move to components\emtb\" -ForegroundColor Yellow
    } else {
        Write-Host "❌ $file not found" -ForegroundColor Red
    }
}

Write-Host "`n🚀 Next Steps:" -ForegroundColor Cyan
Write-Host "1. Edit App-new.tsx - add imports and routes" -ForegroundColor White
Write-Host "2. Run: npm start" -ForegroundColor White
Write-Host "3. Navigate to: http://localhost:3000/emtb" -ForegroundColor White

Write-Host "`n✅ Basic setup complete!" -ForegroundColor Green
