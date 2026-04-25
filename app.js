// Nmap: Billowga ilaa Dhamaad — Buug dhamaystiran oo loo beddelay khibrad Terminal
// Dhammaan sharraxaadaha iyo output-ka waxaa laga soo qaatay buugga.
// Commands-ka waxaa la saxay OCR typos (-SS → -sS, -SV → -sV, -ON → -oN iwm).

const LESSONS = [
  {
    id: 1,
    number: "1",
    title: "Hordhac",
    explanation:
      "Nmap (Network Mapper) waa mid ka mid ah aaladaha ugu caansan, ugu faa'iidada badan, looguna isticmaal badan yahay. Waxaa sameeyey Gordon Lyon (oo sidoo kale loo yaqaan Fyodor) sannadkii 1997, waxaana uu markaa ka bilaabay aalad yar oo fudud oo loo isticmaali jiray si loo ogaado ports furan. Maanta, Nmap waa qalab dhamaystiran oo leh shaqooyin badan sida discovery-ga shabakadaha, scanning-ka ports, ogaanshaha adeegyada, iyo OS-yada.",
    notes: `⚠ DIGNIIN
Hadafka qoraaladaan waa waxbarasho iyo aqoon kororsi kaliya — nidaam aadan adigu lahayn
ama ogolaansho ka haysanin kuuma banaana inaad baartid.

Mowduucyada aan ka hadli doono:
• Nmap waa maxay – taariikhda
• Dejinta Nmap – Linux, Windows, Mac
• Aasaaska: syntax-ka, flags-ka, iyo habka loo akhriyo natiijada
• Host discovery – ogaanshaha nidaamyada ku xidhan shabakadda
• Port scanning noocyada dhammaantooda – TCP, UDP, SYN, Connect, Null, FIN, Xmas
• Service iyo version detection
• OS Detection
• Nmap Scripting Engine (NSE)
• Firewall iyo IDS Evasion
• Output formats – kaydinta natiijada
• Automation iyo Python integration
• Targets gaar-gaar ah – subnets, ranges, lists`,
    commands: [],
  },
  {
    id: 2,
    number: "2",
    title: "Taariikhda iyo Awooda Nmap",
    explanation:
      "Gordon Lyon wuxuu qoray Nmap-ka 1997-dii oo uu ku daabacay maqaalkiisa caanka ah ee Phrack Magazine. Ujeedadu ahayd in laga sameeyo aalad fudud oo si degdeg ah u ogaanaysa ports furan shabakadda.",
    notes: `2.1 Taariikh Gaaban

Sannadka   Dhacdada
1997       Nmap 1.0 la daabacay - Phrack Magazine
1998       SYN scan, OS fingerprinting la daray
2000       NmapFE (GUI) la bilaabay
2003       Nmap NSE (Scripting Engine) la bilaabay
2009       Nmap 5.0 - Ncat iyo Ndiff la daray
2012       Nmap 6.0 – NSE scripts 348+
2019       Nmap 7.80 - IPv6 iyo cloud support horumar
2023       Nmap 7.94 - macOS Apple Silicon, AI-assisted scripts
2024       Nmap 7.95 - Current stable release

2.2 Awooda Nmap - Features
Nmap waxay u shaqaysaa shan heer oo waaweyn:
  1. Host Discovery
  2. Port Scanning
  3. Service/Version Detection
  4. OS Detection
  5. Scriptable Interaction (NSE)`,
    commands: [],
  },
  {
    id: 3,
    number: "3",
    title: "Dejinta Nmap – Installation",
    explanation:
      "3.1 Linux (Kali, Ubuntu, Debian) — Nmap-ka badanaa waa mid horay u jira Kali Linux. Haddii kale waxaa lagu rakibi karaa apt, dnf, pacman, ama brew.",
    notes:
      "3.2 macOS iyo Windows — macOS waxaa la isticmaalaa 'brew install nmap'. Windows-ka waxaa laga soo dejin karaa https://nmap.org/download.html",
    commands: [
      {
        cmd: "nmap --version",
        output: `Nmap version 7.94 ( https://nmap.org )
Platform: x86_64-pc-linux-gnu
Compiled with: liblua-5.4.4 libpcre2-10.40 nmap-libdnet-1.12
libpcap-1.10.3 nmap-libssh2-1.10.0 openssl-3.0.7`,
      },
      {
        cmd: "sudo apt update && sudo apt install nmap -y",
        output: `Reading package lists... Done
Building dependency tree... Done
The following NEW packages will be installed: nmap
Setting up nmap (7.94+dfsg1-2)`,
      },
      {
        cmd: "sudo dnf install nmap -y",
        output: `Last metadata expiration check: 0:42:11 ago.
Dependencies resolved.
Installed: nmap-7.94-1.fc39.x86_64
Complete!`,
      },
      {
        cmd: "sudo pacman -S nmap",
        output: `resolving dependencies...
looking for conflicting packages...
Packages (1) nmap-7.94-1
:: Proceed with installation? [Y/n] y
(1/1) installing nmap                        [######################] 100%`,
      },
      {
        cmd: "brew install nmap",
        output: `==> Downloading https://formulae.brew.sh/api/formula/nmap.jws.json
==> Installing nmap
==> Summary: /opt/homebrew/Cellar/nmap/7.95: 811 files, 5.7MB`,
      },
    ],
  },
  {
    id: 4,
    number: "4",
    title: "Syntax iyo Qaabka Nmap",
    explanation: `4.1 Qaabka Guud
    nmap [Scan Type] [Options] {targets}

Tusaalooyin fudud:
  nmap 192.168.1.1            → Scan host kali ah
  nmap 192.168.1.0/24         → Scan subnet oo dhan
  nmap scanme.nmap.org        → Scan domain-ka
  nmap 192.168.1.1-254        → Scan IP range

4.2 Fahamka Output-ka Nmap
Kahor intaadan baranin flags-yada, waa muhiim in la fahmo sida natiijada Nmap loo akhriyo.

Sharaxaadda Output-ka:
• Starting Nmap – version-ka iyo taariikhda scan-ka
• Host is up – nidaamka wuu shaqaynayaa, latency (0.0021s = 2.1ms)
• 996 closed tcp ports – 996 dekedo way xidhan yihiin, ma muuqdaan
• PORT – lambarka port
• STATE – xaalada: open (furan), closed (xiran), filtered (la xannibay)
• SERVICE – magaca adeegga la aqoonsaday`,
    notes: `4.3 Xaaladaha Port States

Xaalada            Macnaha                Sharaxaad
open               Furan                  Adeeg wuu socdaa, wuu jawaabayaa
closed             Xiran                  Jawaab buu soo celiyaa laakiin adeeg ma jirto
filtered           La xannibay            Firewall/filter-ka xannibay
unfiltered         Xanibaad ma jirto      Nmap wuu gali karaa laakiin xaalada la'aan
open|filtered      Furan ama xanniban     Nmap ma go'aamiyaan
closed|filtered    Xidna ama xanniban     Nmap ma go'aamiyaan`,
    commands: [
      {
        cmd: "nmap 192.168.1.1",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:30 EAT
Nmap scan report for 192.168.1.1
Host is up (0.0021s latency).
Not shown: 996 closed tcp ports (reset)
PORT    STATE SERVICE
22/tcp  open  ssh
53/tcp  open  domain
80/tcp  open  http
443/tcp open  https
Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds`,
      },
    ],
  },
  {
    id: 5,
    number: "5",
    title: "Host Discovery – Ogaanshaha Nidaamyada",
    explanation: `Host Discovery waa marxaladda ugu horraysa ee scanning-ka – waxay u oggolaanaysaa in la ogaado nidaamyada jira oo online ah shabakadda kahor inta aanad bilaabinin port scanning. Tani waxay badbaadisaa waqti iyo resources.

5.1 Ping Scan – -sn
Flag-ka -sn (oo hore loogu oran jiray -sP) wuxuu sameeya host discovery kaliya, ma scan-gareeyo ports. Waa hab dhaqso ah oo loo ogaado nidaamyada online.

Sharaxaadda: -sn wuxuu u dirayaa ICMP echo (ping), TCP SYN port 443, TCP ACK port 80, iyo ICMP timestamp. Nidaamyada jawaaba waxaa lagu calaamadayaa 'host is up'. MAC Address-ka wuxuu muujinayaa vendor-ka (Apple, Dell, VMware...) – macluumaad qiimo badan.`,
    notes: null,
    commands: [
      {
        cmd: "nmap -sn 192.168.1.0/24",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:35 EAT
Nmap scan report for 192.168.1.1
Host is up (0.0012s latency).
MAC Address: C8:3A:35:12:AB:CD (Tenda Technology)
Nmap scan report for 192.168.1.5
Host is up (0.0034s latency).
MAC Address: 00:50:56:C0:00:08 (VMware)
Nmap scan report for 192.168.1.100
Host is up (0.0089s latency).
MAC Address: 08:00:27:1A:2B:3C (PCS Systemtechnik / VirtualBox)
Nmap scan report for 192.168.1.105
Host is up (0.045s latency).
MAC Address: 54:EE:75:D3:22:11 (Apple)
Nmap scan report for 192.168.1.110
Host is up (0.0023s latency).
MAC Address: F4:30:B9:FE:23:01 (Dell)
Nmap done: 256 IP addresses (5 hosts up) scanned in 3.21 seconds`,
      },
    ],
  },
  {
    id: 6,
    number: "5.2",
    title: "Hababka Discovery-ga kala duwan",
    explanation:
      "Nmap waxay leedahay flags badan oo discovery ah: -PE (ICMP Echo), -PP (Timestamp), -PM (Netmask), -PS (TCP SYN ping), -PA (TCP ACK ping), -PU (UDP ping), -PR (ARP - LAN kaliya). -Pn wuxuu ka boodaa host discovery-ga oo si toos ah u scan-gareeyaa.",
    notes:
      "Sharaxaadda -Pn: Haddii host-ku firewall leh uu ka xannibayo ping-yada, Nmap wuxuu u maleynayaa waa offline. -Pn wuxuu oggolaanayaa in la sii wado scan-ka.",
    commands: [
      { cmd: "nmap -PE -sn 192.168.1.0/24", output: `# -PE: ICMP Echo Request (ping caadi ah)
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:36 EAT
Nmap scan report for 192.168.1.1
Host is up (0.0011s latency).
Nmap done: 256 IP addresses (5 hosts up) scanned in 2.18 seconds` },
      { cmd: "nmap -PP -sn 192.168.1.0/24", output: `# -PP: ICMP Timestamp request
Nmap done: 256 IP addresses (3 hosts up) scanned in 4.12 seconds` },
      { cmd: "nmap -PM -sn 192.168.1.0/24", output: `# -PM: ICMP Netmask request (mar dhif ah ayaa jawaaba)
Nmap done: 256 IP addresses (2 hosts up) scanned in 4.92 seconds` },
      { cmd: "nmap -PS22,80,443 -sn 192.168.1.0/24", output: `# -PS: TCP SYN ping ports gaar ah
Nmap done: 256 IP addresses (6 hosts up) scanned in 3.45 seconds` },
      { cmd: "nmap -PA80,443 -sn 192.168.1.0/24", output: `# -PA: TCP ACK ping (firewall stateless ka gudba)
Nmap done: 256 IP addresses (5 hosts up) scanned in 2.87 seconds` },
      { cmd: "nmap -PU -sn 192.168.1.0/24", output: `# -PU: UDP ping (inta badan port 40125)
Nmap done: 256 IP addresses (4 hosts up) scanned in 5.61 seconds` },
      { cmd: "sudo nmap -PR -sn 192.168.1.0/24", output: `# -PR: ARP ping (LAN kaliya - ugu dhaqsaha badan)
Nmap done: 256 IP addresses (8 hosts up) scanned in 1.43 seconds` },
      { cmd: "nmap -Pn 192.168.1.100", output: `# -Pn: Ka bood host discovery, si toos ah u scan-gare
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:40 EAT
Nmap scan report for 192.168.1.100
Host is up.
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
Nmap done: 1 IP address (1 host up) scanned in 2.01 seconds` },
      { cmd: "nmap -n -sn 192.168.1.0/24", output: `# -n: Ha sameeyn DNS resolution (dhaqso)
Nmap done: 256 IP addresses (5 hosts up) scanned in 1.87 seconds` },
      { cmd: "nmap -R 192.168.1.0/24", output: `# -R: Samee DNS resolution xitaa hosts offline ah
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:42 EAT
Nmap scan report for router.local (192.168.1.1)
Nmap scan report for desktop-01.local (192.168.1.100)
Nmap done: 256 IP addresses (5 hosts up) scanned in 8.23 seconds` },
      { cmd: "nmap --dns-servers 8.8.8.8 scanme.nmap.org", output: `# DNS server gaar ah u isticmaal
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:43 EAT
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.18s latency).
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
Nmap done: 1 IP address (1 host up) scanned in 3.11 seconds` },
    ],
  },
  {
    id: 7,
    number: "6",
    title: "Port Scanning Noocyada – Scan Types",
    explanation: `Nmap waxay taageertaa noocyo badan oo port scanning ah, midkasta oo leh xaalado gaar ah oo uu ku wanaagsan yahay. Fahamka kala duwanaanshaha waa muhiim – nooca khalad ah waxuu keeni karaa natiijooyin aan saxanayn.

TCP CONNECTION ESTABLISHMENT (3-Way Handshake):
  Client: SYN
  Server: SYN-ACK
  Client: ACK
  Result: CONNECTED

SYN SCAN (-sS): Nmap RST dirtaa kahor handshake dhammaan
  Client: SYN
  Server: SYN-ACK
  Client: RST (stop)
  Result: PORT OPEN (no full connection = stealthier)`,
    notes: null,
    commands: [],
  },
  {
    id: 8,
    number: "6.1",
    title: "SYN Scan (-sS) – Ugu Caansan",
    explanation:
      "SYN scan (oo sidoo kale loo yaqaan 'stealth scan' ama 'half-open scan') waa nooca ugu badan la isticmaalo. Wuxuu u baahan yahay amar root/administrator. Wuxuu dira packet SYN ah oo haddii server-ku ku jawaabo SYN-ACK, Nmap wuxuu diraa RST si uusan xiriirka u dhamaystirin.",
    notes:
      "Sharaxaadda: -sS (SYN scan) wuu xawaare badan yahay, khatartisa yartahay. Ma dhamaystiro xiriirka — server-yada logs-kooda badanaa ma kaydiyaan SYN kaliya ee aan dhammaystirnayn. MySQL (3306) si toos ah u muuqanaysa.",
    commands: [
      {
        cmd: "sudo nmap -sS 192.168.1.100",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:40 EAT
Nmap scan report for 192.168.1.100
Host is up (0.00042s latency).
Not shown: 989 closed tcp ports (reset)
PORT     STATE SERVICE
21/tcp   open  ftp
22/tcp   open  ssh
80/tcp   open  http
139/tcp  open  netbios-ssn
443/tcp  open  https
445/tcp  open  microsoft-ds
3306/tcp open  mysql
8080/tcp open  http-proxy
Nmap done: 1 IP address (1 host up) scanned in 0.52 seconds`,
      },
    ],
  },
  {
    id: 9,
    number: "6.2",
    title: "TCP Connect Scan (-sT)",
    explanation:
      "TCP Connect scan waa nooca la isticmaalo marka aanu haysan amar root/administrator, ama haddii SYN scan aysan shaqaynaynin. Wuxuu dhammaystiraa xiriirka TCP oo dhan — taas oo keentaa in server-ku logs-ka ku kaydiyaan.",
    notes: null,
    commands: [
      {
        cmd: "nmap -sT 192.168.1.100",
        output: `# -sT: User-level scan (root ma u baahna)
# Waa log-gareeyaan server-yada — khatarta ugu weyni
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:42 EAT
Nmap scan report for 192.168.1.100
Host is up (0.00089s latency).
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https
Nmap done: 1 IP address (1 host up) scanned in 1.23 seconds`,
      },
    ],
  },
  {
    id: 10,
    number: "6.3",
    title: "UDP Scan (-sU)",
    explanation:
      "UDP scan waxay isticmaashaa protocols-ka muhiimka ah sida DNS (53), DHCP (67/68), SNMP (161), NTP (123), iyo TFTP (69).",
    notes:
      "Sharaxaadda: SNMP (161/udp) la helay — adeeggan marka si khaldan loo habeynayo wuxuu bixiyaa macluumaad aad u xasaasiya ah oo ku saabsan nidaamka. 'open|filtered' macneheedu waa Nmap ma garanin haddii furan yahay ama firewall-ku xannibay.",
    commands: [
      {
        cmd: "sudo nmap -sU 192.168.1.100",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:45 EAT
Nmap scan report for 192.168.1.100
Host is up (0.0012s latency).
PORT     STATE         SERVICE
53/udp   open          domain
67/udp   open|filtered dhcps
68/udp   open|filtered dhcpc
123/udp  open          ntp
161/udp  open          snmp
500/udp  open|filtered isakmp
5353/udp open          zeroconf
Nmap done: 1 IP address (1 host up) scanned in 156.34 seconds`,
      },
    ],
  },
  {
    id: 11,
    number: "6.4",
    title: "Stealth Scans – FIN, NULL, Xmas",
    explanation:
      "Scan-yadan saddexda ah waxay isticmaalaan packets TCP ah oo aan caadi ahayn si ay u fogaadaan IDS/IPS nidaamyada. Waxay ku shaqayn karaan nidaamyada UNIX/Linux, laakiin Windows inta badan waa ku fashilmaan.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -sN 192.168.1.100",
        output: `# NULL scan: port furan = ma jawaabo (OS silent), port xidna = RST
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:48 EAT
Nmap scan report for 192.168.1.100
PORT    STATE         SERVICE
22/tcp  open|filtered ssh
80/tcp  open|filtered http
Nmap done: 1 IP address (1 host up) scanned in 2.11 seconds`,
      },
      {
        cmd: "sudo nmap -sF 192.168.1.100",
        output: `# FIN scan: port furan = ma jawaabo, port xidna = RST
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:49 EAT
Nmap scan report for 192.168.1.100
PORT    STATE         SERVICE
22/tcp  open|filtered ssh
80/tcp  open|filtered http
Nmap done: 1 IP address (1 host up) scanned in 1.98 seconds`,
      },
      {
        cmd: "sudo nmap -sX 192.168.1.100",
        output: `# Xmas scan: flags FIN+PSH+URG = waxay u ekaataa 'xmas tree lights'
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:50 EAT
Nmap scan report for 192.168.1.100
PORT    STATE         SERVICE
80/tcp  open|filtered http
443/tcp open|filtered https
Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds`,
      },
    ],
  },
  {
    id: 12,
    number: "6.5",
    title: "ACK Scan (-sA) – Firewall Mapping",
    explanation:
      "ACK scan looma isticmaalo si loo ogaado ports furan — waxaa loo isticmaalaa si loo ogaado firewalls-yada iyo filtering rules-kooda. Wuxuu muujiyaa ports 'unfiltered' ama 'filtered'.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -sA 192.168.1.1",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:52 EAT
Nmap scan report for 192.168.1.1 (router)
Host is up (0.0011s latency).
PORT     STATE      SERVICE
22/tcp   filtered   ssh
80/tcp   unfiltered http
443/tcp  unfiltered https
8080/tcp filtered   http-proxy
# 'filtered'   = firewall wuu joojiyay (RST la'aan)
# 'unfiltered' = packet la gaadhi karaa (RST buu soo celiyay)
Nmap done: 1 IP address (1 host up) scanned in 1.87 seconds`,
      },
    ],
  },
  {
    id: 13,
    number: "6.6",
    title: "Window Scan (-sW) iyo Maimon Scan (-sM)",
    explanation:
      "Window scan wuxuu eegayaa TCP window size-ka – qaar OS ah waxay adeegsadaan window size kala duwan. Maimon scan wuxuu dirayaa FIN/ACK probe, wuxuuna ka shaqeeyaa BSD-derived systems kaliya.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -sW 192.168.1.100",
        output: `# -sW: Window Scan — TCP window size-ka eegaysa
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:54 EAT
Nmap scan report for 192.168.1.100
PORT    STATE      SERVICE
22/tcp  unfiltered ssh
80/tcp  unfiltered http
Nmap done: 1 IP address (1 host up) scanned in 2.22 seconds
# Qaarkood OS-yada waxay adeegsadaan window size kala duwan
# open ports leh window != 0, closed ports waxaa window = 0`,
      },
      {
        cmd: "sudo nmap -sM 192.168.1.100",
        output: `# -sM: Maimon Scan — FIN/ACK probe
# BSD-derived systems only waxay soo celisaa RST marka port furan
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 14:55 EAT
Nmap scan report for 192.168.1.100
PORT    STATE         SERVICE
22/tcp  open|filtered ssh
Nmap done: 1 IP address (1 host up) scanned in 2.87 seconds`,
      },
    ],
  },
  {
    id: 14,
    number: "6.7",
    title: "Isbarbardhig: Scan Types",
    explanation: "Shaxda hoose waxay soo koobaysaa noocyada scan kala duwan iyo markaad isticmaasho midkasta.",
    notes: `Nooca          Flag   Root?   Log?   Xawaaraha   Isticmaalka
SYN Scan       -sS    Haa     Maya   ★★★         Default, ugu caansan
Connect Scan   -sT    Maya    Haa    ★★          Root la'aanta
UDP Scan       -sU    Haa     Maya   ★           DNS, SNMP, NTP
NULL Scan      -sN    Haa     Maya   ★★          Linux/Unix, IDS-dodge
FIN Scan       -sF    Haa     Maya   ★★          Linux/Unix, IDS-dodge
Xmas Scan      -sX    Haa     Maya   ★★          Linux/Unix, IDS-dodge
ACK Scan       -sA    Haa     Maya   ★★★         Firewall mapping
Idle Scan      -sI    Haa     Maya   ★           Full stealth`,
    commands: [],
  },
  {
    id: 15,
    number: "7",
    title: "Target Specification",
    explanation:
      "Nmap waxay taageertaa dhowr nooc oo bartilmaameed ah – IP kaliya, subnet, range, domain, ama file. Xulashada saxda ah waxay badbaadisaa waqti.",
    notes: "7.1 Noocyada Targets",
    commands: [
      { cmd: "nmap 192.168.1.1", output: `# IP kali ah
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:02 EAT
Nmap scan report for 192.168.1.1
Host is up (0.0019s latency).
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
Nmap done: 1 IP address (1 host up) scanned in 1.54 seconds` },
      { cmd: "nmap 192.168.1.1 192.168.1.5 10.0.0.1", output: `# IP badan oo kala duwan
Nmap done: 3 IP addresses (2 hosts up) scanned in 4.13 seconds` },
      { cmd: "nmap 192.168.1.1-254", output: `# Range octets ah
Nmap done: 254 IP addresses (7 hosts up) scanned in 12.87 seconds` },
      { cmd: "nmap 192.168.1.0/24", output: `# Subnet CIDR — 256 hosts
Nmap done: 256 IP addresses (8 hosts up) scanned in 13.22 seconds` },
      { cmd: "nmap 10.0.0.0/8", output: `# 16.7 million hosts — DIGNIIN: waqti dheer!
Nmap scan in progress...` },
      { cmd: "nmap 172.16.0.0/12", output: `# 1 million hosts
Nmap scan in progress...` },
      { cmd: "nmap scanme.nmap.org", output: `# Domain-ka
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:05 EAT
Nmap scan report for scanme.nmap.org (45.33.32.156)
Host is up (0.18s latency).
PORT     STATE SERVICE
22/tcp   open  ssh
80/tcp   open  http
9929/tcp open  nping-echo
Nmap done: 1 IP address (1 host up) scanned in 4.21 seconds` },
      { cmd: "nmap -iL targets.txt", output: `# File ah targets oo ku jira
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:07 EAT
Nmap done: 5 IP addresses (4 hosts up) scanned in 11.23 seconds` },
      { cmd: "nmap 192.168.1.0/24 --exclude 192.168.1.1,192.168.1.2", output: `# Subnet oo dhan marka laga reebo 2 host
Nmap done: 254 IP addresses (6 hosts up) scanned in 12.11 seconds` },
      { cmd: "nmap -iR 10 -sn -n", output: `# 10 random internet hosts
# DIGNIIN: Waa internet. Heshii oggolaanshaha!
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:10 EAT
Nmap scan report for 203.0.113.45
Host is up.
Nmap done: 10 IP addresses (3 hosts up) scanned in 8.92 seconds` },
    ],
  },
  {
    id: 16,
    number: "8",
    title: "Port Specification",
    explanation:
      "Nmap marka caadiga ah wuxuu scan-garayaa 1000 dekedo oo loo yaqaan 'top 1000 ports'. Si loogu dhaqsiiyo, waa muhiim in la barto sida loo xaddido ama loo baadho ports.",
    notes: `8.1 Hababka Port Specification
# -F waa ugu dhaqsiga badan scan-yada muhiimka ah

8.2 Dekedaha Caanka ah ee la Baadho

Dekeda    Protocol   Adeegga            Muhiimadda
21        TCP        FTP                Credentials la'aan, anonymous login
22        TCP        SSH                Brute force target
23        TCP        Telnet             Aad u nugul – plain text
25        TCP        SMTP               Email relay open
53        TCP/UDP    DNS                Zone transfer, enumeration
80        TCP        HTTP               Web app attacks
110       TCP        POP3               Credentials exposure
135       TCP        MSRPC              Windows exploits
139/445   TCP        SMB                EternalBlue, shares
443       TCP        HTTPS              SSL/TLS misconfig
1433      TCP        MSSQL              Database access
3306      TCP        MySQL              Database direct access
3389      TCP        RDP                BlueKeep, brute force
5432      TCP        PostgreSQL         Database access
5900      TCP        VNC                Weak auth, no encryption
6379      TCP        Redis              No auth default
8080/8443 TCP        HTTP Alt           Admin panels
27017     TCP        MongoDB            No auth default`,
    commands: [
      { cmd: "nmap -p 80 192.168.1.1", output: `# -p: Port gaar ah — Port 80 kaliya
PORT   STATE SERVICE
80/tcp open  http
Nmap done: 1 IP address (1 host up) scanned in 0.21 seconds` },
      { cmd: "nmap -p 80,443,8080 192.168.1.1", output: `# Ports dhowr
PORT     STATE  SERVICE
80/tcp   open   http
443/tcp  open   https
8080/tcp closed http-proxy
Nmap done: 1 IP address (1 host up) scanned in 0.34 seconds` },
      { cmd: "nmap -p 1-1000 192.168.1.1", output: `# Range 1-1000
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
443/tcp open  https
Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds` },
      { cmd: "nmap -p- 192.168.1.1", output: `# Dhammaan 65535 ports
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:15 EAT
PORT      STATE SERVICE
22/tcp    open  ssh
80/tcp    open  http
443/tcp   open  https
8080/tcp  open  http-proxy
Nmap done: 1 IP address (1 host up) scanned in 68.33 seconds` },
      { cmd: "nmap -p T:80,U:53 192.168.1.1", output: `# TCP 80, UDP 53
PORT   STATE SERVICE
53/udp open  domain
80/tcp open  http
Nmap done: 1 IP address (1 host up) scanned in 4.56 seconds` },
      { cmd: "nmap --top-ports 100 192.168.1.1", output: `# Top 100 ports
Nmap done: 1 IP address (1 host up) scanned in 1.12 seconds` },
      { cmd: "nmap --top-ports 10 192.168.1.1", output: `# Super fast - 10 ports kaliya
Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds` },
      { cmd: "nmap -F 192.168.1.0/24", output: `# -F: Fast scan top 100 ports
Starting Nmap 7.94 ( https://nmap.org )...
Nmap done: 256 IP addresses (5 hosts up) scanned in 4.12 seconds` },
    ],
  },
  {
    id: 17,
    number: "9",
    title: "Service iyo Version Detection",
    explanation:
      "Ogaanshaha service-yada iyo noocyadooda (versions) waa marxaladda ugu qiimaha badan ee scanning-ka. Laga bilaabo version-ka la ogaaday, waxaad raadin kartaa CVE-yada (Common Vulnerabilities and Exposures) ku saabsan nooc gaar ah.\n\n9.1 -sV: Version Detection",
    notes:
      "Sharaxaadda: Natiijadan vsftpd 2.3.4 waa nooc leh backdoor caanka ah (CVE-2011-2523). OpenSSH 4.7p1 waa mid aad u duugooday. Samba 3.0.20 waxaa ku jira vulnerability caanka ah. MySQL 5.0.51 waa gabow.",
    commands: [
      {
        cmd: "nmap -sV 192.168.1.100",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:00 EAT
Nmap scan report for 192.168.1.100
Host is up (0.00039s latency).
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1 (protocol 2.0)
23/tcp   open  telnet      Linux telnetd
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X
445/tcp  open  netbios-ssn Samba smbd 3.0.20-Debian
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
5432/tcp open  postgresql  PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp open  vnc         VNC (protocol 3.3)
Service Info: OSs: Unix, Linux; CPE: cpe:/o:linux:linux_kernel
Service detection performed. Please report incorrect results.
Nmap done: 1 IP address (1 host up) scanned in 11.34 seconds`,
      },
    ],
  },
  {
    id: 18,
    number: "9.2",
    title: "--version-intensity: Xawaaraha vs Dheellitirnaanta",
    explanation:
      "Intensity levels 0-9 (default=7): 0 = Light (dhaqso), 5 = Default-ish, 9 = Thorough (dheellitirnaan weyn).",
    notes: null,
    commands: [
      { cmd: "nmap -sV --version-intensity 0 192.168.1.100", output: `# Light scan — dhaqso badan
PORT   STATE SERVICE VERSION
22/tcp open  ssh
80/tcp open  http
Nmap done: 1 IP address (1 host up) scanned in 3.21 seconds` },
      { cmd: "nmap -sV --version-intensity 9 192.168.1.100", output: `# Thorough — probes badan
PORT   STATE SERVICE VERSION
22/tcp open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
80/tcp open  http    Apache httpd 2.4.38 ((Debian))
Nmap done: 1 IP address (1 host up) scanned in 34.12 seconds` },
      { cmd: "nmap -sV --version-light 192.168.1.100", output: `# --version-light: Intensity 2 (fast)
Nmap done: 1 IP address (1 host up) scanned in 4.67 seconds` },
      { cmd: "nmap -sV --version-all 192.168.1.100", output: `# --version-all: Intensity 9 (dhammaystiran)
Nmap done: 1 IP address (1 host up) scanned in 32.88 seconds` },
    ],
  },
  {
    id: 19,
    number: "9.3",
    title: "OS Detection (-O)",
    explanation:
      "OS detection waxay isticmaashaa farsamada TCP/IP stack fingerprinting — waxay barbar dhigaysaa jawaabaha nidaamka lala jawaabo signatures-yada kaydsan Nmap-ka.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -O 192.168.1.100",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:05 EAT
Nmap scan report for 192.168.1.100
Host is up (0.00041s latency).
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
Device type: general purpose
Running: Linux 2.6.X
OS CPE: cpe:/o:linux:linux_kernel:2.6
OS details: Linux 2.6.9 - 2.6.33
Network Distance: 1 hop
OS detection performed. Please report incorrect results.
Nmap done: 1 IP address (1 host up) scanned in 4.67 seconds`,
      },
      {
        cmd: "sudo nmap -O --osscan-guess 192.168.1.50",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:07 EAT
Nmap scan report for 192.168.1.50
Host is up (0.0012s latency).
Aggressive OS guesses:
  Microsoft Windows 10 1803 - 1909 (96%)
  Microsoft Windows Server 2016 (88%)
  Microsoft Windows 7 SP1 (85%)
# Boqolkiiba sare = dheeraad ku dhow macno-furida
Nmap done: 1 IP address (1 host up) scanned in 6.22 seconds`,
      },
    ],
  },
  {
    id: 20,
    number: "9.4",
    title: "-A: Aggressive Scan – Wax Walba Isku Mar",
    explanation:
      "Flag-ka -A waa isku-darka afar option: OS detection (-O), version detection (-sV), script scanning (-sC), iyo traceroute (--traceroute). Waa scan aad u dhammaystiran.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -A 192.168.1.100",
        output: `# Equivalent to: -sV -sC -O --traceroute
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:10 EAT
Nmap scan report for 192.168.1.100
Host is up (0.00043s latency).
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.9p1 Debian 10+deb10u2 (protocol 2.0)
| ssh-hostkey:
|   2048 aa:bb:cc:dd:ee:ff:00:11:22:33 (RSA)
|_  256  ff:ee:dd:cc:bb:aa:99:88:77:66 (ECDSA)
80/tcp   open  http    Apache httpd 2.4.38 ((Debian))
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.38 (Debian)
|_http-title: My Website Home
3306/tcp open  mysql   MySQL 8.0.27-0ubuntu0.20.04.1
| mysql-info:
|   Protocol: 10
|   Version: 8.0.27-0ubuntu0.20.04.1
|   Thread ID: 9
|_  Auth Plugin Name: caching_sha2_password
Running: Linux 5.X
OS details: Linux 5.4 - 5.10
TRACEROUTE (using port 80/tcp)
HOP RTT     ADDRESS
1   0.41ms  192.168.1.1
2   0.43ms  192.168.1.100
Nmap done: 1 IP address (1 host up) scanned in 18.45 seconds`,
      },
    ],
  },
  {
    id: 21,
    number: "10",
    title: "Timing iyo Performance – Xawaaraha Scan-ka",
    explanation:
      "Nmap waxay bixisaa xaddid xawaareed oo aad muhiim ah. Scan-ka degdega ah wuxuu keeni karaa in la ogaado (IDS alerts), halka scan-ka gaaban wuxuu muujinayaa shay caadi ah.\n\n10.1 Timing Templates (-T0 ilaa -T5)",
    notes: `Template   Magaca        Delay               Isticmaalka
-T0        Paranoid      5 daqiiqo gal       IDS/IPS dodge
-T1        Sneaky        15 ilbiriqsi        Stealthy
-T2        Polite        0.4s                Bandwidth yaraynta
-T3        Normal        Default             Dheellitir
-T4        Aggressive    Waa dhaqso          Lab iyo fast networks
-T5        Insane        Aad dhaqso u yahay  Fast nets - wuxuu lumiyaa natiijooyin`,
    commands: [
      { cmd: "nmap -T4 192.168.1.0/24", output: `# T4 — scan dhaqso (LAN / lab)
Nmap done: 256 IP addresses (8 hosts up) scanned in 12.45 seconds` },
      { cmd: "sudo nmap -T1 -sS 192.168.1.100", output: `# T1 — internet scanning (IDS-dodge)
# Wuxuu qaadaa waqti dheer laakiin aad u qarsooda
Nmap done: 1 IP address (1 host up) scanned in 524.12 seconds` },
      { cmd: "sudo nmap -T0 -p 22,80 192.168.1.100", output: `# Paranoid (5 min between probes!)
# Waxaa laga dhigtaa baaxad aad u yar — scan weeks ayuu qaadayaa
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:20 EAT
[Waiting 5 minutes between probes...]` },
    ],
  },
  {
    id: 22,
    number: "10.2",
    title: "Fine-grained Timing Options",
    explanation:
      "Marka laga reebo templates, Nmap waxay leedahay options gaar ah oo aad ku xakameyn karto xawaaraha iyo parallelism-ka scan-ka.",
    notes: null,
    commands: [
      { cmd: "nmap --min-rate 1000 -p- 192.168.1.100", output: `# --min-rate: 1000+ packets/sec — dhaqso aad u weyn
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:25 EAT
Nmap done: 1 IP address (1 host up) scanned in 68.11 seconds` },
      { cmd: "nmap --max-rate 100 192.168.1.0/24", output: `# --max-rate: 100 packets/sec max — xaddid bandwidth-ka
Nmap done: 256 IP addresses (5 hosts up) scanned in 1243.87 seconds` },
      { cmd: "nmap --min-parallelism 100 192.168.1.0/24", output: `# Probes 100 isku mar — parallel scanning
Nmap done: 256 IP addresses (7 hosts up) scanned in 8.34 seconds` },
      { cmd: "nmap --host-timeout 30s 192.168.1.0/24", output: `# Haddii host-ku 30s gudahiis uusan dhammayn → next host
Nmap done: 256 IP addresses (6 hosts up) scanned in 38.12 seconds` },
      { cmd: "sudo nmap --scan-delay 1s 192.168.1.100", output: `# 1s wait dhexdooda — firewall/IDS ka fiditid
Nmap done: 1 IP address (1 host up) scanned in 1045.22 seconds` },
    ],
  },
  {
    id: 23,
    number: "11",
    title: "Nmap Scripting Engine (NSE)",
    explanation:
      "NSE (Nmap Scripting Engine) waa mid ka mid ah awoodaha ugu waaweyn ee Nmap. Waxay ku oggolaanaysaa inaad qorto scripts-yada Lua-ga si ay u qabtaan hawlo sida vulnerability detection, service enumeration, brute forcing, iyo wax ka badan. Nmap waxaa ku jira 700+ script oo diyaar ah.",
    notes: `11.1 Script Categories

Qaybta     Sharaxaad                    Tusaale Scripts
auth       Authentication brute force   ssh-brute, ftp-brute, http-brute
broadcast  Discover via broadcast       broadcast-dhcp-discover
brute      Password attacks             mysql-brute, smb-brute, vnc-brute
default    Scripts la oran jiray default ssh-hostkey, http-title, ssl-cert
discovery  Extra information            dns-brute, snmp-info, smb-enum-shares
dos        Denial of Service tests      http-slowloris, smb-vuln-ms10-054
exploit    Active exploitation          ftp-vsftpd-backdoor, ms17-010-eternalblue
fuzzer     Fuzzing inputs               http-form-fuzzer
intrusive  Invasive tests               http-put, ftp-bounce
malware    Malware detection            http-malware-host
safe       Safe tests                   http-headers, ssl-date
version    Version detection            mysql-info, smtp-capabilities
vuln       Vulnerability detection      smb-vuln-ms17-010, http-shellshock`,
    commands: [],
  },
  {
    id: 24,
    number: "11.2",
    title: "-sC: Default Scripts",
    explanation:
      "-sC runs default NSE scripts alongside version detection. Waa hal amar oo ku qaada tirada scripts ugu badan ee faa'iido leh.",
    notes: null,
    commands: [
      {
        cmd: "nmap -sC -sV 192.168.1.100",
        output: `PORT    STATE SERVICE  VERSION
22/tcp  open  ssh      OpenSSH 7.9p1
| ssh-hostkey:
|   2048 ab:cd:ef:12:34:56 (RSA)
|   256  78:90:ab:cd:ef:12 (ECDSA)
|_  256  12:34:56:78:90:ab (ED25519)
80/tcp  open  http     Apache httpd 2.4.38
| http-methods:
|_  Supported Methods: GET HEAD POST OPTIONS
|_http-server-header: Apache/2.4.38 (Debian)
|_http-title: Welcome to My Server
443/tcp open  ssl/http Apache httpd 2.4.38
| ssl-cert: Subject: commonName=myserver.local/organizationName=MyOrg
| Not valid before: 2024-01-01T00:00:00
|_Not valid after:  2025-12-31T23:59:59
Nmap done: 1 IP address (1 host up) scanned in 12.34 seconds`,
      },
    ],
  },
  {
    id: 25,
    number: "11.3",
    title: "Scripts Gaar Gaar Ah",
    explanation: "Waxaad u yeedhi kartaa script gaar ah, ama category oo dhan (sida vuln). Muhiim: scripts-ka category-ga 'vuln' waxay galin kartaa khatar nidaamka — ka taxaddar.",
    notes: null,
    commands: [
      { cmd: "nmap --script=http-title 192.168.1.0/24", output: `# Script gaar ah:
192.168.1.1   |_http-title: Router Admin
192.168.1.5   |_http-title: Apache2 Default Page
192.168.1.100 |_http-title: My Website Home` },
      { cmd: "nmap --script=http-title,http-headers 192.168.1.100", output: `# Scripts dhowr:
PORT   STATE SERVICE
80/tcp open  http
|_http-title: My Website Home
| http-headers:
|   Server: Apache/2.4.38 (Debian)
|   Content-Type: text/html
|_  Connection: close
Nmap done: 1 IP address (1 host up) scanned in 3.21 seconds` },
      { cmd: "nmap --script=vuln 192.168.1.100", output: `# Category oo dhan:
PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-vuln-ms17-010:
|   VULNERABLE:
|   Remote Code Execution vulnerability in Microsoft SMBv1 servers (ms17-010)
|     State: VULNERABLE
|     IDs: CVE:CVE-2017-0143
|     Risk factor: HIGH
|     Description:
|       The SMBv1 server in various Microsoft Windows versions
|       allows remote attackers to execute arbitrary code via
|_      crafted packets (EternalBlue exploit).
[+] EternalBlue vulnerability la ogaaday! (MS17-010)` },
    ],
  },
  {
    id: 26,
    number: "11.4",
    title: "SMB Enumeration Scripts",
    explanation: "SMB (Server Message Block) waa protocol Windows. Scripts-ka SMB waxay muujin karaan shares, users, iyo xog kale oo muhiim ah.",
    notes: null,
    commands: [
      {
        cmd: "nmap --script=smb-enum-shares,smb-enum-users -p 445 192.168.1.100",
        output: `PORT    STATE SERVICE
445/tcp open  microsoft-ds
| smb-enum-shares:
|   account_used: <blank>
|   \\\\192.168.1.100\\ADMIN$:
|     Type: STYPE_DISKTREE_HIDDEN
|     Comment: Remote Admin
|   \\\\192.168.1.100\\C$:
|     Type: STYPE_DISKTREE_HIDDEN
|     Comment: Default share
|   \\\\192.168.1.100\\IPC$:
|     Type: STYPE_IPC_HIDDEN
|   \\\\192.168.1.100\\backup:
|     Type: STYPE_DISKTREE
|     Comment: Backup Files
|_    Access: READ, WRITE
| smb-enum-users:
|   WORKGROUP\\Administrator
|   WORKGROUP\\user1
|_  WORKGROUP\\backup_admin`,
      },
    ],
  },
  {
    id: 27,
    number: "11.5",
    title: "Brute Force Scripts",
    explanation: "Scripts-ka brute force-ka ah waxay tijaabiyaan username/password isku dhufasho. Waa intrusive – isticmaal kaliya nidaamyada aad oggolaanshaha u haysato.",
    notes: null,
    commands: [
      { cmd: "nmap --script=ssh-brute -p 22 192.168.1.100", output: `# SSH Brute Force:
22/tcp open  ssh
| ssh-brute:
|   Accounts:
|     root:toor         — Valid credentials
|     admin:admin123    — Valid credentials
|_  Statistics: Performed 25 guesses in 15 seconds.` },
      { cmd: "nmap --script=ftp-brute -p 21 192.168.1.100", output: `# FTP Brute Force:
21/tcp open  ftp
| ftp-brute:
|   Accounts:
|     ftp:ftp           — Valid credentials
|_  Statistics: Performed 30 guesses in 12 seconds.` },
      { cmd: "nmap --script=mysql-brute -p 3306 192.168.1.100", output: `# MySQL Brute Force:
3306/tcp open  mysql
| mysql-brute:
|   Accounts:
|     root:             — Valid credentials (empty password!)
|_  Statistics: Performed 15 guesses in 8 seconds.` },
    ],
  },
  {
    id: 28,
    number: "11.6",
    title: "HTTP Scripts",
    explanation: "Scripts-ka HTTP waxay baadhaan web servers: directories hidden, vulnerabilities sida Shellshock, CMS-yada, iwm.",
    notes: null,
    commands: [
      { cmd: "nmap --script=http-enum -p 80,443 192.168.1.100", output: `80/tcp open  http
| http-enum:
|   /admin/:       Possible admin folder
|   /phpmyadmin/:  phpMyAdmin
|   /.git/:        Possible git repository
|   /config.php:   Configuration file
|_  /backup.zip:   Backup archive` },
      { cmd: "nmap --script=http-shellshock -p 80 192.168.1.100", output: `80/tcp open  http
| http-shellshock:
|   VULNERABLE:
|   HTTP Shellshock vulnerability
|     State: VULNERABLE (Exploitable)
|_    IDs: CVE:CVE-2014-6271` },
    ],
  },
  {
    id: 29,
    number: "12",
    title: "Output Formats – Kaydinta Natiijada",
    explanation:
      "Nmap waxay taageertaa noocyo kala duwan oo kaydinta natiijada (output). Dadka professional-ka ahi waxay inta badan kaydiyaan natiijada dhowr format si dib loogu eegi karo ama loo isticmaalo qalab kale.\n\n12.1 Output Types",
    notes: null,
    commands: [
      { cmd: "nmap -sV 192.168.1.100 -oN scan_normal.txt", output: `# -oN: Normal output (aqrin-karis)
Nmap done: 1 IP address (1 host up) scanned in 8.23 seconds
# File: scan_normal.txt la abuuray` },
      { cmd: "nmap -sV 192.168.1.100 -oX scan_xml.xml", output: `# -oX: XML output (tools kale u isticmaal)
Nmap done: 1 IP address (1 host up) scanned in 8.12 seconds
# File: scan_xml.xml la abuuray` },
      { cmd: "nmap -sV 192.168.1.100 -oG scan_grep.txt", output: `# -oG: Grepable output (grep, awk)
# Nmap 7.94 scan initiated...
Host: 192.168.1.100 () Status: Up
Host: 192.168.1.100 () Ports: 22/open/tcp//ssh//OpenSSH 7.9p1/, 80/open/tcp//http//Apache 2.4.38/` },
      { cmd: "nmap 192.168.1.100 -oS skiddie.txt", output: `# -oS: ScRipT KiDdie ouTpuT (fun only!)
StArTiNg NmAp 7.94 aT 2026-01-15 15:30 EAT
Nmap sCaN RepoRt FoR 192.168.1.100
HosT i5 uP (0.00042s lat3ncy).` },
      { cmd: "nmap -sC -sV -T4 192.168.1.100 -oA full_scan", output: `# -oA: Dhammaan formats isku mar (N+X+G)
# Wuxuu abuurtaa: full_scan.nmap, full_scan.xml, full_scan.gnmap
Nmap done: 1 IP address (1 host up) scanned in 14.21 seconds` },
    ],
  },
  {
    id: 30,
    number: "12.2",
    title: "Verbosity iyo Debugging",
    explanation: "Marka aad u baahan tahid xog dheeraad ah scan-ka, isticmaal -v (verbose), -vv (very verbose), ama -d (debug). --reason wuxuu muujinayaa sababta port u furan ama u xidna yahay.",
    notes: null,
    commands: [
      { cmd: "nmap -v 192.168.1.100", output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:30 EAT
Initiating Ping Scan at 15:30
Scanning 192.168.1.100 [4 ports]
Completed Ping Scan at 15:30, 0.00s elapsed (1 total hosts)
Initiating SYN Stealth Scan at 15:30
Scanning 192.168.1.100 [1000 ports]
Discovered open port 22/tcp on 192.168.1.100
Discovered open port 80/tcp on 192.168.1.100
Completed SYN Stealth Scan at 15:30, 1.24s elapsed (1000 total ports)
Nmap done: 1 IP address (1 host up) scanned in 1.42 seconds` },
      { cmd: "nmap -vv 192.168.1.100", output: `# -vv: Very verbose — xog dheeri ah oo scanning ah
[Packets sent: 1003, received: 876, dropped: 0]
Nmap done: 1 IP address (1 host up) scanned in 1.45 seconds` },
      { cmd: "nmap -d 192.168.1.100", output: `# -d: Debug level 1 — internals-ka Nmap
[DEBUG] Resolving targets...
[DEBUG] Initiating scan engine...
Nmap done: 1 IP address (1 host up) scanned in 2.11 seconds` },
      { cmd: "nmap --reason 192.168.1.100", output: `# --reason: Muuji sababta port-ka u furan ama u xidna
PORT     STATE  SERVICE    REASON
22/tcp   open   ssh        syn-ack ttl 64
80/tcp   open   http       syn-ack ttl 64
8080/tcp closed http-proxy reset ttl 64
Nmap done: 1 IP address (1 host up) scanned in 1.32 seconds` },
    ],
  },
  {
    id: 31,
    number: "13",
    title: "Firewall iyo IDS Evasion",
    explanation:
      "Penetration testers-ka waxay u baahan yihiin inay gaadhan nidaamyada xitaa haddii firewall ama IDS (Intrusion Detection System) jiro. Nmap waxay bixisaa hababka evasion-ka oo kala duwan.\n\n13.1 Fragmentation\nPacket fragmentation waxay jabisaa packets-yada si ay u yaraadaan – IDS qaarkood ma isku geeyaan (reassemble) packets yar.\n\n13.2 Decoy Scanning\nDecoy scanning waxay u muujisaa server-ka scan-ku in uu ka yimaaddo IP-yada badan. IDS/Admin-ku way ku adagtahay inuu kala saaro scan-ka dhabta ah.\n\n13.3 Source Port Manipulation\nQaarkood firewalls-ku waxay aaminaan traffic laga helo ports gaar ah (sida 53, 80, 443).",
    notes: null,
    commands: [
      { cmd: "sudo nmap -f 192.168.1.100", output: `# -f: Fragment packets (8 bytes each)
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:40 EAT
Nmap scan report for 192.168.1.100
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
Nmap done: 1 IP address (1 host up) scanned in 2.87 seconds` },
      { cmd: "sudo nmap -f -f 192.168.1.100", output: `# -f -f: Double fragmentation (16 bytes)
Nmap done: 1 IP address (1 host up) scanned in 3.12 seconds` },
      { cmd: "sudo nmap --mtu 16 192.168.1.100", output: `# --mtu: Custom fragment size (8-byte multiples)
Nmap done: 1 IP address (1 host up) scanned in 2.98 seconds` },
      { cmd: "sudo nmap -D 10.0.0.1,10.0.0.2,10.0.0.3,ME 192.168.1.100", output: `# -D: Decoy IPs la isticmaal
# ME = scan-kayaga dhabta ah dhexdooda ku jira
# Server-ku wuxuu arki doonaa 4 source IP isku mar
Nmap done: 1 IP address (1 host up) scanned in 3.45 seconds` },
      { cmd: "sudo nmap -D RND:10 192.168.1.100", output: `# -D RND:10 — 10 random decoys
# 10 IPs random ah + scan-kayaga = 11 source la arki doona
Nmap done: 1 IP address (1 host up) scanned in 4.01 seconds` },
      { cmd: "sudo nmap --source-port 53 192.168.1.100", output: `# --source-port: Source port gaar ah
# Qaarkood firewalls-ku waxay aaminaan traffic DNS port 53
Nmap done: 1 IP address (1 host up) scanned in 2.67 seconds` },
      { cmd: "sudo nmap --source-port 80 -p 22 192.168.1.100", output: `# HTTP port loo muujiyo — traffic sida HTTP jawaabaha
PORT   STATE SERVICE
22/tcp open  ssh
Nmap done: 1 IP address (1 host up) scanned in 1.89 seconds` },
    ],
  },
  {
    id: 32,
    number: "13.4",
    title: "Timing iyo Spoofing",
    explanation: "Hababka kale ee evasion-ka: -S (spoof source IP), --data-length (padding), --randomize-hosts, iyo --spoof-mac (MAC beddel).",
    notes: null,
    commands: [
      { cmd: "sudo nmap -S 10.0.0.50 -e eth0 -Pn 192.168.1.100", output: `# -S: IP source spoof — -e: interface gaar ah
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:45 EAT
Nmap done: 1 IP address (1 host up) scanned in 2.11 seconds` },
      { cmd: "sudo nmap --data-length 200 192.168.1.100", output: `# --data-length: Padding random ah ku dar
# 200 bytes random ah ku dar packet kasta — IDS confuse
Nmap done: 1 IP address (1 host up) scanned in 3.45 seconds` },
      { cmd: "nmap --randomize-hosts 192.168.1.0/24", output: `# --randomize-hosts: Hosts kala feer
# Sequential scanning beddelkeeda — random order
Nmap done: 256 IP addresses (5 hosts up) scanned in 15.23 seconds` },
      { cmd: "sudo nmap --spoof-mac 0 192.168.1.100", output: `# --spoof-mac 0: Random MAC
Spoofing MAC address A4:E3:B2:C1:D5:E7 (No registered vendor)
Nmap done: 1 IP address (1 host up) scanned in 2.34 seconds` },
      { cmd: "sudo nmap --spoof-mac Apple 192.168.1.100", output: `# Apple MAC
Spoofing MAC address 00:1D:4F:87:2A:B1 (Apple, Inc.)
Nmap done: 1 IP address (1 host up) scanned in 2.11 seconds` },
      { cmd: "sudo nmap --spoof-mac 00:11:22:33:44:55 192.168.1.100", output: `# Specific MAC
Spoofing MAC address 00:11:22:33:44:55 (Cimsys Inc)
Nmap done: 1 IP address (1 host up) scanned in 2.04 seconds` },
    ],
  },
  {
    id: 33,
    number: "13.5",
    title: "Idle Scan (-sI)",
    explanation:
      "Idle scan waa nooca ugu qarsoodiga badan ee Nmap — waxay isticmaashaa 'zombie host' saddexaad si ay u scan-gareyso target-ka. IP-ga scanner-ka asalka ah marna kama muuqdo logs-ka target-ka.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -sI zombie_host:80 192.168.1.100",
        output: `# -sI: Idle/Zombie scan
# zombie_host = nidaam xasilloon oo traffic yar
# Target-ka wuxuu arki doonaa zombie IP
Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 15:50 EAT
Idle scan using zombie 10.0.0.200:80; Class: Incremental
Nmap scan report for 192.168.1.100
PORT   STATE SERVICE
22/tcp open  ssh
80/tcp open  http
# Log-yada target-ka: zombie IP buu ku arki doonaa, MAHA KAAGA!
Nmap done: 1 IP address (1 host up) scanned in 24.87 seconds`,
      },
    ],
  },
  {
    id: 34,
    number: "14",
    title: "Automation iyo Python Integration",
    explanation:
      "Pen testers inta badan waxay isticmaalaan Nmap, ka dibna natiijooyinka ku daabacaan scripts-yada si ay u dhaaweeyaan ama u geeyaan databases. Python waa luuqadda ugu caansan ee lagu xiriiro Nmap.\n\n14.1 Nmap iyo Bash Scripting",
    notes: null,
    commands: [
      {
        cmd: "./net_scan.sh 192.168.1.0/24",
        output: `# Nmap Network Discovery Script
# Isticmaal: ./net_scan.sh 192.168.1.0/24
[*] Bilaabista Network Scan: 192.168.1.0/24
[*] Waqtiga: Thu Jan 15 16:00:12 EAT 2026
==========================================
[1] Host Discovery...
[+] Nidaamyada online: 8
[2] Fast Port Scan (top 1000)...
[3] Detailed Scan (-sC -sV -O)...
[4] Vulnerability Scripts...

[DONE] Scan dhammaatay! Natiijooyinka: nmap_results_20260115_160012/
[+] Hosts la helay: 8`,
      },
    ],
  },
  {
    id: 35,
    number: "14.2",
    title: "Python – python-nmap Library",
    explanation:
      "Python-ka waxaa loo isticmaali karaa in si buuxda loogu maareeyo Nmap. Library-ga 'python-nmap' wuxuu ku siinayaa API nadiif ah oo aad ku qaban karto discovery, port scanning, iyo reporting.",
    notes: "Rakibid: pip install python-nmap colorama",
    commands: [
      {
        cmd: "python3 nmap_scanner.py 192.168.1.0/24",
        output: `[*] Host Discovery: 192.168.1.0/24
[+] Hosts online: 4
[*] Scanning: 192.168.1.1
  [OPEN] 22/tcp   ssh         OpenSSH 8.9
  [OPEN] 80/tcp   http        Apache 2.4.54
[*] Scanning: 192.168.1.100
  [OPEN] 22/tcp   ssh         OpenSSH 7.9
  [OPEN] 3306/tcp mysql       MySQL 8.0.27
  [OPEN] 8080/tcp http-proxy  Tomcat 9.0
[*] Scanning: 192.168.1.105
  [OPEN] 445/tcp  microsoft-ds Samba 4.15
  [OPEN] 3389/tcp ms-wbt-server RDP
[+] Warbixin kaydsan: nmap_report.json`,
      },
    ],
  },
  {
    id: 36,
    number: "15",
    title: "Real-World Scenarios",
    explanation:
      "Qaybtan waxaa ku jira tijaabooyin dhammaystiran oo ka tarjuma xaaladaha dhabta ah sida ay u dhacdo marka la samaynayo scan-ka.",
    notes: "15.1 Scenario 1: Network-ka Shirkadda Baadh",
    commands: [],
  },
  {
    id: 37,
    number: "15.1",
    title: "Scenario 1: Network-ka Shirkadda Baadh",
    explanation: "Xaalad dhab ah: waxaa ku siiyay subnet shirkadda (10.10.10.0/24). Tallaabooyinka: (1) host discovery → (2) fast port scan → (3) detailed scan → (4) vulnerability check.",
    notes: null,
    commands: [
      { cmd: "sudo nmap -sn -T4 10.10.10.0/24 -oG hosts.gnmap", output: `Nmap done: 256 IP addresses (12 hosts up) scanned in 3.87 seconds
# Hosts gnmap format ku keyd` },
      { cmd: "grep 'Up' hosts.gnmap | awk '{print $2}' > live.txt && cat live.txt", output: `10.10.10.1
10.10.10.5
10.10.10.10
10.10.10.20
10.10.10.50
10.10.10.60
10.10.10.100
10.10.10.120
10.10.10.130
10.10.10.150
10.10.10.200
10.10.10.254` },
      { cmd: "sudo nmap -iL live.txt -T4 -F --open -oA corp_fast", output: `# Fast scan top 100 ports on live hosts
Nmap done: 12 IP addresses (12 hosts up) scanned in 28.12 seconds` },
      { cmd: "sudo nmap -iL live.txt -sC -sV -O -T4 -p 21,22,23,80,135,139,443,445,3306,3389,5900,8080 --open -oA corp_detail", output: `Nmap scan report for 10.10.10.100
PORT     STATE SERVICE VERSION
22/tcp   open  ssh     OpenSSH 7.2p2 Ubuntu 4ubuntu2.8
80/tcp   open  http    Apache httpd 2.4.18 ((Ubuntu))
|_http-title: Welcome to Ubuntu
3306/tcp open  mysql   MySQL 5.7.12-0ubuntu1
| mysql-info:
|   Protocol: 10
|_  Version: 5.7.12
OS: Linux 3.16 - 4.6

Nmap scan report for 10.10.10.120
PORT     STATE SERVICE        VERSION
135/tcp  open  msrpc          Microsoft Windows RPC
139/tcp  open  netbios-ssn    Microsoft Windows netbios-ssn
445/tcp  open  microsoft-ds   Windows 7 Ultimate 7601 Service Pack 1
3389/tcp open  ms-wbt-server  Microsoft Terminal Services
OS: Windows 7 SP1 (96%)` },
      { cmd: "sudo nmap --script=smb-vuln-ms17-010 -p 445 10.10.10.120", output: `445/tcp open  microsoft-ds
| smb-vuln-ms17-010:
|   VULNERABLE: Remote Code Execution (ms17-010/EternalBlue)
|     State: VULNERABLE
|     IDs: CVE:CVE-2017-0143
|_    Risk factor: HIGH

[+] KHATARAHA: EternalBlue la helay — Windows 7 SP1 unpatched!` },
    ],
  },
  {
    id: 38,
    number: "15.2",
    title: "Scenario 2: Web Server Baadhis",
    explanation: "Xaalad labaad: web server la siiyay (10.10.10.200). Hawsha: scan ports web-ka, use scripts-yada http-enum, http-headers, http-shellshock.",
    notes: null,
    commands: [
      {
        cmd: "sudo nmap -sC -sV -p 80,443,8080,8443 --script=http-enum,http-headers,http-title,http-methods,http-shellshock 10.10.10.200",
        output: `PORT     STATE  SERVICE VERSION
80/tcp   open   http    Apache httpd 2.4.18
| http-enum:
|   /admin/:       Possible admin folder
|   /phpmyadmin/:  phpMyAdmin
|   /.git/:        Possible git repository
|   /config.php:   Configuration file
|_  /backup.zip:   Backup archive
| http-headers:
|   Server: Apache/2.4.18 (Ubuntu)
|   X-Powered-By: PHP/7.0.30
|_  Set-Cookie: PHPSESSID=abc123; path=/
|_http-title: Company Portal
| http-methods:
|   Potentially risky methods: PUT DELETE TRACE
|_  Supported Methods: GET HEAD POST OPTIONS PUT DELETE TRACE

[+] Muhiim: PUT/DELETE methods furan, .git la helay, backup.zip!`,
      },
    ],
  },
  {
    id: 39,
    number: "15.3",
    title: "Scenario 3: Full Scan (Metasploitable)",
    explanation: "Metasploitable waa VM loogu talagalay waxbarashada pen-testing. Waxaan ku samaynaa scan dhammaystiran — -sC -sV -O -p-.",
    notes: "Port 1524 (bindshell) waxay bixisaa root shell si toos ah! vsftpd 2.3.4 waxaa ku jira backdoor. Samba 3.0.20 waxaa ku jira CVE-2007-2447.",
    commands: [
      {
        cmd: "sudo nmap -sC -sV -O -T4 -p- --open 192.168.56.101 -oA metasploitable_full",
        output: `Starting Nmap 7.94 ( https://nmap.org ) at 2026-01-15 16:00 EAT
Nmap scan report for 192.168.56.101
Host is up (0.00041s latency).
PORT     STATE SERVICE     VERSION
21/tcp   open  ftp         vsftpd 2.3.4
| ftp-syst:
|_  STAT: FTP server status: vsftpd 2.3.4
22/tcp   open  ssh         OpenSSH 4.7p1 Debian 8ubuntu1
23/tcp   open  telnet      Linux telnetd
25/tcp   open  smtp        Postfix smtpd
80/tcp   open  http        Apache httpd 2.2.8 ((Ubuntu) DAV/2)
111/tcp  open  rpcbind     2 (RPC #100000)
139/tcp  open  netbios-ssn Samba smbd 3.X - 4.X
445/tcp  open  netbios-ssn Samba smbd 3.0.20-Debian
512/tcp  open  exec        netkit-rsh rexecd
513/tcp  open  login       OpenBSD or Solaris rlogind
514/tcp  open  shell       Netkit rshd
1099/tcp open  java-rmi    GNU Classpath grmiregistry
1524/tcp open  bindshell   Metasploitable root shell
2049/tcp open  nfs         2-4 (RPC #100003)
3306/tcp open  mysql       MySQL 5.0.51a-3ubuntu5
5432/tcp open  postgres    PostgreSQL DB 8.3.0 - 8.3.7
5900/tcp open  vnc         VNC (protocol 3.3)
6000/tcp open  X11         (access denied)
6667/tcp open  irc         UnrealIRCd
8180/tcp open  http        Apache Tomcat/Coyote JSP 1.1
OS: Linux 2.6.24-16-server
Nmap done: 1 IP address scanned in 42.87 seconds`,
      },
    ],
  },
  {
    id: 40,
    number: "16",
    title: "Nmap Cheat Sheet – Xaashida Tixraaca",
    explanation: "Xaashidan waa tixraac degdeg ah oo isticmaali karto meel kasta.\n\n16.1 Amarrada Ugu Isticmaalka Badan",
    notes: `16.2 Scan Combinations – Lab vs Production

Xaaladda              Amarku                                          Sharaxaad
Lab/CTF - Degdeg      nmap -sC -sV -T4 -p- target                     Dhammaystiran + dhaqso
Production - Caadi    sudo nmap -sS -sV -T3 target                    Dheellitiran, SYN
Stealthy - Internet   sudo nmap -sS -T1 -f --randomize-hosts target   Aad u qarsoon
UDP Discovery         sudo nmap -sU --top-ports 20 target             UDP ports muhiimka
Host Discovery        nmap -sn -T4 192.168.0.0/16                     Subnet oo dhan
Quick Vuln Check      nmap --script=vuln -T4 target                   CVE quick check
Full Enterprise       sudo nmap -A -T4 -p- --open target -oA full     Dhammaan options`,
    commands: [
      { cmd: "nmap 192.168.1.1", output: `# BILOWGA FUDUD — Basic scan
PORT    STATE SERVICE
22/tcp  open  ssh
80/tcp  open  http
Nmap done: 1 IP address (1 host up) scanned in 1.54 seconds` },
      { cmd: "nmap -sn 192.168.1.0/24", output: `# Ping sweep — host discovery
Nmap done: 256 IP addresses (8 hosts up) scanned in 3.21 seconds` },
      { cmd: "nmap -F 192.168.1.1", output: `# Fast scan (top 100)
Nmap done: 1 IP address (1 host up) scanned in 0.45 seconds` },
      { cmd: "nmap -p- 192.168.1.1", output: `# All 65535 ports
Nmap done: 1 IP address (1 host up) scanned in 68.33 seconds` },
      { cmd: "sudo nmap -sS 192.168.1.1", output: `# SYN scan (default stealth)
Nmap done: 1 IP address (1 host up) scanned in 0.52 seconds` },
      { cmd: "sudo nmap -sC -sV -O 192.168.1.1", output: `# DETECTION ISKU MAR — Scripts+Version+OS
OS: Linux 5.4 - 5.10
Nmap done: 1 IP address (1 host up) scanned in 14.21 seconds` },
      { cmd: "sudo nmap -A -T4 -p- 192.168.1.1", output: `# Full aggressive — all ports + traceroute
Nmap done: 1 IP address (1 host up) scanned in 102.11 seconds` },
      { cmd: "nmap --script=smb-vuln-ms17-010 -p 445 192.168.1.1", output: `# EternalBlue check
|_smb-vuln-ms17-010: VULNERABLE` },
      { cmd: "sudo nmap -f 192.168.1.1", output: `# Fragment packets
Nmap done: 1 IP address (1 host up) scanned in 2.87 seconds` },
      { cmd: "sudo nmap -D RND:5 192.168.1.1", output: `# 5 Decoys
Nmap done: 1 IP address (1 host up) scanned in 3.45 seconds` },
    ],
  },
  {
    id: 41,
    number: "17",
    title: "Gunaanad",
    explanation: "",
    notes: `17.1 Tallaabooyinka Rasmiga ee Penetration Testing

  1. Host Discovery:        nmap -sn -T4 subnet
  2. Fast Port Scan:        nmap -T4 -F --open hosts
  3. Service Detection:     nmap -sC -sV -T4 hosts
  4. Full Port Scan:        nmap -p- -T4 --open hosts  (haddii waqti jiro)
  5. OS Detection:          sudo nmap -O hosts
  6. Vulnerability Scripts: nmap --script=vuln hosts
  7. Protocol-Specific:     UDP, SMB, HTTP scripts
  8. Output:                -oA full_scan_name

17.2 Talooyin Muhiim ah
  • MARKASTA xasuusnow inaadan scan ku samaynin nidaam aadan adigu lahayn
  • -oA waa mid wanaagsan si dhammaan formats loogu kaydiyo
  • -v ama -vv ku isticmaal marka aad baadhi doonto sababta scan-ku ugu gaabanaanayo
  • NSE scripts-ka 'vuln' category-ga waxay khatari galin karaan nidaamka — ka taxaddar
  • UDP scan waqti badan ayuu qaataa – isticmaal --top-ports 20
  • Python-nmap library waa mid fiican automation-ka

⚠ XASUUSIN
Waxa halkaan lagu sharaxay dhammaan waxaa loogu talagalay waxbarasho iyo aqoon kororsi.
Nidaam aadan fasax u haysan ama lahayn waa khalad inaad scan ku samayso.`,
    commands: [],
  },
];

// Helper: normalize command for tolerant matching.
// - lowercases
// - collapses whitespace
// - drops leading "sudo "
function normalizeCmd(cmd) {
  if (!cmd) return "";
  let c = cmd.trim().toLowerCase().replace(/\s+/g, " ");
  if (c.startsWith("sudo ")) c = c.slice(5);
  return c;
}

// Find a matching command across all lessons (so the terminal "knows"
// every command from the book, even when the user is on a different lesson).
function findCommandMatch(input) {
  const n = normalizeCmd(input);
  if (!n) return null;
  for (const lesson of LESSONS) {
    for (const c of lesson.commands) {
      if (normalizeCmd(c.cmd) === n) {
        return { lessonId: lesson.id, cmd: c.cmd, output: c.output };
      }
    }
  }
  return null;
}

/* =================================================================
   COMMAND EXPLANATIONS — sida amarku u shaqeeyo, flags-ka, iyo output-ka.
   Keyed by normalized command (lowercase, sudo-stripped, single-spaced).
   ================================================================= */
const CMD_EXPLANATIONS = {
  // -------- Basic scans --------
  "nmap --version": {
    how: "Wuxuu muujinayaa nooca Nmap-ka ee aad ku rakibtay system-kaaga — muhiim si aad u xaqiijiso in rakibaaddu si sax ah u socoto.",
    flags: { "--version": "Soo bandhigga macluumaadka version-ka, Lua, OpenSSL, iyo libraries-ka kale ee Nmap-ku ku dhisan yahay." },
    output: "Version (tusaale 7.94), platform (Linux/macOS), iyo liiska libraries-ka la isticmaalay (liblua, libpcre2, libpcap, openssl)."
  },
  "nmap 192.168.1.1": {
    how: "Scan aasaasi ah. Nmap wuxuu u diraa target-ka probes TCP ah oo uu ku baadhayo 1000 ports-ka ugu caansan. Haddii aad tahay root → SYN scan, haddii kale → TCP Connect scan.",
    flags: { "192.168.1.1": "Target-ka — IPv4 gaar ah. Waxaa la isticmaali karaa domain (scanme.nmap.org), range (192.168.1.1-254), ama subnet (192.168.1.0/24)." },
    output: "• 'Starting Nmap' = banner iyo waqtiga bilowga\n• 'Host is up' = nidaamku waa shaqaynayaa + latency\n• 'Not shown: 996 closed' = 996 port xidhan ayaa la qariyay\n• PORT/STATE/SERVICE table = dekedaha furan\n• 'Nmap done' = waqtiga guud ee scan-ka."
  },
  "nmap -sn 192.168.1.0/24": {
    how: "Ping sweep — host discovery kaliya, ports kuma scan-gareeyo. Nmap wuxuu u dirayaa ICMP echo, TCP SYN port 443, TCP ACK port 80, iyo ICMP timestamp. Wax kasta oo jawaab-ceeliya = 'host is up'.",
    flags: {
      "-sn": "Scan no ports — 'skip port scan'. Hore loogu oran jiray -sP (ping scan).",
      "/24": "CIDR notation — /24 = 256 IP (192.168.1.0 → 192.168.1.255). /16 = 65,536 IP, /8 = 16.7M IP."
    },
    output: "Liis ah host kasta oo jawaabaya + MAC address + vendor (Apple, Dell, VMware). Kaydi vendor-ku macluumaad qiimo leh — waxay kuu sheegaysaa nooca qalabka."
  },
  "nmap -pe -sn 192.168.1.0/24": {
    how: "-PE kaliya wuxuu dirayaa ICMP Echo Request (ping caadiga ah). Haddii host-ku firewall leh uu xannibay ICMP, -PE wuu fashil.",
    flags: { "-PE": "ICMP Echo — ping caadi ah.", "-sn": "Ha scan-gareeyn ports, host discovery kaliya." },
    output: "Hosts online oo ICMP-ka ka jawaabay. Haddii shabakadu oggolaanayso ICMP, kaas waa habka ugu dhaqsaha badan."
  },
  "nmap -ps22,80,443 -sn 192.168.1.0/24": {
    how: "-PS wuxuu u dirayaa TCP SYN probes ports-ka la sheegay. Haddii port-ku jawaabaha SYN-ACK ama RST, host-ku waa online. Wuu ka shaqeyn karaa xaaladaha ICMP la xannibay.",
    flags: { "-PS22,80,443": "TCP SYN ping — probe 3 ports (SSH, HTTP, HTTPS). Comma-separated, ma jirto space." },
    output: "Hosts online oo ka jawaabay ports-kaas. Haddii internal port-ku la xannibay, laakiin 80/443 furan, -PS80,443 ayaa aad ku helaya host-yada."
  },
  "nmap -pn 192.168.1.100": {
    how: "-Pn wuxuu ka boodaa host discovery — Nmap u-diray si toos ah port scan iyadoo aan la hubin in host-ku online yahay. Faa'iidada: firewalls ping xanibay ma xannibaan scan-ka. Xumaanta: haddii host-ku offline yahay, scan-ku wuxuu qaadanaa waqti dheer oo xun.",
    flags: { "-Pn": "Skip host discovery (hore loogu oran jiray -P0 ama -PN). U maleynaya in hosts oo dhan online yihiin." },
    output: "Output caadi ah — laakiin 'Host is up' marna ma muuqdo, waayo Nmap ma hubin."
  },

  // -------- Scan types --------
  "nmap -ss 192.168.1.100": {
    how: "SYN Stealth Scan — Nmap wuxuu dirayaa SYN packet, wuxuu sugayaa SYN-ACK (port furan) ama RST (port xidhan), ka dibna wuxuu diraa RST si uusan u dhameystirin 3-way handshake. Wuu dhaqso iyo stealthy (log-yo yar).",
    flags: { "-sS": "SYN scan (half-open). Wuxuu u baahan yahay root/sudo privileges si uu u farsameeyo raw sockets." },
    output: "PORT/STATE/SERVICE table. 'open' = SYN-ACK la helay, 'closed' = RST la helay, 'filtered' = jawaab ma jirin (firewall)."
  },
  "nmap -st 192.168.1.100": {
    how: "TCP Connect Scan — Nmap wuxuu dhamaystiraa 3-way handshake buuxa (SYN → SYN-ACK → ACK). Root looma baahna laakiin wuxuu galiyaa log-yo xaaladaha server-ka.",
    flags: { "-sT": "Full TCP Connect. U isticmaal marka aan root-ka lagu raacin (tusaale: adiga oo gudaha shabakad ah oo aan admin ahayn)." },
    output: "Isla table-ka -sS, laakiin fadhiga TCP dhammaystiran — server admin-ka waxay arki karaan session logs oo buuxa."
  },
  "nmap -su 192.168.1.100": {
    how: "UDP Scan — Nmap wuxuu dirayaa UDP packets. UDP ma haysto handshake, markaa Nmap wuxuu isticmaalaa ICMP 'port unreachable' messages iyo protocol-specific probes (DNS, SNMP). Aad buu u gaaban yahay sababtoo ah UDP rate-limiting-ga system-yada.",
    flags: { "-sU": "UDP scan. Wuxuu u baahan yahay root." },
    output: "'open' = adeeggu jawaabay probe-ka, 'open|filtered' = jawaab ma jirin (mid faragasbi ama firewall), 'closed' = ICMP port unreachable la helay."
  },
  "nmap -sn 192.168.1.100": {
    how: "NULL Scan — Nmap wuxuu dirayaa TCP packet aan flags lahayn. Sharciga TCP-ga: port furan ma jawaabo (OS silent), port xidhan wuxuu dirayaa RST. Wuxuu ka shaqaynayaa kaliya UNIX/Linux — Windows wuu RST u diraa labadaba.",
    flags: { "-sN": "NULL scan — packet aan SYN, ACK, FIN lahayn. Stealthy, waxay ka iska qarinaysaa IDS caadiga." },
    output: "'open|filtered' = port furan ama firewall-ku xannibay (ma kala saari karo). 'closed' = RST la helay."
  },
  "nmap -sf 192.168.1.100": {
    how: "FIN Scan — Nmap wuxuu dirayaa TCP packet oo FIN flag kaliya leh. Isla shaqada -sN: port furan = silent, port xidhan = RST. U fiican stateless firewalls-ka ka gudbinta.",
    flags: { "-sF": "FIN scan. Isla -sN/-sX — wuxuu ka shaqaynayaa kaliya *NIX systems." },
    output: "Output isla -sN. Windows target-ka dhammaan ports wuxuu u muujinayaa 'closed' — maxaa yeelay Windows Tcp stack si khaldan wuu jawaabaa."
  },
  "nmap -sx 192.168.1.100": {
    how: "Xmas Scan — Nmap wuxuu dirayaa packet flags FIN+PSH+URG leh . Stealthiest ugu liita IDS-ka, laakiin wuxuu ka shaqeeyaa kaliya UNIX-based systems.",
    flags: { "-sX": "Xmas scan (flags: FIN, PSH, URG) — looks suspicious in packet logs." },
    output: "Isla -sN / -sF. Haddii 'open|filtered' muuqdaan dhammaan ports = Windows target-ka (ama firewall xoog leh)."
  },
  "nmap -sa 192.168.1.1": {
    how: "ACK Scan — ma ogaanaayo ports furan, waxaa loo isticmaalaa in la ogaado firewalls-yada iyo filtering rules-kooda. Nmap wuxuu dirayaa ACK packet. Stateless firewall → RST soo noqonaya (unfiltered). Stateful firewall → drop (filtered).",
    flags: { "-sA": "ACK scan — firewall mapping, ma aha port status." },
    output: "'unfiltered' = packet-ka wuu gaadhay (firewall ma jirin ama stateless yahay). 'filtered' = firewall-ku wuu joojiyay. Ma ogtahay in port-ku furan yahay ama xidhan — kaliya haddii firewall jiro."
  },
  "nmap -sw 192.168.1.100": {
    how: "Window Scan — sida ACK scan, laakiin wuxuu eegayaa TCP window size si uu u saadaaliyo nooca port-ka. Ma aha reliable marka la eego OS kala duwan.",
    flags: { "-sW": "TCP Window scan — wuxuu kala saari karaa open/closed qaar systems." },
    output: "'open' = window size > 0, 'closed' = window size = 0. BSD/Linux systems waa kala duwan yihiin."
  },
  "nmap -sm 192.168.1.100": {
    how: "Maimon Scan — wuxuu dirayaa FIN/ACK probe. BSD-yada hore waxay soo celinayaan RST marka port furan — khalad ah sharciga TCP-ga. Hadda rarely shaqeeyaa.",
    flags: { "-sM": "Maimon scan. Waxaa abuuray Uriel Maimon (1998)." },
    output: "Isla -sN/-sF. Ma shaqeyn doono system-yada casriga ah."
  },

  // -------- Ports --------
  "nmap -p 80 192.168.1.1": {
    how: "Scan hal port oo keliya. Aad u dhaqso badan marka aad u baahan tahay xaqiijin in adeeg gaar ah shaqaynayo.",
    flags: { "-p 80": "Port specification. Waxaa lagu dhex gelin karaa 'T:' (TCP) ama 'U:' (UDP) — tusaale -p T:80,U:53." },
    output: "Saf kaliya PORT table-ka ku jira — port-kii la codsaday + STATE + SERVICE."
  },
  "nmap -p- 192.168.1.1": {
    how: "Scan DHAMMAAN 65,535 ports-ka TCP. Waqti dheer, laakiin wuu kaa caawinayaa inaad hesho ports non-standard ah oo adeegyadu ku qarsoon yihiin (sida backdoors 45678).",
    flags: { "-p-": "Dhammaan ports 1-65535. Shorthand for -p 1-65535." },
    output: "Dhammaan ports furan, xitaa kuwa aan caadi ahayn. Waqtigu wuxuu kordhaa 60-100x ka badan default scan-ka."
  },
  "nmap -f 192.168.1.0/24": {
    how: "Fast scan — wuxuu baadhayaa 100 ports-ka ugu caansan (ka yarahay default 1000). Faa'iido: 10x dhaqso badan. Xumaanta: ports-ka aan caadiga ahayn kuuma soo bandhigayo.",
    flags: { "-F": "Fast mode — top 100 ports kaliya. Halka default-ku yahay top 1000." },
    output: "PORT table gaaban. Subnet kasta wuxuu ku dhammaystiraa daqiiqooyin yar."
  },
  "nmap --top-ports 100 192.168.1.1": {
    how: "Scan N-ka ports-ka ugu caansan (sida kuwa uu la soo saaray statistics-ka Internet-ka). --top-ports 100 = isla -F.",
    flags: { "--top-ports 100": "Tirada ports (1-65535). 10 aad u dhaqso ah, 1000 caadi, 5000 dhammaystiran." },
    output: "PORT table-ka ku jira N ports."
  },

  // -------- Service / version --------
  "nmap -sv 192.168.1.100": {
    how: "Version Detection — Nmap wuxuu u dirayaa port-yada furan probes gaar-gaar ah (banner grabbing + protocol probes), wuxuuna barbar dhigayaa fingerprints-ka kaydsan. Wuxuu kuu sheegi doonaa product, version, iyo OS guess.",
    flags: { "-sV": "Enable version detection. Waxay iyaga oo iskood loogu shaqayn probing-ka additional 6-12 probes port kasta." },
    output: "Column 'VERSION' cusub ayaa lagu darayaa. Tusaale: 'vsftpd 2.3.4' = FTP server version 2.3.4 (waxaa ku jira backdoor caanka ah). Waqtigu wuu kordhayaa 5-10x."
  },
  "nmap -o 192.168.1.100": {
    how: "OS Detection — Nmap wuxuu dirayaa 16 probes (SEQ, T1-T7, ECN, IE) wuxuuna dheelitiraa jawaabaha TCP/IP stack-ka. Wuxuu u tartamiyaa signatures 5400+ ah oo uu ku kaydsan yahay.",
    flags: { "-O": "OS detection. Wuxuu u baahan yahay root + ugu yaraan 1 open + 1 closed port si uu u bixiyo guess sax ah." },
    output: "'Device type' (general purpose, router, firewall), 'Running' (Linux 5.X), 'OS CPE' (machine-readable), 'OS details' (exact version guess), 'Network Distance' (hops)."
  },
  "nmap -a 192.168.1.100": {
    how: "Aggressive Scan — isku dar -sV + -sC + -O + --traceroute. Wuxuu bixiyaa warbixin dhammaystiran hal amar.",
    flags: { "-A": "Aggressive: version detection + default scripts + OS detection + traceroute. Ma qariyeyn — IDS-yada aad ayaa laga ogaanayaa." },
    output: "SSH host keys, HTTP methods + server header + page title, MySQL protocol info, SSL cert details, OS version, iyo hop-by-hop traceroute."
  },

  // -------- Timing --------
  "nmap -t4 192.168.1.0/24": {
    how: "T4 Aggressive timing — Nmap wuxuu parallel u dirayaa probes badan oo isku mar, round-trip timeout-ka ayuu dhimayaa. U fiican LAN iyo lab networks.",
    flags: { "-T4": "Timing template (T0=paranoid, T3=default, T5=insane). T4 = 10 parallel, 1.25s max delay." },
    output: "Sida caadiga ah, laakiin waqtigu wuxuu gaaban yahay 40-60%. Internet-ka network-ka taxaddar: IDS alerts waa la abuurayaa."
  },
  "nmap -t1 -ss 192.168.1.100": {
    how: "T1 Sneaky timing — Nmap wuxuu sugayaa 15 ilbiriqsi probes-ka dhexdooda. Wuxuu ka gudbi karaa IDS rate-limiting rules-ka. Hal host scanning wuxuu qaadan karaa 30+ daqiiqo.",
    flags: { "-T1": "Sneaky — 15s scan-delay. -T0 (paranoid) wuxuu ah 5 daqiiqo probe kasta!", "-sS": "SYN stealth scan (ilbiriqsi yar + IDS-dodge = ugu qarsoon)." },
    output: "Isla SYN scan output — balse scan-time-ku wuxuu ahaa 500-1000x T4-ta."
  },

  // -------- NSE --------
  "nmap -sc 192.168.1.100": {
    how: "Default Scripts — Nmap wuxuu ku wadayaa 60+ NSE scripts 'default' category-ga ah (safe, informative, quick). Tusaalayaal: ssh-hostkey, http-title, ssl-cert, smb-os-discovery.",
    flags: { "-sC": "Shorthand for --script=default." },
    output: "Additional information below each port — sida SSH fingerprints, HTTP title, SSL certificate details, FTP banners."
  },
  "nmap --script=vuln 192.168.1.100": {
    how: "Vulnerability Scripts — wuxuu wado dhammaan scripts 'vuln' category (100+ scripts) oo tijaabiya CVE-yo caan ah: EternalBlue, Shellshock, Heartbleed, vsftpd backdoor, SMB signing, iwm.",
    flags: { "--script=vuln": "NSE category. Waxaa kale: auth, brute, default, discovery, dos, exploit, intrusive, malware, safe, version." },
    output: "'VULNERABLE' alerts leh CVE ID, risk factor, iyo references. Stateful: haddii target-ku yahay production, tani waxay galin kartaa khatar — u adeegso oggolaansho."
  },
  "nmap --script=smb-vuln-ms17-010 -p 445 192.168.1.1": {
    how: "EternalBlue Check — wuxuu tijaabiyaa in SMBv1 server-ku uu leeyahay CVE-2017-0143 (EternalBlue exploit, WannaCry-ka ayaa la isticmaalay). Wuxuu dirayaa crafted packet oo fiirinayo response.",
    flags: { "--script=smb-vuln-ms17-010": "NSE script gaar ah.", "-p 445": "SMB port — scan-ka kaliya port 445 dhaqso." },
    output: "'VULNERABLE: Remote Code Execution...' haddii target-ku unpatched yahay. Khatar heer sare ah — remote attacker-ka wuxuu helayaa SYSTEM shell."
  },
  "nmap --script=http-enum -p 80,443 192.168.1.100": {
    how: "HTTP Directory Enumeration — NSE script wuxuu baadhayaa 2000+ wadooyin iyo files caadi ah sida /admin, /phpmyadmin, /.git, /config.php, /backup.zip. Waxay kuu sheegaysaa hidden resources.",
    flags: { "--script=http-enum": "Web content discovery — isla dirbuster/gobuster laakiin ku jira NSE.", "-p 80,443": "Ports HTTP iyo HTTPS." },
    output: "Liis ah wadooyinka la helay + sharaxaaddooda. '/.git/' = source code leak! '/phpmyadmin/' = admin panel. '/backup.zip' = oodo ama credentials."
  },

  // -------- Output --------
  "nmap -sv 192.168.1.100 -on scan_normal.txt": {
    how: "-oN wuxuu keydiyaa output-ka format normal (isla wixii aad aragto terminal-ka). Faa'iido: aqrin-karis, taxaddar yar marka la isticmaalo.",
    flags: { "-oN": "Output Normal file.", "scan_normal.txt": "Magaca faylka — waxaad dooran kartaa path kasta." },
    output: "Terminal-ka wuxuu muujinayaa scan caadiga. Faylka kaydsan waxaa ku jira isla wax."
  },
  "nmap -sc -sv -t4 192.168.1.100 -oa full_scan": {
    how: "-oA = Output All — Nmap wuxuu isku mar abuurayaa SADDEX formats (.nmap caadi, .xml machine-readable, .gnmap grep-able). Best practice pen-testers-ka.",
    flags: { "-oA full_scan": "Prefix kasta — wuxuu abuurayaa full_scan.nmap, full_scan.xml, full_scan.gnmap." },
    output: "Saddex files: (1) normal human-readable, (2) XML loogu isticmaalayo tools sida Metasploit/Nessus, (3) grepable si grep/awk loogu baadhi karo."
  },

  // -------- Evasion --------
  "nmap -f 192.168.1.100": {
    how: "Fragmentation — Nmap wuxuu jebiyaa packets-ka oo uu u yareeyaa 8-byte fragments. IDS-yada qaarkood ma isku geeyaan (reassemble) packets yar sidaas darteed way ka iska qarinaysaa signature-based detection.",
    flags: { "-f": "Fragment — 8 bytes per fragment. -f -f = 16 bytes. --mtu NN = custom size (8-byte multiples)." },
    output: "Isla wax scan caadi ah — laakiin packet-level ahaan stealthy. Advanced IDS (Suricata, Snort) ayaa wali ku ogaan kara reassembly."
  },
  "nmap -d rnd:10 192.168.1.100": {
    how: "Decoy Scan — Nmap wuxuu qaabeeyaa 10 IP ah oo random ah oo u muuqata in ay scanning garayaan. Log-yada target-ka waxay muujinayaan 11 source IP (10 decoys + kaaga). Admin-ku wuu ku adkaanayaa inuu ogaado scanner-ka dhabta ah.",
    flags: { "-D RND:10": "10 random decoys.", "-D 10.0.0.1,10.0.0.2,ME,10.0.0.3": "Manual decoys — 'ME' = IP-gaaga (meesha aad doonto saf-ka)." },
    output: "Isla scan — laakiin server-ka logs-kiisa: connection attempts oo ka yimi source IPs badan, taas oo qarsoonaysa IP-ga runta ah."
  },
  "nmap --source-port 53 192.168.1.100": {
    how: "Source Port Spoofing — Nmap wuxuu u qaabeeyaa in traffic-ku ka yimaado source port gaar ah (sida 53/DNS). Qaar firewalls-ka waxay aaminaan DNS traffic si ayan u xidhin — Nmap-ku ayaa ka gudbaya.",
    flags: { "--source-port 53": "Source port 53 (DNS). 80 (HTTP) ama 443 (HTTPS) sidoo kale waa la isticmaali karaa." },
    output: "Isla scan — balse packets-ka waxay leeyihiin source port 53. Firewalls-ka fudud waxay u fasiraysaan DNS replies oo oggolaan."
  },
  "nmap --spoof-mac 0 192.168.1.100": {
    how: "MAC Address Spoofing — Nmap wuxuu beddelayaa MAC address-kaaga. '0' = random. 'Apple' = MAC ka mid ah Apple OUI. Keliya wuu shaqaynayaa LAN (layer 2) — internet-ka MAC-ka laguma arki karo.",
    flags: { "--spoof-mac 0": "Random MAC.", "--spoof-mac Apple": "Apple-branded MAC.", "--spoof-mac 00:11:22:33:44:55": "Specific MAC." },
    output: "'Spoofing MAC address ...' banner ku jira output-ka. Log-yada switch/router waxay muujinayaan MAC-ka la bedelay."
  },
  "nmap -si zombie_host:80 192.168.1.100": {
    how: "Idle Scan — ugu qarsoonta Nmap oo dhan. Wuxuu isticmaalaa 'zombie' host saddexaad (nidaam xasilloon oo traffic yar) si uu u soo jiro IPID sequence. Target-ka wuxuu arkayaa kaliya zombie-ka IP-kiisa — scanner-ka (adiga) marna kama muuqdo.",
    flags: { "-sI zombie_host:80": "Idle scan — 'zombie_host' = IP zombie-ga, ':80' = port lagu ogaanayo IPID-ka." },
    output: "Isla scan result — laakiin target-ka logs-kiisa: waxaa jira kaliya zombie IP. Perfect anonymity haddii zombie-ku si sax ah loo doortay."
  },
};

/* Look up explanation using the same normalization used for matching. */
function getCmdExplanation(cmd) {
  const n = normalizeCmd(cmd);
  if (CMD_EXPLANATIONS[n]) return CMD_EXPLANATIONS[n];
  return generateGenericExplanation(cmd);
}

/* =================================================================
   FLAG DATABASE — waxa uu qabanayo flag kastaa oo Nmap ah.
   ================================================================= */
const FLAG_DB = {
  // Scan types
  "-sS": "SYN Stealth Scan. Half-open — Nmap dirayaa SYN, sugaayo SYN-ACK/RST, ka dibna wuxuu diraa RST kahor handshake. Root looga baahan yahay.",
  "-sT": "TCP Connect Scan. Handshake buuxa. Root looma baahna, laakiin log-yo badan ayuu galiyaa server-ka.",
  "-sU": "UDP Scan. Gaaban, root looga baahan yahay. Wuu fiican DNS (53), SNMP (161), NTP (123).",
  "-sN": "NULL Scan. TCP packet flags la'aan. *NIX targets kaliya. Stealthiest IDS-evading.",
  "-sF": "FIN Scan. FIN flag kaliya. Port furan = silent, xidhan = RST.",
  "-sX": "Xmas Scan. FIN+PSH+URG flags ('xmas tree lights'). UNIX targets.",
  "-sA": "ACK Scan. Ma ogaanaayo ports furan — wuxuu ogaan karaa firewall rules (filtered vs unfiltered).",
  "-sW": "Window Scan. TCP window size-ka eegayaa (0 = closed, >0 = open). Aan reliable ahayn.",
  "-sM": "Maimon Scan. FIN/ACK probe. Kaliya BSD-yada hore.",
  "-sI": "Idle/Zombie Scan. Waxaa lagu isticmaalayaa zombie host saddexaad si source IP-gaaga loo qariyo — ugu qarsoonnada Nmap.",
  "-sn": "Ping scan/host discovery kaliya — ma scan-gareeyo ports (hore waxay ahayd -sP).",
  "-sC": "Default NSE scripts — shorthand for --script=default. 60+ scripts safe ah.",
  "-sV": "Service/Version detection — banner grabbing + protocol probes si uu u hubiyo product + version.",

  // OS & aggressive
  "-O":  "OS Detection — TCP/IP stack fingerprinting (16 probes) oo barbar dhigaya signatures 5400+.",
  "-A":  "Aggressive scan. Isku dar: -sV + -sC + -O + --traceroute. Mid dhammaystiran oo noisy ah.",
  "--osscan-guess": "Haddii Nmap uusan heli karin match sax ah, muuji probability-ka ugu dhow (tusaale 96%, 88%).",
  "--traceroute":   "Muuji hop-by-hop path-ka gaarsiinta target-ka (RTT iyo IP hop-yada).",

  // Host discovery
  "-PE": "ICMP Echo Request (ping caadi ah).",
  "-PP": "ICMP Timestamp request.",
  "-PM": "ICMP Netmask request — rarely shaqeyn doona.",
  "-PS": "TCP SYN ping ports gaar ah (tusaale -PS22,80,443).",
  "-PA": "TCP ACK ping — wuxuu ka gudbi karaa stateless firewalls.",
  "-PU": "UDP ping — wuxuu diraa UDP probe port 40125 default.",
  "-PR": "ARP ping — LAN kaliya, balse ugu dhaqsaha badan meesha ay shaqayso.",
  "-Pn": "Skip host discovery — u maleynaya in hosts online yihiin. Faa'iido: firewalls ping xannibay ma joojiyaan scan-ka.",
  "-n":  "Ha sameeyn DNS resolution. Dhaqso badan.",
  "-R":  "Samee DNS resolution xitaa host-yada offline ah.",
  "--dns-servers": "DNS server gaar ah u adeegso (tusaale 8.8.8.8).",

  // Targets
  "-iL": "Fayl targets ah ka aqri (hal target-saf).",
  "-iR": "N random internet hosts scan. Taxaddar — waa internet.",
  "--exclude": "IP-yo target-ka laga saarayo (comma-separated).",

  // Ports
  "-p":  "Port specification. Tusaale: -p 80 ama -p 1-1000 ama -p T:80,U:53.",
  "-p-": "Scan dhammaan 65535 ports (shorthand for -p 1-65535).",
  "-F":  "Fast mode — top 100 ports (halka default yahay 1000).",
  "--top-ports": "Scan N ports-ka ugu caansan (stat-based). Tusaale --top-ports 100.",
  "--open": "Muuji kaliya ports-ka furan (ka qarii xidhan iyo filtered).",

  // Timing
  "-T0": "Paranoid — 5 daqiiqo probe kasta. IDS-dodge xaggiisa ugu badan. Weeks qaadan karta!",
  "-T1": "Sneaky — 15 ilbiriqsi delay. Stealthy.",
  "-T2": "Polite — bandwidth yar. 0.4s delay.",
  "-T3": "Normal (default) — balance.",
  "-T4": "Aggressive — dhaqso, LAN/lab networks.",
  "-T5": "Insane — aad u dhaqso, laakiin wuxuu lumiyaa natiijooyin.",
  "--min-rate":        "Packets-per-second ugu yar (tusaale 1000 = dhaqso ah).",
  "--max-rate":        "Packets-per-second ugu badan (xaddid bandwidth).",
  "--min-parallelism": "Probes isku mar — parallel scanning.",
  "--host-timeout":    "Waqtiga ugu badan host kasta. Haddii scan-ku u ba'o, sii gaadh xiga.",
  "--scan-delay":      "Delay probes-yada dhexdooda (tusaale 1s).",

  // NSE
  "--script":              "NSE script ama category ka shaqee. Tusaalooyin: default, vuln, auth, brute, discovery, dos, exploit, safe, intrusive.",
  "--script=default":      "Scripts default (60+) oo safe iyo informative ah.",
  "--script=vuln":         "Scripts CVE-check ah (100+ script) — intrusive, khatar yar.",
  "--script=discovery":    "Scripts wax-ogaadsi ah (dns-brute, snmp-info, smb-enum-shares).",
  "--script=brute":        "Scripts password brute-force ah (mysql-brute, ssh-brute, ftp-brute).",
  "--script=safe":         "Scripts aan waxyeello gelinayn — safe ugu nool.",

  // Output
  "-oN": "Output Normal — format aqrin-karis ah (isla terminal-ka).",
  "-oX": "Output XML — format machine-readable ah (Metasploit, Nessus ayaa u isticmaala).",
  "-oG": "Output Grepable — hal-saf host kasta, grep/awk ayaa u isticmaali kara.",
  "-oS": "Output ScRipT KiDdiE (funny — xarfaha la laab-laabay).",
  "-oA": "Output All — hal jeer keydi normal + xml + grepable (saddex faylal).",

  // Verbosity
  "-v":       "Verbose — xog dheeri ah scan-ka.",
  "-vv":      "Very verbose — xog aad u badan.",
  "-d":       "Debug level 1 — internals Nmap ka.",
  "--reason": "Muuji sababta port-ka u furan ama xidhan yahay (tusaale syn-ack ttl 64).",

  // Version intensity
  "--version-intensity": "Heerka version detection (0-9). 0 = light, 9 = thorough.",
  "--version-light":     "Shorthand --version-intensity 2. Dhaqso.",
  "--version-all":       "Shorthand --version-intensity 9. Dhammaystiran.",

  // Evasion
  "-f":               "Fragmentation — jebi packets 8-byte ugu yar. IDS-yada qaarkood ma isku geeyaan.",
  "--mtu":            "Fragment size gaar ah (8-byte multiples).",
  "-D":               "Decoy IPs. Tusaale -D 10.0.0.1,ME,10.0.0.2. 'ME' = IP-gaaga.",
  "-D RND:10":        "10 random decoy IPs — log-yada target-ka 11 source ayuu muujiyaa.",
  "--source-port":    "Source port gaar ah (tusaale 53 DNS ama 80 HTTP — firewalls ayaa oggolaan karaa).",
  "--spoof-mac":      "MAC address spoof. Value-yada: 0 (random), Apple, ama MAC gaar ah.",
  "-S":               "IP source spoof — u muuji in scan-ku ka yimaaddo IP kale.",
  "-e":               "Network interface gaar ah isticmaal (eth0, wlan0).",
  "--data-length":    "Packet kasta ku dar bytes random ah (IDS confuse).",
  "--randomize-hosts": "Hosts order kala feer — ha sequentially scan-gareyn.",
};

/* Parse an nmap command and produce a flag-by-flag explanation. */
function generateNmapExplanation(cmd) {
  const tokens = cmd.trim().split(/\s+/).filter(Boolean);
  const flags = {};
  const targets = [];
  let iLaaska = -1;
  let cmdName = tokens[0] === "sudo" ? tokens[1] : tokens[0];
  const start = tokens[0] === "sudo" ? 2 : 1;

  for (let i = start; i < tokens.length; i++) {
    const t = tokens[i];
    if (t.startsWith("--")) {
      const key = t.split("=")[0];
      let desc = FLAG_DB[key] || FLAG_DB[t];
      // check if flag expects a value
      if (!t.includes("=") && FLAG_DB[key] && i + 1 < tokens.length && !tokens[i + 1].startsWith("-")) {
        flags[`${key} ${tokens[i + 1]}`] = desc || "Flag-ka Nmap — value loogu talagalay.";
        i++;
      } else {
        flags[t] = desc || "Flag-ka Nmap.";
      }
    } else if (t.startsWith("-") && t.length > 1) {
      // short flags like -sS, -p, -oA
      if (FLAG_DB[t]) {
        // some flags take a value (e.g., -p 80, -oA prefix, -D list, -T4 inline)
        const takesValue = ["-p", "-oA", "-oN", "-oX", "-oG", "-oS", "-iL", "-iR", "-D", "-S", "-e",
                            "--source-port", "--spoof-mac", "--mtu", "--dns-servers"].includes(t);
        if (takesValue && i + 1 < tokens.length && !tokens[i + 1].startsWith("-")) {
          flags[`${t} ${tokens[i + 1]}`] = FLAG_DB[t];
          i++;
        } else {
          flags[t] = FLAG_DB[t];
        }
      } else {
        // Try to find closest known flag (e.g., -p80 → -p)
        let matched = false;
        for (const k of Object.keys(FLAG_DB)) {
          if (t.startsWith(k) && k.length > 1) {
            flags[t] = FLAG_DB[k] + ` (value '${t.slice(k.length)}')`;
            matched = true;
            break;
          }
        }
        if (!matched) flags[t] = "Nmap flag.";
      }
    } else {
      targets.push(t);
    }
  }

  if (targets.length) {
    flags[targets.join(" ")] = targets.length === 1
      ? "Target-ka — IP, subnet (CIDR), range, ama domain."
      : "Targets — IPs, subnets, ama domains dhowr oo la scan-gareynayo.";
  }

  const how = `Amarkan Nmap wuxuu sameynayaa ${summariseNmapIntent(flags)} target-ka ${targets.join(", ") || "la sheegay"}. Flags-ka hoose ayaa kala hawlaha.`;
  const output = "Output-ka Nmap caadiga ah: 'Starting Nmap' banner, 'Host is up/down', PORT/STATE/SERVICE table (haddii port scan la sameeyo), iyo 'Nmap done' summary waqtiga qaatay.";

  return { how, flags, output };
}

function summariseNmapIntent(flags) {
  const keys = Object.keys(flags);
  if (keys.some(k => k.startsWith("-sn"))) return "host discovery (ping sweep) oo aan port scan lahayn";
  if (keys.some(k => k.startsWith("-A"))) return "aggressive scan (version + OS + scripts + traceroute)";
  if (keys.some(k => k.startsWith("-O"))) return "OS detection";
  if (keys.some(k => k.startsWith("-sV"))) return "version detection";
  if (keys.some(k => k.startsWith("-sU"))) return "UDP scan";
  if (keys.some(k => k.startsWith("--script"))) return "NSE script scan";
  if (keys.some(k => k.startsWith("-sS"))) return "SYN stealth scan";
  if (keys.some(k => k.startsWith("-sT"))) return "TCP connect scan";
  if (keys.some(k => k.startsWith("-sA"))) return "ACK firewall-mapping scan";
  return "port scan caadi ah";
}

/* Generic explanation router for non-nmap commands too. */
function generateGenericExplanation(cmd) {
  const t = cmd.trim();
  const first = t.split(/\s+/)[0] === "sudo" ? t.split(/\s+/)[1] : t.split(/\s+/)[0];

  if (first === "nmap") return generateNmapExplanation(t);

  if (t.startsWith("./") || t.endsWith(".sh")) {
    return {
      how: "Shell script oo bash ah — wuxuu isku duba ridayaa amarrada Nmap tallaabo-tallaabo. Inta badan wuxuu sameeyaa: (1) host discovery, (2) fast port scan, (3) detailed scan, (4) vulnerability check. Natiijooyinka waxaa lagu kaydiyaa folder taariikheed.",
      flags: { [t]: "Script path + argumennto (tusaale subnet). Script-ka waxaa u baahan in executable permission uu leeyahay: chmod +x script.sh." },
      output: "Script-ku wuxuu daabacayaa marxaladaha ([1]..., [2]..., [3]...), wuxuuna abuurayaa faylal output — .gnmap, .nmap, .xml. Mar kasta wuxuu muujinayaa tirada host-yada la helay."
    };
  }

  if (first === "python3" || first === "python") {
    return {
      how: "Python script wuxuu isticmaalaa library 'python-nmap' si uu ugu yeedho Nmap shaqada API. Wuxuu sameyn karaa scanning dhammaystiran, ka dibna natiijooyinka wuxuu u bedeli karaa JSON/CSV ama database.",
      flags: { [t]: "Script Python ah + target (IP/subnet). pip install python-nmap colorama ayaa u baahan." },
      output: "Colored terminal output — host discovery, scanning per-host, ports furan leh service + version, iyo 'Warbixin kaydsan' faylka JSON."
    };
  }

  if (first === "cat") {
    return {
      how: "Amarka 'cat' wuxuu daabacayaa nuxurka faylka screen-ka (ha kaydinin). Inta badan waxaa loo isticmaalaa si loo arko targets.txt ama output files Nmap ka soo baxay.",
      flags: { [t.slice(4)]: "Magaca/path-ka faylka lagu daabacayo." },
      output: "Dhammaan nuxurka faylka sida uu u qoran yahay."
    };
  }

  if (first === "grep") {
    return {
      how: "Amarka 'grep' wuxuu raadinaya line-yo faylka ku qoran oo match-garaya pattern. Hore Nmap output-ka .gnmap ayaa la isticmaalaa si loo dheeho hosts online ah ama ports gaar ah.",
      flags: { [t]: "Pattern + fayl. Tusaale: grep 'Up' hosts.gnmap = muuji line-yada 'Up' (hosts online)." },
      output: "Line-yada match-gareeyey pattern-ka kaliya."
    };
  }

  if (first === "ls" || first === "pwd" || first === "whoami" || first === "date") {
    return {
      how: `Unix/Linux built-in command '${first}'. Waa amarrada aasaasiga ah ee system administration-ka.`,
      flags: { [t]: `${first} — command-ka la isticmaalay.` },
      output: `Output-ka caadi ah ee '${first}'.`
    };
  }

  return null;
}


/* =================================================================
   Vanilla rendering layer — no React, no framework.
   Lists the sidebar, lesson panel, and the Kali terminal.
   ================================================================= */

const PROMPT = "arkani@kali:~$ ";
const STORAGE_KEY = "nmap_kali_progress_v1";
const ANIMATE_KEY = "nmap_kali_animate_v1";

const state = {
  activeId: LESSONS[0].id,
  completed: (() => {
    try { return JSON.parse(localStorage.getItem(STORAGE_KEY)) || {}; }
    catch { return {}; }
  })(),
  animate: (localStorage.getItem(ANIMATE_KEY) ?? "1") === "1",
  sidebarOpen: (localStorage.getItem("nmap_kali_sidebar") ?? "1") === "1",
  cmdHistory: [],
  histIdx: -1,
  busy: false,
};

function toggleSidebar() {
  state.sidebarOpen = !state.sidebarOpen;
  localStorage.setItem("nmap_kali_sidebar", state.sidebarOpen ? "1" : "0");
  document.getElementById("app-shell").classList.toggle("sidebar-hidden", !state.sidebarOpen);
  // update floating reopen button
  updateFloatingToggle();
}

function updateFloatingToggle() {
  let btn = document.querySelector(".sidebar-reopen");
  if (!state.sidebarOpen) {
    if (!btn) {
      btn = el("button", {
        class: "sidebar-reopen",
        "data-testid": "sidebar-reopen-btn",
        title: "Fur sidebar-ka",
        onClick: toggleSidebar,
      }, "☰");
      document.body.appendChild(btn);
    }
  } else if (btn) {
    btn.remove();
  }
}

/* ---------- Built-in shell commands ---------- */
const BUILTINS = {
  clear: () => ({ clear: true }),
  help: () => ({ output:
`Kali Arkani Terminal — Amarrada la taageerayo:
  help           — Liiska amarrada aasaasiga ah
  clear          — Nadiifi terminal-ka
  ls             — Liis file-yada (simulated)
  whoami         — Magaca isticmaalaha
  pwd            — Meesha aan ku jirno
  date           — Taariikhda hadda
  uname -a       — OS info
  cat README     — Akhri faylka hordhaca
  nmap ...       — Dhammaan amarrada Nmap ee buugga waa la taageersan yahay.

Tilmaam: guji amar kasta oo cashar-ka bidixda ku qoran si uu isugu shubo halkan.` }),
  ls: () => ({ output:
`README        lessons/      scripts/      nmap_results/
targets.txt   live.txt      corp_fast.*   corp_detail.*` }),
  whoami: () => ({ output: "arkani" }),
  pwd: () => ({ output: "/home/arkani" }),
  date: () => ({ output: new Date().toUTCString() }),
  "uname -a": () => ({ output:
"Linux kali 6.6.15-amd64 #1 SMP PREEMPT_DYNAMIC Kali (2026-01-10) x86_64 GNU/Linux" }),
  "cat readme": () => ({ output:
`=========================================
 NMAP: Billowga ilaa Dhamaad — Terminal
 Qoraal iyo tababar Af-Soomaali ah
=========================================
• Ka dooro cashar liiska bidix
• Guji "Run" ama ku qor amar kasta halkan
• Dhammaan output-ka waxaa laga soo qaatay buugga
` }),
};

function runBuiltin(raw) {
  const key = raw.trim().toLowerCase();
  return BUILTINS[key] ? BUILTINS[key]() : null;
}

function chunkOutput(text) {
  const lines = text.split("\n");
  const chunks = [];
  let buf = [];
  for (const line of lines) {
    buf.push(line);
    if (/^Starting Nmap/.test(line) || line.trim() === "") {
      chunks.push(buf.join("\n"));
      buf = [];
    }
  }
  if (buf.length) chunks.push(buf.join("\n"));
  return chunks.filter((c) => c.length > 0);
}

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

/* ---------- Tiny DOM helper ---------- */
function el(tag, attrs = {}, ...children) {
  const node = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (k === "class") node.className = v;
    else if (k === "dataset") Object.assign(node.dataset, v);
    else if (k.startsWith("on") && typeof v === "function")
      node.addEventListener(k.slice(2).toLowerCase(), v);
    else if (v === true) node.setAttribute(k, "");
    else if (v !== false && v != null) node.setAttribute(k, v);
  }
  for (const child of children.flat()) {
    if (child == null || child === false) continue;
    node.appendChild(child.nodeType ? child : document.createTextNode(String(child)));
  }
  return node;
}

