---
title: Relazione del progetto d'esame di Editoria Digitale
author: Davide Masserdotti 45958A
date: a.a. 2024/2025
institute: Università degli Studi di Milano
course: Editoria Digitale
tags: tag1, tag2, tag3
version: 0.1
kind: Document
bibliography: bibliografia.bib
csl: IEEE.csl
---

![Logo UNIMI](./logo/minerva.jpg){width=100px height=100px}

# Supportiamoci! Un WebBook per promuovere la sostenibilità ambientale

[Link al WebBook](https://davide-2.gitbook.io/supportiamoci)

[Link alla repository del progetto](https://github.com/DavideMasserdotti/Supportiamoci)

[Link alla pagina instragram per pubblicizzare il WebBook](https://www.instagram.com/supportiamoci2030/)

## Introduzione
Questo progetto nasce dalla volontà di un ente no profit di creare un prodotto editoriale di facile lettura, pensato per un pubblico giovane (18-25 anni) e distribuito tramite social network. L'obiettivo è affrontare temi legati alla sostenibilità ambientale e al cambiamento climatico, offrendo al lettore 12 step pratici per migliorare le proprie abitudini quotidiane.

L'ente richiede che il prodotto sia facilmente modificabile, in modo da integrare nuove scoperte o iniziative, e che sia semplice da distribuire attraverso le piattaforme social. Per raggiungere questo scopo sono state adottate diverse tecnologie. Lo spazio di lavoro è una directory locale collegata a un repository GitHub per gestire il versioning permettendo una facile modificabilità e aggiornabilità. I documenti iniziali sono redatti in Markdown, un formato consolidato, facile da usare e compatibile con molteplici tecnologie. Per il prodotto finale è stato scelto GitBook, una piattaforma che genera un WebBook direttamente dai file Markdown presenti nel repository GitHub. Lo stile del WebBook è stato personalizzato tramite il pannello di controllo di GitBook, che consente di gestire colori, font, layout e altri aspetti grafici.

Per l'acquisizione dei contenuti sono state utilizzate intelligenze artificiali: GPT-4 per i testi e DALL-E 3 per le immagini, con integrazioni manuali ove necessario. Il risultato finale risponde pienamente alle richieste dell'ente grazie alla sua facile modifica, espandibilità e distribuzione sui social network. Per simulare un caso d'uso realistico è stata creata una pagina Instagram dedicata alla promozione del prodotto.

## Ideazione

### Tema
Il tema richiesto dall'ente riguarda il cambiamento climatico e la sostenibilità ambientale.

Il cambiamento climatico rappresenta una delle sfide più grandi per il nostro pianeta. Negli ultimi anni, le temperature globali sono aumentate, gli ecosistemi sono a rischio e gli eventi climatici estremi come uragani, incendi e inondazioni sono diventati sempre più frequenti. 

Non è necessario attendere azioni da governi o grandi aziende per contribuire al cambiamento. Anche il lettore, ogni giorno, può fare la differenza. Il WebBook propone una guida pratica e accessibile, composta da 12 step, per aiutare i lettori a vivere in modo più sostenibile.

### Destinatari
I seguenti destinatari sono stati creati adottando la tecnica delle personas:

1. **Giulia, 22 anni, studentessa universitaria**
   - **Background**: Frequenta il terzo anno di Scienze Ambientali. È appassionata di ecologia e partecipa spesso a manifestazioni per il clima.
   - **Obiettivi**: Migliorare il suo stile di vita sostenibile e influenzare positivamente amici e follower sui social.
   - **Bisogni**: Informazioni chiare, pratiche e facilmente condivisibili.
   - **Scenario d'uso**: Scopre il WebBook tramite un post su Instagram e lo utilizza per integrare nuove abitudini sostenibili nella sua quotidianità. Condivide il link con i compagni di corso.

2. **Marco, 25 anni, giovane lavoratore**
   - **Background**: Lavora in una startup tecnologica e trascorre molto tempo sui social media. È interessato a temi ambientali, ma ha poco tempo per approfondirli.
   - **Obiettivi**: Trovare soluzioni rapide e pratiche per ridurre il proprio impatto ambientale.
   - **Bisogni**: Contenuti sintetici e visivamente accattivanti.
   - **Scenario d'uso**: Vede un post sponsorizzato sul WebBook durante una pausa pranzo. Applica alcuni suggerimenti e condivide il link con i colleghi su WhatsApp.

3. **Sara, 19 anni, influencer emergente**
   - **Background**: Gestisce un profilo Instagram dedicato alla moda sostenibile. Cerca sempre nuovi argomenti per coinvolgere i follower.
   - **Obiettivi**: Creare contenuti di valore che aumentino l'engagement del pubblico.
   - **Bisogni**: Materiale interessante e visivamente accattivante per post e storie.
   - **Scenario d'uso**: Usa il WebBook come ispirazione per un post sul cambiamento climatico. Promuove il link nelle sue storie e riceve feedback positivo dai follower.

4. **Luca, 23 anni, gamer appassionato**
   - **Background**: Appassionato di tecnologia e giochi online. Non è particolarmente attento ai temi ambientali, ma è curioso e aperto a nuove idee.
   - **Obiettivi**: Scoprire modi semplici per contribuire alla sostenibilità senza cambiare radicalmente il proprio stile di vita.
   - **Bisogni**: Contenuti divertenti e immediati.
   - **Scenario d'uso**: Clicca su un link al WebBook condiviso da un amico su Discord. Applica uno degli step suggeriti e condivide il link con la sua community.

5. **Elena, 24 anni, giovane insegnante**
   - **Background**: Ha recentemente iniziato a insegnare scienze in una scuola superiore. È appassionata di educazione ambientale e cerca risorse per coinvolgere studenti adolescenti.
   - **Obiettivi**: Integrare attività educative sui temi ambientali nel suo programma scolastico e trovare idee semplici per ispirare i suoi studenti.
   - **Bisogni**: Materiale educativo pratico e adattabile alle esigenze di giovani tra i 14 e i 18 anni.
   - **Scenario d'uso**: Scopre il WebBook durante una ricerca online e lo utilizza per organizzare una lezione sulla sostenibilità. Condivide il link con gli studenti e incoraggia la discussione sui temi trattati.

### Modello di fruizione
L'ente richiede un prodotto editoriale digitale distribuito tramite social. Poiché i social network favoriscono contenuti immediati come foto e video, è stato scelto di creare un WebBook, un prodotto digitale consultabile tramite browser e facilmente condivisibile attraverso un link. 

Questa soluzione garantisce fruibilità su una vasta gamma di dispositivi e offre una maggiore adattabilità rispetto a formati come PDF o ePub, che possono richiedere software aggiuntivi o non adattarsi perfettamente ai dispositivi mobili. 

Il WebBook funge da ponte tra il mondo social, spesso troppo rapido per approfondire i contenuti, e il mondo editoriale tradizionale, meno accessibile ai giovani. La scelta di tecnologie innovative come GPT-4 e DALL-E 3 ha reso la creazione di contenuti rapida e di alta qualità. Per mostrare un esempio concreto, è stata creata una pagina Instagram dedicata alla promozione del WebBook.

### Canali di distribuzione
I canali di distribuzione scelti sono i social media. I formati selezionati sono:

- **WebBook tramite GitBook**: Un prodotto web generato da file Markdown presenti su un repository GitHub, fruibile tramite browser.
- **Post su Instagram**: Immagini visivamente accattivanti per promuovere il prodotto e reindirizzare gli utenti al WebBook tramite un link.

L'identità visiva è stata curata utilizzando DALL-E per generare immagini e loghi coerenti con il tema della sostenibilità. Lo stile grafico, tipografico e di layout è stato definito tramite la dashboard di GitBook, privilegiando tonalità di verde per richiamare il tema ambientale.

In questo settore non esistono classi di documento standard de iure, ma de facto, poiché i social sono fortemente legati a Internet e al mondo Web, l'uso di tecnologie di questo tipo facilita la fruizione e la distribuzione dei contenuti.

Creare prodotti innovativi è essenziale per distinguersi dalla massa, ma nel caso dei social network, la velocità di fruizione è fondamentale. Sarebbe sconsigliato utilizzare tecnologie che richiedano applicazioni di terze parti per accedere ai contenuti o che non siano completamente compatibili con i dispositivi mobili. Il lettore di riferimento, in questo caso, è fugace: è necessario un prodotto che possa essere facilmente consumato tramite le tecnologie che il pubblico è abituato a usare nella vita quotidiana.

Proprio per questo motivo, e considerando il target di riferimento, ovvero ragazzi dai 18 ai 25 anni, il prodotto sarà informale. La stesura del contenuto si adatterà alle caratteristiche di questo pubblico, risultando giovane ma comunque professionale e utile.

## Processo di Produzione

### Acquisizione dei contenuti
L'acquisizione dei contenuti è avvenuta attraverso un approccio misto. 

La fase iniziale di generazione del testo è stata realizzata tramite intelligenza artificiale utilizzando **ChatGPT basato sul modello GPT-4**. Questo modello di linguaggio avanzato, sviluppato da OpenAI, è stato progettato per comprendere e produrre testo in modo coerente e pertinente. Successivamente, è stata effettuata una fase di revisione manuale del contenuto per garantire una qualità elevata, integrare eventuali informazioni mancanti e verificare l'accuratezza delle fonti utilizzate. Qualora le fonti originali si fossero rivelate insufficienti, ne sono state selezionate ulteriori per completare il processo di acquisizione dei contenuti in maniera rigorosa.

Per quanto riguarda gli elementi visivi, tutte le immagini incluse sono state generate tramite **intelligenza artificiale utilizzando il modello DALL-E 3**, anch’esso sviluppato da OpenAI. Questo modello è stato scelto per la sua capacità di creare immagini realistiche o stilizzate basandosi su descrizioni testuali dettagliate. La progettazione delle immagini ha tenuto conto sia del tipo di prodotto digitale che dello stile grafico di riferimento, assicurando coerenza e attrattiva visiva.

Infine, per arricchire ulteriormente l’esperienza dell’utente, è stato incluso un video introduttivo di YouTube realizzato da **National Geographic**, il quale introduce i temi principali trattati nel webbook. Questo elemento multimediale aggiunge profondità e contesto ai contenuti proposti, migliorando l'interattività del prodotto digitale.

Spiegazione dei modelli adottati:

1. **GPT-4**: Si tratta di un modello di linguaggio di ultima generazione sviluppato da OpenAI, noto per la sua capacità di comprendere il contesto e produrre risposte dettagliate e accurate. È particolarmente adatto per la generazione di testi complessi, supportando attività come la scrittura creativa, la revisione e l’elaborazione di contenuti tecnici.

2. **DALL-E 3**: È un modello di generazione di immagini basato sull’intelligenza artificiale, che utilizza descrizioni testuali per creare immagini di alta qualità. Rispetto ai suoi predecessori, DALL-E 3 offre una maggiore precisione nella rappresentazione visiva e una comprensione più avanzata delle istruzioni fornite, rendendolo uno strumento ideale per progetti digitali in cui è richiesta coerenza grafica e creatività.

Questo approccio combinato ha permesso di realizzare un prodotto digitale innovativo, integrando contenuti testuali e visivi di alta qualità per offrire agli utenti un’esperienza completa e immersiva.

### Gestione documentale
Il flusso di gestione documentale si compone delle seguenti fasi:

1. Ideazione.
2. Acquisizione dei contenuti, sia tramite intelligenza artificiale sia manualmente.
3. Revisione dei contenuti.
4. Creazione file markdown con relativi metadati YAML.
5. Salvataggio su GitHub dei contenuti.
6. Collegamento repository GitHub con GitBook.
7. Applicazione dello stile grafico tramite la dashboard di GitBook.
8. Creazione WebBook con relativo link per essere distribuito.
9. Distribuzione dei contenuti sui social networks tramite il link.

```mermaid
graph TD
    A[Inizio] --> B[Ideazione]
    B --> C[Acquisizione dei contenuti]
    D{Contenuti validi?}

    D -->|Sì| E[Salvataggio .md nella directory locale, successivamente Commit e Push su GitHub]
    D -->|No| C

    E --> G[Revisione e Redazione]
    
    H{Redazione completata?}
    H -->|Sì| I[Sono state apportate modifiche?]
     I --> |Sì| M[Salvataggio .md e Push su GitHub] --> J
     I --> |No| J
    H -->|No| G
    
    J[Progettazione grafica su GitBook]
       
    K[Produzione su GitBook e generazione WebBook accessibile tramite link]
    K --> L[Distribuzione sui Social Network tramite il link]
    M[Salvataggio .md nella directory locale, successivamente Commit e Push su GitHub]

    %% Sottofasi di "Acquisizione dei contenuti"
    subgraph Acquisizione automatica
        direction TB
        C1[Generazione testi con GPT-4]
        C2[Generazione immagini con DALL-E 3]
        C3[Controllo dei contenuti generati]
    end
    subgraph Acquisizione manuale
        direction TB
        F1[Stesura e ricerca manuale dei contenuti]
        F2[Controllo dei contenuti trovati manualmente]
    end
    C --> C1
    C1 --> C2
    C2 --> C3
    C3 --> D 

    C --> F1
    F1 --> F2
    F2 --> D

    %% Sottofasi di "Revisione e Redazione"
    subgraph Revisione e Redazione
        direction TB
        G1[Revisione dei testi]
        G2[Correzione degli errori]
        G3[Integrazione nuove informazioni]
        G4[Inserimento metadati nel file .md]
    end
    G --> G1
    G1 --> G2
    G2 --> G3
    G3 --> G4
    G4 --> H 
    
    %% Sottofasi di "Progettazione grafica su GitBook"
    subgraph Progettazione grafica
        direction TB
        J1[Ricerca stile congruo agli argomenti trattati]
        J2[Definizione layout e design su GitBook]
    end
    J --> J1
    J1 --> J2
    J2 --> K
```

### Tecnologie adottate

Le tecnologie utilizzate sono state selezionate per garantire l'efficacia e la qualità delle diverse fasi del progetto, offrendo strumenti adeguati sia per la creazione dei contenuti che per la loro gestione e distribuzione. Ecco una panoramica delle tecnologie principali e del loro contributo:

| Tecnologia  | Contributo principale |
|-------------|------------------------|
| **Markdown** | **Strutturazione dei testi.** Markdown è stato scelto per la sua semplicità e potenza, permettendo di strutturare i contenuti in modo leggibile e facilmente convertibile in altri formati. La sua portabilità su diversi sistemi e piattaforme lo rende ideale per progetti collaborativi e multipiattaforma. |
| **YAML**    | **Gestione dei metadati.** YAML è stato utilizzato per definire i metadati all'interno dei file Markdown, fornendo informazioni strutturate come il titolo del documento, l'autore, la data di creazione e altre proprietà utili. Questo approccio ha facilitato l'organizzazione dei contenuti, garantendo coerenza tra i diversi file. |
| **GitHub**  | **Gestione del repository e del versioning.** GitHub è stato utilizzato come piattaforma per il controllo della versione del progetto e per facilitare la collaborazione tra i membri del team. Grazie alle sue funzionalità avanzate, come i pull request e la gestione delle issue, è possibile garantire un workflow efficiente e ben organizzato. |
| **GitBook** | **Generazione del WebBook.** GitBook è uno strumento potente e intuitivo per creare libri digitali. Collegando il repository Markdown di GitHub al progetto su GitBook, è stato possibile automatizzare la generazione e l'aggiornamento dei contenuti, assicurando una pubblicazione fluida e professionale. |
| **GPT-4**   | **Creazione dei contenuti.** Il modello di intelligenza artificiale GPT-4 di OpenAI è stato impiegato per generare testi di alta qualità, coerenti e pertinenti. La sua capacità di comprendere il contesto e produrre risposte dettagliate è stata fondamentale nella fase di scrittura e revisione. |
| **DALL-E 3** | **Creazione delle immagini.** DALL-E 3, modello di generazione visiva di OpenAI, è stato utilizzato per creare immagini personalizzate e in linea con lo stile grafico richiesto. Grazie alla sua capacità di tradurre descrizioni testuali in immagini di alta qualità, ha contribuito a rendere il prodotto finale più accattivante e visivamente coerente. |
| **YouTube** | **Integrazione video.** La piattaforma è stata utilizzata per includere un video introduttivo realizzato da National Geographic, aggiungendo un elemento multimediale di alta qualità e contestuale ai temi trattati nel webbook. |
| **Instagram** | **Promozione del WebBook.** È stato creato un profilo Instagram ad hoc per promuovere il WebBook. Tramite post accattivanti e storie mirate, è possibile raggiungere un pubblico più ampio, incentivando la condivisione e l'engagement. |

L'integrazione di queste tecnologie ha consentito di gestire in maniera ottimale tutte le fasi del progetto, dalla creazione dei contenuti testuali e visivi alla loro distribuzione. YAML si è rivelato particolarmente utile per gestire in modo strutturato le informazioni dei file Markdown, migliorando l'efficienza nella gestione dei contenuti. Questo approccio combinato ha garantito un elevato livello di qualità e un workflow fluido, valorizzando ogni fase del processo di produzione e offrendo agli utenti un prodotto digitale ben progettato e ricco di contenuti.

### Esecuzione del flusso
Tutti i materiali, script e configurazioni necessari per riprodurre il flusso di produzione documentale sono disponibili nel repository GitHub associato al progetto disponibile a questo [link](https://github.com/DavideMasserdotti/Supportiamoci).

## Valutazione dei risultati raggiunti

### Valutazione del flusso di produzione

Il flusso proposto ha permesso di ottenere i seguenti risultati:

1. **Riduzione dei tempi di gestione documentale**: L'utilizzo delle tecnologie proposte consente di gestire il prodotto in tempi molto più brevi. L'adozione di tecnologie comuni, come i file markdown e sistemi di gestione come GitHub, semplifica notevolmente numerose fasi del processo di gestione.

2. **Minimizzazione degli errori**: L'intelligenza artificiale è stata utilizzata per garantire che il prodotto fosse corretto sia nella forma che nella fluidità del testo. Inoltre, per quanto riguarda il contenuto, l'AI ha permesso di raccogliere informazioni da molteplici fonti, dando un'ampia visione delle tematiche trattate. Prima della pubblicazione, tuttavia, è stato svolto un controllo manuale delle fonti per garantirne l'affidabilità.

3. **Miglioramento della qualità complessiva dei documenti**: Modelli avanzati come GPT-4 e DALL-E 3 hanno facilitato la creazione di documenti professionali, perfetti per la distribuzione di prodotti editoriali digitali. Questo ha contribuito a migliorare la qualità e la coerenza dei contenuti.

4. **Favorire l'accettazione della tecnologia da parte degli utenti**: L'utilizzo di tecnologie consolidate nel mercato odierno ha sicuramente facilitato l'accettazione del prodotto. Il prodotto è facile da fruire, non richiede software o hardware specifici e segue le convenzioni digitali familiari ai giovani di oggi.

5. **Raggiungimento di nuovi canali di distribuzione**: L'adozione di un semplice link per la distribuzione ha reso il prodotto facilmente condivisibile ovunque, aprendo la strada a numerosi canali di distribuzione, non solo sui social. È sufficiente avere una connessione a Internet e un browser per accedere al prodotto. Il web, infatti, rimane ad oggi la piattaforma più accessibile e diffusa nel campo dell'editoria digitale. Il prodotto sviluppato consente all'ente di raggiungere il suo obiettivo principale: sensibilizzare il maggior numero possibile di persone.

6. **Soddisfacimento di nuovi scenari d'uso**: In futuro, l'ente potrà sfruttare le tecnologie proposte per proporre altri prodotti editoriali digitali. L'utilizzo di GitBook consente di creare facilmente e velocemente nuovi contenuti, integrandoli con immagini e video. Le tecnologie adottate non sono limitate a questo specifico caso d'uso, ma permettono di avere un potente sistema di produzione editoriale digitale, adattabile a qualsiasi tipo di contenuto.

### Confronto con lo stato dell'arte

Le tecnologie proposte mirano a risolvere i problemi dell'ente, che necessita di un prodotto facile da aggiornare aggiungendo nuovi contenuti. Grazie alla capacità di **GitBook** di integrarsi con un repository GitHub, è possibile sfruttare numerosi vantaggi, tra cui la gestione avanzata del versioning e il supporto per il lavoro collaborativo. Il personale dell'ente può quindi disporre di un sistema avanzato per collaborare a un progetto in continua evoluzione, identificando e risolvendo eventuali problematiche in modo tempestivo.

L'uso di **WebBook** consente inoltre di avere un prodotto sempre accessibile, eliminando la necessità di ridistribuirlo. Quando vengono apportate modifiche, è sufficiente effettuare un commit e un push sul repository GitHub per aggiornare il WebBook: in pochi secondi, le modifiche saranno disponibili online.

Se queste tecnologie non fossero adottate, l'ente si troverebbe di fronte a numerose problematiche. Ad esempio, se il prodotto finale fosse un file **PDF**:

- Sarebbe comunque necessario utilizzare un sistema come GitHub per consentire il lavoro collaborativo; in alternativa, la produzione documentale risulterebbe altamente disorganizzata.
- Ogni modifica richiederebbe di ricondividere il file aggiornato. In un prodotto digitale che subisce frequenti aggiornamenti, questa modalità sarebbe impraticabile. Al contrario, con il WebBook, il link di accesso rimane invariato, rendendo il processo di aggiornamento semplice ed efficace.
- Il WebBook utilizza tecnologie web per il funzionamento il che lo rende compatibile con la totalità dei disositivi che utilizzando un browser. Un file pdf non avrebbe le stesse capacità di adattamento a dispositivi eterogenei tra loro.

L'adozione dell'intelligenza artificiale per la creazione di testi e immagini ha rappresentato un'importante innovazione per la gestione dei contenuti e la ricerca delle fonti. Grazie a questa tecnologia, una delle più avanzate degli ultimi anni, è stato possibile creare contenuti all'avanguardia in modo semplice e veloce. 

L'intelligenza artificiale consente infatti di integrare rapidamente molteplici informazioni provenienti da diverse fonti, rendendo il processo di produzione contenutistica più efficiente e versatile. Questo approccio non solo facilita il lavoro, ma garantisce anche un risultato di alta qualità, capace di rispondere alle esigenze di un mondo digitale in continua evoluzione.

### Limiti emersi

I social richiedono formati audio-visivi per comunicare, rendendo la distribuzione di un prodotto editoriale digitale più complessa. Spesso, molti social non permettono nemmeno di scaricare file all'interno dei post, costringendo l'ente a utilizzare software esterni. 

La scelta di adottare un **WebBook** mira proprio a risolvere questi limiti imposti dal contesto di riferimento. Tuttavia, è importante notare che l'utilizzo di **GitBook** non restituisce un prodotto perfetto. 

Senza una connessione di rete, infatti, sarebbe impossibile accedere al prodotto. Tuttavia, considerando che i social stessi richiedono una connettività costante, questo limite risulta trascurabile. 

Un altro limite di GitBook deriva dal suo principale pregio: la semplicità e la velocità d'uso. Ad esempio, la possibilità di creare grafiche personalizzate è piuttosto limitata. È possibile scegliere font, colori e layout, ma tecnologie più avanzate permetterebbero di ottenere un prodotto più distinguibile, sacrificando però la semplicità d'uso. 

Dato che l'ente desidera un contenuto facilmente aggiornabile per includere nuove scoperte o iniziative, si è preferito dare priorità a questa necessità, proponendo comunque un prodotto moderno e al passo coi tempi sia in termini di fruizione che di grafica.

## Conclusioni

In conclusione, tutti i requisiti richiesti dall'ente per questo prodotto sono stati raggiunti. Di seguito, vengono analizzati uno per uno:

- **Sensibilizzare un pubblico giovane (18-25 anni)**: l'utilizzo di social network come Instagram per la distribuzione e la pubblicizzazione del prodotto permette di raggiungere efficacemente questa fascia di età. Grazie alla familiarità dei giovani con questi strumenti, il messaggio può essere trasmesso in modo diretto e coinvolgente.

- **Temi del cambiamento climatico e dell'impatto ambientale delle loro scelte quotidiane**: grazie all'utilizzo dell'intelligenza artificiale, è stato possibile recuperare informazioni scientifiche chiare e accurate, permettendo all'utente di verificare anche le fonti proposte dall'AI. La creazione di una guida in 12 step per vivere in maniera più sostenibile fornisce esempi pratici di comportamenti eco-friendly, utili per sensibilizzare e educare il pubblico.

- **Design accattivante e possibilmente innovativo**: GitBook permette di creare un prodotto con un design moderno, consentendo di raggiungere uno stile grafico personalizzato attraverso la modifica di colori, font e layout. Tuttavia, alcune configurazioni avanzate sono limitate dalla piattaforma.

- **Distribuzione attraverso piattaforme social**: l'utilizzo di un link per distribuire il prodotto lo rende compatibile con tutti i social network, consentendo all'ente di diffondere il prodotto una sola volta. Inoltre, sarà possibile aggiornare il contenuto senza dover ridistribuire il prodotto, garantendo che le modifiche siano visibili immediatamente.

- **Prodotto facilmente aggiornabile per includere nuove scoperte o iniziative**: l'integrazione di GitBook con un repository GitHub offre al personale gli strumenti necessari per semplificare la gestione del versioning, modificare rapidamente e aggiungere nuovi contenuti. Questo permette di mantenere il prodotto sempre al passo con i tempi e facilmente adattabile a nuove informazioni o cambiamenti.

## Bibliografia e sitografia
Di seguito tutte le fonti usate nella progettazione del prodotto editoriale digitale:

1. **IPCC, 2023**: "Rapporto sul cambiamento climatico 2023"  
   - [https://www.ipcc.ch](https://www.ipcc.ch)

2. **Global Carbon Project, 2022**: "Global Carbon Budget 2022"  
   - [https://www.globalcarbonproject.org](https://www.globalcarbonproject.org)

3. **NASA Sea Level Change Portal**: "Sea Level Rise and Coastal Impacts"  
   - [https://sealevel.nasa.gov](https://sealevel.nasa.gov)

4. **IPBES, 2019**: "Global Assessment Report on Biodiversity and Ecosystem Services"  
   - [https://ipbes.net](https://ipbes.net)

5. **Ellen MacArthur Foundation**: "Towards a Circular Economy"  
   - [https://ellenmacarthurfoundation.org](https://ellenmacarthurfoundation.org)

6. **Greenpeace**: "Plastica nei mari e soluzioni sostenibili"  
   - [https://www.greenpeace.org](https://www.greenpeace.org)

7. **Agenzia Internazionale dell’Energia (IEA)**: "Efficienza energetica e impatto ambientale"  
   - [https://www.iea.org](https://www.iea.org)

8. **Earth Day Organization**: "Educazione e sensibilizzazione ambientale"  
   - [https://www.earthday.org](https://www.earthday.org)

9. **FAO**: "Il consumo di carne e l'impatto sulla deforestazione"  
   - [https://www.fao.org](https://www.fao.org)

10. **Global Forest Watch**: "Deforestazione e riforestazione a livello globale"  
    - [https://www.globalforestwatch.org](https://www.globalforestwatch.org)

11. **WWF**: "Consumo d'acqua e conservazione"  
    - [https://www.wwf.org](https://www.wwf.org)

12. **UNEP (United Nations Environment Programme)**: "Emission Gap Report 2022"  
    - [https://www.unep.org](https://www.unep.org)

13. **World Resources Institute (WRI)**: "Climate Watch: Dati sulle emissioni globali"  
    - [https://www.wri.org](https://www.wri.org)

14. **Project Drawdown**: "Soluzioni per invertire il cambiamento climatico"  
    - [https://www.drawdown.org](https://www.drawdown.org)

15. **Energy Saving Trust**: "Consigli per il risparmio energetico"  
    - [https://energysavingtrust.org.uk](https://energysavingtrust.org.uk)

16. **The Ocean Cleanup**: "Pulizia degli oceani dalla plastica"  
    - [https://theoceancleanup.com](https://theoceancleanup.com)

17. **ICLEI (Local Governments for Sustainability)**: "Sviluppo urbano sostenibile"  
    - [https://iclei.org](https://iclei.org)

18. **Carbon Brief**: "Analisi approfondita sui dati climatici"  
    - [https://www.carbonbrief.org](https://www.carbonbrief.org)

19. **European Environment Agency (EEA)**: "Indicatori ambientali e rapporti"  
    - [https://www.eea.europa.eu](https://www.eea.europa.eu)

20. **The Nature Conservancy**: "Protezione degli ecosistemi e delle risorse naturali"  
    - [https://www.nature.org](https://www.nature.org)

21. **UNESCO**: "Educazione per lo sviluppo sostenibile"  
    - [https://www.unesco.org](https://www.unesco.org)

22. **Climate Action Tracker**: "Monitoraggio delle politiche climatiche globali"  
    - [https://climateactiontracker.org](https://climateactiontracker.org)

23. **CDP (Carbon Disclosure Project)**: "Trasparenza aziendale sulle emissioni di carbonio"  
    - [https://www.cdp.net](https://www.cdp.net)

24. **Global Carbon Atlas**: "Carbono e cambiamento climatico globale"  
    - [https://www.globalcarbonatlas.org](https://www.globalcarbonatlas.org)

25. **Smithsonian Magazine**: "Inquinamento e biodiversità in pericolo"  
    - [https://www.smithsonianmag.com](https://www.smithsonianmag.com)

26. **National Geographic**: "Le cause e gli effetti del cambiamento climatico"  
    - [https://www.nationalgeographic.com](https://www.nationalgeographic.com)

27. **IPCC, 2018**: "Special Report: Global Warming of 1.5°C"  
    - [https://www.ipcc.ch/sr15/](https://www.ipcc.ch/sr15/)

28. **National Geographic**: "Causes and Effects of Climate Change | National Geographic"
    - [https://www.youtube.com/watch?v=G4H1N_yXBiA&ab_channel=NationalGeographic](https://www.youtube.com/watch?v=G4H1N_yXBiA&ab_channel=NationalGeographic)

