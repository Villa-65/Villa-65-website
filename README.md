# Website Villa 65
Dit is de website voor Villa 65.

## Technisch
De website is gemaakt met Angular 7 aan de voorkant en een paar brakke PHP-scripts aan de
achterkant. Er zit een soort halfbakken content management systeem in wat ik hieronder uitleg.

## Gare CMS
De hele bende is zo ingesteld dat je gewoon zooi in de directory kan gooien waar de website op de
server staat en dat dan automagisch op de website verschijnt. Cool hè? Hieronder staat de hele
structuur uitgelegd, zodat als ik dood danwel weg danwel dement ben het ook nog gebruikt kan
worden. Dat is al meer dan de vorige website-makers hadden uitgedacht.
- `/`: de root directory.
    - `events/`: In deze directory staan fotoalbums.
        - `traditions/`: Hier staan foto's in voor de tradities. Elke bestandsnaam komt overeen met
        een traditie in `text.JSON`(zie hieronder).
        - `trips/`: In deze directory staan alle fotoalbums van evenementen zoals de FIK en
        kerstdiners.
            - `thumbs/`: In deze directory staan thumbnails voor evenementen. Let op de namen: ze
            zijn lowercase en worden automatisch met een hoofdletter geschreven op de frontend.
            Als je bestanden een naam met twee cijfers aan het eind geeft, zal dit automatisch met
            een spatie en "20" ervoor worden laten zien. Dus: `bata17/` wordt "Bata 2017".
            Bestanden in deze map bepalen wat er op de frontend komt. De mappen in `trips/` dus
            niet. Zorg er dus wel voor dat er een map in `trips/` staat als je hier een thumbnail
            in zet.
    - `people/`: In deze directory staan de "profielfoto's" van bewoners/(kut)feuten.
    - `resources/`: Files voor de website, bijvoorbeeld de achtergrond.
    - `people.JSON`: In deze file staan alle mensen die op de people pagina moeten worden laten
    zien. Hoewel je hopelijk zelf uit kan vogelen hoe de structuur werkt staat het hier ook nog
    even:
    ```javascript
    {
      "id": 1, // een unieke identifier voor elke persoon
      "name": "Luc", // de naam van de persoon,
      "story": "Ik ben cool.", // het verhaal van de persoon op hun profiel,
      "image": "people/luc.png" // de path van de foto van de persoon
    }
    ```
    Dit zit dan in een array geknald en dan werkt het zomaar.
    - Ook staan hier alle files die uit de `build --prod` command komen -- de daadwerkelijk HTML/JS
    voor de frontend.
    - `text.JSON`: Hoewel het bestand misschien een stomme obscure naam heeft, is er wel semi over
    nagedacht. Hierin staan alle items die op de website op een textpagina komen, namelijk de
    tradities. Structuur. Hier.
    ```javascript
    {
      "title": "Kerst", // De naam van de traditie
      "content": "Kerst is cool en als je het daar niet mee eens bent krijg je kool." // Uitleg
    }
    ```

Dit was mijn spreekbeurt. Als er nog vragen zijn hoop ik voor je dat ik er nog ben, anders moet
je maar even mailen naar [luc@luctimmerman.nl](mailto:luc@luctimmerman.nl).