/* ---------- Sidebar ---------- */
function renderSidebar() {
  const doneCount = LESSONS.filter((l) => state.completed[l.id]).length;
  const pct = Math.round((doneCount / LESSONS.length) * 100);

  const header = el("div", { class: "sidebar-header" },
    el("div", { class: "sidebar-header-top" },
      el("div", { class: "logo" },
        el("span", { class: "logo-bracket" }, "["),
        el("span", { class: "logo-text" }, "nmap"),
        el("span", { class: "logo-caret" }, "▸"),
        el("span", { class: "logo-text" }, "kali"),
        el("span", { class: "logo-bracket" }, "]")
      ),
      el("button", {
        class: "sidebar-collapse-btn",
        "data-testid": "sidebar-collapse-btn",
        title: "Xir sidebar-ka",
        onClick: toggleSidebar,
      }, "‹")
    ),
    el("div", { class: "logo-sub" }, "Billowga ilaa Dhamaad")
  );

  const progress = el("div", { class: "progress-wrap", "data-testid": "progress-tracker" },
    el("div", { class: "progress-labels" },
      el("span", {}, "Horumar"),
      el("span", {}, `${doneCount}/${LESSONS.length}`)
    ),
    el("div", { class: "progress-bar" },
      el("div", { class: "progress-fill", style: `width:${pct}%` })
    )
  );

  const animateCheckbox = el("input", {
    type: "checkbox",
    "data-testid": "toggle-animate",
    onChange: (e) => {
      state.animate = e.target.checked;
      localStorage.setItem(ANIMATE_KEY, state.animate ? "1" : "0");
    },
  });
  if (state.animate) animateCheckbox.checked = true;

  const toggles = el("div", { class: "toggles" },
    el("label", { class: "toggle-row" },
      animateCheckbox,
      el("span", {}, "Typing animation")
    )
  );

  const navList = el("ul", {});
  for (const l of LESSONS) {
    const isActive = state.activeId === l.id;
    const isDone = !!state.completed[l.id];
    const li = el("li", {
      class: `lesson-item${isActive ? " active" : ""}${isDone ? " done" : ""}`,
      "data-testid": `lesson-item-${l.id}`,
      onClick: () => { state.activeId = l.id; rerender(); },
    },
      el("span", { class: "lesson-num" }, l.number),
      el("span", { class: "lesson-title" }, l.title),
      isDone ? el("span", { class: "lesson-check" }, "✓") : null
    );
    navList.appendChild(li);
  }

  const nav = el("nav", { class: "lesson-nav", "data-testid": "lesson-nav" },
    el("div", { class: "lesson-nav-title" }, "Casharrada"),
    navList
  );

  const footer = el("div", { class: "sidebar-footer" },
    el("div", { class: "footer-line" },
      el("span", { class: "muted" }, "user@"),
      el("span", { class: "accent" }, "kali"),
      el("span", { class: "muted" }, ":"),
      el("span", { class: "accent2" }, "~$")
    ),
    el("button", {
      class: "contact-btn",
      "data-testid": "open-contact-btn",
      onClick: openContactModal,
    }, "Nala soo xiriir"),
    el("div", { class: "footer-note" }, "Waxbarasho kaliya • Ha isticmaalin wax aanad haysan.")
  );

  return el("aside", { class: "sidebar", "data-testid": "sidebar-root" },
    header, progress, toggles, nav, footer);
}

