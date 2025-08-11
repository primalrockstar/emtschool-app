# === CONFIGURATION ===
\src\App-new.tsx    = 'src\App-new.tsx'
\src\App-new.tsx.bak  = "\src\App-new.tsx.bak"
\5173 = 5173

# === Kill Vite on port \5173 ===
try {
  (Get-NetTCPConnection -LocalPort \5173 -ErrorAction SilentlyContinue).OwningProcess |
    ForEach-Object { Stop-Process -Id \ -Force }
  Write-Host "Killed process on port \5173."
} catch {
  Write-Warning "Nothing to kill on port \5173."
}

# === Backup ===
Copy-Item -Path \src\App-new.tsx -Destination \src\App-new.tsx.bak -Force
Write-Host "Backed up original to \src\App-new.tsx.bak"

# === Read + Inject Imports & Routes ===
\ = Get-Content \src\App-new.tsx

# a) Inject imports
if (-not (\ -join "
" -match 'import\s+ClinicalGlossary')) {
  \ = \False
  \ = \ | ForEach-Object {
    if (-not \ -and \ -match "from\s+['""]react-router-dom['""]") {
      \ = \True
      @(
        \
        'import ClinicalGlossary   from "./pages/ClinicalGlossary";'
        'import ClinicalMedications from "./pages/ClinicalMedications";'
        'import StudyAssistant      from "./pages/StudyAssistant";'
      )
    }
    else { \ }
  }
  Write-Host "Injected imports."
} else {
  Write-Host "Imports already present; skipping."
}

# b) Inject <Route>s
if (-not (\ -join "
" -match '/glossary')) {
  \ = \ | ForEach-Object {
    if (\.Trim() -eq '</Routes>') {
      @(
        '              <Route path="/glossary"        element={<ClinicalGlossary />}   />'
        '              <Route path="/medications"     element={<ClinicalMedications />} />'
        '              <Route path="/study-assistant" element={<StudyAssistant />}      />'
        \
      )
    } else {
      \
    }
  }
  Write-Host "Injected routes."
} else {
  Write-Host "Routes already present; skipping."
}

# === Overwrite & Restart Dev Server ===
\ | Set-Content -Path \src\App-new.tsx -Force -Encoding UTF8
Write-Host "✅ Updated \src\App-new.tsx"

Start-Process npm -ArgumentList 'run','dev'
