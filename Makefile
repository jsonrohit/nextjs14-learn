up:
	docker compose up
build:
	docker build -t nextjs14-my-app .
expose:
	docker run -p 3000:3000 nextjs14-my-app