/* ---------- Lesson panel ---------- */
function buildCmdExplanation(cmd) {
  const ex = getCmdExplanation(cmd);
  if (!ex) return null;

  const body = el("div", { class: "cmd-explain-body" });

  if (ex.how) {
    body.appendChild(el("div", { class: "explain-block" },
      el("div", { class: "explain-label" }, "⚙️ Sida uu u shaqeeyo"),
      el("div", { class: "explain-text" }, ex.how)
    ));
  }

  if (ex.flags && Object.keys(ex.flags).length) {
    const list = el("div", { class: "flag-list" });
    for (const [flag, desc] of Object.entries(ex.flags)) {
      list.appendChild(el("div", { class: "flag-row" },
        el("code", { class: "flag-name" }, flag),
        el("span", { class: "flag-desc" }, desc)
      ));
    }
    body.appendChild(el("div", { class: "explain-block" },
      el("div", { class: "explain-label" }, "🚩 Flags iyo macnahooda"),
      list
    ));
  }

  if (ex.output) {
    body.appendChild(el("div", { class: "explain-block" },
      el("div", { class: "explain-label" }, "📊 Sharaxaadda Output-ka"),
      el("pre", { class: "explain-output" }, ex.output)
    ));
  }

  const toggle = el("button", {
    class: "explain-toggle",
    onClick: (e) => {
      const card = e.currentTarget.closest(".cmd-card");
      card.classList.toggle("expanded");
      e.currentTarget.textContent = card.classList.contains("expanded")
        ? "📖 Qari sharaxaadda ×"
        : "📖 Fahm amarka ›";
    },
  }, "📖 Fahm amarka ›");

  return el("div", { class: "cmd-explain" }, toggle, body);
}

