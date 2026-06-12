@echo off
cd /d E:\projects\mern-stack-portfolio
npm run dev -- --host 127.0.0.1 --port 5173 > "%TEMP%\mern-stack-portfolio-vite.out.log" 2> "%TEMP%\mern-stack-portfolio-vite.err.log"
