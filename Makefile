.PHONY: clean cleanall

dist: node_modules
	npx vite build

node_modules:
	npm ci

clean:
	@rm -rf dist

cleanall: clean
	@rm -rf node_modules
