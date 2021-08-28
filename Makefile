SHELL=/bin/bash

env=prod
debug=false


.DEFAULT_GOAL := build

clean::
	find . -name "node_modules" -type d -prune -print | xargs du -chs && find . -name 'node_modules' -type d -prune -print -exec rm -rf '{}' \;

build::
	yarn

test::
	echo lol

publish::
	quasar build

dev::
	quasar dev --mode electron
