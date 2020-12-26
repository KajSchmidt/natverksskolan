### Massiv Infrastruktur AB
**Kontrakt A**

<button class="btn btn-outline-info" onclick="goTo('kontor_4/kontor_4.md')"><< Tillbaka</button>

MIAB har anlitat er för att installera nätverket i deras nya kontor.
Det är ett en enkelt kontorsnät för att komma åt internet och skrivare från kontor och mötesrum.

De har ett flertal stationära datorer som ska ha trådbunden uppkoppling och några platser där det även behövs trådlös anslutning.

Datorer är redan på plats så det som behöver göras är placera ut övrig utrustning, koppla ihop och konfigurera allt. Internetuppkoppling är redan levererad och konfigurerad av ISP så den behöver inte ändras på.

[Ladda ner ritning](/natverksskolan/areas/umea_0/kontor_4/kontor_4a.pkt)
___

#### Funktionskontroll
- Alla datorer (utom management) kan gå in på google.com
- Alla datorer (utom management) kan pinga skrivarna
- Även efter omstart är all nätverksutrustning skyddade mot obehörig inloggning och anslutning

___

#### Arbetsuppgifter
- Gör en IP-Plan utifrån den information som finns tillgänlig.
- Koppla in switchar efter en design med Core och Acccess.
- Gör en grundkonfiguration på alla switchar (Sätt hostname och Secret samt stäng oanvända portar)
- Konfiguera ett management-VLAN på switcharna med ett IP och en dedicerad port på switchen.
- Koppla in server och konfigurera den som DHCP-server
- Koppla in och konfigurera skrivarna
- Koppla in Accesspunkter och konfigurera ett personalnät
- Konfigurera alla datorer efter behov

___

#### Planer
##### IP-Adresser, LAN

Gateway: 192.168.0.1 / 255.255.255.0
DNS: 8.8.8.8

##### WiFi
- SSID: MIAB
- Anslutning: WPA2-PSK
- PSK: bP13dtvJ86Sv

##### Säkerhet
Standardlösenord: @N7iloop
___
