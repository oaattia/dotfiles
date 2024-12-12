function fish_greeting
    set -l toon (random choice {default,bud-frogs,dragon,dragon-and-cow,elephant,moose,stegosaurus,tux,vader})
    fortune -s | cowsay -f $toon
end



set -gx TERM xterm-256color

# theme
set -g theme_color_scheme terminal-dark
set -g fish_prompt_pwd_dir_length 1
set -g theme_display_user yes
set -g theme_hide_hostname no
set -g theme_hostname always

# aliases
alias ls "ls -p -G"
alias la "ls -A"
alias ll "ls -l"
alias lla "ll -A"
alias g git
command -qv nvim && alias vim nvim

set -gx EDITOR nvim

set -gx PATH bin $PATH
set -gx PATH ~/bin $PATH
set -gx PATH ~/.local/bin $PATH
set -gx PATH ~/.composer/vendor/bin/ $PATH
set -gx PATH /opt/homebrew/bin/ $PATH
set -gx PATH /Applications/PhpStorm.app/Contents/MacOS/ $PATH
set -gx PATH $HOME/flutter/bin $PATH

fish_add_path /Users/oaattia/.config/herd-lite/bin

set -gx PHP_INI_SCAN_DIR "/Users/oaattia/.config/herd-lite/bin:$PHP_INI_SCAN_DIR"

atuin init fish | source

alias ls "lsd"
alias cat "bat"
alias v "nvim ."
alias sail "vendor/bin/sail"

# Set up fzf key bindings
fzf --fish | source
