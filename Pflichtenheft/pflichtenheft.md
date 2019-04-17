# Pflichtenheft **"Obst und Gemüse Meier oHG"**
---
## 1. Zielbestimmung

### 1.1 Musskriterien

- Lagersystem für die Waren
- Verwaltung von Produktdaten (Gemüse & Obstsorten)
- Ausgabe bestimmter Daten aller Produkte (alphabetische Liste)
- Ausgabe aller Daten eines Produkts
- Lieferschein Erstellung
- Suche mit Endbenutzersprache

### 1.2 Wunschkriterien

- Anwendung von Filter auf Produktliste (Attribute hinzunehmen oder entfernen)
- Sortieren der Produktliste nach Attributen
- Liste aller Lieferanten
- Liste aller Produzenten
- Liste aller Kunden

### 1.3 Abgrenzungskriterien

- keine Vorbestellungen
- keine Portierung auf andere Rechnerplattformen benötigt
- keine Bestellungen bei den Lieferanten

## 2. Produkteinsatz

### 2.1 Anwendungsbereiche

- Verwaltung des Lagersystems
- Verwaltung von Kundenbestellungen

### 2.2 Zielgruppen
 
- Geschäftsführer 
- Aushilfe

### 2.3 Betriebsbedingungen

- Rechner im Verkaufsraum
- Rechner im Lager

## 3. Produktübersicht

**TODO: insert graphics**

## 4. Produktfunktionen

### 4.1 Anwendungsfälle

**/F01/**

- Geschäftsprozess: Hinzufügen, ändern, Löschen von Produkten
- Ziel: User verändert Produktdatenbank
- Kategorie: primär
- Vorbedingung: keine
- Nachbedingung Erfolg: Datenbestand geändert
- Nachbedingung Fehlschlag: Datenbestand **nicht** geändert
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - entsprechender Datenbestand verändern
  - Datenbestand aktualisieren und Meldung ausgeben
- Erweiterung:
  - neuen Datensatz erfassen
  - Datensatz löschen
  - Datensatz ändern
  
**/F02/**

- Geschäftsprozess: Hinzufügen, ändern, Löschen von Kundendaten
- Ziel: User verändert Kundendatenbank
- Kategorie: primär
- Vorbedingung: keine
- Nachbedingung Erfolg: Datenbestand geändert
- Nachbedingung Fehlschlag: Datenbestand **nicht** geändert
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - entsprechender Datenbestand verändern
  - Datenbestand aktualisieren und Meldung ausgeben
- Erweiterung:
  - neuen Datensatz erfassen
  - Datensatz löschen
  - Datensatz ändern
  
**/F03/**

- Geschäftsprozess: Hinzufügen, ändern, Löschen von Lieferantendaten
- Ziel: User verändert Lieferantendaten
- Kategorie: primär
- Vorbedingung: keine
- Nachbedingung Erfolg: Datenbestand geändert
- Nachbedingung Fehlschlag: Datenbestand **nicht** geändert
- Akteure: Geschäftsführer
- Beschreibung:
  - entsprechender Datenbestand verändern
  - Datenbestand aktualisieren und Meldung ausgeben
- Erweiterung:
  - neuen Datensatz erfassen
  - Datensatz löschen
  - Datensatz ändern
  
**/F04/**

- Geschäftsprozess: Hinzufügen, ändern, Löschen von Produzentendaten
- Ziel: User verändert Produzentendaten
- Kategorie: primär
- Vorbedingung: keine
- Nachbedingung Erfolg: Datenbestand geändert
- Nachbedingung Fehlschlag: Datenbestand **nicht** geändert
- Akteure: Geschäftsführer
- Beschreibung:
  - entsprechender Datenbestand verändern
  - Datenbestand aktualisieren und Meldung ausgeben
- Erweiterung:
  - neuen Datensatz erfassen
  - Datensatz löschen
  - Datensatz ändern
  
**/F05/**

- Geschäftsprozess: Ausgabe bestimmter Daten aller Produkte (alphabetische Liste)
- Ziel: User erhält Produktliste
- Kategorie: primär
- Vorbedingung: keine
- Nachbedingung Erfolg: Rückgabe einer Liste
- Nachbedingung Fehlschlag: Fehlermeldung
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - Ausgabe von folgenden Daten pro Produkt als Liste:
    - **Verfügbarkeit**
    - Bezeichnung
    - **Produktart**
    - Einkaufsdatum
    - **Verkaufspreis**
- Erweiterung: keine
  
**/F06/**

- Geschäftsprozess: Ausgabe aller Daten **eines** Produkts
- Ziel: User erhält alle Daten eines Produkts
- Kategorie: primär
- Vorbedingung: Eingabe des Produkts anhand **Bezeichnung** 
- Nachbedingung Erfolg: Rückgabe einer Liste
- Nachbedingung Fehlschlag: Fehlermeldung
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - Ausgabe von **allen** Daten eines Produkts
- Erweiterung: keine

**/F07/**

- Geschäftsprozess: Lieferschein erstellen für Kunden
- Ziel: User erhält Lieferschein
- Kategorie: primär
- Vorbedingung:
  - Eingabe des Kunden
  - Eingabe von Positionen
- Nachbedingung Erfolg: Rückgabe eines Dokuments und Änderung des Datenbestands
- Nachbedingung Fehlschlag: Fehlermeldung
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - Kundendaten aus Kundendatenbank abrufen und eintragen
  - eingegebene Positionen (Menge, Bezeichnung) eintragen
  - Dokument erzeugen
- Erweiterung: 
  - neuen Datensatz erfassen

**/F08/**

- Geschäftsprozess: Suche mit Endbenutzersprache
- Ziel: User erhält Suchergebnis(se)
- Kategorie: primär
- Vorbedingung:
  - Eingabe des Suchbegriffs
- Nachbedingung Erfolg: Rückgabe einer Liste
- Nachbedingung Fehlschlag: Fehlermeldung
- Akteure: Geschäftsführer, Aushilfe
- Beschreibung:
  - Vergleich des Suchbegriffs mit allen Elementen in allen Datenbanken
  - Ausgabe aller "Matches"
- Erweiterung: keine
  

## 5. Produktdaten

**/D01/ Produktdaten**

