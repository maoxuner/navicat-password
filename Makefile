.PHONY: clean cleanall

docs: dist
	cp -r dist docs
	touch docs/.nojekyll

dist: base=navicat-password
dist: node_modules
	npx vite build --base=$(base)

node_modules:
	npm ci

clean:
	@rm -rf docs dist

cleanall: clean
	@rm -rf node_modules