function renderLessonPanel() {
  const lesson = LESSONS.find((l) => l.id === state.activeId) || LESSONS[0];
  const idx = LESSONS.findIndex((l) => l.id === state.activeId);
  const isDone = !!state.completed[lesson.id];

  const markDoneBtn = el("button", {
    class: `done-btn${isDone ? " is-done" : ""}`,
    "data-testid": "mark-done-btn",
    onClick: () => {
      state.completed[lesson.id] = !state.completed[lesson.id];
      localStorage.setItem(STORAGE_KEY, JSON.stringify(state.completed));
      rerender();
    },
  }, isDone ? "✓ La dhammaystiray" : "Calaamadee: La dhameeyey");

  const head = el("div", { class: "lesson-head" },
    el("div", { class: "lesson-head-meta" },
      el("span", { class: "lesson-chip" }, `Cashar ${lesson.number}`),
      markDoneBtn
    ),
    el("h1", { class: "lesson-title-lg" }, lesson.title)
  );

  const sections = [];

  if (lesson.explanation) {
    sections.push(el("div", { class: "lesson-section" },
      el("div", { class: "section-label" }, "Sharraxaad"),
      el("pre", { class: "lesson-text", "data-testid": "lesson-explanation" }, lesson.explanation)
    ));
  }

  if (lesson.commands && lesson.commands.length > 0) {
    const list = el("div", { class: "cmd-list", "data-testid": "lesson-commands" });
    lesson.commands.forEach((c, i) => {
      const copyBtn = el("button", {
        class: "icon-btn",
        title: "Nuqul",
        "data-testid": `copy-cmd-${lesson.id}-${i}`,
        onClick: async (e) => {
          try { await navigator.clipboard.writeText(c.cmd); }
          catch {}
          e.currentTarget.textContent = "✓";
          setTimeout(() => { e.currentTarget.textContent = "⧉"; }, 1200);
        },
      }, "⧉");

      const runBtn = el("button", {
        class: "run-btn",
        "data-testid": `run-cmd-${lesson.id}-${i}`,
        onClick: () => queueCommand(c.cmd),
      }, "▶ Run");

      const card = el("div", { class: "cmd-card" },
        el("div", { class: "cmd-row" },
          el("span", { class: "cmd-prompt" }, "$"),
          el("code", { class: "cmd-text" }, c.cmd),
          el("div", { class: "cmd-actions" }, copyBtn, runBtn)
        ),
        c.output ? el("pre", { class: "cmd-output-preview" },
          c.output.split("\n").slice(0, 3).join("\n") + (c.output.split("\n").length > 3 ? "\n…" : "")
        ) : null,
        buildCmdExplanation(c.cmd)
      );
      list.appendChild(card);
    });
    sections.push(el("div", { class: "lesson-section" },
      el("div", { class: "section-label" }, "Amarrada"),
      list
    ));
  }

  if (lesson.notes) {
    sections.push(el("div", { class: "lesson-section" },
      el("div", { class: "section-label" }, "Qoraal dheeri ah"),
      el("pre", { class: "lesson-text lesson-notes", "data-testid": "lesson-notes" }, lesson.notes)
    ));
  }

  const foot = el("div", { class: "lesson-foot" },
    el("button", {
      class: "nav-btn",
      "data-testid": "prev-lesson-btn",
      disabled: idx <= 0,
      onClick: () => { if (idx > 0) { state.activeId = LESSONS[idx - 1].id; rerender(); } },
    }, "‹ Hore"),
    el("button", {
      class: "nav-btn primary",
      "data-testid": "next-lesson-btn",
      disabled: idx >= LESSONS.length - 1,
      onClick: () => {
        if (idx < LESSONS.length - 1) { state.activeId = LESSONS[idx + 1].id; rerender(); }
      },
    }, "Xiga ›")
  );

  return el("section", {
    class: "lesson-panel",
    "data-testid": `lesson-panel-${lesson.id}`,
  }, head, ...sections, foot);
}

