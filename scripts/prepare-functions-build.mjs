import { cpSync, rmSync, existsSync, mkdirSync } from 'fs';
import { join } from 'path';

const root = process.cwd();
const functionsDir = join(root, 'functions');
const nextBuildDir = join(root, '.next');
const targetNextDir = join(functionsDir, '.next');
const publicDir = join(root, 'public');
const targetPublicDir = join(functionsDir, 'public');

if (!existsSync(functionsDir)) {
  throw new Error('No existe la carpeta "functions".');
}

if (!existsSync(nextBuildDir)) {
  throw new Error('No existe la carpeta ".next". Ejecuta "npm run build" primero.');
}

// Asegura carpeta functions
mkdirSync(functionsDir, { recursive: true });

// Limpia y copia .next
rmSync(targetNextDir, { recursive: true, force: true });
cpSync(nextBuildDir, targetNextDir, { recursive: true });

// Limpia y copia public (si existe)
if (existsSync(publicDir)) {
  rmSync(targetPublicDir, { recursive: true, force: true });
  cpSync(publicDir, targetPublicDir, { recursive: true });
}

console.log('Build preparado en functions/.next y assets copiados a functions/public');


