#! /bin/bash 
# Automatically install packages

nix-env -iA \
	nixpkgs.tmux \
	nixpkgs.yarn \
	nixpkgs.ripgrep \
	nixpkgs.bat \
	nixpkgs.direnv

# add more!
# https://search.nixos.org/packages
