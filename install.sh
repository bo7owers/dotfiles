#! /bin/bash

# Install nix (multi-user install)
# https://nixos.org/download.html#nix-install-linux
sh <(curl -L https://nixos.org/nix/install) --daemon

# Automatically install packages

nix-env -iA \
	nixpkgs.tmux \
	nixpkgs.yarn \
	nixpkgs.ripgrep \
	nixpkgs.bat \
	nixpkgs.direnv

# add more!
# https://search.nixos.org/packages