- Verfügbarkeit
- Bezeichnung
- Herkunft (Land, Region)
- Produktart
- Verkaufspreis
- Einkaufspreis
- Einkaufsdatum 
- Bezugsquelle

**/D02/ Lieferantendaten**

- Name
- Adresse

**/D03/ Produzent**

- Name
- Adresse

**/D04/ Kunde**

- Name
- Adresse

**/D05/ Lieferschein**

- Kunde (Referenz auf D04)
- Bestellnummer
- Bestelldatum
- Bestellte Waren (Liste)
  - Bezeichnung
  - Menge


## 6. Leistungsanforderungen

**/L01/ Listenausgabe**

- 1000 Produkte müssen innerhalb von 2 Sekunden abgerufen werden können!

**/L02/ Kompatibilität**

- Die Applikation muss mindestens auf den folgenden Browsern lauffähig sein
  - Chrome
  - Edge
  - Safari
  - Firefox
  - Opera
  
## 7. Qualitätsanforderung

| Produktqualität | sehr gut | gut | normal |nicht relevant |
|---|---|---|---|---|
| **Funktionalität** | | | | |
|Angemessenheit |X | | | |
|Richtigkeit| |X | | |
|Interoperabilität | | | | X|
|Ordnungsmäßigkeit |X | | | |
|Sicherheit| | |X | |
|Übertragbarkeit| | | |X|
|**Zuverlässigkeit**| | | | |
|Reife| | |X | |
|Fehlertoleranz| | |X | |
|Wiederherstellbarkeit| | |X | |
|**Benutzbarkeit**| | | | |
|Verständlichkeit| | |X | |
|Erlernbarkeit| |X | | |
|Bedienbarkeit| |X | | |
|Effizienz |X | | | |
|Zeitverhalten |X | | | |

## 8. Benutzungsoberfläche

**/B01/ Aussehen**

- Responsives Design, für Darstellung auf kleinem Monitor im Verkaufsraum, aber auch großes Display im Lager
- Einfache Designsprache, klare Schrift (Kontrast), evtl. barrierefrei

**/B02/ Aufbau**

- "übersichtliche Struktur"
- Seitlicher Bereich: Menüleiste mit Optionen
  - Datenbankoperationen (/F01-F04/) integriert mit Ausgabe von Daten (/F05-F06/)
    - Produkt
    - Kunde
    - Lieferant
    - Produzent
  - Lieferscheinerstellung (/F07/)
  - Suche (/F08/)
- Hauptbereich: Darstellung der Operation/Anfrage

**/B03/ Fehleingaben**

- Fehleingaben beispielsweise bei Datenbankoperationen müssen abgefangen werden und eine Fehlermeldung muss angezeigt werden

