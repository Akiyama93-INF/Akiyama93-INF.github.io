Write-Host "Iniciando empaquetado..."

$dist = "dist"

if (Test-Path $dist) {
    Remove-Item $dist -Recurse -Force
}
New-Item -ItemType Directory -Path $dist | Out-Null

Copy-Item "index.html" -Destination $dist
Copy-Item "src" -Destination $dist -Recurse
Copy-Item "public" -Destination $dist -Recurse

Write-Host "Empaquetado completado."
