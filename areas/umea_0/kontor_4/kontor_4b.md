### Massiv Infrastruktur AB
**Kontrakt B**

<button class="btn btn-outline-info" onclick="goTo('kontor_4/kontor_4.md')"><< Tillbaka</button>

MIAB vill att ni gör om deras trådlösa nätverk. De vill ha ett personalnät med personliga inloggningar och ett gästnät med ett lösenord de då och då kan byta ut.

___

Utgå från din inlämning i Kontrakt A och lägg till utrustning som saknas

eller

[Ladda ner ritning](/natverksskolan/areas/umea_0/kontor_4/kontor_4b.pkt)
___

#### Funktionskontroll
- Alla bärbara datoer kan ansluta till MIAB med personligt login och gå in på google.com
- Alla mobiltelefoner kan ansluta till MIAB-Guest och gå in på google.com

___

#### Arbetsuppgifter
##### AP
- Byt befintliga accesspunkter till LAP-PT

#### Controller
- Koppla in en 2504 wireless controler och konfigurera den enligt plan

##### Inloggningsserver
- Gå in på services på servern och aktivera och konfigurera AAA

___

#### Planer

##### AAA
- Client name: MIAB
- Client IP: (Controllerns ip)
- Shared secret: SzzB90tXDhVp

##### Användare

- Lennart / 12345678
- Maria / 12345678
- Anki / 12345678
- Roger / 12345678
- Albert / 12345678
- Rosa / 12345678
- Linnea / 12345678

##### IP-Adresser, LAN

Gateway: 192.168.0.1 / 255.255.255.0
DNS: 8.8.8.8

##### WiFi
###### Personal
- SSID: MIAB
- Anslutning: WPA2
- Radius: (Serverns IP)
- Secret: SzzB90tXDhVp

###### Gästnät
- SSID: MIAB-Guest
- Anslutning: WPA2-PSK
- PSK: MassivInfrastruktur

##### Säkerhet
Standardlösenord: @N7iloop
___
