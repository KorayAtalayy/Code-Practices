# Voice Recognition Control for PowerPoint
An experimental voice recognition tool for controlling Microsoft PowerPoint presentations using voice commands.


## Overview

This project allows users to control PowerPoint slides through predefined voice commands.

When a PowerPoint file is running in presentation mode, the script listens for specific spoken commands and automatically jumps to predefined slides based on recognized input.

This is currently a prototype and has not been tested with multiple PowerPoint presentations running simultaneously.

The current version listens for specific voice commands and, if a PowerPoint file is in presentation mode, jumps to predefined slides based on what it hears. It hasn’t been tested with multiple PowerPoint files open at the same time.

The core logic was initially generated with the help of ChatGPT. This is a rough prototype for now. I plan to revisit it and possibly develop it into a fully functional project.

## Current Capabilities
- Listens for predefined voice commands
- Detects active PowerPoint presentation mode
- Navigates to specific slides based on recognized speech
- Automatic environment and dependency checks (v2)

## Project Status
This is a rough prototype intended for experimentation and further development.
The core logic was initially generated with AI assistance and has since been modified and extended.

Future improvements may include:
- More robust command handling
- Multi-presentation support
- Improved speech accuracy
- Cleaner architecture and packaging

## Version 2 Improvements (voice_control2.py)
The updated version improves setup reliability.
- Before execution, the .bat file now verifies that required dependencies are installed:

- Bash
- Python
- pip
- PyAudio (voice library)

If any dependency is missing, the batch file installs or configures it automatically before launching the script.

This ensures smoother setup and reduces manual configuration.

## Requirements
- Windows OS
- Microsoft PowerPoint
- Python
- PyAudio
## Disclaimer
This is an experimental project. Stability, edge cases, and multi-instance PowerPoint scenarios have not been fully tested.
