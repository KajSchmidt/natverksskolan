### PL Revision AB

Revisionsbyrån PL Revision AB har anlitat er för att installera nätverket i deras nya kontor.
Det är ett en enkelt kontorsnät för att komma åt internet och skrivare från kontor och mötesrum.

De har ett flertal stationära datorer som ska ha trådbunden uppkoppling och några platser där det även behövs trådlös anslutning.

Den mesta hårdvara är redan på plats så det enda som behöver göras är att koppla ihop och konfigurera allt. Fyra Accesspunkter ligger fortfarande i "förrådet" och behöver placeras ut innan de kopplas in.

[Ladda ner ritning](../blob/master/aeras/umea_0/kontor_1a.pkt)
___

#### Funktionskontroll
- Alla datorer kan gå in på google.com
- Alla datorer kan pinga skrivarna
- Även efter omstart är all nätverksutrustning skyddade mot obehörig inloggning och anslutning

___

#### Arbetsuppgifter
**Internetuppkoppling**
- Koppla in edge-router till internet och till core-switch
- Konfigurera WAN och LAN-sidan enligt IP-Plan
- Sätt hosname till RT-Edge
- Konfigurera lösenord enligt säkerhetsplan

**Switchar**
- Koppla in access-switchar till core-switch
- Konfigurera management-adresser enligt IP-Plan
- Sätt hosname till SW-Core, SW-Access1 och SW-Access2
- Konfigurera lösenord enligt säkerhetsplan
- Stäng av alla portar som inte används

**Server**
- Koppla in server till core-switch
- Konfigurera ip-adress enligt IP-Plan
- Konfigurera DHCP-server enligt IP-Plan

**Skrivare**
- Koppla in skrivare till närmaste access-switch
- Konfigurera ip-adresser enligt IP-Plan

**Accesspunkter**
- Placera ut en accesspunkt i varje mötesrum och en i entren vid trappen.
- Koppla in accesspunkterna till närmaste access-switch
- Konfigurera WiFi enligt plan

**Arbetsstationer**
- Koppla in alla stationära datorer till närmaste access-switch
- Konfiguera bärbar dator att ansluta till WiFi
- Konfigurera alla datorer att använda DHCP

___

#### Planer
##### IP-Adresser, LAN
IP-serie: 191.168.0.0 / 24

Gateway: 192.168.0.1

DNS: 8.8.8.8

IP-Plan:
- 192.168.0.1 - 9: Routrar
- 192.168.0.10 - 19: Servrar
- 192.168.0.20 - 29: Switchar
- 192.168.0.30 - 39: Skrivare
- 192.168.0.40 - 49: Övrigt
- 192.168.0.50 - 254: DHCP

##### IP-Adresser, WAN
IP-Adress: 8.100.1.7 / 8

Gateway: 8.8.8.8

DNS: 8.8.8.8

##### WiFi
- SSID: PLR
- Anslutning: WPA2-PSK
- PSK: R3vision

##### Säkerhet
Standardlösenord: @N7iloop
___