/* ---------- Terminal (persistent across re-renders) ---------- */
let termBodyEl = null;
let termInputEl = null;

function buildTerminal() {
  const body = el("div", {
    class: "term-body",
    "data-testid": "terminal-body",
    onClick: () => termInputEl && termInputEl.focus(),
  });

  const banner = document.createElement("pre");
  banner.className = "term-banner";
  banner.textContent =
`┌──────────────────────────────────────────────────────────────┐
│  Kali GNU/Linux Rolling — arkani@kali                        │
│  Nmap 7.94 ready. Ku qor "help" si aad u aragto amarrada.    │
└──────────────────────────────────────────────────────────────┘`;
  body.appendChild(banner);

  const input = el("input", {
    class: "term-input",
    "data-testid": "terminal-input",
    spellcheck: "false",
    autocomplete: "off",
    autocorrect: "off",
    autocapitalize: "off",
  });

  const activeLine = el("div", { class: "term-line term-active", "data-testid": "terminal-active-line" },
    el("span", { class: "term-prompt" }, PROMPT),
    input
  );
  body.appendChild(activeLine);

  termBodyEl = body;
  termInputEl = input;

  input.addEventListener("keydown", onTerminalKeyDown);

  const clearBtn = el("button", {
    class: "term-clear",
    "data-testid": "terminal-clear-btn",
    onClick: () => clearTerminal(),
  }, "clear");

  const titlebar = el("div", { class: "term-titlebar" },
    el("div", { class: "term-dots" },
      el("span", { class: "dot red" }),
      el("span", { class: "dot yellow" }),
      el("span", { class: "dot green" })
    ),
    el("div", { class: "term-title" }, "arkani@kali: ~"),
    clearBtn
  );

  return el("div", { class: "term-root", "data-testid": "terminal-root" }, titlebar, body);
}

