.PHONY: push preview

PWD=$(shell pwd)
APIKEY:=

push:
	docker run --rm -it -e "HETZNER_APIKEY=${APIKEY}" -v ${PWD}/dnsconfig.js:/dns/dnsconfig.js -v ${PWD}/creds.json:/dns/creds.json -v ${PWD}/zones:/dns/zones stackexchange/dnscontrol push
preview:
	docker run --rm -it -e "HETZNER_APIKEY=${APIKEY}" -v ${PWD}/dnsconfig.js:/dns/dnsconfig.js -v ${PWD}/creds.json:/dns/creds.json -v ${PWD}/zones:/dns/zones stackexchange/dnscontrol preview