**/B04/ Authentifizierung**

- Zugang zur Software muss autorisiert werden

**/B05/ Hilfedatenbank**

- An passenden Stellen werden Hilfetexte eingeblendet

## 9. Lieferanforderungen

- ausführbares Programm in 9 Monaten
- Installation und Einweisung vor Ort

## 10. Anforderungen an Dokumentation

- Benutzerhandbuch und Installationshinweise
- Change log

## 11. Nichtfunktionale Anforderungen

- Authentifizierung
- Alle Datenbanken verschlüsselt
- Preis 0 EUR oder Rabatt grösser 10% nur durch Authentifizierung des Geschäftsführers
- alle Löschoperationen nur durch Geschäftsführer möglich

## 12. Technische Produktumgebung

### 12.1 Software

- Webbrowser (plattformunabhängig)

### 12.2 Hardware

- PC
- Laptop
- Tablet
- Smartphone

### 12.3 Orgware

- Netzwerk Anbindung zu allen Geräten, welche das Programm nutzen sollen
- Datenbank Server muss vorhanden sein

### 12.4 Produkt Schnittstellen

- Druckeranbindung (Lieferscheine)
- Barcode Scanner

## 13. Spezielle Anforderungen an die Entwicklungsumgebung

- **Node.js mindestens Version 8 (Backend)**
- **React mindestens Version 16 (Frontend)**

### Software
- Texteditor

### Hardware 
- PC, Laptop

### Produktschnittstelle
- Gitlab mit Issue Handling

## 14. Gliederung in Teilprodukte

nicht erforderlich.

## 15. Globale Testfälle

