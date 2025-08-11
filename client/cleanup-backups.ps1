# Cleanup backup files after verifying updates
Write-Host "🧹 Cleaning up backup files..." -ForegroundColor Yellow
$backupFiles = Get-ChildItem -Recurse -Filter "*.backup-*"
Write-Host "Found $($backupFiles.Count) backup files"

$backupFiles | ForEach-Object {
    Write-Host "  🗑️  Removing: $($_.Name)" -ForegroundColor Gray
    Remove-Item $_.FullName -Force
}

Write-Host "✅ Cleanup complete!" -ForegroundColor Green