function clearTerminal() {
  if (!termBodyEl) return;
  while (termBodyEl.firstChild) termBodyEl.removeChild(termBodyEl.firstChild);
  const activeLine = el("div", { class: "term-line term-active", "data-testid": "terminal-active-line" },
    el("span", { class: "term-prompt" }, PROMPT),
    termInputEl
  );
  termBodyEl.appendChild(activeLine);
  termInputEl.value = "";
  termInputEl.focus();
}

function scrollTermBottom() {
  if (termBodyEl) termBodyEl.scrollTop = termBodyEl.scrollHeight;
}

function appendCmdLine(text) {
  const line = el("div", { class: "term-line" },
    el("span", { class: "term-prompt" }, PROMPT),
    el("span", { class: "term-typed" }, text)
  );
  // insert before active line (the last child)
  const active = termBodyEl.querySelector(".term-active");
  termBodyEl.insertBefore(line, active);
  scrollTermBottom();
}
function appendOutput(text) {
  const pre = document.createElement("pre");
  pre.className = "term-output";
  pre.textContent = text;
  const active = termBodyEl.querySelector(".term-active");
  termBodyEl.insertBefore(pre, active);
  scrollTermBottom();
}

async function typeOutput(text) {
  const chunks = chunkOutput(text);
  for (let i = 0; i < chunks.length; i++) {
    if (state.animate) await sleep(180 + Math.random() * 220);
    appendOutput(chunks[i]);
  }
}

