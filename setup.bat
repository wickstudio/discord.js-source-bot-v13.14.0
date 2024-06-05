@echo off
:start
echo 1 - Install Dependencies
echo 2 - Start Bot
echo 3 - Run The Bot
set /p choice=Enter a number: 
if %choice%==1 (
    npm install
) else if %choice%==2 (
    node index.js
) else if %choice%==3 (
    npm start
) else (
    echo Invalid choice
    cls
    goto start
)