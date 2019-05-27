# Code Konventionen

Das Projekt Großmarkt wurde im klassischen Client/Server Konzept implementiert. Auf seitens des Servers wurde auf das Java Webframework *Spring* gesetzt. Für die Clientimplementierung wurde die JavaScript-Library *React* verwendet.

## Java Konventionen

Der Java Server ist nach den folgenden Konventionen geschrieben:

- Benamung
  - PascalCase
    - Klassen
    - Interface
    - Enum
  - CamelCase
    - Attributen
    - Methoden
    - Variablen
    - Parameter
  - ScreamingCase
    - Statische Attribute
- Klassenaufbau
  - Reihenfolge
    - 1: Statische Attribute
    - 2: Statische Methoden
    - 3: Attributen
    - 4: Konstruktoren
    - 5: Public Methoden
    - 6: Private Methoden
  - Attribute: *Alle nicht statische Attribute müssen privat sein*

## Javascript Konvention

Das Userinterface ist mit folgenden React Konventionen umgesetzt:

- Benamung
  - PascalCase
    - import/export Namen
    - React Komponenten
    - Konstruktoren
    - Klassen
  - CamelCase
    - Variablen
    - React Komponenten Instanzen
    - React props
  - ScreamingCase
    - Environment Variablen
- Komponentenaufbau
  - Dateien
    - JSX Datei --> Struktur + Funktionalität (JavaScript XML)
    - SCSS Datei --> Design (CSS Präprozessor)
  - verwenden von funktionalen Komponenten wo kein 'state' benötigt wird, anstatt klassenbasierte


**JS-Linter**

Um bei der Implementierung sauberen Code-Konventionen zu folgen, wurde ein JavaScript Linter eingesetzt. Die Regeln des Linters sind dabei auf den Airbnb Standard zurückzuführen. Der vollständige JavaScript Style Guide von Airbnb ist auf Github zu finden.

[Airbnb JavaScript Style Guide](https://github.com/airbnb/javascript)

**Atomic Design**

Für die Struktur und das Layouting des Userinterfaces wurde ebenso auf eine Konvention gesetzt. Hier wurde auf das *Atomic Design* Konzept zurückgegriffen. Dabei wird die Oberfläche gedanklich in verschieden "Komponenten" aufgeteilt, welche jeweils einen speziellen Aufgabenbereich sowie Kontext abdecken. Für die Aufteilung kommen die drei Grundstrukturen der Chemie: Atome, Moleküle, sowie Organismen zum tragen. Eine ausführliche Beschreibung ist im Ebook von Brad Frost zu finden.

[Atomic Design - Brad Frost](http://bradfrost.com/blog/post/atomic-web-design/)