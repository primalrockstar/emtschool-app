# inject-routes.ps1

# 1) Configuration
\src\App-new.tsx    = 'src\App-new.tsx'
\src\App-new.tsx.bak  = "\src\App-new.tsx.bak"
\5173 = 5173

# 2) Kill Vite on port 5173 (release file lock)
try {
  (Get-NetTCPConnection -LocalPort \5173 -ErrorAction SilentlyContinue).OwningProcess |
    ForEach-Object { Stop-Process -Id \ -Force }
  Write-Host "🔌 Killed process on port \5173."
} catch {
  Write-Warning "Nothing to kill on port \5173."
}

# 3) Backup
Copy-Item -Path \src\App-new.tsx -Destination \src\App-new.tsx.bak -Force
Write-Host "💾 Backed up \src\App-new.tsx to \src\App-new.tsx.bak"

# 4) Read file
\ = Get-Content \src\App-new.tsx

# 5) Inject imports after react-router-dom
if (-not (\ -join "
" -match 'import\s+ClinicalGlossary')) {
  for (\=0; \ -lt \.Count; \++) {
    if (\[\] -match "from\s+['""]react-router-dom['""]") {
      \ = @(
        'import ClinicalGlossary   from ''./pages/ClinicalGlossary'';'
        'import ClinicalMedications from ''./pages/ClinicalMedications'';'
        'import StudyAssistant      from ''./pages/StudyAssistant'';'
      )
      \ = \[0..\] + \ + \[(\+1)..\.Count-1]
      Write-Host "✨ Injected imports."
      break
    }
  }
} else {
  Write-Host "✔️  Imports exist."
}

# 6) Inject <Route> before </Routes>
if (-not (\ -join "
" -match 'path="/glossary"')) {
  for (\=0; \ -lt \.Count; \++) {
    if (\[\].Trim() -eq '</Routes>') {
      \ = @(
        '              <Route path="/glossary"        element={<ClinicalGlossary />}   />'
        '              <Route path="/medications"     element={<ClinicalMedications />} />'
        '              <Route path="/study-assistant" element={<StudyAssistant />}      />'
      )
      \ = \[0..(\-1)] + \ + \[\..\.Count-1]
      Write-Host "✨ Injected routes."
      break
    }
  }
} else {
  Write-Host "✔️  Routes exist."
}

# 7) Write file back (force + UTF8)
\ | Set-Content -Path \src\App-new.tsx -Force -Encoding UTF8
Write-Host "✅ Updated \src\App-new.tsx"

# 8) Restart Vite dev server
Write-Host "🚀 npm run dev"
Start-Process npm -ArgumentList 'run','dev'
