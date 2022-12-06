# Crazy's DNS

Project that uses [DNSControl](https://stackexchange.github.io/dnscontrol/) to manage my DNS entries.  

## Git Workflow

Uses a github workflow to trigger the changes when a push is done to the main branch.  

Make sure to have all the secrets defined in the repository settings and use the correct environment.

## Adding new records

Create a `.js` file in the `zones` folder, this will automatically be included.  
See the `vps.js` file for an example.  

## DNS Providers

Make sure the dns providers are configured in the `creds.json` file.