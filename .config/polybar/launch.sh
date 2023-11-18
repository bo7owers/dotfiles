#!/bin/bash

# Terminate already running bar instances
killall -q polybar
# If all your bars have ipc enabled, you can also use
# polybar-msg cmd quit

# Launch Polybar, using default config location ~/.config/polybar/config.ini
# polybar left 2>&1 | tee -a /tmp/polybar.log & disown
polybar left &
polybar right &
## if [[ $(xrandr -q | grep 'DP-1 connected')]]; then
## 	polybar right &
##fi
# echo "Polybar launched..."
