var VPS_IP = "162.55.160.10";
var domains = {
    'crazymanga.be' : [
        A("@", VPS_IP),
        CNAME('*', '@')
    ],
    'crazyzone.be' : [
        A("@", VPS_IP),
        CNAME('gateway', '@'),
        CNAME('nas', '@'),
        CNAME('web', '@'),
        CNAME('registry', '@'),
        CNAME('registry-ui', '@'),
        CNAME('repo', '@'),
        CNAME('torrent', '@'),
        CNAME('pxe', '@'),
        CNAME('kickstart', '@'),
        CNAME('docs', '@'),
        CNAME('jenkins', '@'),
        CNAME('nuget', '@'),
        CNAME('registry-mirror', '@'),
        CNAME('mon', '@'),
        CNAME('alert', '@'),
        CNAME('tools', '@'),
        CNAME('argocd', '@'),
        CNAME('pihole', '@'),
        CNAME('guacamole', '@'),
        CNAME('power-exporter', '@'),
        CNAME('power-reader', '@'),
        CNAME('json-exporter', '@'),
        CNAME('plugwise', '@'),
        CNAME('git', '@'),
        CNAME('home-assistant', '@')
    ],
    'crazytje.com' : [
        A("@", VPS_IP),
        CNAME('*', '@')
    ],
    'crazytje.be' : [
        A("@", VPS_IP),
        CNAME('*', '@')
    ],
};

var DSP_HETZNER = DnsProvider(NewDnsProvider("hetzner"));
var REG_NONE = NewRegistrar("none");

Object.keys(domains).map(function(k, v) {
    apply(k, domains[k]);
})

function apply(domain, entries) {
    D(domain, REG_NONE, DSP_HETZNER,
        DefaultTTL(86400),
        NAMESERVER_TTL(86400),
        entries
    );
}
