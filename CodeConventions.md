# Code Konventionen

Das Projekt Großmarkt wurde im klassischen Client/Server Konzept implementiert. Auf seitens des Servers wurde auf das Java Webframework *Spring* gesetzt. Für die Clientimplementierung wurde die JavaScript-Library React verwendet.

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
  - Attribute: *Alle nicht statische Attribute müssen private sein*

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


**JS-Linter**


**Atomic Design**