@echo off
:start
echo 1 - Install Dependencies
echo 2 - Start Bot
set /p choice=Enter a number: 
if %choice%==1 (
    npm install
) else if %choice%==2 (
    node index.js
) else (
    echo Invalid choice
    cls
    goto start
)
