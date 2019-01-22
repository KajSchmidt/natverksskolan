### Vita Tänders Tandvård AB
**Kontrakt B**

<button class="btn btn-outline-info" onclick="goTo('kontor_2/kontor_2.md')"><< Tillbaka</button>


Vita Tänders Tandvård vill ha en extra nivå av säkerhet genom att använda personliga inloggningar för all personal på det trådlösa personalnätet.

___

Använd dig av ritningen från Kontrakt B och lägg till en server

eller

[Ladda ner ritning](/natverksskolan/areas/umea_0/kontor_2/kontor_2c.pkt)

___

#### Funktionskontroll
- Alla datorer kan ansluta till Vita-Personal med användarnamn och lösenord och gå in på google.com
- Alla mobiltelefoner kan anluta till Vita och gå in på google.com

___

#### Arbetsuppgifter
- Koppla in serven till switchen och konfigurera den med en statisk ip
- Gå in på services på servern och aktivera och konfigurera AAA
- Ändra Vita-Personal från WPA2-PSK till WPA2 på controllern
- Ändra Vita-Personal från WPA2-PSK till WPA2 på datorerna och ange lösenord och användarnamn


___

#### Planer

##### AAA
- Client name: Vita
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


##### WiFi
- SSID: Vita-Personal
- Anslutning: WPA2
- Radius server: (Serverns ip)
- Shared Secret: SzzB90tXDhVp
- Local switching / Central Authentication

- SSID: Vita
- Anslutning: WPA2-PSK
- PSK: VitaGuest

___