async function executeCommand(raw) {
  const cmd = raw.trim();
  if (!cmd) {
    appendCmdLine("");
    return;
  }
  state.busy = true;
  appendCmdLine(cmd);
  state.cmdHistory.push(cmd);
  state.histIdx = -1;

  const builtin = runBuiltin(cmd);
  if (builtin) {
    if (builtin.clear) clearTerminal();
    else if (builtin.output) await typeOutput(builtin.output);
    state.busy = false;
    return;
  }
  const match = findCommandMatch(cmd);
  if (match) {
    if (match.output) await typeOutput(match.output);
    state.busy = false;
    return;
  }
  const first = cmd.split(/\s+/)[0];
  appendOutput(`${first}: command not found\nKu qor "help" si aad u aragto amarrada la taageerayo.`);
  state.busy = false;
}

async function queueCommand(cmd) {
  if (state.busy) return;
  state.busy = true;
  termInputEl.value = "";
  if (state.animate) {
    for (let i = 1; i <= cmd.length; i++) {
      termInputEl.value = cmd.slice(0, i);
      scrollTermBottom();
      await sleep(18 + Math.random() * 22);
    }
    await sleep(150);
  }
  termInputEl.value = "";
  state.busy = false;
  await executeCommand(cmd);
  termInputEl.focus();
}

