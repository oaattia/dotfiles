# .dotfiles

This repository contains my personal dotfiles and system configurations. These configurations help set up and maintain a consistent development environment across different machines.

## What's Included

- **Fish Shell Configuration**
  - Custom fish shell configurations and functions
  - Shell aliases and environment variables

- **Raycast Extensions**
  - Custom Raycast extension configurations
  - Extension-specific settings and scripts

## Prerequisites

- Fish Shell
- Raycast (for macOS)

## Installation

1. Clone this repository to your home directory:
```bash
git clone https://github.com/yourusername/.dotfiles.git ~/.dotfiles
```

2. Create symbolic links for the configurations:
```bash
ln -s ~/.dotfiles/config/fish/config.fish ~/.config/fish/config.fish
```

3. For Raycast extensions, ensure Raycast is installed and import the extensions through the Raycast preferences.

## Structure

```
.dotfiles/
├── config/
│   ├── fish/
│   │   └── config.fish    # Fish shell configuration
│   └── raycast/
│       └── extensions/    # Raycast extension configurations
```

## Customization

Feel free to fork this repository and modify the configurations to suit your needs. The modular structure makes it easy to add or remove configurations as needed.

## License

This project is open-sourced under the MIT License.
