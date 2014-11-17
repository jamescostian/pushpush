MODULE_BINS = node_modules/.bin
JSHINT = $(MODULE_BINS)/jshint

jshint:
	$(JSHINT) index.js package.json

.PHONY: jshint