function onTerminalKeyDown(e) {
  if (state.busy) {
    e.preventDefault();
    return;
  }
  if (e.key === "Enter") {
    e.preventDefault();
    const v = termInputEl.value;
    termInputEl.value = "";
    executeCommand(v);
  } else if (e.key === "ArrowUp") {
    e.preventDefault();
    if (state.cmdHistory.length === 0) return;
    const nextIdx = state.histIdx < 0 ? state.cmdHistory.length - 1 : Math.max(0, state.histIdx - 1);
    state.histIdx = nextIdx;
    termInputEl.value = state.cmdHistory[nextIdx] || "";
  } else if (e.key === "ArrowDown") {
    e.preventDefault();
    if (state.histIdx < 0) return;
    const nextIdx = state.histIdx + 1;
    if (nextIdx >= state.cmdHistory.length) {
      state.histIdx = -1;
      termInputEl.value = "";
    } else {
      state.histIdx = nextIdx;
      termInputEl.value = state.cmdHistory[nextIdx];
    }
  } else if (e.key === "l" && (e.ctrlKey || e.metaKey)) {
    e.preventDefault();
    clearTerminal();
  }
}

/* ---------- Contact modal ---------- */
const CONTACTS = [
  { icon: "📧", label: "Email",     value: "arkani6563@gmail.com",       href: "mailto:arkani6563@gmail.com" },
  { icon: "▶️", label: "YouTube",   value: "@arkani659",                 href: "https://youtube.com/@arkani659" },
  { icon: "🌐", label: "Portfolio", value: "ruushy.github.io/protfolio", href: "https://ruushy.github.io/protfolio/" },
  { icon: "✈️", label: "Telegram",  value: "t.me/hacking_akhlaaqyin",    href: "https://t.me/hacking_akhlaaqyin" },
  { icon: "💬", label: "Discord",   value: "discord.gg/55GhmhcSY",       href: "https://discord.gg/55GhmhcSY" },
  { icon: "🐙", label: "GitHub",    value: "github.com/Ruushy",          href: "https://github.com/Ruushy" },
];

function closeContactModal() {
  const backdrop = document.querySelector(".modal-backdrop");
  if (backdrop) backdrop.remove();
  document.removeEventListener("keydown", onModalKey);
}
function onModalKey(e) {
  if (e.key === "Escape") closeContactModal();
}

function openContactModal() {
  closeContactModal();

  const items = CONTACTS.map((c) =>
    el("a", {
      class: "contact-item",
      href: c.href,
      target: "_blank",
      rel: "noopener noreferrer",
      "data-testid": `contact-${c.label.toLowerCase()}`,
    },
      el("span", { class: "contact-icon" }, c.icon),
      el("div", { class: "contact-meta" },
        el("div", { class: "contact-label" }, c.label),
        el("div", { class: "contact-value" }, c.value)
      ),
      el("span", { class: "contact-arrow" }, "›")
    )
  );

  const modal = el("div", { class: "modal-card", onClick: (e) => e.stopPropagation() },
    el("div", { class: "modal-head" },
      el("h2", { class: "modal-title" }, "Nala Soo Xiriir"),
      el("button", {
        class: "modal-close",
        "data-testid": "close-contact-btn",
        onClick: closeContactModal,
      }, "✕")
    ),
    el("div", { class: "contact-list" }, ...items)
  );

  const backdrop = el("div", {
    class: "modal-backdrop",
    "data-testid": "contact-modal",
    onClick: closeContactModal,
  }, modal);

  document.body.appendChild(backdrop);
  document.addEventListener("keydown", onModalKey);
}

/* ---------- Main render ---------- */
let terminalNode = null;

function rerender() {
  const shell = document.getElementById("app-shell");
  // Remove old sidebar + lesson col but keep terminal
  const oldSidebar = shell.querySelector(".sidebar");
  if (oldSidebar) oldSidebar.remove();
  const oldMain = shell.querySelector(".main-grid");
  if (oldMain) {
    const lessonCol = oldMain.querySelector(".lesson-col");
    if (lessonCol) lessonCol.remove();
  }

  const sidebar = renderSidebar();
  shell.insertBefore(sidebar, shell.firstChild);

  let main = shell.querySelector(".main-grid");
  if (!main) {
    main = el("main", { class: "main-grid" });
    shell.appendChild(main);
  }
  const lessonCol = el("div", { class: "lesson-col" }, renderLessonPanel());
  main.insertBefore(lessonCol, main.firstChild);

  if (!terminalNode) {
    terminalNode = buildTerminal();
    const termCol = el("div", { class: "term-col" }, terminalNode);
    main.appendChild(termCol);
  }
}

document.addEventListener("DOMContentLoaded", () => {
  const shell = document.getElementById("app-shell");
  if (!shell) return;
  shell.innerHTML = "";
  shell.appendChild(el("main", { class: "main-grid" }));
  if (!state.sidebarOpen) shell.classList.add("sidebar-hidden");
  rerender();
  updateFloatingToggle();
  setTimeout(() => termInputEl && termInputEl.focus(), 100);
});
