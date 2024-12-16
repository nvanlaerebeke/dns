var VPS_IP = "162.55.160.10";
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
        CNAME('registry-ui', 'www'),
        CNAME('repo', 'www'),
        CNAME('torrent', 'www'),
        CNAME('pxe', 'www'),
        CNAME('kickstart', 'www'),
        CNAME('docs', 'www'),
        CNAME('jenkins', 'www'),
        CNAME('nuget', 'www'),
        CNAME('registry-mirror', 'www'),
        CNAME('mon', 'www'),
        CNAME('alert', 'www'),
        CNAME('tools', 'www'),
        CNAME('argocd', 'www'),
        CNAME('pihole', 'www'),
        CNAME('guacamole', 'www'),
        CNAME('power-exporter', 'www'),
        CNAME('power-reader', 'www'),
        CNAME('json-exporter', 'www'),
        CNAME('plugwise', 'www'),
        CNAME('git', 'www'),
        CNAME('home-assistant', 'www'),
        CNAME('jenkins-nmd', 'www'),
        CNAME('harbor', 'www'),
        CNAME('artifactory', 'www'),
        CNAME('nmd', 'www'),
        CNAME('mimio-nmd', 'www'),
        CNAME('minio-nmd-console', 'www'),
        CNAME('mail-nmd', 'www'),
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
