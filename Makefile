.PHONY: clean cleanall

all: docs

docs: out_dir=docs
docs: base=navicat-password
docs: node_modules
	npx vite build --outDir=$(out_dir) --base=$(base)

test: node_modules
	npm run dev

node_modules:
	npm ci

clean:
	@rm -rf docs

cleanall: clean
	@rm -rf node_modules
