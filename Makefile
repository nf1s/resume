install:
	npm install

run:
	npm start

deploy:
	npm run build
	firebase deploy
