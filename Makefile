GIT_TAG := $(shell git describe --tags --exact-match --abbrev=0 2>/dev/null)
BRANCH := $(shell git rev-parse --abbrev-ref HEAD)
IMG_NAME := hemlockpham/shorten-url-portal
IMG_TAG := latest

ifneq ($(GIT_TAG),)
	IMG_TAG := $(GIT_TAG)
endif

export IMG_TAG

docker-build:
	docker build -t $(IMG_NAME):$(IMG_TAG) .

DOCKER_USERNAME ?=
DOCKER_PASSWORD ?=

docker-login:
	echo "$(DOCKER_PASSWORD)" | docker login -u "$(DOCKER_USERNAME)" --password-stdin

docker-release:
	docker push $(IMG_NAME):$(IMG_TAG)

remove-database:
	sudo rm -rf ./postgres_data
