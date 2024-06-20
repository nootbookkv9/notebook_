# Touchpad speed setting
	$ xinput list
	$ xinput list-props Device_ID_
	$ xinput set-prop Device_ID_ Property_ID_ Value_

	# Example
		$ xinput list				# Get touchpad id
		$ xinput list-props 12		# Get speed property id
		$ xinput set-prop 12 334 1	# Set touchpad speed

# Touchpad Config
sudo vim /etc/X11/xorg.conf.d/90-thuchpad.conf
Section "InputClass"
	Identifier "touchpad"
	MatchIsTouchpad "on"
	Driver "libinput"
	Option "Tapping" "on"
	Option "NaturalScrolling" "on"
	Option "ScrollMethod" "twofinger"
	Option "TappingButtonMap" "lrm"
EndSection




# Active Touchpad 
	$ xinput set-prop "$(xinput list --name-only | grep -i touch)" "libinput Tapping Enabled" 1
# ???_
sudo apt install xserver-xorg-input-synaptics
synclient TouchpadOff=1
synclient TouchpadOff=0

xinput --disable $(xinput --list | grep -i 'touchpad' | grep -o 'id=[0-9]*' | sed 's/id=//') 



