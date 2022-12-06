var VPS_IP = "162.55.160.10";
var domains = {
    'crazymanga.be' : [
        A("@", VPS_IP)
    ],
    'crazyzone.be' : [
        A("@", VPS_IP)
    ],
    'crazytje.com' : [
        A("@", VPS_IP)
    ],
    'crazytje.be' : [
        A("@", VPS_IP)
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
