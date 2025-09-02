#!/bin/bash

# Erstelle Verzeichnisse für die Ausgabe
mkdir -p svg_output
mkdir -p icons/16x16 icons/32x32 icons/48x48 icons/64x64 icons/128x128 icons/256x256

# Durchlaufe alle JPEGs im aktuellen Verzeichnis
for file in *.jpeg *.jpg *.png; do
  if [ -f "$file" ]; then
    # Basis-Dateiname ohne Erweiterung
    filename=$(basename -- "$file")
    basename="${filename%.*}"

    # Konvertiere zu SVG
    inkscape --export-filename="svg_output/${basename}.svg" "$file" --export-type=svg

    # Erstelle verschiedene Icon-Größen
    rsvg-convert -w 16 -h 16 "svg_output/${basename}.svg" > "icons/16x16/${basename}.png"
    rsvg-convert -w 32 -h 32 "svg_output/${basename}.svg" > "icons/32x32/${basename}.png"
    rsvg-convert -w 48 -h 48 "svg_output/${basename}.svg" > "icons/48x48/${basename}.png"
    rsvg-convert -w 64 -h 64 "svg_output/${basename}.svg" > "icons/64x64/${basename}.png"
    rsvg-convert -w 128 -h 128 "svg_output/${basename}.svg" > "icons/128x128/${basename}.png"
    rsvg-convert -w 256 -h 256 "svg_output/${basename}.svg" > "icons/256x256/${basename}.png"

    echo "Converted $file to SVG and created icon sizes"
  fi
done
