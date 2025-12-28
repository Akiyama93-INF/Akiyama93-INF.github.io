# Script para Optimizar el Proyecto (Minificar + WebP)
# Requiere que ejecutes 'empaquetar.ps1' primero.

Write-Host "🚀 Iniciando optimización..." -ForegroundColor Cyan

$dist = "dist"

if (-not (Test-Path $dist)) {
    Write-Host "❌ Error: No se encontró la carpeta 'dist'. Ejecuta empaquetar.ps1 primero." -ForegroundColor Red
    exit
}

# --- 1. Minificar JS y CSS (Básico: quitar comentarios y espacios extra) ---
Write-Host "   Minificando código..."

$jsFiles = Get-ChildItem "$dist/src/*.js"
foreach ($file in $jsFiles) {
    $content = Get-Content $file.FullName -Raw
    # Minificación segura (Básica)
    # 1. Quitar comentarios de línea completa (que empiezan con //)
    $content = $content -replace '(?m)^\s*//.*$', ''
    # 2. Quitar bloques de comentarios /* ... */ (simple)
    $content = $content -replace '(?s)/\*.*?\*/', ''
    # 3. Quitar líneas vacías
    $content = $content -replace '(?m)^\s*\r?\n', ''
    
    Set-Content $file.FullName $content
}

# --- 2. Convertir Imágenes a WebP ---
# Nota: Esto requiere 'ffmpeg' instalado. Si no está, solo avisaremos.

if (Get-Command ffmpeg -ErrorAction SilentlyContinue) {
    Write-Host "   Comprimiendo imágenes a WebP..." -ForegroundColor Yellow
    
    # Buscar en la carpeta public
    $images = Get-ChildItem "$dist/public/*.png"
    foreach ($img in $images) {
        $newName = $img.FullName -replace '\.png$', '.webp'
        $fileNameOnly = $img.Name -replace '\.png$', '.webp'
        
        # Ejecutar ffmpeg
        ffmpeg -i $img.FullName -quality 75 -y $newName 2>$null
        
        if (Test-Path $newName) {
            # Actualizar referencias en index.html
            $htmlPath = "$dist/index.html"
            (Get-Content $htmlPath).Replace($img.Name, $fileNameOnly) | Set-Content $htmlPath
            
            # Actualizar referencias en CSS
            $cssFiles = Get-ChildItem "$dist/src/*.css"
            foreach ($css in $cssFiles) {
                (Get-Content $css.FullName).Replace($img.Name, $fileNameOnly) | Set-Content $css.FullName
            }
            
            # Actualizar referencias en JS
            $jsPath = "$dist/src/main.js"
            if (Test-Path $jsPath) {
                (Get-Content $jsPath).Replace($img.Name, $fileNameOnly) | Set-Content $jsPath
            }
            
            # Borrar original
            Remove-Item $img.FullName
            Write-Host "     Convertido: $($img.Name) -> $fileNameOnly"
        }
    }
} else {
    Write-Host "⚠️  No se encontró 'ffmpeg'. Las imágenes no se convertirán a WebP." -ForegroundColor Yellow
    Write-Host "   (Para activar esto, instala FFmpeg y agrégalo a tu PATH)" -ForegroundColor Gray
    Write-Host "   Tus imágenes originales (.png) se mantendrán."
}

Write-Host "✅ Optimización terminada." -ForegroundColor Green
