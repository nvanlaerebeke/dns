var VPS_IP = "138.201.157.142";
var domains = {
    'crazymanga.be' : [
        A("@", VPS_IP),
        CNAME('*', '@')
    ],
    'crazyzone.be' : [
        A("www", VPS_IP),
        CNAME('gateway', 'www'),
        CNAME('nas', 'www'),
        CNAME('web', 'www'),
        CNAME('commit', 'www'),
        CNAME('registry', 'www'),
        CNAME('repo', 'www'),
        CNAME('torrent', 'www'),
        CNAME('pxe', 'www'),
        CNAME('kickstart', 'www'),
        CNAME('docs', 'www'),
        CNAME('jenkins', 'www'),
        CNAME('mon', 'www'),
        CNAME('alert', 'www'),
        CNAME('tools', 'www'),
        CNAME('argocd', 'www'),
        CNAME('power-exporter', 'www'),
        CNAME('power-reader', 'www'),
        CNAME('json-exporter', 'www'),
        CNAME('plugwise', 'www'),
        CNAME('git', 'www'),
        CNAME('harbor', 'www'),
        CNAME('host', 'www'),
        CNAME('store', 'www'),
        CNAME('photos', 'www'),
        CNAME('wekan', 'www')
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