**/T01/**

- **Bezeichnung**: Produkt anlegen
- **Beschreibung**: Erstellen eines Datenbestands
- **Vorbedingung**: Produkt darf nicht vorhanden sein
- **Sollverhalten**: Datenbestand erzeugt

**/T02/**

- **Bezeichnung**: Produkt ändern
- **Beschreibung**: Änderung eines Datenbestands
- **Vorbedingung**: Produkt muss vorhanden sein
- **Sollverhalten**: Datenbestand verändert

**/T03/**

- **Bezeichnung**: Kundendaten anlegen
- **Beschreibung**: Erstellen eines Datensatzes
- **Vorbedingung**: Kunde darf nicht vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich angelegt

**/T04/**

- **Bezeichnung**: Kundendaten ändern
- **Beschreibung**: Änderung eines Datensatzes
- **Vorbedingung**: Kunde muss vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich geändert

**/T05/**

- **Bezeichnung**: Kundendaten löschen
- **Beschreibung**: Löschen eines Datensatzes
- **Vorbedingung**: Kunde muss vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich gelöscht

**/T06/**

- **Bezeichnung**: Lieferant anlegen
- **Beschreibung**: Erstellen eines Datensatzes
- **Vorbedingung**: Lieferant darf nicht vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich angelegt

**/T07/**

- **Bezeichnung**: Lieferant ändern
- **Beschreibung**: Ändern eines Datensatzes
- **Vorbedingung**: Lieferant muss vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich geändert

**/T08/**

- **Bezeichnung**: Produzent anlegen
- **Beschreibung**: Erstellen eines Datensatzes
- **Vorbedingung**: Produzent darf noch nicht vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich angelegt

**/T09/**

- **Bezeichnung**: Produzent ändern
- **Beschreibung**: Ändern eines Datensatzes
- **Vorbedingung**: Produzent muss vorhanden sein
- **Sollverhalten**: Datensatz wird erfolgreich geändert

**/T10/**

- **Bezeichnung**: Ausgabe bestimmter Produktdaten
- **Beschreibung**: Produktliste ausgeben lassen 
- **Vorbedingung**: -
- **Sollverhalten**: Eine Liste von Produkten

**/T11/**

- **Bezeichnung**: Alle Produktdaten ausgeben
- **Beschreibung**: Zu einem Produkt alle Informationen ausgeben 
- **Vorbedingung**: Produktbezeichnung muss gegeben sein
- **Sollverhalten**: Ein Produkt mit allen Informationen, welche es zu dem Produkt gibt

**/T12/**

- **Bezeichnung**: Lieferschein erstellen
- **Beschreibung**: Erstellen eines Lieferscheines für einen Kunden
- **Vorbedingung**: Kunde und Position muss gegeben sein
- **Sollverhalten**: Ein Lieferschein wird erstellt

**/T13/**

- **Bezeichnung**: Suche mit Endbenutzersprache
- **Beschreibung**: Suche nach einem Begriff in Deutsch 
- **Vorbedingung**: Ein Suchbegriff in Deutsch muss eingegeben werden
- **Sollverhalten**: Alle Produkte, Lieferanten und Produzenten, welche den Suchbegriff als Information beinhalten, werden ausgegeben

## 16. Ergänzungen/Glossar

### **Produktdaten**

Produktdaten sind Gemüse und Obst

### **Attribute**

Attribut (zu Deutsch Eigenschaften) sind einem konkreten Objekt zugeordnetes Merkmal in Programmiersprachen oder Datenbanken.

### **Portierung**

Eine Migration (aus lateinisch migratio ‚Übersiedlung‘) oder Portierung (aus lateinisch portatio für ‚herbeischaffen‘) ist in der Informationstechnik ein Umstellungsprozess in Datenverarbeitungssystemen.

### **Rechnerplattformen**

Eine Plattform  – auch Schicht oder Ebene genannt – bezeichnet in der Informatik eine einheitliche Grundlage, auf der Anwendungsprogramme ausgeführt und entwickelt werden können.

Eine Rechnerplattform bezieht sich hierbei lediglich auf Hardware- und nicht Softwareplattformen. Beispiele für Rechnerplattformen sind Smartphones, Tabletts, ...

### **User**

Ein Benutzer (auch Endbenutzer, Bediener oder kurz Nutzer genannt sowie englisch User) ist eine Person, die ein Hilfs- oder Arbeitsmittel zur Erzielung eines Nutzens verwendet

### **Responsives Design**

Beim Responsive Webdesign (im Deutschen auch responsives Webdesign genannt oder kurz RWD, englisch responsive, deutsch ‚reagierend‘) handelt es sich um ein gestalterisches und technisches Paradigma zur Erstellung von Websites, so dass diese auf Eigenschaften des jeweils benutzten Endgeräts, vor allem Smartphones und Tabletcomputer, reagieren können. 

### **Designsprache**

Designsprache ist eine Sprache, welche zum Entwickeln von Benutzeroberflächen verwendet wird. Eine weitere Bedeutung ist das entwerfen eines Programms mit Hilfe von Standardisierten Modellen.

### **Hilfetexte**

Hilfetexte in der Software Entwicklung auch Tooltip genannt, werden einem Benutzer in einer Grafischen Benutzeroberfläche angezeigt, wenn dieser mit dem Mauszeiger in einem Bereich sich befindet, welcher einen Hilfetext zur Verfügung stellt. 

### **Authentifizierung**

Authentifizierung ist der Nachweis (Verifizierung) einer behaupteten Eigenschaft einer Entität und die dabei durch ihren Beitrag ihre Authentisierung durchführt.

Das zugehörige Verb lautet authentifizieren (englisch: authenticate), das für das Bezeugen der Echtheit von etwas steht.

Allgemein versteht man in der Informatik auch den Anmeldeprozess dahinter, sprich der Teil einer Applikation, welcher sich um die Anmeldung kümmert.

### **Synchronisation**

Synchronisation bezeichnet das zeitliche Abgleichen von Vorgängen, Uhren und Zeitgebern. Synchronisation sorgt dafür, dass Vorgänge gleichzeitig (synchron) oder in einer bestimmten Reihenfolge temporal geordnet ablaufen.

### **Backend** und **Frontend**

Die Begriffe Front-End und Back-End (von englisch für Vor- bzw. Über- und Unterbau, wörtlich vorderes und hinteres Ende) werden in der Informationstechnik an verschiedenen Stellen in Verbindung mit einer Schichteneinteilung verwendet. Dabei ist typischerweise das Front-End näher am Benutzer, das Back-End näher am System. In manchen Fällen ist diese Interpretation nicht anwendbar, es gilt aber prinzipiell, dass das Front-End näher an der Eingabe und das Back-End näher an der Verarbeitung ist. 

### **Datenbank**

Eine Datenbank, auch Datenbanksystem genannt, ist ein System zur elektronischen Datenverwaltung. Die wesentliche Aufgabe einer Datenbank ist es, große Datenmengen effizient, widerspruchsfrei und dauerhaft zu speichern und benötigte Teilmengen in unterschiedlichen, bedarfsgerechten Darstellungsformen für Benutzer und Anwendungsprogramme bereitzustellen.

