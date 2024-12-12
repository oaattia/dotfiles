# .dotfiles

This repository contains my personal dotfiles and system configurations managed with RCM (RC file Management). These configurations help set up and maintain a consistent development environment across different machines.

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
- RCM (RC file Management)

## Installing RCM

### On macOS
```bash
brew install rcm
```

### On Ubuntu/Debian
```bash
sudo apt-get install rcm
```

### On Other Systems
```bash
git clone https://github.com/thoughtbot/rcm.git
cd rcm
./configure
make
sudo make install
```

## Installation and Setup

1. Clone this repository to your home directory:
```bash
git clone https://github.com/yourusername/.dotfiles.git ~/.dotfiles
```

2. Install dotfiles using RCM:
```bash
# First time setup
env RCRC=$HOME/.dotfiles/rcrc rcup -v

# Subsequent updates
rcup -v
```

The `-v` flag provides verbose output so you can see what RCM is doing.

## Using RCM

RCM provides several commands to manage your dotfiles:

- `rcup`: Update your dotfiles symlinks (run this after adding new files)
  ```bash
  # Basic usage
  rcup -v

  # Update with specific tags
  rcup -t work -v

  # Force update, overwriting existing files
  rcup -f -v
  ```

- `rcdn`: Remove all symlinks created by RCM
  ```bash
  # Remove all symlinks
  rcdn -v

  # Remove symlinks for specific tags
  rcdn -t work -v
  ```

- `mkrc`: Add a new file to your dotfiles
  ```bash
  # Basic usage
  mkrc ~/.vimrc

  # Add with a specific tag
  mkrc -t work ~/.ssh/config

  # Add directory and its contents
  mkrc -d ~/.config/nvim
  ```

- `lsrc`: List all files managed by RCM
  ```bash
  # List all managed files
  lsrc

  # List files with specific tags
  lsrc -t work
  ```

### Advanced RCM Features

#### Using Tags
Tags help organize dotfiles for different environments:
```bash
# Create a tagged file
mkrc -t work ~/.work-specific-file

# Update only work-related files
rcup -t work

# List work-tagged files
lsrc -t work
```

#### Host-specific Configurations
RCM supports host-specific dotfiles:
```
.dotfiles/
├── host-laptop/    # Files specific to 'laptop' hostname
├── host-desktop/   # Files specific to 'desktop' hostname
└── all/           # Files shared across all hosts
```

#### Excluding Files
Use the `EXCLUDES` variable in your `rcrc`:
```
EXCLUDES="README.md LICENSE Brewfile"
```

### Adding New Dotfiles

To add a new configuration file to your dotfiles:

1. Use `mkrc` to add the file:
```bash
mkrc ~/.config/some-config
```

2. Commit and push the changes:
```bash
cd ~/.dotfiles
git add .
git commit -m "Add some-config"
git push
```

### Updating Dotfiles

After pulling changes from the repository:
```bash
rcup -v
```

## Structure

```
.dotfiles/
├── config/
│   ├── fish/
│   │   └── config.fish    # Fish shell configuration
│   └── raycast/
│       └── extensions/    # Raycast extension configurations
├── rcrc                   # RCM configuration file
├── hooks/                 # Pre/post update scripts
│   ├── pre-up
│   └── post-up
└── tag-*/                 # Tag-specific configurations
```

## RCM Configuration

The `rcrc` file in this repository configures RCM's behavior. Example configuration:
```
# Directory containing dotfiles
DOTFILES_DIRS="$HOME/.dotfiles"

# Tags to load by default
TAGS="base work"

# Files to exclude
EXCLUDES="README.md LICENSE Brewfile"

# Additional configuration directories
UNDOTTED="bin"
```

## Common Workflows

### Setting Up a New Machine
```bash
# 1. Install RCM
brew install rcm  # on macOS

# 2. Clone dotfiles
git clone https://github.com/yourusername/.dotfiles.git ~/.dotfiles

# 3. Initial setup with specific tags (if needed)
env RCRC=$HOME/.dotfiles/rcrc rcup -t base -t work -v
```

### Maintaining Multiple Environments
```bash
# Work environment
rcup -t work -t base

# Personal environment
rcup -t personal -t base
```

## Troubleshooting

- If you see "File exists" errors during `rcup`:
  ```bash
  # Force overwrite existing files
  rcup -f -v
  ```

- If symlinks are pointing to wrong locations:
  ```bash
  # Remove all symlinks and recreate
  rcdn -v && rcup -v
  ```

- If RCM isn't picking up your configuration:
  1. Check `~/.rcrc` exists and is properly configured
  2. Verify file permissions
  3. Run with `-v` flag to see verbose output
  ```bash
  rcup -v
  ```

## Best Practices

1. Always use `mkrc` to add new files to maintain proper structure
2. Use tags to organize configurations by environment or purpose
3. Keep sensitive information in separate, encrypted files
4. Use pre-up and post-up hooks for automated setup
5. Document any manual steps in the README

## License

This project is open-sourced under the MIT License.
