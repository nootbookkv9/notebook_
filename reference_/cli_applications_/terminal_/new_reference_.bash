# Hide hostname and username in Terminal
	$ vi ~/.bashrc
		# Start text
			export PS1="\W \$"
		# End text

# Enqryption Files
	$ gpg -c "File_"
	$ gpg -d "File_.gpg"
	$ gpg "File_.gpg"

	# more
		$ gpg --full-gen-key
