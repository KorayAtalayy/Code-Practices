@echo off
SETLOCAL

:: === Step 1: Check Git Bash ===
echo Checking for Git Bash...
where git >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Git Bash not found. Downloading and installing...
    curl -L -o git_installer.exe https://github.com/git-for-windows/git/releases/download/v2.45.0.windows.1/Git-2.45.0-64-bit.exe
    start /wait "" git_installer.exe /VERYSILENT /NORESTART
    del git_installer.exe
) ELSE (
    echo Git Bash is already installed.
)

:: === Step 2: Check Python ===
echo Checking for Python...
where python >nul 2>nul
IF %ERRORLEVEL% NEQ 0 (
    echo Python not found. Downloading and installing...
    curl -L -o python_installer.exe https://www.python.org/ftp/python/3.12.3/python-3.12.3-amd64.exe
    start /wait "" python_installer.exe /quiet InstallAllUsers=1 PrependPath=1 Include_pip=1
    del python_installer.exe
) ELSE (
    echo Python is already installed.
)

:: === Step 3: Ensure pip is installed ===
echo Checking for pip...
python -m ensurepip --default-pip

:: === Step 4: Install Python packages ===
echo Installing required Python packages...
where bash >nul 2>nul
IF %ERRORLEVEL% EQU 0 (
    bash -c "pip install pywin32 SpeechRecognition pyaudio"
) ELSE (
    echo Git Bash not detected. Using normal CMD pip instead...
    pip install pywin32 SpeechRecognition pyaudio
)

echo ✅ Environment setup complete.

cd "C:\Users\koray\Desktop\files by date\06 June\04.06.2025\voice_control for ppt"
python voice_control2.py
pause