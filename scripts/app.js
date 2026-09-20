        // Language support with query param override (?lang=de|fr|it|en)
        const supportedLanguages = ['de', 'fr', 'it', 'en'];
        const translations = {
            de: {
                ui: {
                    title: "Friendly Spaces",
                    sidebarTitle: "Einen Friendly Space finden",
                    searchPlaceholder: "Nach Name, Stadt oder Adresse suchen...",
                    languageLabel: "Sprache",
                    menuClose: "Schliessen",
                    menuSuggest: "Ort vorschlagen",
                    menuShare: "App teilen",
                    menuAbout: "Über uns",
                    menuHelp: "App nutzen",
                    menuLanguage: "Sprache",
                    menuBug: "Fehler melden / Feedback geben",
                    menuPrivacy: "Datenschutz",
                    suggestTitle: "Ort vorschlagen",
                    suggestTagline: "Kennst du Orte, die gut zu Friendly Spaces passen würden?",
                    suggestRoleOwner: "Ich arbeite in einem Friendly Space",
                    suggestRoleFan: "Ich kann einen Friendly Space empfehlen",
                    suggestMessageLabel: "Nachricht (optional)",
                    suggestVenueNameLabel: "Name des Geschäfts",
                    suggestVenueCityLabel: "Stadt",
                    suggestWhyLabel: "Warum familienfreundlich? (optional)",
                    suggestOwnerNameLabel: "Name",
                    suggestOwnerEmailLabel: "E-Mail",
                    suggestOwnerPhoneLabel: "Telefon (optional)",
                    suggestSubmit: "Vorschlag senden",
                    fanEmailLabel: "E-Mail (optional)",
                    newsletterLabel: "Newsletter abonnieren",
                    aboutBody: "Friendly Spaces ist das erste familienfreundliche Zertifikationslabel der Schweiz und hilft Eltern, die besten Cafés, Restaurants, Geschäfte und Kulturorte für Familien mit kleinen Kindern zu finden. Durch unsere strengen Vor-Ort-Audits stellen wir sicher, dass jeder zertifizierte Ort Kinder wirklich willkommen heisst und auf ihre Bedürfnisse eingeht.",
                    keepInTouchTitle: "In Kontakt bleiben",
                    partnerTitle: "Partner werden",
                    partnerBody: "Unterstützen Sie die wachsende familienfreundliche Bewegung in der Schweiz. Friendly Spaces bietet Sponsoring- und Werbemöglichkeiten für Marken und Organisationen, die unsere Mission teilen, Schweizer Städte familienfreundlicher zu machen. Erreichen Sie engagierte Eltern in der ganzen Schweiz.",
                    formSending: "Wird gesendet...",
                    suggestSubmitSuccess: "Danke! Vorschlag gesendet.",
                    suggestSubmitError: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
                    bugSubmitSuccess: "Danke! Fehlerbericht gesendet.",
                    bugSubmitError: "Etwas ist schiefgelaufen. Bitte erneut versuchen.",
                    bugTitle: "Fehler melden / Feedback geben",
                    bugMessageLabel: "Nachricht",
                    bugSubmit: "Senden",
                    partnerCta: "Partnerschaft anfragen",
                    partnerSubject: "Partnerschaftsanfrage",
                    introTitle: "Was ist Friendly Spaces?",
                    introText: "Entdecke zertifizierte familienfreundliche Cafés, Restaurants, Geschäfte und Kulturorte in der ganzen Schweiz. Jeder Ort wird auf Spielbereiche, Wickelmöglichkeiten, Kinderwagenzugang und eine einladende Atmosphäre geprüft.",
                    introMapTitle: "Orte entdecken",
                    introMapText: "Wechsle zwischen Kartenansicht, um Städte und Orte in deiner Nähe zu entdecken, und Listenansicht für einen schnellen Vergleich. Tippe auf einen Ort, um alle Details und Ausstattungen zu sehen.",
                    introSuggestTitle: "Finde deinen passenden Ort",
                    introSuggestText: "Nutze die Suchleiste, um Orte nach Stadt oder Namen zu finden. Verwende Filter für Kinderwagenzugang, Aussenplätze, Spielbereiche und mehr. Speichere Favoriten für schnellen Zugriff.",
                    introGrowTitle: "Hilf uns, Friendly Spaces zu erweitern",
                    introGrowText: "Kennst du einen tollen familienfreundlichen Ort? Öffne das Menü und tippe auf Ort vorschlagen, um einen neuen Ort zu empfehlen. Deine Vorschläge helfen anderen Familien, wunderbare Orte zu entdecken.",
                    introBack: "Zurück",
                    introNext: "Weiter",
                    introDone: "Fertig",
                    introSkip: "Nicht mehr anzeigen",
                    helpTitle: "So nutzt du Friendly Spaces",
                    helpTagline: "Kurze Tipps für die wichtigsten Funktionen.",
                    helpFindTitle: "Orte schnell finden",
                    helpFindStep1: "Nutze die Kartenansicht, um Pins in deiner Nähe zu sehen.",
                    helpFindStep2: "Wechsle zur Listenansicht, um Orte schneller zu vergleichen.",
                    helpFindStep3: "Verwende Suche und Filter, um Ergebnisse einzugrenzen.",
                    helpFavoritesTitle: "Favoriten speichern",
                    helpFavoritesStep1: "Tippe auf das Herz bei einem Ort, um ihn zu speichern.",
                    helpFavoritesStep2: "Öffne Favoriten, um gespeicherte Orte schnell zu finden.",
                    helpFavoritesStep3: "Tippe erneut auf das Herz, um den Favoriten zu entfernen.",
                    helpSuggestTitle: "Ort vorschlagen",
                    helpSuggestStep1: "Öffne das Menü und tippe auf Ort vorschlagen.",
                    helpSuggestStep2: "Fülle die Angaben aus und sende deinen Vorschlag.",
                    helpSuggestStep3: "Im Menü findest du auch Fehler melden / Feedback geben.",
                    showingLabel: "Zeige",
                    venuesLabel: "Orte",
                    filtersLabel: "Filter",
                    clearFilters: "Alle löschen",
                    showAllSpaces: "Alle Orte anzeigen",
                    showSpaces: "Zeige",
                    spacesLabel: "Orte",
                    allTab: "Alle",
                    favoritesTab: "Favoriten",
                    mapTab: "Karte",
                    listTab: "Liste",
                    noVenuesTitle: "Keine Orte gefunden",
                    noVenuesBody: "Versuche andere Filter oder eine neue Suche.",
                    noFavoritesTitle: "Noch keine Favoriten",
                    noFavoritesBody: "Tippe auf das Herz, um Orte zu speichern.",
                    nearMe: "In der Nähe",
                    locationBlockedTitle: "Standort aktivieren",
                    locationBlockedBodyNative: "Friendly Spaces braucht Standortzugriff fuer In der Naehe. Wenn kein weiterer Dialog erscheint, oeffne die Geraete-Einstellungen, erlaube den Standort fuer Friendly Spaces und versuche es erneut.",
                    locationBlockedBodyWeb: "Friendly Spaces braucht Standortzugriff fuer In der Naehe. Erlaube den Standort in deinen Browser- oder Website-Einstellungen und versuche es erneut.",
                    locationUnavailableTitle: "Standort nicht verfuegbar",
                    locationUnavailableBody: "Dein Standort konnte gerade nicht geladen werden. Pruefe GPS oder Verbindung und versuche es erneut.",
                    locationRetry: "Erneut versuchen",
                    locationDismiss: "OK",
                    favoriteAdd: "Merken",
                    favoriteRemove: "Gespeichert",
                    filtersActive: (count) => count === 1 ? "1 Filter aktiv" : `${count} Filter aktiv`,
                    filtersButton: (count) => count > 0 ? `Filter (${count})` : "Filter",
                    cityCount: (count) => count === 1 ? "1 Ort" : `${count} Orte`,
                },
                filters: {
                    categories: {
                        venueType: "Ortstyp",
                        cuisineType: "Küche",
                        ageRange: "Altersgruppe",
                        amenities: "Ausstattung"
                    },
                    options: {
                        venueType: {
                            cafe: "Café",
                            shop: "Laden",
                            restaurant: "Restaurant",
                            "craft-atelier": "Kreativ-Atelier",
                            "food-hall": "Food Hall"
                        },
                        cuisineType: {
                            vegan: "Vegan",
                            bistro: "Bistro",
                            patisserie: "Patisserie",
                            international: "International"
                        },
                        ageRange: {
                            baby: "Baby (0-1)",
                            toddler: "Kleinkind (2-3)",
                            "small-child": "Kind (4-6)",
                            kid: "Schulkind (7-12)"
                        },
                        amenities: {
                            playground: "Spielplatz",
                            "outdoor-seating": "Aussensitzplätze",
                            "play-area": "Spielbereich",
                            "friendly-spaces": "Playbox Friendly Spaces",
                            "high-chair": "Kinderstuhl",
                            "change-table": "Wickeltisch",
                            "games-room": "Spielzimmer",
                            "arts-crafts": "Kunst und Basteln"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Webseite besuchen",
                    hours: "Öffnungszeiten",
                    specialty: "Besonderheit",
                    directions: "Route planen",
                    viewProfile: "Profil anzeigen",
                    features: "Ausstattung",
                    navigate: "Navigation",
                    appleMaps: "Apple Maps",
                    googleMaps: "Google Maps",
                    call: "Anrufen",
                    website: "Webseite",
                    instagram: "Instagram",
                    note: "Hinweis"
                }
            },
            fr: {
                ui: {
                    title: "Friendly Spaces",
                    sidebarTitle: "Trouver un Friendly Space",
                    searchPlaceholder: "Rechercher par nom, ville ou adresse...",
                    languageLabel: "Langue",
                    menuClose: "Fermer",
                    menuSuggest: "Suggérer un espace",
                    menuShare: "Partager l'app",
                    menuAbout: "À propos",
                    menuHelp: "Utiliser l'app",
                    menuLanguage: "Langue",
                    menuBug: "Signaler un bug / Donner un avis",
                    menuPrivacy: "Politique de confidentialité",
                    suggestTitle: "Suggérer un espace",
                    suggestTagline: "Connais-tu des lieux qui seraient parfaits pour Friendly Spaces ?",
                    suggestRoleOwner: "Je travaille dans un Friendly Space",
                    suggestRoleFan: "Je peux recommander un Friendly Space",
                    suggestMessageLabel: "Message (facultatif)",
                    suggestVenueNameLabel: "Nom du lieu",
                    suggestVenueCityLabel: "Ville",
                    suggestWhyLabel: "Pourquoi c'est adapté ? (facultatif)",
                    suggestOwnerNameLabel: "Nom",
                    suggestOwnerEmailLabel: "E-mail",
                    suggestOwnerPhoneLabel: "Téléphone (facultatif)",
                    suggestSubmit: "Envoyer la suggestion",
                    fanEmailLabel: "E-mail (facultatif)",
                    newsletterLabel: "S’inscrire à la newsletter",
                    aboutBody: "Friendly Spaces est le premier label suisse de certification family-friendly. Nous aidons les parents à trouver les meilleurs cafés, restaurants, boutiques et espaces culturels pour les familles avec de jeunes enfants. Grâce à nos audits sur site rigoureux, nous veillons à ce que chaque lieu certifié accueille vraiment les familles et leurs tout-petits.",
                    keepInTouchTitle: "Restons en contact",
                    partnerTitle: "Devenir partenaire",
                    partnerBody: "Soutenez le mouvement family‑friendly en Suisse. Friendly Spaces propose des opportunités de sponsoring et de publicité aux marques et organisations qui partagent notre mission de rendre les villes suisses plus accueillantes pour les familles. Touchez des parents engagés dans toute la Suisse.",
                    formSending: "Envoi en cours...",
                    suggestSubmitSuccess: "Merci ! Suggestion envoyée.",
                    suggestSubmitError: "Une erreur est survenue. Réessayez.",
                    bugSubmitSuccess: "Merci ! Bug signalé.",
                    bugSubmitError: "Une erreur est survenue. Réessayez.",
                    bugTitle: "Signaler un bug / Donner un avis",
                    bugMessageLabel: "Message",
                    bugSubmit: "Envoyer",
                    partnerCta: "Demande de partenariat",
                    partnerSubject: "Demande de partenariat",
                    introTitle: "Qu’est-ce que Friendly Spaces ?",
                    introText: "Découvrez des cafés, restaurants, boutiques et lieux culturels certifiés family-friendly dans toute la Suisse. Chaque lieu est audité pour les espaces de jeu, les équipements de change, l’accès poussette et une ambiance accueillante.",
                    introMapTitle: "Explorez les lieux",
                    introMapText: "Basculez entre la vue Carte pour explorer les villes et découvrir des lieux près de vous, et la vue Liste pour comparer rapidement les lieux. Touchez un lieu pour voir tous les détails et équipements.",
                    introSuggestTitle: "Trouvez votre lieu idéal",
                    introSuggestText: "Utilisez la barre de recherche pour trouver des lieux par ville ou par nom. Appliquez des filtres selon vos besoins, comme l’accès poussette, les places extérieures, les espaces de jeu, et plus encore. Enregistrez vos favoris pour y accéder facilement.",
                    introGrowTitle: "Aidez-nous à faire grandir Friendly Spaces",
                    introGrowText: "Vous connaissez un excellent lieu familial ? Ouvrez le menu et touchez Suggérer un espace pour recommander un nouveau lieu. Vos suggestions aident d’autres familles à découvrir de super endroits.",
                    introBack: "Retour",
                    introNext: "Suivant",
                    introDone: "Terminer",
                    introSkip: "Ne plus afficher",
                    helpTitle: "Comment utiliser Friendly Spaces",
                    helpTagline: "Conseils rapides pour bien utiliser l'app.",
                    helpFindTitle: "Trouver des lieux rapidement",
                    helpFindStep1: "Utilisez la vue Carte pour explorer les épingles autour de vous.",
                    helpFindStep2: "Passez à la vue Liste pour comparer les lieux plus vite.",
                    helpFindStep3: "Utilisez Recherche et Filtres pour affiner les résultats.",
                    helpFavoritesTitle: "Enregistrer des favoris",
                    helpFavoritesStep1: "Touchez le cœur sur un lieu pour l'enregistrer.",
                    helpFavoritesStep2: "Ouvrez Favoris pour retrouver vos lieux enregistrés.",
                    helpFavoritesStep3: "Touchez à nouveau le cœur pour retirer un favori.",
                    helpSuggestTitle: "Suggérer un lieu",
                    helpSuggestStep1: "Ouvrez le menu puis touchez Suggérer un espace.",
                    helpSuggestStep2: "Remplissez les informations et envoyez votre suggestion.",
                    helpSuggestStep3: "Vous pouvez aussi utiliser Signaler un bug / Donner un avis.",
                    showingLabel: "Afficher",
                    venuesLabel: "lieux",
                    filtersLabel: "Filtres",
                    clearFilters: "Tout effacer",
                    showAllSpaces: "Afficher tous les lieux",
                    showSpaces: "Afficher",
                    spacesLabel: "lieux",
                    allTab: "Tous",
                    favoritesTab: "Favoris",
                    mapTab: "Carte",
                    listTab: "Liste",
                    noVenuesTitle: "Aucun lieu trouvé",
                    noVenuesBody: "Essayez d'autres filtres ou une nouvelle recherche.",
                    noFavoritesTitle: "Pas encore de favoris",
                    noFavoritesBody: "Touchez le cœur pour enregistrer.",
                    nearMe: "A proximité",
                    locationBlockedTitle: "Activer la localisation",
                    locationBlockedBodyNative: "Friendly Spaces a besoin de la localisation pour A proximite. Si aucune autre demande n'apparait, ouvre les reglages de ton appareil, autorise la localisation pour Friendly Spaces puis reessaie.",
                    locationBlockedBodyWeb: "Friendly Spaces a besoin de la localisation pour A proximite. Autorise la localisation dans les reglages du navigateur ou du site puis reessaie.",
                    locationUnavailableTitle: "Localisation indisponible",
                    locationUnavailableBody: "Nous n'avons pas pu recuperer ta position pour le moment. Verifie le GPS ou la connexion puis reessaie.",
                    locationRetry: "Reessayer",
                    locationDismiss: "OK",
                    favoriteAdd: "Enregistrer",
                    favoriteRemove: "Enregistré",
                    filtersActive: (count) => count === 1 ? "1 filtre actif" : `${count} filtres actifs`,
                    filtersButton: (count) => count > 0 ? `Filtres (${count})` : "Filtres",
                    cityCount: (count) => count === 1 ? "1 lieu" : `${count} lieux`,
                },
                filters: {
                    categories: {
                        venueType: "Type de lieu",
                        cuisineType: "Type de cuisine",
                        ageRange: "Tranche d'âge",
                        amenities: "Équipements"
                    },
                    options: {
                        venueType: {
                            cafe: "Café",
                            shop: "Boutique",
                            restaurant: "Restaurant",
                            "craft-atelier": "Atelier créatif",
                            "food-hall": "Food Hall"
                        },
                        cuisineType: {
                            vegan: "Végane",
                            bistro: "Bistrot",
                            patisserie: "Pâtisserie",
                            international: "Cuisine internationale"
                        },
                        ageRange: {
                            baby: "Bébé (0-1)",
                            toddler: "Tout-petit (2-3)",
                            "small-child": "Jeune enfant (4-6)",
                            kid: "Enfant (7-12)"
                        },
                        amenities: {
                            playground: "Terrain de jeu",
                            "outdoor-seating": "Terrasse extérieure",
                            "play-area": "Aire de jeux",
                            "friendly-spaces": "Playbox Friendly Spaces",
                            "high-chair": "Chaise haute",
                            "change-table": "Table à langer",
                            "games-room": "Salle de jeux",
                            "arts-crafts": "Arts et bricolage"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Visiter le site",
                    hours: "Horaires",
                    specialty: "Spécialité",
                    directions: "Itinéraire",
                    viewProfile: "Voir le profil",
                    features: "Équipements",
                    navigate: "Naviguer",
                    appleMaps: "Apple Maps",
                    googleMaps: "Google Maps",
                    call: "Appeler",
                    website: "Site web",
                    instagram: "Instagram",
                    note: "Remarque"
                }
            },
            it: {
                ui: {
                    title: "Friendly Spaces",
                    sidebarTitle: "Trova un Friendly Space",
                    searchPlaceholder: "Cerca per nome, città o indirizzo...",
                    languageLabel: "Lingua",
                    menuClose: "Chiudi",
                    menuSuggest: "Suggerisci uno spazio",
                    menuShare: "Condividi l'app",
                    menuAbout: "Chi siamo",
                    menuHelp: "Come usare l'app",
                    menuLanguage: "Lingua",
                    menuBug: "Segnala un bug / Invia feedback",
                    menuPrivacy: "Informativa sulla privacy",
                    suggestTitle: "Suggerisci uno spazio",
                    suggestTagline: "Conosci luoghi che sarebbero perfetti per Friendly Spaces?",
                    suggestRoleOwner: "Lavoro in un Friendly Space",
                    suggestRoleFan: "Posso consigliare un Friendly Space",
                    suggestMessageLabel: "Messaggio (facoltativo)",
                    suggestVenueNameLabel: "Nome del luogo",
                    suggestVenueCityLabel: "Città",
                    suggestWhyLabel: "Perché è adatto alle famiglie? (facoltativo)",
                    suggestOwnerNameLabel: "Nome",
                    suggestOwnerEmailLabel: "E-mail",
                    suggestOwnerPhoneLabel: "Telefono (facoltativo)",
                    suggestSubmit: "Invia suggerimento",
                    fanEmailLabel: "E-mail (facoltativo)",
                    newsletterLabel: "Iscrivimi alla newsletter",
                    aboutBody: "Friendly Spaces è il primo marchio di certificazione family-friendly in Svizzera e aiuta i genitori a trovare i migliori caffè, ristoranti, negozi e spazi culturali per famiglie con bambini piccoli. Grazie ai nostri rigorosi audit sul posto, ci assicuriamo che ogni luogo certificato accolga davvero le famiglie.",
                    keepInTouchTitle: "Rimaniamo in contatto",
                    partnerTitle: "Diventa partner",
                    partnerBody: "Sostieni il crescente movimento family-friendly in Svizzera. Friendly Spaces offre opportunità di sponsorizzazione e pubblicità a marchi e organizzazioni che condividono la nostra missione di rendere le città svizzere più accoglienti per le famiglie. Raggiungi genitori coinvolti in tutta la Svizzera.",
                    formSending: "Invio in corso...",
                    suggestSubmitSuccess: "Grazie! Suggerimento inviato.",
                    suggestSubmitError: "Qualcosa è andato storto. Riprova.",
                    bugSubmitSuccess: "Grazie! Segnalazione inviata.",
                    bugSubmitError: "Qualcosa è andato storto. Riprova.",
                    bugTitle: "Segnala un bug / Invia feedback",
                    bugMessageLabel: "Messaggio",
                    bugSubmit: "Invia",
                    partnerCta: "Richiedi una partnership",
                    partnerSubject: "Richiesta di partnership",
                    introTitle: "Cos'è Friendly Spaces?",
                    introText: "Scopri caffè, ristoranti, negozi e luoghi culturali certificati family-friendly in tutta la Svizzera. Ogni luogo viene valutato per aree gioco, fasciatoi, accesso con passeggino e un'atmosfera accogliente.",
                    introMapTitle: "Esplora i luoghi",
                    introMapText: "Passa dalla vista Mappa per esplorare le città e trovare luoghi vicino a te, alla vista Elenco per un confronto rapido. Tocca un luogo per vedere tutti i dettagli e i servizi.",
                    introSuggestTitle: "Trova il luogo perfetto",
                    introSuggestText: "Usa la barra di ricerca per trovare luoghi per città o nome. Applica i filtri in base alle tue esigenze, come accesso passeggino, posti all'aperto, aree gioco e altro. Salva i preferiti per trovarli facilmente.",
                    introGrowTitle: "Aiutaci a far crescere Friendly Spaces",
                    introGrowText: "Conosci un ottimo luogo adatto alle famiglie? Apri il menu e tocca Suggerisci uno spazio per consigliare un nuovo luogo. I tuoi suggerimenti aiutano altre famiglie a scoprire posti meravigliosi.",
                    introBack: "Indietro",
                    introNext: "Avanti",
                    introDone: "Fine",
                    introSkip: "Non mostrare più",
                    helpTitle: "Come usare Friendly Spaces",
                    helpTagline: "Suggerimenti rapidi per ottenere il massimo dall'app.",
                    helpFindTitle: "Trova luoghi rapidamente",
                    helpFindStep1: "Usa la vista Mappa per esplorare i pin vicino a te.",
                    helpFindStep2: "Passa alla vista Elenco per confrontare i luoghi più velocemente.",
                    helpFindStep3: "Usa Ricerca e Filtri per restringere i risultati.",
                    helpFavoritesTitle: "Salva i preferiti",
                    helpFavoritesStep1: "Tocca il cuore su un luogo per salvarlo.",
                    helpFavoritesStep2: "Apri Preferiti per trovare rapidamente i luoghi salvati.",
                    helpFavoritesStep3: "Tocca di nuovo il cuore per rimuovere un preferito.",
                    helpSuggestTitle: "Suggerisci un luogo",
                    helpSuggestStep1: "Apri il menu e tocca Suggerisci uno spazio.",
                    helpSuggestStep2: "Compila i dettagli del luogo e invia il suggerimento.",
                    helpSuggestStep3: "Nel menu puoi anche usare Segnala un bug / Invia feedback.",
                    showingLabel: "Mostra",
                    venuesLabel: "luoghi",
                    filtersLabel: "Filtri",
                    clearFilters: "Cancella tutto",
                    showAllSpaces: "Mostra tutti i luoghi",
                    showSpaces: "Mostra",
                    spacesLabel: "luoghi",
                    allTab: "Tutti",
                    favoritesTab: "Preferiti",
                    mapTab: "Mappa",
                    listTab: "Elenco",
                    noVenuesTitle: "Nessun luogo trovato",
                    noVenuesBody: "Prova a cambiare i filtri o a cercare un'altra città.",
                    noFavoritesTitle: "Ancora nessun preferito",
                    noFavoritesBody: "Tocca il cuore per salvare i luoghi.",
                    nearMe: "Vicino a me",
                    locationBlockedTitle: "Attiva la posizione",
                    locationBlockedBodyNative: "Friendly Spaces ha bisogno della posizione per Vicino a me. Se non compare un altro avviso, apri le impostazioni del dispositivo, consenti la posizione per Friendly Spaces e riprova.",
                    locationBlockedBodyWeb: "Friendly Spaces ha bisogno della posizione per Vicino a me. Consenti la posizione nelle impostazioni del browser o del sito e riprova.",
                    locationUnavailableTitle: "Posizione non disponibile",
                    locationUnavailableBody: "Non siamo riusciti a ottenere la tua posizione in questo momento. Controlla GPS o connessione e riprova.",
                    locationRetry: "Riprova",
                    locationDismiss: "OK",
                    favoriteAdd: "Salva",
                    favoriteRemove: "Salvato",
                    filtersActive: (count) => count === 1 ? "1 filtro attivo" : `${count} filtri attivi`,
                    filtersButton: (count) => count > 0 ? `Filtri (${count})` : "Filtri",
                    cityCount: (count) => count === 1 ? "1 luogo" : `${count} luoghi`,
                },
                filters: {
                    categories: {
                        venueType: "Tipo di luogo",
                        cuisineType: "Tipo di cucina",
                        ageRange: "Fascia d'età",
                        amenities: "Servizi"
                    },
                    options: {
                        venueType: {
                            cafe: "Caffè",
                            shop: "Negozio",
                            restaurant: "Ristorante",
                            "craft-atelier": "Atelier creativo",
                            "food-hall": "Food Hall"
                        },
                        cuisineType: {
                            vegan: "Vegano",
                            bistro: "Bistrò",
                            patisserie: "Pasticceria",
                            international: "Internazionale"
                        },
                        ageRange: {
                            baby: "Neonato (0-1)",
                            toddler: "Prima infanzia (2-3)",
                            "small-child": "Bambino piccolo (4-6)",
                            kid: "Bambino (7-12)"
                        },
                        amenities: {
                            playground: "Parco giochi",
                            "outdoor-seating": "Posti all'aperto",
                            "play-area": "Area giochi",
                            "friendly-spaces": "Playbox Friendly Spaces",
                            "high-chair": "Seggiolone",
                            "change-table": "Fasciatoio",
                            "games-room": "Sala giochi",
                            "arts-crafts": "Arte e lavoretti"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Visita il sito",
                    hours: "Orari",
                    specialty: "Specialità",
                    directions: "Indicazioni",
                    viewProfile: "Vedi profilo completo",
                    features: "Servizi",
                    navigate: "Naviga",
                    appleMaps: "Apple Maps",
                    googleMaps: "Google Maps",
                    call: "Chiama",
                    website: "Sito web",
                    instagram: "Instagram",
                    note: "Nota"
                }
            },
            en: {
                ui: {
                    title: "Friendly Spaces",
                    sidebarTitle: "Find a Friendly Space",
                    searchPlaceholder: "Search by name, city, or address...",
                    languageLabel: "Language",
                    menuClose: "Close",
                    menuSuggest: "Suggest a space",
                    menuShare: "Share the app",
                    menuAbout: "About us",
                    menuHelp: "How to use app",
                    menuLanguage: "Language",
                    menuBug: "Report a bug / Give feedback",
                    menuPrivacy: "Privacy Policy",
                    suggestTitle: "Suggest a space",
                    suggestTagline: "Do you know of any places that would be a great fit for friendly spaces?",
                    suggestRoleOwner: "I work at a Friendly Space",
                    suggestRoleFan: "I can recommend a Friendly Space",
                    suggestMessageLabel: "Message (optional)",
                    suggestVenueNameLabel: "Venue name",
                    suggestVenueCityLabel: "City",
                    suggestWhyLabel: "Why is it friendly? (optional)",
                    suggestOwnerNameLabel: "Your name",
                    suggestOwnerEmailLabel: "Your email",
                    suggestOwnerPhoneLabel: "Phone (optional)",
                    suggestSubmit: "Send suggestion",
                    fanEmailLabel: "Email (optional)",
                    newsletterLabel: "Sign me up for the newsletter",
                    aboutBody: "Friendly Spaces is Switzerland's first family-friendly certification label, helping parents find the best cafés, restaurants, shops, and cultural spaces for families with young children. Through our rigorous on-site audits, we ensure every certified venue truly welcomes and accommodates your little ones.",
                    keepInTouchTitle: "Keep in Touch",
                    partnerTitle: "Partner With Us",
                    partnerBody: "Support Switzerland's growing family-friendly movement. Friendly Spaces offers sponsorship and advertising opportunities to brands and organizations who share our mission of making Swiss cities more welcoming for families. Reach engaged parents across Switzerland.",
                    formSending: "Sending...",
                    suggestSubmitSuccess: "Thanks! Suggestion sent.",
                    suggestSubmitError: "Something went wrong. Please try again.",
                    bugSubmitSuccess: "Thanks! Bug report sent.",
                    bugSubmitError: "Something went wrong. Please try again.",
                    bugTitle: "Report a bug / Give feedback",
                    bugMessageLabel: "Message",
                    bugSubmit: "Send",
                    partnerCta: "Inquire about partnerships",
                    partnerSubject: "Partnership Inquiry",
                    introTitle: "What is Friendly Spaces?",
                    introText: "Discover certified family-friendly cafés, restaurants, shops, and cultural venues across Switzerland. Every location is audited for play areas, changing facilities, stroller access, and a welcoming atmosphere.",
                    introMapTitle: "Explore locations",
                    introMapText: "Toggle between Map view to explore cities and discover places near you, or List view for a quick comparison of locations. Tap any venue to see full details and amenities.",
                    introSuggestTitle: "Find your perfect spot",
                    introSuggestText: "Use the search bar to find places by city or venue name. Apply Filters to match your needs, including stroller access, outdoor seating, play areas, and more. Save favorites for easy access.",
                    introGrowTitle: "Help us grow Friendly Spaces",
                    introGrowText: "Know a great family-friendly place? Open the menu and tap Suggest a Space to recommend a new location. Your suggestions help other families discover wonderful places.",
                    introBack: "Back",
                    introNext: "Next",
                    introDone: "Done",
                    introSkip: "Do not show again",
                    helpTitle: "How to use Friendly Spaces",
                    helpTagline: "Quick tips to get the most from the app.",
                    helpFindTitle: "Find places quickly",
                    helpFindStep1: "Use Map view to explore pins near you.",
                    helpFindStep2: "Switch to List view to scan places faster.",
                    helpFindStep3: "Use Search and Filters to narrow results.",
                    helpFavoritesTitle: "Save favorites",
                    helpFavoritesStep1: "Tap the heart on a place to save it.",
                    helpFavoritesStep2: "Open Favorites to quickly find saved places.",
                    helpFavoritesStep3: "Tap the heart again to remove a favorite.",
                    helpSuggestTitle: "Suggest a venue",
                    helpSuggestStep1: "Open the menu and tap Suggest a space.",
                    helpSuggestStep2: "Fill in the venue details and send your suggestion.",
                    helpSuggestStep3: "You can also use Report a bug / Give feedback in the menu.",
                    showingLabel: "Showing",
                    venuesLabel: "venues",
                    filtersLabel: "Filters",
                    clearFilters: "Clear All",
                    showAllSpaces: "Show all spaces",
                    showSpaces: "Show",
                    spacesLabel: "spaces",
                    allTab: "All",
                    favoritesTab: "Favorites",
                    mapTab: "Map",
                    listTab: "List",
                    noVenuesTitle: "No venues found",
                    noVenuesBody: "Try clearing filters or searching another city.",
                    noFavoritesTitle: "No favorites yet",
                    noFavoritesBody: "Tap the heart to save places.",
                    nearMe: "Near Me",
                    locationBlockedTitle: "Enable location",
                    locationBlockedBodyNative: "Friendly Spaces needs location access for Near Me. If no prompt appears again, open your device settings, allow location for Friendly Spaces, then try again.",
                    locationBlockedBodyWeb: "Friendly Spaces needs location access for Near Me. Allow location in your browser or site settings, then try again.",
                    locationUnavailableTitle: "Location unavailable",
                    locationUnavailableBody: "We could not get your location right now. Check your GPS or connection and try again.",
                    locationRetry: "Try again",
                    locationDismiss: "OK",
                    favoriteAdd: "Save",
                    favoriteRemove: "Saved",
                    filtersActive: (count) => count === 1 ? "1 filter active" : `${count} filters active`,
                    filtersButton: (count) => count > 0 ? `Filters (${count})` : "Filters",
                    cityCount: (count) => count === 1 ? "1 venue" : `${count} venues`,
                },
                filters: {
                    categories: {
                        venueType: "Venue Type",
                        cuisineType: "Cuisine Type",
                        ageRange: "Age Range",
                        amenities: "Amenities"
                    },
                    options: {
                        venueType: {
                            cafe: "Cafe",
                            shop: "Shop",
                            restaurant: "Restaurant",
                            "craft-atelier": "Creative Atelier",
                            "food-hall": "Food Hall"
                        },
                        cuisineType: {
                            vegan: "Vegan",
                            bistro: "Bistro",
                            patisserie: "Patisserie",
                            international: "International"
                        },
                        ageRange: {
                            baby: "Baby (0-1)",
                            toddler: "Toddler (2-3)",
                            "small-child": "Small Child (4-6)",
                            kid: "Kid (7-12)"
                        },
                        amenities: {
                            playground: "Playground",
                            "outdoor-seating": "Outdoor Seating",
                            "play-area": "Play Area",
                            "friendly-spaces": "Friendly Spaces Playbox",
                            "high-chair": "High Chair",
                            "change-table": "Change Table",
                            "games-room": "Games Room",
                            "arts-crafts": "Arts & Crafts"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Visit Website",
                    hours: "Hours",
                    specialty: "Specialty",
                    directions: "Directions",
                    viewProfile: "View Full Profile",
                    features: "Features",
                    navigate: "Navigate",
                    appleMaps: "Apple Maps",
                    googleMaps: "Google Maps",
                    call: "Call",
                    website: "Website",
                    instagram: "Instagram",
                    note: "Note"
                }
            }
        };

        const languageKey = 'friendlyspaces_lang';
        let currentLang = getPreferredLanguage();

        function getPreferredLanguage() {
            const params = new URLSearchParams(window.location.search);
            const fromQuery = params.get('lang')?.toLowerCase();
            if (fromQuery && supportedLanguages.includes(fromQuery)) return fromQuery;

            try {
                const stored = localStorage.getItem(languageKey);
                if (stored && supportedLanguages.includes(stored)) {
                    return stored;
                }
            } catch (err) {
                // Ignore storage issues and fall back to browser language.
            }

            const browser = (navigator.language || navigator.userLanguage || '').slice(0, 2).toLowerCase();
            if (supportedLanguages.includes(browser)) return browser;

            return 'de'; // default to German
        }

        document.documentElement.lang = currentLang;

        function translate(path, fallback) {
            const segments = path.split('.');
            const value =
                segments.reduce((obj, key) => obj?.[key], translations[currentLang]) ??
                segments.reduce((obj, key) => obj?.[key], translations['de']);
            return value !== undefined ? value : fallback;
        }

        function formatCountTranslation(key, count, fallback) {
            const template = translate(`ui.${key}${count === 1 ? 'One' : 'Many'}`, null);
            if (typeof template === 'string') {
                return template.replace('{count}', count);
            }
            const legacy = translate(`ui.${key}`, null);
            if (typeof legacy === 'function') return legacy(count);
            if (typeof legacy === 'string') return legacy.replace('{count}', count);
            return typeof fallback === 'function' ? fallback(count) : fallback;
        }

        function formatPhoneHref(phone) {
            if (!phone) return null;
            if (/contact via website/i.test(phone)) return null;
            const normalized = phone.replace(/[^+\d]/g, '');
            if (!normalized || normalized.replace(/\D/g, '').length === 0) return null;
            return `tel:${normalized}`;
        }

        function isApplePlatform() {
            const cap = window.Capacitor;
            const isNativeIOS =
                typeof cap?.getPlatform === 'function' &&
                cap.getPlatform() === 'ios';
            const userAgent = navigator.userAgent || '';
            const isIOSBrowser =
                /iPad|iPhone|iPod/.test(userAgent) ||
                (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);

            return isNativeIOS || isIOSBrowser;
        }

        function getAppleMapsUrl(venue) {
            const destination = encodeURIComponent(venue.address);
            return `${getContentLink('appleMaps', fallbackContentLinks.appleMaps)}?daddr=${destination}`;
        }

        function getGoogleMapsUrl(venue) {
            const destination = encodeURIComponent(venue.address);
            const baseUrl = getContentLink('googleMaps', fallbackContentLinks.googleMaps);
            return `${baseUrl}?api=1&destination=${destination}`;
        }

        function getDirectionsUrl(venue) {
            if (isApplePlatform()) {
                return getAppleMapsUrl(venue);
            }
            return getGoogleMapsUrl(venue);
        }

        // Helper to get localized venue text fields
        function getVenueText(venue, field) {
            const localized = venue.i18n?.[field];
            if (localized && typeof localized === 'object') {
                return localized[currentLang] ||
                    venue[field] ||
                    localized['en'] ||
                    localized['de'] ||
                    '';
            }
            return venue[field] || '';
        }

        function escapeHtml(value) {
            return String(value)
                .replace(/&/g, '&amp;')
                .replace(/</g, '&lt;')
                .replace(/>/g, '&gt;')
                .replace(/"/g, '&quot;')
                .replace(/'/g, '&#39;');
        }

        function formatHoursForProfile(hoursText) {
            if (!hoursText || typeof hoursText !== 'string') return '';
            const lines = hoursText
                .split(/\s*,\s*/)
                .filter(Boolean);
            return lines.map((line) => `<span class="detail-hours-line">${escapeHtml(line)}</span>`).join('');
        }

        // Venue data: try hosted JSON first, then bundled fallback.
        let venues = [];
        const REMOTE_APP_ORIGIN = 'https://app.friendlyspaces.ch/';
        const REMOTE_VENUES_URL = new URL('data/venues.json', REMOTE_APP_ORIGIN).toString();
        const REMOTE_FILTERS_URL = new URL('data/filters.json', REMOTE_APP_ORIGIN).toString();
        const REMOTE_CONTENT_URL = new URL('data/content.json', REMOTE_APP_ORIGIN).toString();
        const REMOTE_FORM_SUBMIT_URL = REMOTE_APP_ORIGIN;
        const LOCAL_VENUES_URL = 'data/venues.json';
        const LOCAL_FILTERS_URL = 'data/filters.json';
        const LOCAL_CONTENT_URL = 'data/content.json';
        const VENUES_FETCH_TIMEOUT_MS = 6000;
        const FILTERS_FETCH_TIMEOUT_MS = 6000;
        const CONTENT_FETCH_TIMEOUT_MS = 6000;
        const VENUES_CACHE_KEY = 'friendlyspaces_venues_cache_v4';
        const FILTERS_CACHE_KEY = 'friendlyspaces_filters_cache_v1';
        const CONTENT_CACHE_KEY = 'friendlyspaces_content_cache_v1';
        const fallbackContentLinks = {
            website: 'https://www.friendlyspaces.ch/',
            instagram: 'https://www.instagram.com/friendly.spaces/',
            tiktok: 'https://www.tiktok.com/@friendlyspaces',
            linkedin: 'https://www.linkedin.com/company/friendly-spaces/',
            linktree: 'https://linktr.ee/friendlyspaces',
            privacy: 'https://www.friendlyspaces.ch/privacy-policy',
            partnerEmail: 'mailto:hello@friendlyspaces.ch',
            share: 'https://friendlyspaces.ch/app',
            openStreetMap: 'https://www.openstreetmap.org/copyright',
            carto: 'https://carto.com/attributions',
            appleMaps: 'https://maps.apple.com/',
            googleMaps: 'https://www.google.com/maps/dir/',
            appStore: '',
            playStore: ''
        };
        const fallbackAboutSocials = [
            { id: 'instagram', link: 'instagram', label: { de: 'Instagram', fr: 'Instagram', it: 'Instagram', en: 'Instagram' } },
            { id: 'tiktok', link: 'tiktok', label: { de: 'TikTok', fr: 'TikTok', it: 'TikTok', en: 'TikTok' } },
            { id: 'website', link: 'website', label: { de: 'Website', fr: 'Site web', it: 'Sito web', en: 'Website' } },
            { id: 'linkedin', link: 'linkedin', label: { de: 'LinkedIn', fr: 'LinkedIn', it: 'LinkedIn', en: 'LinkedIn' } }
        ];
        let appContent = {
            links: { ...fallbackContentLinks },
            about: { socials: fallbackAboutSocials }
        };

        function normalizeVenueFilters(list) {
            if (!Array.isArray(list)) return [];
            return list.map((venue) => {
                const venueType = Array.isArray(venue?.filters?.venueType) ? [...venue.filters.venueType] : [];
                return {
                    ...venue,
                    filters: {
                        ...(venue.filters || {}),
                        venueType
                    }
                };
            });
        }

        function resolveVenueAssetUrl(assetPath) {
            if (typeof assetPath !== 'string' || !assetPath.trim()) return '';
            try {
                return new URL(assetPath, REMOTE_APP_ORIGIN).toString();
            } catch (err) {
                return assetPath;
            }
        }

        function normalizeVenueMedia(list) {
            if (!Array.isArray(list)) return [];
            return list.map((venue) => ({
                ...venue,
                images: Array.isArray(venue.images)
                    ? venue.images
                        .map(resolveVenueAssetUrl)
                        .filter(Boolean)
                    : []
            }));
        }

        async function fetchVenueData(url) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), VENUES_FETCH_TIMEOUT_MS);
            try {
                const response = await fetch(url, {
                    cache: 'no-store',
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                if (!Array.isArray(data)) {
                    throw new Error('Invalid venues payload');
                }
                return data;
            } finally {
                clearTimeout(timeout);
            }
        }

        async function fetchFilterData(url) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), FILTERS_FETCH_TIMEOUT_MS);
            try {
                const response = await fetch(url, {
                    cache: 'no-store',
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                const data = await response.json();
                return validateFilterData(data);
            } finally {
                clearTimeout(timeout);
            }
        }

        function validateContentData(data) {
            if (!data || typeof data !== 'object' || !data.strings || typeof data.strings !== 'object') {
                throw new Error('Invalid content payload');
            }
            const hasUiStrings = Object.values(data.strings).some(lang =>
                lang && typeof lang === 'object' && lang.ui && typeof lang.ui === 'object'
            );
            if (!hasUiStrings) {
                throw new Error('Invalid content payload');
            }
            return data;
        }

        async function fetchContentData(url) {
            const controller = new AbortController();
            const timeout = setTimeout(() => controller.abort(), CONTENT_FETCH_TIMEOUT_MS);
            try {
                const response = await fetch(url, {
                    cache: 'no-store',
                    signal: controller.signal
                });
                if (!response.ok) {
                    throw new Error(`HTTP ${response.status}`);
                }
                return validateContentData(await response.json());
            } finally {
                clearTimeout(timeout);
            }
        }

        function mergePlainObject(target, source) {
            if (!source || typeof source !== 'object') return target;
            Object.entries(source).forEach(([key, value]) => {
                if (value && typeof value === 'object' && !Array.isArray(value)) {
                    target[key] = mergePlainObject(
                        target[key] && typeof target[key] === 'object' && !Array.isArray(target[key])
                            ? target[key]
                            : {},
                        value
                    );
                } else {
                    target[key] = value;
                }
            });
            return target;
        }

        function localizedContentLabel(label, fallback = '') {
            if (typeof label === 'string') return label;
            if (!label || typeof label !== 'object') return fallback;
            return label[currentLang] || label.de || label.en || fallback;
        }

        function getContentLink(key, fallback = '') {
            const value = appContent?.links?.[key] || fallbackContentLinks[key] || fallback;
            return typeof value === 'string' ? value : fallback;
        }

        function applyContentData(data) {
            const content = validateContentData(data);
            supportedLanguages.forEach(lang => {
                if (!translations[lang]) translations[lang] = {};
                mergePlainObject(translations[lang], content.strings?.[lang]);
            });
            appContent = {
                links: { ...fallbackContentLinks, ...(content.links || {}) },
                about: {
                    ...(content.about || {}),
                    socials: Array.isArray(content.about?.socials) ? content.about.socials : fallbackAboutSocials
                }
            };
            return content;
        }

        function readCachedVenues() {
            try {
                const raw = localStorage.getItem(VENUES_CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                if (!Array.isArray(parsed?.venues)) return null;
                return parsed.venues;
            } catch (err) {
                return null;
            }
        }

        function writeCachedVenues(nextVenues) {
            try {
                localStorage.setItem(VENUES_CACHE_KEY, JSON.stringify({
                    updatedAt: Date.now(),
                    venues: nextVenues
                }));
            } catch (err) {
                // Ignore storage quota/private mode issues.
            }
        }

        function readCachedFilters() {
            try {
                const raw = localStorage.getItem(FILTERS_CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                return validateFilterData(parsed?.filters);
            } catch (err) {
                return null;
            }
        }

        function writeCachedFilters(nextFilters) {
            try {
                localStorage.setItem(FILTERS_CACHE_KEY, JSON.stringify({
                    updatedAt: Date.now(),
                    filters: nextFilters
                }));
            } catch (err) {
                // Ignore storage quota/private mode issues.
            }
        }

        function readCachedContent() {
            try {
                const raw = localStorage.getItem(CONTENT_CACHE_KEY);
                if (!raw) return null;
                const parsed = JSON.parse(raw);
                return validateContentData(parsed?.content);
            } catch (err) {
                return null;
            }
        }

        function writeCachedContent(nextContent) {
            try {
                localStorage.setItem(CONTENT_CACHE_KEY, JSON.stringify({
                    updatedAt: Date.now(),
                    content: nextContent
                }));
            } catch (err) {
                // Ignore storage quota/private mode issues.
            }
        }

        async function loadVenues() {
            try {
                const remoteVenues = await fetchVenueData(REMOTE_VENUES_URL);
                const normalizedRemote = normalizeVenueMedia(normalizeVenueFilters(remoteVenues));
                venues = normalizedRemote;
                writeCachedVenues(normalizedRemote);
                return;
            } catch (err) {
                // Fall back to bundled venues when offline or remote fetch fails.
            }

            const cachedVenues = readCachedVenues();
            if (cachedVenues) {
                venues = normalizeVenueMedia(normalizeVenueFilters(cachedVenues));
                return;
            }

            try {
                venues = normalizeVenueMedia(normalizeVenueFilters(await fetchVenueData(LOCAL_VENUES_URL)));
                writeCachedVenues(venues);
            } catch (err) {
                venues = [];
            }
        }

        // Filter definitions
        const fallbackFilterDefinitions = {
            venueType: [
                { id: "cafe", label: "Cafe" },
                { id: "shop", label: "Shop" },
                { id: "restaurant", label: "Restaurant" },
                { id: "craft-atelier", label: "Creative Atelier" },
                { id: "food-hall", label: "Food Hall" }
            ],
            cuisineType: [
                { id: "vegan", label: "Vegan" },
                { id: "bistro", label: "Bistro" },
                { id: "patisserie", label: "Patisserie" },
                { id: "international", label: "International" }
            ],
            ageRange: [
                { id: "baby", label: "Baby (0-1)" },
                { id: "toddler", label: "Toddler (2-3)" },
                { id: "small-child", label: "Small Child (4-6)" },
                { id: "kid", label: "Kid (7-12)" }
            ],
            amenities: [
                { id: "playground", label: "Playground" },
                { id: "outdoor-seating", label: "Outdoor Seating" },
                { id: "play-area", label: "Play Area" },
                { id: "friendly-spaces", label: "Friendly Spaces Playbox" },
                { id: "high-chair", label: "High Chair" },
                { id: "change-table", label: "Change Table" },
                { id: "games-room", label: "Games Room" },
                { id: "arts-crafts", label: "Arts & Crafts" }
            ]
        };
        let filterDefinitions = { ...fallbackFilterDefinitions };
        let loadedFilterVocabulary = null;

        function validateFilterData(data) {
            if (!data || !Array.isArray(data.categories)) {
                throw new Error('Invalid filters payload');
            }
            data.categories.forEach(category => {
                if (!category?.id || !Array.isArray(category.options)) {
                    throw new Error('Invalid filters payload');
                }
            });
            return data;
        }

        function buildFilterDefinitionsFromPayload(data) {
            return data.categories.reduce((definitions, category) => {
                definitions[category.id] = category.options
                    .filter(option => option?.id)
                    .map(option => ({
                        id: option.id,
                        label: option.label?.en || option.id
                    }));
                return definitions;
            }, {});
        }

        function applyFilterVocabulary(data) {
            loadedFilterVocabulary = validateFilterData(data);
            filterDefinitions = buildFilterDefinitionsFromPayload(loadedFilterVocabulary);
            ensureActiveFilterCategories();
        }

        async function loadFilters() {
            try {
                const remoteFilters = await fetchFilterData(REMOTE_FILTERS_URL);
                applyFilterVocabulary(remoteFilters);
                writeCachedFilters(remoteFilters);
                return;
            } catch (err) {
                // Fall back to cached or bundled filters when offline or remote fetch fails.
            }

            const cachedFilters = readCachedFilters();
            if (cachedFilters) {
                applyFilterVocabulary(cachedFilters);
                return;
            }

            try {
                const localFilters = await fetchFilterData(LOCAL_FILTERS_URL);
                applyFilterVocabulary(localFilters);
                writeCachedFilters(localFilters);
            } catch (err) {
                filterDefinitions = { ...fallbackFilterDefinitions };
                loadedFilterVocabulary = null;
                ensureActiveFilterCategories();
            }
        }

        async function loadContent() {
            try {
                const remoteContent = await fetchContentData(REMOTE_CONTENT_URL);
                applyContentData(remoteContent);
                writeCachedContent(remoteContent);
                return;
            } catch (err) {
                // Fall back to cached or bundled content when offline or remote fetch fails.
            }

            const cachedContent = readCachedContent();
            if (cachedContent) {
                applyContentData(cachedContent);
                return;
            }

            try {
                const localContent = await fetchContentData(LOCAL_CONTENT_URL);
                applyContentData(localContent);
                writeCachedContent(localContent);
            } catch (err) {
                // Keep the hardcoded translation and link fallbacks.
            }
        }

        function getLoadedFilterCategory(category) {
            return loadedFilterVocabulary?.categories?.find(item => item.id === category);
        }

        function getLoadedFilterOption(category, id) {
            return getLoadedFilterCategory(category)?.options?.find(item => item.id === id);
        }

        function getLocalizedFilterLabel(label, id) {
            if (!label || typeof label !== 'object') return null;
            return label[currentLang] || label.de || label.en || humanizeFilterId(id);
        }

        function humanizeFilterId(id) {
            if (!id) return '';
            return String(id)
                .split(/[-_]+/)
                .filter(Boolean)
                .map(word => word.charAt(0).toUpperCase() + word.slice(1))
                .join(' ');
        }

        function filterOptionLabel(category, id) {
            const loadedLabel = getLocalizedFilterLabel(getLoadedFilterOption(category, id)?.label, id);
            if (loadedLabel) return loadedLabel;
            const translated = translate(`filters.options.${category}.${id}`, null);
            const label = typeof translated === 'function' ? translated() : translated;
            return label || humanizeFilterId(id);
        }

        function filterCategoryLabel(category) {
            const loadedLabel = getLocalizedFilterLabel(getLoadedFilterCategory(category)?.label, category);
            if (loadedLabel) return loadedLabel;
            const translated = translate(`filters.categories.${category}`, null);
            const label = typeof translated === 'function' ? translated() : translated;
            return label || humanizeFilterId(category);
        }

        // Initialize map with zoom controls in bottom right
        // Center on Switzerland initially
        const map = L.map('map', {
            zoomControl: false,
            center: [46.8182, 8.2275],
            zoom: 8
        });

        // Disable scroll zoom until the map is focused/clicked to prevent trapping page scroll
        map.scrollWheelZoom.disable();
        map.on('focus', () => map.scrollWheelZoom.enable());
        map.on('blur', () => map.scrollWheelZoom.disable());
        map.on('click', () => map.scrollWheelZoom.enable());

        // Add zoom control to bottom right
        L.control.zoom({
            position: 'bottomright'
        }).addTo(map);

        // Add locate control (bottom right)
        const locateControl = L.control({ position: 'bottomright' });
        locateControl.onAdd = function () {
            const container = L.DomUtil.create('div', 'leaflet-bar locate-control');
            container.innerHTML = `
                <button type="button" class="locate-button" aria-label="Center map on my location">
                    <svg viewBox="0 0 24 24" aria-hidden="true">
                        <circle cx="12" cy="12" r="3"></circle>
                        <circle cx="12" cy="12" r="8" fill="none"></circle>
                        <line x1="12" y1="2" x2="12" y2="6"></line>
                        <line x1="12" y1="18" x2="12" y2="22"></line>
                        <line x1="2" y1="12" x2="6" y2="12"></line>
                        <line x1="18" y1="12" x2="22" y2="12"></line>
                    </svg>
                </button>
            `;
            L.DomEvent.disableClickPropagation(container);
            L.DomEvent.disableScrollPropagation(container);
            container.querySelector('.locate-button').addEventListener('click', async () => {
                await requestNearMeLocation({ activateNearMe: false });
            });
            return container;
        };
        locateControl.addTo(map);

        // Generated by build:web from the local CARTO configuration.
        const cartoBasemapKey = window.FriendlySpacesMap?.cartoApiKey;
        if (!cartoBasemapKey) {
            throw new Error('Missing CARTO map configuration. Run npm run build:web before opening the app.');
        }
        map.attributionControl.setPrefix(false);
        map.attributionControl.setPosition('bottomleft');
        function getMapAttributionHtml() {
            return `&copy; <a href="${escapeHtml(getContentLink('openStreetMap', fallbackContentLinks.openStreetMap))}">OpenStreetMap</a> contributors &copy; <a href="${escapeHtml(getContentLink('carto', fallbackContentLinks.carto))}">CARTO</a>`;
        }
        const basemapLayer = L.tileLayer(`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png?key=${encodeURIComponent(cartoBasemapKey)}`, {
            attribution: getMapAttributionHtml(),
            subdomains: 'abcd',
            maxZoom: 20
        }).addTo(map);

        // Initialize marker cluster group
        let markerClusterGroup = L.markerClusterGroup({
            maxClusterRadius: 150,
            spiderfyOnMaxZoom: true,
            showCoverageOnHover: false,
            disableClusteringAtZoom: 13,
            spiderfyDistanceMultiplier: 1.5
        });
        let userLocationHalo = null;
        let userLocationDot = null;
        let userLocationLatLng = null;
        let nearMeRadiusMeters = 0;
        let nearMeActive = false;

        function showUserLocation(lat, lng) {
            const latLng = L.latLng(lat, lng);
            userLocationLatLng = latLng;
            nearMeRadiusMeters = getNearMeRadiusMeters();

            if (!userLocationHalo) {
                userLocationHalo = L.circle(latLng, {
                    radius: 30,
                    color: '#2F6BE0',
                    weight: 1,
                    fillColor: '#2F6BE0',
                    fillOpacity: 0.18
                }).addTo(map);
            } else {
                userLocationHalo.setLatLng(latLng);
            }

            if (!userLocationDot) {
                userLocationDot = L.circleMarker(latLng, {
                    radius: 7,
                    color: '#ffffff',
                    weight: 2,
                    fillColor: '#2F6BE0',
                    fillOpacity: 1
                }).addTo(map);
            } else {
                userLocationDot.setLatLng(latLng);
            }
        }

        function centerMapWithNearestVenue(lat, lng) {
            const userLatLng = L.latLng(lat, lng);
            const candidates = markers
                .filter(({ coords }) => Array.isArray(coords) && coords.length >= 2)
                .map(({ coords }) => ({
                    latLng: L.latLng(coords[0], coords[1]),
                    distance: map.distance(userLatLng, L.latLng(coords[0], coords[1]))
                }))
                .sort((a, b) => a.distance - b.distance);

            if (!candidates.length) {
                map.setView(userLatLng, 13);
                return;
            }

            const nearestDistance = candidates[0].distance;
            const distanceLimit = Math.max(nearestDistance * 1.6, 300);
            const nearestGroup = candidates.filter(item => item.distance <= distanceLimit).slice(0, 3);
            const bounds = L.latLngBounds([userLatLng]);
            nearestGroup.forEach(item => bounds.extend(item.latLng));

            map.fitBounds(bounds, {
                paddingTopLeft: [56, 56],
                paddingBottomRight: [56, 96],
                maxZoom: 14
            });
        }

        function centerPinAboveSheet(coords, snap = 'half') {
            const latLng = L.latLng(coords[0], coords[1]);
            const size = map.getSize();
            const targetRatio = snap === 'peek' ? 0.2 : snap === 'full' ? 0.36 : 0.26;
            const targetY = Math.round(size.y * targetRatio);
            const currentPoint = map.latLngToContainerPoint(latLng);
            if (Math.abs(currentPoint.y - targetY) < 4) return;

            const zoom = map.getZoom();
            const centerProjected = map.project(map.getCenter(), zoom);
            const markerProjected = map.project(latLng, zoom);
            const desiredCenterY = markerProjected.y - targetY + (size.y / 2);
            const nextCenter = map.unproject(L.point(centerProjected.x, desiredCenterY), zoom);
            map.panTo(nextCenter, { animate: true, duration: 0.35 });
        }

        // Custom marker icon (brand blue gradient)
        const pinSvg = `
            <svg width="32" height="48" viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pinGrad" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stop-color="#2F6BE0"/>
                        <stop offset="100%" stop-color="#1E52BA"/>
                    </linearGradient>
                    <filter id="pinShadow" x="-20%" y="-10%" width="140%" height="130%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.25)"/>
                    </filter>
                </defs>
                <g filter="url(#pinShadow)">
                    <path fill="url(#pinGrad)" d="M16 0c-7.18 0-13 5.82-13 13 0 9.75 8.9 18.9 12.1 21.83.5.46 1.3.46 1.8 0C20.1 31.9 29 22.75 29 13 29 5.82 23.18 0 16 0Z"/>
                    <circle cx="16" cy="13" r="5" fill="rgba(255,255,255,0.9)"/>
                </g>
            </svg>
        `;

        const markerIcon = L.icon({
            iconUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(pinSvg),
            iconSize: [32, 48],
            iconAnchor: [16, 46],
            popupAnchor: [0, -42]
        });
        const selectedPinSvg = `
            <svg width="32" height="48" viewBox="0 0 32 48" xmlns="http://www.w3.org/2000/svg">
                <defs>
                    <linearGradient id="pinGradSelected" x1="50%" y1="0%" x2="50%" y2="100%">
                        <stop offset="0%" stop-color="#F5DEFF"/>
                        <stop offset="100%" stop-color="#D7A6F3"/>
                    </linearGradient>
                    <filter id="pinShadowSelected" x="-20%" y="-10%" width="140%" height="130%">
                        <feDropShadow dx="0" dy="2" stdDeviation="2" flood-color="rgba(0,0,0,0.28)"/>
                    </filter>
                </defs>
                <g filter="url(#pinShadowSelected)">
                    <path fill="url(#pinGradSelected)" d="M16 0c-7.18 0-13 5.82-13 13 0 9.75 8.9 18.9 12.1 21.83.5.46 1.3.46 1.8 0C20.1 31.9 29 22.75 29 13 29 5.82 23.18 0 16 0Z"/>
                    <circle cx="16" cy="13" r="5" fill="rgba(255,255,255,0.95)"/>
                </g>
            </svg>
        `;
        const markerIconSelected = L.icon({
            iconUrl: 'data:image/svg+xml;utf8,' + encodeURIComponent(selectedPinSvg),
            iconSize: [32, 48],
            iconAnchor: [16, 46],
            popupAnchor: [0, -42]
        });

        // Add click event to zoom into clusters
        markerClusterGroup.on('clusterclick', function (a) {
            // Prevent default cluster click behavior
            a.originalEvent.stopPropagation();

            // Get the bounds and zoom manually
            const bounds = a.layer.getBounds();

            map.fitBounds(bounds, {
                padding: [50, 50],
                maxZoom: 14,
                animate: true
            });

            // Force refresh after animation
            setTimeout(function() {
                markerClusterGroup.refreshClusters();
                map.invalidateSize();
                setTimeout(function() {
                    map.panBy([1, 0]);
                    map.panBy([-1, 0]);
                }, 50);
            }, 400);
        });

        map.addLayer(markerClusterGroup);

        // State
        let markers = [];
        let selectedVenueName = null;
        let activeFilters = {
            venueType: [],
            cuisineType: [],
            ageRange: [],
            amenities: []
        };
        function ensureActiveFilterCategories() {
            Object.keys(filterDefinitions).forEach(category => {
                if (!Array.isArray(activeFilters[category])) {
                    activeFilters[category] = [];
                }
            });
        }
        let searchQuery = '';
        let isInitialLoad = true;
        const viewStateKey = 'friendlyspaces_active_view';
        const allowedViews = new Set(['map', 'list', 'favorites']);
        function loadSavedView() {
            try {
                const saved = localStorage.getItem(viewStateKey);
                return allowedViews.has(saved) ? saved : 'map';
            } catch (err) {
                return 'map';
            }
        }
        function saveActiveView(view) {
            if (!allowedViews.has(view)) return;
            try {
                localStorage.setItem(viewStateKey, view);
            } catch (err) {
                // Ignore storage issues.
            }
        }

        let activeTab = loadSavedView();
        let lastPrimaryView = activeTab === 'list' ? 'list' : 'map';
        let favoritesReturnView = lastPrimaryView;
        const favoritesKey = 'friendlyspaces_favorites';
        let favorites = new Set();
        let selectedCity = '';
        const sidebar = document.getElementById('sidebar');
        const filtersContainer = document.getElementById('filters-container');
        const sheetBackdrop = document.getElementById('sheet-backdrop');
        const mapPanel = document.getElementById('map');
        const listPanel = document.getElementById('list-view');
        const listCards = document.getElementById('list-cards');
        const listEmpty = document.getElementById('list-empty');
        const bottomTabs = document.querySelectorAll('#bottom-tabs .bottom-tab-button');
        const detailModal = document.getElementById('detail-modal');
        const detailModalContent = document.getElementById('detail-modal-content');
        const detailSheetGrabber = document.getElementById('detail-sheet-grabber');
        const detailPeekTitle = document.getElementById('detail-peek-title');
        const detailHalfBand = document.getElementById('detail-half-band');
        const sidebarFavorites = document.getElementById('sidebar-favorites');
        const sidebarFavoritesLabel = document.getElementById('sidebar-favorites-label');
        const sidebarNearMe = document.getElementById('sidebar-near-me');
        const sidebarNearMeLabel = document.getElementById('sidebar-near-me-label');
        const resetFiltersButton = document.getElementById('reset-filters');
        const applyFiltersButton = document.getElementById('apply-filters');
        const menuToggle = document.getElementById('menu-toggle');
        const menuBackdrop = document.getElementById('menu-backdrop');
        const menuDrawer = document.getElementById('menu-drawer');
        const menuClose = document.getElementById('menu-close');
        const menuSuggest = document.getElementById('menu-suggest');
        const menuShare = document.getElementById('menu-share');
        const menuAbout = document.getElementById('menu-about');
        const menuHelp = document.getElementById('menu-help');
        const menuBug = document.getElementById('menu-bug');
        const menuPrivacy = document.getElementById('menu-privacy');
        const suggestView = document.getElementById('suggest-view');
        const aboutView = document.getElementById('about-view');
        const bugView = document.getElementById('bug-view');
        const helpView = document.getElementById('help-view');
        const suggestClose = document.getElementById('suggest-close');
        const aboutClose = document.getElementById('about-close');
        const bugClose = document.getElementById('bug-close');
        const helpClose = document.getElementById('help-close');
        const suggestForm = document.getElementById('suggest-form');
        const bugForm = document.getElementById('bug-form');
        const aboutPartner = document.getElementById('about-partner');
        const introOverlay = document.getElementById('intro-overlay');
        const introCard = document.querySelector('.intro-card');
        const introSlidesContainer = document.getElementById('intro-slides');
        const introClose = document.getElementById('intro-close');
        const introSkip = document.getElementById('intro-skip');
        const introSlides = Array.from(document.querySelectorAll('[data-intro-slide]'));
        const introDots = Array.from(document.querySelectorAll('[data-intro-dot]'));
        const introPrev = document.getElementById('intro-prev');
        const introNext = document.getElementById('intro-next');
        const suggestRoleButtons = document.querySelectorAll('[data-suggest-role]');
        const ownerFields = document.getElementById('owner-fields');
        let introSlideIndex = 0;
        let introTouchStartX = 0;
        let introTouchStartY = 0;
        let introWheelLockUntil = 0;
        let currentDetailSnap = 'half';
        let locationNotice = null;
        let locationNoticeTitle = null;
        let locationNoticeBody = null;
        let locationNoticeRetry = null;
        let locationNoticeDismiss = null;

        // City coordinates for zoom
        const cityCoordinates = {
            'bern': [46.9480, 7.4474, 13],
            'basel': [47.5596, 7.5886, 13]
        };

        const isMobile = () =>
            window.matchMedia('(max-width: 768px), (orientation: landscape) and (max-height: 600px)').matches;
        const isCompactLandscape = () =>
            window.matchMedia('(orientation: landscape) and (max-height: 600px)').matches;
        const isNativeIOSPlatform = () => {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const isIOS = typeof cap?.getPlatform === 'function' && cap.getPlatform() === 'ios';
            return isNative && isIOS;
        };
        const APP_VERSION = 'pwa-1.1';
        const APP_DOMAIN = 'app.friendlyspaces.ch';
        const analyticsEnabled = true;
        let hasTrackedInitialMapView = false;

        function isNativeAndroidPlatform() {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const isAndroid = typeof cap?.getPlatform === 'function' && cap.getPlatform() === 'android';
            return isNative && isAndroid;
        }

        function applyNativeAndroidInsetFallback() {
            if (isNativeAndroidPlatform()) {
                document.body.classList.add('native-android');
            }
        }

        function updateLandscapeNotchMaskSide() {
            if (!document.body) return;
            document.body.classList.remove('landscape-notch-left', 'landscape-notch-right');
            if (!isNativeAndroidPlatform() || !isCompactLandscape()) return;

            const vv = window.visualViewport;
            if (vv) {
                const leftInset = Math.round(vv.offsetLeft || 0);
                const rightInset = Math.round((window.innerWidth - (vv.width + vv.offsetLeft)) || 0);
                if (leftInset > rightInset && leftInset > 2) {
                    document.body.classList.add('landscape-notch-left');
                    return;
                }
                if (rightInset > leftInset && rightInset > 2) {
                    document.body.classList.add('landscape-notch-right');
                    return;
                }
            }

            let angle = 0;
            if (window.screen?.orientation && typeof window.screen.orientation.angle === 'number') {
                angle = window.screen.orientation.angle;
            } else if (typeof window.orientation === 'number') {
                angle = window.orientation;
            }
            const normalized = ((angle % 360) + 360) % 360;
            if (normalized === 90) {
                document.body.classList.add('landscape-notch-left');
            } else {
                document.body.classList.add('landscape-notch-right');
            }
        }

        async function getCurrentLocation() {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const geolocationPlugin = cap?.Plugins?.Geolocation;

            if (isNative && geolocationPlugin?.getCurrentPosition) {
                if (geolocationPlugin.requestPermissions) {
                    await geolocationPlugin.requestPermissions();
                }
                return geolocationPlugin.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 8000,
                    maximumAge: 60000
                });
            }

            if (!navigator.geolocation) {
                throw new Error('Geolocation is unavailable');
            }

            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
                );
            });
        }

        function applyNativeAndroidInsetFallback() {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const isIOS = typeof cap?.getPlatform === 'function' && cap.getPlatform() === 'ios';
            const isAndroid = typeof cap?.getPlatform === 'function' && cap.getPlatform() === 'android';
            if (isNative && isIOS) {
                document.body.classList.add('native-ios');
            }
            if (isNative && isAndroid) {
                document.body.classList.add('native-android');
            }
        }

        async function getCurrentLocation() {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const geolocationPlugin = cap?.Plugins?.Geolocation;

            if (isNative && geolocationPlugin?.getCurrentPosition) {
                if (geolocationPlugin.requestPermissions) {
                    await geolocationPlugin.requestPermissions();
                }
                return geolocationPlugin.getCurrentPosition({
                    enableHighAccuracy: true,
                    timeout: 8000,
                    maximumAge: 60000
                });
            }

            if (!navigator.geolocation) {
                throw new Error('Geolocation is unavailable');
            }

            return new Promise((resolve, reject) => {
                navigator.geolocation.getCurrentPosition(
                    resolve,
                    reject,
                    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
                );
            });
        }

        function ensureLocationNotice() {
            if (locationNotice) return;

            locationNotice = document.createElement('div');
            locationNotice.className = 'location-permission-toast hidden';
            locationNotice.innerHTML = `
                <div class="location-permission-toast-card" role="dialog" aria-modal="false">
                    <div class="location-permission-toast-copy">
                        <strong class="location-permission-toast-title"></strong>
                        <p class="location-permission-toast-body"></p>
                    </div>
                    <div class="location-permission-toast-actions">
                        <button type="button" class="location-permission-toast-btn secondary" data-location-action="dismiss"></button>
                        <button type="button" class="location-permission-toast-btn primary" data-location-action="retry"></button>
                    </div>
                </div>
            `;

            document.body.appendChild(locationNotice);
            locationNoticeTitle = locationNotice.querySelector('.location-permission-toast-title');
            locationNoticeBody = locationNotice.querySelector('.location-permission-toast-body');
            locationNoticeRetry = locationNotice.querySelector('[data-location-action="retry"]');
            locationNoticeDismiss = locationNotice.querySelector('[data-location-action="dismiss"]');

            if (locationNoticeDismiss) {
                locationNoticeDismiss.addEventListener('click', hideLocationNotice);
            }

            if (locationNoticeRetry) {
                locationNoticeRetry.addEventListener('click', async () => {
                    await requestNearMeLocation();
                });
            }
        }

        function hideLocationNotice() {
            if (!locationNotice) return;
            locationNotice.classList.add('hidden');
        }

        function isPermissionDeniedError(err) {
            const code = Number(err?.code);
            const message = String(err?.message || err || '').toLowerCase();
            return (
                code === 1 ||
                message.includes('permission') ||
                message.includes('denied') ||
                message.includes('not allowed') ||
                message.includes('unauthorized')
            );
        }

        function showLocationNotice(err) {
            ensureLocationNotice();

            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            const permissionBlocked = isPermissionDeniedError(err);

            if (locationNoticeTitle) {
                locationNoticeTitle.textContent = permissionBlocked
                    ? translate('ui.locationBlockedTitle', 'Enable location')
                    : translate('ui.locationUnavailableTitle', 'Location unavailable');
            }

            if (locationNoticeBody) {
                locationNoticeBody.textContent = permissionBlocked
                    ? translate(
                        isNative ? 'ui.locationBlockedBodyNative' : 'ui.locationBlockedBodyWeb',
                        isNative
                            ? 'Friendly Spaces needs location access for Near Me. If no prompt appears again, open your device settings, allow location for Friendly Spaces, then try again.'
                            : 'Friendly Spaces needs location access for Near Me. Allow location in your browser or site settings, then try again.'
                    )
                    : translate(
                        'ui.locationUnavailableBody',
                        'We could not get your location right now. Check your GPS or connection and try again.'
                    );
            }

            if (locationNoticeDismiss) {
                locationNoticeDismiss.textContent = translate('ui.locationDismiss', 'OK');
            }

            if (locationNoticeRetry) {
                locationNoticeRetry.textContent = translate('ui.locationRetry', 'Try again');
            }

            locationNotice.classList.remove('hidden');
        }

        async function requestNearMeLocation({ activateNearMe = true } = {}) {
            try {
                hideLocationNotice();
                const pos = await getCurrentLocation();
                const { latitude, longitude } = pos.coords;
                showUserLocation(latitude, longitude);
                centerMapWithNearestVenue(latitude, longitude);

                if (activateNearMe && !nearMeActive) {
                    toggleNearMe();
                } else if (nearMeActive) {
                    updateMap();
                    updateFilterCount();
                    syncQuickFilterPills();
                }

                return true;
            } catch (err) {
                showLocationNotice(err);
                return false;
            }
        }

        function setAppShellHeight() {
            const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            document.documentElement.style.setProperty('--app-height', `${Math.round(viewportHeight)}px`);
        }

        function syncNativeIOSSafeArea() {
            if (!isNativeIOSPlatform()) {
                return;
            }

            const vv = window.visualViewport;
            const topInset = Math.max(Math.round(vv?.offsetTop || 0), 0);
            const leftInset = Math.max(Math.round(vv?.offsetLeft || 0), 0);
            const rightInset = Math.max(
                Math.round((window.innerWidth - ((vv?.width || window.innerWidth) + (vv?.offsetLeft || 0))) || 0),
                0
            );
            const bottomInset = Math.max(
                Math.round((window.innerHeight - ((vv?.height || window.innerHeight) + (vv?.offsetTop || 0))) || 0),
                0
            );

            document.body.style.setProperty('--native-top-safe', `${topInset}px`);
            document.body.style.setProperty('--native-bottom-safe', `${bottomInset}px`);
            document.body.style.setProperty('--native-left-safe', `${leftInset}px`);
            document.body.style.setProperty('--native-right-safe', `${rightInset}px`);
        }

        function updateBodyScrollLock() {
            const overlayOpen = introOverlay && !introOverlay.classList.contains('hidden');
            const detailOpen = detailModal && detailModal.classList.contains('active');
            const filterSheetOpen = isMobile() && sidebar && sidebar.classList.contains('show');
            const drawerOpen = menuDrawer && menuDrawer.classList.contains('open');
            const fullPanelOpen =
                (suggestView && suggestView.classList.contains('open')) ||
                (aboutView && aboutView.classList.contains('open')) ||
                (bugView && bugView.classList.contains('open')) ||
                (helpView && helpView.classList.contains('open'));

            const shouldLock = overlayOpen || detailOpen || filterSheetOpen || drawerOpen || fullPanelOpen;
            document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
        }

        // Stable partner_id slug per venue — matches the slugs already used for
        // Instagram venue matching in the analytics dashboard. Falls back to a
        // derived slug so tracking still works if the hosted venues.json
        // (app.friendlyspaces.ch) hasn't been given a "slug" field yet.
        function slugify(value) {
            return String(value || '')
                .normalize('NFKD')
                .replace(/[̀-ͯ]/g, '')
                .toLowerCase()
                .replace(/[^a-z0-9]+/g, '-')
                .replace(/^-+|-+$/g, '');
        }

        // Keep production analytics stable while the hosted venues.json is
        // being updated with explicit slug values. A few partner IDs are not
        // a direct slugification of their display name.
        const partnerIdByName = {
            'Orangerie Elfenau': 'orangerie-elfenau',
            'Love is Sweet Atelier': 'love-is-sweet',
            'Magical Cafe': 'magical-cafe-basel',
            'Klara 13': 'klara-basel',
            'Markthalle Basel': 'markthalle-basel',
            'Crafty Crew': 'crafty-crew-workshops',
            'Caffè Bar Sempre Berna': 'sempre-berna',
            'Bridge Zurich': 'bridge-zurich'
        };

        function getPartnerId(venue) {
            if (venue && venue.slug) return venue.slug;
            if (venue && partnerIdByName[venue.name]) return partnerIdByName[venue.name];
            if (venue && venue.name) return slugify(venue.name);
            return undefined;
        }

        function getPlatform() {
            const cap = window.Capacitor;
            const isNative = typeof cap?.isNativePlatform === 'function' && cap.isNativePlatform();
            return isNative && typeof cap?.getPlatform === 'function' ? cap.getPlatform() : 'web';
        }

        function getSurface() {
            const platform = getPlatform();
            if (platform === 'ios') return 'ios_app';
            if (platform === 'android') return 'android_app';
            return 'pwa_web';
        }

        function getPartnerCategory(venue) {
            const categories = venue?.filters?.venueType;
            return Array.isArray(categories) && categories.length ? categories[0] : 'unknown';
        }

        function getPartnerAnalyticsParams(venue) {
            return {
                partner_id: getPartnerId(venue) || 'unknown',
                partner_city: venue?.city || 'unknown',
                partner_category: getPartnerCategory(venue)
            };
        }

        function cleanAnalyticsParams(params) {
            return Object.fromEntries(
                Object.entries(params).filter(([, value]) =>
                    value !== undefined && value !== null && value !== ''
                )
            );
        }

        function getNativeAnalyticsPlugin() {
            return window.Capacitor?.Plugins?.FirebaseAnalytics;
        }

        function trackEvent(name, params = {}) {
            if (!analyticsEnabled) return;

            const eventParams = cleanAnalyticsParams({
                app_domain: APP_DOMAIN,
                surface: getSurface(),
                ...params
            });

            if (getPlatform() !== 'web') {
                const firebaseAnalytics = getNativeAnalyticsPlugin();
                if (firebaseAnalytics?.logEvent) {
                    void firebaseAnalytics.logEvent({ name, params: eventParams }).catch((err) => {
                        console.warn(`Firebase Analytics event failed: ${name}`, err);
                    });
                } else {
                    console.warn(`Firebase Analytics is unavailable for native event: ${name}`);
                }
                return;
            }

            if (typeof window.gtag === 'function') {
                window.gtag('event', name, eventParams);
            }
        }

        function trackScreen(screenName) {
            if (!analyticsEnabled || getPlatform() === 'web') return;
            const firebaseAnalytics = getNativeAnalyticsPlugin();
            if (!firebaseAnalytics?.setCurrentScreen) return;
            void firebaseAnalytics.setCurrentScreen({
                screenName,
                screenClassOverride: 'FriendlySpacesWebView'
            }).catch((err) => console.warn(`Firebase Analytics screen failed: ${screenName}`, err));
        }

        function trackFilterChange(category, value, enabled, source) {
            trackEvent(enabled ? 'filter_apply' : 'filter_remove', {
                filter_type: category,
                filter_value: value,
                filter_source: source,
                results_count: getVisibleVenues().length,
                language: currentLang
            });
        }

        const LINK_EVENT_NAMES = {
            directions: 'directions_click',
            'apple-maps': 'directions_click',
            phone: 'call_click',
            website: 'website_click',
            instagram: 'instagram_click'
        };

        function loadFavorites() {
            try {
                const raw = localStorage.getItem(favoritesKey);
                const parsed = raw ? JSON.parse(raw) : [];
                favorites = new Set(Array.isArray(parsed) ? parsed : []);
            } catch (err) {
                favorites = new Set();
            }
        }

        function saveFavorites() {
            localStorage.setItem(favoritesKey, JSON.stringify(Array.from(favorites)));
        }

        function isFavorite(venueName) {
            return favorites.has(venueName);
        }

        function toggleFavorite(venueName) {
            const wasFavorite = favorites.has(venueName);
            if (wasFavorite) {
                favorites.delete(venueName);
            } else {
                favorites.add(venueName);
            }
            saveFavorites();
            updateFavoritesBadge();
            updateMap();
            updateListView();

            const venue = venues.find(item => item.name === venueName);
            if (venue) {
                trackEvent(wasFavorite ? 'venue_unsave' : 'venue_save', {
                    ...getPartnerAnalyticsParams(venue),
                    language: currentLang
                });
            }
        }

        function updateFavoritesBadge() {
            const bottomBadge = document.getElementById('bottom-favorites-count');
            if (bottomBadge) bottomBadge.textContent = favorites.size;
        }

        function renderCountWrappers() {}

        const socialIconTemplates = {
            instagram: '<span class="icon-circle"><svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></span>',
            tiktok: '<span class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M9 12a4 4 0 1 0 4 4V4c1 2 3 4 5 4"/></svg></span>',
            website: '<span class="icon-circle"><svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg></span>',
            linkedin: '<span class="icon-circle"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M8 11v5"/><path d="M8 8v.01"/><path d="M12 16v-5"/><path d="M16 16v-3a2 2 0 0 0-4 0"/></svg></span>'
        };

        function renderAboutSocials() {
            const container = document.querySelector('.about-socials');
            if (!container) return;
            const socials = Array.isArray(appContent.about?.socials) ? appContent.about.socials : fallbackAboutSocials;
            const fragment = document.createDocumentFragment();
            socials.forEach(social => {
                const href = getContentLink(social.link, '');
                if (!href) return;
                const anchor = document.createElement('a');
                anchor.className = 'detail-icon-btn';
                anchor.href = href;
                anchor.target = '_blank';
                anchor.rel = 'noopener noreferrer';
                anchor.innerHTML = `${socialIconTemplates[social.id] || socialIconTemplates.website}<span class="icon-label"></span>`;
                anchor.querySelector('.icon-label').textContent = localizedContentLabel(social.label, social.id);
                fragment.appendChild(anchor);
            });
            container.replaceChildren(fragment);
        }

        function renderMapAttributionText() {
            document.querySelectorAll('[data-map-attribution]').forEach(element => {
                const link = document.createElement('a');
                link.href = getContentLink('openStreetMap', fallbackContentLinks.openStreetMap);
                link.target = '_blank';
                link.rel = 'noopener';
                link.textContent = 'OpenStreetMap';
                element.replaceChildren(
                    document.createTextNode(translate('ui.osmAttributionPrefix', 'Map data © ')),
                    link,
                    document.createTextNode(translate('ui.osmAttributionSuffix', ' contributors'))
                );
            });
        }

        function applyContentLinks() {
            document.querySelectorAll('[data-link-key]').forEach(element => {
                const href = getContentLink(element.dataset.linkKey, element.getAttribute('href') || '');
                if (href) element.setAttribute('href', href);
            });
            const menuPrivacy = document.getElementById('menu-privacy');
            if (menuPrivacy) menuPrivacy.dataset.href = getContentLink('privacy', fallbackContentLinks.privacy);
            renderAboutSocials();
            renderMapAttributionText();
            if (basemapLayer?.options) {
                const nextAttribution = getMapAttributionHtml();
                const previousAttribution = basemapLayer.options.attribution;
                if (previousAttribution !== nextAttribution) {
                    map.attributionControl.removeAttribution(previousAttribution);
                    basemapLayer.options.attribution = nextAttribution;
                    map.attributionControl.addAttribution(nextAttribution);
                }
            }
        }

        function applyTranslations() {
            document.title = translate('ui.title', document.title);
            document.querySelectorAll('[data-i18n]').forEach(element => {
                const key = element.getAttribute('data-i18n');
                element.textContent = translate(key, element.textContent);
            });
            document.querySelectorAll('[data-i18n-aria-label]').forEach(element => {
                const key = element.getAttribute('data-i18n-aria-label');
                element.setAttribute('aria-label', translate(key, element.getAttribute('aria-label') || ''));
            });
            document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
                const key = element.getAttribute('data-i18n-placeholder');
                const value = translate(key, element.getAttribute('placeholder') || '');
                element.setAttribute('placeholder', value);
                element.setAttribute('aria-label', value);
            });
            applyContentLinks();
            const appTitle = document.getElementById('app-title');
            if (appTitle) appTitle.textContent = translate('ui.title', appTitle.textContent);
            const sidebarTitle = document.getElementById('sidebar-title');
            if (sidebarTitle) sidebarTitle.textContent = translate('ui.sidebarTitle', sidebarTitle.textContent);

            const searchInputEl = document.getElementById('search-input');
            if (searchInputEl) {
                searchInputEl.placeholder = translate('ui.searchPlaceholder', searchInputEl.placeholder);
                searchInputEl.setAttribute('aria-label', searchInputEl.placeholder);
            }

            const topSearchInputEl = document.getElementById('top-search-input');
            if (topSearchInputEl) {
                topSearchInputEl.placeholder = translate('ui.searchPlaceholder', topSearchInputEl.placeholder);
                topSearchInputEl.setAttribute('aria-label', topSearchInputEl.placeholder);
            }

            if (resetFiltersButton) {
                resetFiltersButton.textContent = translate('ui.clearFilters', 'Reset all filters');
            }
            if (applyFiltersButton) {
                applyFiltersButton.textContent = translate('ui.showAllSpaces', 'Show all spaces');
            }

            const mapTab = document.getElementById('bottom-tab-map');
            if (mapTab) {
                const mapSpan = mapTab.querySelector('span');
                if (mapSpan) mapSpan.textContent = translate('ui.mapTab', mapSpan.textContent);
            }

            const listTab = document.getElementById('bottom-tab-list');
            if (listTab) {
                const listSpan = listTab.querySelector('span');
                if (listSpan) listSpan.textContent = translate('ui.listTab', listSpan.textContent);
            }

            document.getElementById('pill-favorites')?.setAttribute('aria-label', translate('ui.favoritesTab', 'Favorites'));
            const favoritesTab = document.getElementById('bottom-tab-favorites-label');
            if (favoritesTab) favoritesTab.textContent = translate('ui.favoritesTab', favoritesTab.textContent);
            if (sidebarFavoritesLabel) {
                sidebarFavoritesLabel.textContent = translate('ui.favoritesTab', sidebarFavoritesLabel.textContent);
            }
            if (sidebarNearMeLabel) {
                sidebarNearMeLabel.textContent = translate('ui.nearMe', sidebarNearMeLabel.textContent);
            }

            if (menuClose) menuClose.setAttribute('aria-label', translate('ui.menuClose', menuClose.getAttribute('aria-label') || 'Close menu'));
            if (menuSuggest) {
                const label = menuSuggest.querySelector('.menu-label');
                if (label) label.textContent = translate('ui.menuSuggest', label.textContent);
            }
            if (menuShare) {
                const label = menuShare.querySelector('.menu-label');
                if (label) label.textContent = translate('ui.menuShare', label.textContent);
            }
            if (menuAbout) {
                const label = menuAbout.querySelector('.menu-label');
                if (label) label.textContent = translate('ui.menuAbout', label.textContent);
            }
            if (menuHelp) {
                const label = menuHelp.querySelector('.menu-label');
                if (label) label.textContent = translate('ui.menuHelp', label.textContent);
            }
            const menuLanguageTitle = document.getElementById('menu-language-title');
            if (menuLanguageTitle) menuLanguageTitle.textContent = translate('ui.menuLanguage', menuLanguageTitle.textContent);
            if (menuBug) menuBug.textContent = translate('ui.menuBug', menuBug.textContent);
            if (menuPrivacy) menuPrivacy.textContent = translate('ui.menuPrivacy', menuPrivacy.textContent);

            const suggestTitle = document.getElementById('suggest-title');
            if (suggestTitle) suggestTitle.textContent = translate('ui.suggestTitle', suggestTitle.textContent);
            const suggestTagline = document.getElementById('suggest-tagline');
            if (suggestTagline) suggestTagline.textContent = translate('ui.suggestTagline', suggestTagline.textContent);
            const suggestOwnerLabel = document.querySelector('[data-suggest-label="owner"]');
            if (suggestOwnerLabel) suggestOwnerLabel.textContent = translate('ui.suggestRoleOwner', suggestOwnerLabel.textContent);
            const suggestFanLabel = document.querySelector('[data-suggest-label="fan"]');
            if (suggestFanLabel) suggestFanLabel.textContent = translate('ui.suggestRoleFan', suggestFanLabel.textContent);
            const suggestMessageLabel = document.querySelector('label[for="venue-message"]');
            if (suggestMessageLabel) suggestMessageLabel.textContent = translate('ui.suggestMessageLabel', suggestMessageLabel.textContent);
            const suggestVenueNameLabel = document.getElementById('suggest-venue-name-label');
            if (suggestVenueNameLabel) suggestVenueNameLabel.textContent = translate('ui.suggestVenueNameLabel', suggestVenueNameLabel.textContent);
            const suggestVenueCityLabel = document.getElementById('suggest-venue-city-label');
            if (suggestVenueCityLabel) suggestVenueCityLabel.textContent = translate('ui.suggestVenueCityLabel', suggestVenueCityLabel.textContent);
            const suggestWhyLabel = document.getElementById('suggest-why-label');
            if (suggestWhyLabel) suggestWhyLabel.textContent = translate('ui.suggestWhyLabel', suggestWhyLabel.textContent);
            const ownerNameLabel = document.getElementById('owner-name-label');
            if (ownerNameLabel) ownerNameLabel.textContent = translate('ui.suggestOwnerNameLabel', ownerNameLabel.textContent);
            const ownerEmailLabel = document.getElementById('owner-email-label');
            if (ownerEmailLabel) ownerEmailLabel.textContent = translate('ui.suggestOwnerEmailLabel', ownerEmailLabel.textContent);
            const ownerPhoneLabel = document.getElementById('owner-phone-label');
            if (ownerPhoneLabel) ownerPhoneLabel.textContent = translate('ui.suggestOwnerPhoneLabel', ownerPhoneLabel.textContent);
            const fanEmailLabel = document.getElementById('fan-email-label');
            if (fanEmailLabel) fanEmailLabel.textContent = translate('ui.fanEmailLabel', fanEmailLabel.textContent);
            const newsletterLabel = document.getElementById('suggest-newsletter-label');
            if (newsletterLabel) newsletterLabel.textContent = translate('ui.newsletterLabel', newsletterLabel.textContent);
            const suggestSubmit = document.getElementById('suggest-submit');
            if (suggestSubmit) suggestSubmit.textContent = translate('ui.suggestSubmit', suggestSubmit.textContent);
            if (suggestClose) suggestClose.setAttribute('aria-label', translate('ui.menuClose', suggestClose.getAttribute('aria-label') || 'Close'));

            const bugTitle = document.getElementById('bug-title');
            if (bugTitle) bugTitle.textContent = translate('ui.bugTitle', bugTitle.textContent);
            const bugMessageLabel = document.getElementById('bug-message-label');
            if (bugMessageLabel) bugMessageLabel.textContent = translate('ui.bugMessageLabel', bugMessageLabel.textContent);
            const bugSubmit = document.getElementById('bug-submit');
            if (bugSubmit) bugSubmit.textContent = translate('ui.bugSubmit', bugSubmit.textContent);
            if (bugClose) bugClose.setAttribute('aria-label', translate('ui.menuClose', bugClose.getAttribute('aria-label') || 'Close'));
            if (helpClose) helpClose.setAttribute('aria-label', translate('ui.menuClose', helpClose.getAttribute('aria-label') || 'Close'));

            const suggestStatus = document.getElementById('suggest-status');
            if (suggestStatus) suggestStatus.textContent = '';
            const bugStatus = document.getElementById('bug-status');
            if (bugStatus) bugStatus.textContent = '';
            if (aboutPartner) aboutPartner.textContent = translate('ui.partnerCta', aboutPartner.textContent);
            const aboutBody = document.getElementById('about-body');
            if (aboutBody) aboutBody.textContent = translate('ui.aboutBody', aboutBody.textContent);
            const aboutKeepTitle = document.getElementById('about-keep-title');
            if (aboutKeepTitle) aboutKeepTitle.textContent = translate('ui.keepInTouchTitle', aboutKeepTitle.textContent);
            const aboutPartnerTitle = document.getElementById('about-partner-title');
            if (aboutPartnerTitle) aboutPartnerTitle.textContent = translate('ui.partnerTitle', aboutPartnerTitle.textContent);
            const aboutPartnerBody = document.getElementById('about-partner-body');
            if (aboutPartnerBody) aboutPartnerBody.textContent = translate('ui.partnerBody', aboutPartnerBody.textContent);
            const introTitle = document.getElementById('intro-title');
            if (introTitle) introTitle.textContent = translate('ui.introTitle', introTitle.textContent);
            const introText = document.getElementById('intro-text');
            if (introText) introText.textContent = translate('ui.introText', introText.textContent);
            const introMapTitle = document.getElementById('intro-map-title');
            if (introMapTitle) introMapTitle.textContent = translate('ui.introMapTitle', introMapTitle.textContent);
            const introMapText = document.getElementById('intro-map-text');
            if (introMapText) introMapText.textContent = translate('ui.introMapText', introMapText.textContent);
            const introSuggestTitle = document.getElementById('intro-suggest-title');
            if (introSuggestTitle) introSuggestTitle.textContent = translate('ui.introSuggestTitle', introSuggestTitle.textContent);
            const introSuggestText = document.getElementById('intro-suggest-text');
            if (introSuggestText) introSuggestText.textContent = translate('ui.introSuggestText', introSuggestText.textContent);
            const introGrowTitle = document.getElementById('intro-grow-title');
            if (introGrowTitle) introGrowTitle.textContent = translate('ui.introGrowTitle', introGrowTitle.textContent);
            const introGrowText = document.getElementById('intro-grow-text');
            if (introGrowText) introGrowText.textContent = translate('ui.introGrowText', introGrowText.textContent);
            const introSkipLabel = document.getElementById('intro-skip-label');
            if (introSkipLabel) introSkipLabel.textContent = translate('ui.introSkip', introSkipLabel.textContent);
            if (introPrev) introPrev.textContent = translate('ui.introBack', introPrev.textContent);
            if (introNext && introSlideIndex < introSlides.length - 1) {
                introNext.textContent = translate('ui.introNext', introNext.textContent);
            } else if (introNext) {
                introNext.textContent = translate('ui.introDone', introNext.textContent);
            }

            const helpTitle = document.getElementById('help-title');
            if (helpTitle) helpTitle.textContent = translate('ui.helpTitle', helpTitle.textContent);
            const helpTagline = document.getElementById('help-tagline');
            if (helpTagline) helpTagline.textContent = translate('ui.helpTagline', helpTagline.textContent);
            const helpFindTitle = document.getElementById('help-find-title');
            if (helpFindTitle) helpFindTitle.textContent = translate('ui.helpFindTitle', helpFindTitle.textContent);
            const helpFindStep1 = document.getElementById('help-find-step-1');
            if (helpFindStep1) helpFindStep1.textContent = translate('ui.helpFindStep1', helpFindStep1.textContent);
            const helpFindStep2 = document.getElementById('help-find-step-2');
            if (helpFindStep2) helpFindStep2.textContent = translate('ui.helpFindStep2', helpFindStep2.textContent);
            const helpFindStep3 = document.getElementById('help-find-step-3');
            if (helpFindStep3) helpFindStep3.textContent = translate('ui.helpFindStep3', helpFindStep3.textContent);
            const helpFavoritesTitle = document.getElementById('help-favorites-title');
            if (helpFavoritesTitle) helpFavoritesTitle.textContent = translate('ui.helpFavoritesTitle', helpFavoritesTitle.textContent);
            const helpFavoritesStep1 = document.getElementById('help-favorites-step-1');
            if (helpFavoritesStep1) helpFavoritesStep1.textContent = translate('ui.helpFavoritesStep1', helpFavoritesStep1.textContent);
            const helpFavoritesStep2 = document.getElementById('help-favorites-step-2');
            if (helpFavoritesStep2) helpFavoritesStep2.textContent = translate('ui.helpFavoritesStep2', helpFavoritesStep2.textContent);
            const helpFavoritesStep3 = document.getElementById('help-favorites-step-3');
            if (helpFavoritesStep3) helpFavoritesStep3.textContent = translate('ui.helpFavoritesStep3', helpFavoritesStep3.textContent);
            const helpSuggestTitle = document.getElementById('help-suggest-title');
            if (helpSuggestTitle) helpSuggestTitle.textContent = translate('ui.helpSuggestTitle', helpSuggestTitle.textContent);
            const helpSuggestStep1 = document.getElementById('help-suggest-step-1');
            if (helpSuggestStep1) helpSuggestStep1.textContent = translate('ui.helpSuggestStep1', helpSuggestStep1.textContent);
            const helpSuggestStep2 = document.getElementById('help-suggest-step-2');
            if (helpSuggestStep2) helpSuggestStep2.textContent = translate('ui.helpSuggestStep2', helpSuggestStep2.textContent);
            const helpSuggestStep3 = document.getElementById('help-suggest-step-3');
            if (helpSuggestStep3) helpSuggestStep3.textContent = translate('ui.helpSuggestStep3', helpSuggestStep3.textContent);

            document.querySelectorAll('[data-category-heading]').forEach(heading => {
                const cat = heading.getAttribute('data-category-heading');
                heading.textContent = filterCategoryLabel(cat);
            });

            renderCountWrappers();
        }

        function openMenu() {
            if (!menuDrawer || !menuBackdrop) return;
            menuDrawer.classList.add('open');
            menuDrawer.inert = false;
            menuToggle?.setAttribute('aria-expanded', 'true');
            menuClose?.focus({ preventScroll: true });
            menuBackdrop.classList.add('visible');
            updateBodyScrollLock();
        }

        function closeMenu() {
            if (!menuDrawer || !menuBackdrop) return;
            const hadFocus = menuDrawer.contains(document.activeElement);
            menuDrawer.classList.remove('open');
            if (hadFocus) menuToggle?.focus({ preventScroll: true });
            menuDrawer.inert = true;
            menuToggle?.setAttribute('aria-expanded', 'false');
            menuBackdrop.classList.remove('visible');
            updateBodyScrollLock();
        }

        function openPanel(panel) {
            if (!panel) return;
            panel.classList.add('open');
            panel.setAttribute('aria-hidden', 'false');
            updateBodyScrollLock();
        }

        function closePanel(panel) {
            if (!panel) return;
            panel.classList.remove('open');
            panel.setAttribute('aria-hidden', 'true');
            updateBodyScrollLock();
        }

        function setSuggestRole(role) {
            suggestRoleButtons.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.suggestRole === role);
            });
            const suggestWhy = document.getElementById('suggest-why');
            if (suggestWhy) {
                suggestWhy.style.display = role === 'owner' ? 'none' : 'block';
            }
            const suggestMessage = document.getElementById('suggest-message');
            if (suggestMessage) {
                suggestMessage.style.display = role === 'owner' ? 'block' : 'none';
            }
            const fanEmail = document.getElementById('suggest-fan-email');
            if (fanEmail) {
                fanEmail.style.display = role === 'owner' ? 'none' : 'block';
            }
            const newsletter = document.getElementById('suggest-newsletter');
            if (newsletter) {
                newsletter.style.display = role === 'owner' ? 'none' : 'flex';
            }
            const optIn = document.getElementById('suggest-newsletter-input');
            const emailInput = document.getElementById('fan-email');
            if (optIn) {
                optIn.disabled = role === 'owner';
                if (optIn.disabled) optIn.checked = false;
            }
            if (emailInput) {
                emailInput.disabled = role === 'owner';
                emailInput.required = Boolean(optIn?.checked);
            }
            if (ownerFields) {
                const isOwner = role === 'owner';
                ownerFields.style.display = isOwner ? 'block' : 'none';
                const ownerName = document.getElementById('owner-name');
                const ownerEmail = document.getElementById('owner-email');
                if (ownerName) ownerName.required = isOwner;
                if (ownerEmail) ownerEmail.required = isOwner;
            }
        }

        function updateLanguageToggleActive() {
            const buttons = document.querySelectorAll('#language-toggle button');
            buttons.forEach(btn => {
                const lang = btn.getAttribute('data-lang');
                btn.classList.toggle('active', lang === currentLang);
            });
        }

        function setLanguage(lang, { skipUrlUpdate = false } = {}) {
            if (!supportedLanguages.includes(lang)) return;
            currentLang = lang;
            document.documentElement.lang = lang;
            try {
                localStorage.setItem(languageKey, lang);
            } catch (err) {
                // Ignore storage errors.
            }

            if (!skipUrlUpdate) {
                const url = new URL(window.location.href);
                url.searchParams.set('lang', lang);
                history.replaceState({}, '', url.toString());
            }

            applyTranslations();
            updateLanguageToggleActive();
            createFilterButtons();
            updateQuickFilterLabels();
            updateFilterCount();
            updateMap();
            updateListView();
        }

        function updateIntroSlides() {
            if (!introSlides.length) return;
            introSlides.forEach((slide, index) => {
                slide.classList.toggle('active', index === introSlideIndex);
            });
            introDots.forEach((dot, index) => {
                dot.classList.toggle('active', index === introSlideIndex);
            });
            if (introPrev) introPrev.disabled = introSlideIndex === 0;
            if (introNext) {
                const isLast = introSlideIndex === introSlides.length - 1;
                introNext.textContent = isLast
                    ? translate('ui.introDone', introNext.textContent)
                    : translate('ui.introNext', introNext.textContent);
            }
        }

        function showIntroIfNeeded() {
            if (!introOverlay) return;
            let hideIntro = false;
            try {
                hideIntro = localStorage.getItem('friendlyspaces_hide_intro') === 'true';
            } catch (err) {
                // ignore storage errors
            }
            if (!hideIntro) {
                introSlideIndex = 0;
                updateIntroSlides();
                introOverlay.classList.remove('hidden');
                introOverlay.setAttribute('aria-hidden', 'false');
                updateBodyScrollLock();
            }
        }

        function closeIntro() {
            if (!introOverlay) return;
            if (introSkip && introSkip.checked) {
                try {
                    localStorage.setItem('friendlyspaces_hide_intro', 'true');
                } catch (err) {
                    // ignore storage errors
                }
            }
            introOverlay.classList.add('hidden');
            introOverlay.setAttribute('aria-hidden', 'true');
            updateBodyScrollLock();
        }

        function goToPrevIntroSlide() {
            if (introSlideIndex === 0) return;
            introSlideIndex -= 1;
            updateIntroSlides();
        }

        function goToNextIntroSlide() {
            if (introSlideIndex >= introSlides.length - 1) {
                closeIntro();
                return;
            }
            introSlideIndex += 1;
            updateIntroSlides();
        }

        function openFilterSheet() {
            if (!isMobile()) return;
            sidebar.classList.remove('expanded');
            sidebar.classList.add('show');
            sheetBackdrop.classList.add('visible');
            updateBodyScrollLock();
        }

        function closeFilterSheet(force = false) {
            if (!isMobile() && !force) return;
            sidebar.classList.remove('expanded');
            sidebar.classList.remove('show');
            sheetBackdrop.classList.remove('visible');
            updateBodyScrollLock();
        }

        function expandFilterSheet() {
            if (!isMobile() || !isCompactLandscape()) return;
            if (!sidebar.classList.contains('show')) return;
            sidebar.classList.add('expanded');
        }

        function handleResize() {
            setAppShellHeight();
            updateLandscapeNotchMaskSide();
            if (!isMobile()) {
                closeFilterSheet(true);
            }
            updateBodyScrollLock();
            if (mapPanel && !mapPanel.classList.contains('hidden')) {
                setTimeout(() => map.invalidateSize(), 100);
            }
        }

        function venueHasCategoryFilter(venue, category, filterId) {
            const values = venue?.filters?.[category] || [];
            if (values.includes(filterId)) return true;

            // Backward-compatible alias: treat food halls as restaurants.
            if (category === 'venueType' && filterId === 'restaurant') {
                return values.includes('food-hall');
            }

            return false;
        }

        // Helper: Count venues with specific filter
        function countVenuesWithFilter(category, filterId) {
            return venues.filter(v => venueHasCategoryFilter(v, category, filterId)).length;
        }

        // Create filter buttons
        function createFilterButtons() {
            ensureActiveFilterCategories();
            Object.keys(filterDefinitions).forEach(category => {
                const container = document.getElementById(`${category}-filters`);
                if (!container) return;
                container.innerHTML = '';

                const heading = document.querySelector(`[data-category-heading="${category}"]`);
                if (heading) {
                    heading.textContent = filterCategoryLabel(category);
                }

                filterDefinitions[category].forEach(filter => {
                    const count = countVenuesWithFilter(category, filter.id);

                    const button = document.createElement('button');
                    button.className = `filter-button${filter.id === 'friendly-spaces' ? ' wide' : ''}`;
                    if (activeFilters[category].includes(filter.id)) {
                        button.classList.add('active');
                    }
                    button.setAttribute('aria-pressed', String(activeFilters[category].includes(filter.id)));
                    button.dataset.category = category;
                    button.dataset.value = filter.id;

                    const labelSpan = document.createElement('span');
                    labelSpan.textContent = filterOptionLabel(category, filter.id);

                    const countSpan = document.createElement('span');
                    countSpan.className = 'count';
                    countSpan.textContent = count;

                    button.appendChild(labelSpan);
                    button.appendChild(countSpan);

                    button.addEventListener('click', () => handleFilterClick(button, category, filter.id));

                    container.appendChild(button);
                });
            });
        }

        // Handle filter button clicks
        function handleFilterClick(button, category, value) {
            ensureActiveFilterCategories();
            button.classList.toggle('active');
            button.setAttribute('aria-pressed', String(button.classList.contains('active')));

            if (button.classList.contains('active')) {
                activeFilters[category].push(value);
            } else {
                activeFilters[category] = activeFilters[category].filter(v => v !== value);
            }

            updateMap();
            updateFilterCount();
            syncQuickFilterPills();
            trackFilterChange(category, value, button.classList.contains('active'), 'filter_panel');
        }

        // Search functionality with dropdown
        const searchInput = document.getElementById('search-input');
        const searchDropdown = document.getElementById('search-dropdown');
        const topSearchInput = document.getElementById('top-search-input');
        const topSearchDropdown = document.getElementById('top-search-dropdown');

        function updateSearchDropdown(query, dropdownEl) {
            const targetDropdown = dropdownEl || searchDropdown;
            const isTopSearch = targetDropdown === topSearchDropdown;
            const itemClass = isTopSearch ? 'top-search-dropdown-item' : 'search-dropdown-item';

            if (!query || query.length < 2) {
                targetDropdown.classList.remove('show');
                return;
            }

            const suggestions = [];

            // Add matching cities
            Object.keys(cityCoordinates).forEach(city => {
                if (city.toLowerCase().includes(query)) {
                    const venueCount = venues.filter(v => v.city.toLowerCase() === city.toLowerCase()).length;
                    suggestions.push({
                        type: 'city',
                        name: city.charAt(0).toUpperCase() + city.slice(1),
                        count: formatCountTranslation('cityCount', venueCount, count => `${count} venues`)
                    });
                }
            });

            // Add matching venues
            venues.forEach(venue => {
                if (venue.name.toLowerCase().includes(query) ||
                    venue.address.toLowerCase().includes(query)) {
                    suggestions.push({
                        type: 'venue',
                        name: venue.name,
                        city: venue.city,
                        venue: venue
                    });
                }
            });

            if (suggestions.length === 0) {
                targetDropdown.classList.remove('show');
                return;
            }

            // Limit to 5 suggestions
            const limitedSuggestions = suggestions.slice(0, 5);

            targetDropdown.innerHTML = limitedSuggestions.map(s => {
                if (s.type === 'city') {
                    return `<div class="${itemClass}" data-type="city" data-city="${s.name.toLowerCase()}">
                        <strong>📍 ${s.name}</strong> - ${s.count}
                    </div>`;
                } else {
                    return `<div class="${itemClass}" data-type="venue" data-venue="${s.name}">
                        ${s.name} <span class="city-label">- ${s.city}</span>
                    </div>`;
                }
            }).join('');

            targetDropdown.classList.add('show');

            // Add click handlers
            targetDropdown.querySelectorAll(`.${itemClass}`).forEach(item => {
                item.addEventListener('click', () => {
                    const type = item.dataset.type;
                    if (type === 'city') {
                        const city = item.dataset.city;
                        handleCitySearch(city, isTopSearch);
                    } else {
                        const venueName = item.dataset.venue;
                        handleVenueSearch(venueName, isTopSearch);
                    }
                });
            });
        }

        function handleCitySearch(city, fromTopSearch = false) {
            const displayCity = city.charAt(0).toUpperCase() + city.slice(1);
            searchInput.value = displayCity;
            topSearchInput.value = displayCity;
            searchQuery = city.toLowerCase();
            searchDropdown.classList.remove('show');
            topSearchDropdown.classList.remove('show');

            // Zoom to city
            const coords = cityCoordinates[city.toLowerCase()];
            if (coords) {
                map.setView([coords[0], coords[1]], coords[2]);
            }

            updateMap();
        }

        function handleVenueSearch(venueName, fromTopSearch = false) {
            const venue = venues.find(v => v.name === venueName);
            if (venue) {
                searchInput.value = venue.name;
                topSearchInput.value = venue.name;
                searchQuery = venue.name.toLowerCase();
                searchDropdown.classList.remove('show');
                topSearchDropdown.classList.remove('show');

                // Zoom to venue
                map.setView(venue.fallbackCoords, 15);

                updateMap();

                // Open venue popup after a short delay
                setTimeout(() => {
                    const marker = markers.find(m => m.venue.name === venueName);
                    if (marker) {
                        marker.marker.openPopup();
                    }
                }, 300);
            }
        }

        // Sync both search inputs
        function syncSearchInputs(sourceInput, sourceDropdown) {
            searchQuery = sourceInput.value.toLowerCase();

            // Sync the other input
            if (sourceInput === searchInput) {
                topSearchInput.value = sourceInput.value;
                updateSearchDropdown(searchQuery, searchDropdown);
            } else {
                searchInput.value = sourceInput.value;
                updateSearchDropdown(searchQuery, topSearchDropdown);
            }

            updateMap();
        }

        searchInput.addEventListener('input', (e) => {
            syncSearchInputs(searchInput, searchDropdown);
        });

        topSearchInput.addEventListener('input', (e) => {
            syncSearchInputs(topSearchInput, topSearchDropdown);
        });

        searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchQuery) {
                const cityMatch = Object.keys(cityCoordinates).find(city =>
                    city === searchQuery ||
                    searchQuery.includes(city)
                );

                if (cityMatch) {
                    handleCitySearch(cityMatch);
                } else {
                    searchDropdown.classList.remove('show');
                }
            }
        });

        topSearchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter' && searchQuery) {
                const cityMatch = Object.keys(cityCoordinates).find(city =>
                    city === searchQuery ||
                    searchQuery.includes(city)
                );

                if (cityMatch) {
                    handleCitySearch(cityMatch, true);
                } else {
                    topSearchDropdown.classList.remove('show');
                }
            }
        });

        // Close dropdowns when clicking outside
        document.addEventListener('click', (e) => {
            if (!searchInput.contains(e.target) && !searchDropdown.contains(e.target)) {
                searchDropdown.classList.remove('show');
            }
            if (!topSearchInput.contains(e.target) && !topSearchDropdown.contains(e.target)) {
                topSearchDropdown.classList.remove('show');
            }
        });

        function resetAllFilters() {
            selectedCity = '';
            updateCityFilter();
            const clearedFilterCount = Object.values(activeFilters).flat().length + (nearMeActive ? 1 : 0);
            activeFilters = Object.keys(filterDefinitions).reduce((nextFilters, category) => {
                nextFilters[category] = [];
                return nextFilters;
            }, {});
            nearMeActive = false;
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            if (topSearchInput) topSearchInput.value = '';
            setActiveView(activeTab === 'favorites' ? favoritesReturnView : activeTab);
            createFilterButtons();
            updateFilterCount();
            isInitialLoad = true;
            updateMap();
            updateListView();
            if (clearedFilterCount > 0) {
                trackEvent('filter_clear_all', {
                    cleared_filter_count: clearedFilterCount,
                    results_count: getVisibleVenues().length,
                    language: currentLang
                });
            }
        }

        // Clear filters (legacy button removed; keep safe guard)
        const legacyClearBtn = document.getElementById('clear-filters');
        if (legacyClearBtn) {
            legacyClearBtn.addEventListener('click', resetAllFilters);
        }

        // Update filter count display
        function updateFilterCount() {
            const total = Object.values(activeFilters).flat().length;
            if (applyFiltersButton) {
                const label = total > 0 || searchQuery || nearMeActive || selectedCity
                    ? `${translate('ui.showSpaces', 'Show')} ${getVisibleVenues().length} ${translate('ui.spacesLabel', 'spaces')}`
                    : translate('ui.showAllSpaces', 'Show all spaces');
                applyFiltersButton.textContent = label;
            }
        }

        function getNearMeRadiusMeters() {
            if (!userLocationLatLng) return 0;
            const withCoords = venues
                .filter(v => Array.isArray(v.fallbackCoords) && v.fallbackCoords.length >= 2)
                .map(v => map.distance(userLocationLatLng, L.latLng(v.fallbackCoords[0], v.fallbackCoords[1])))
                .sort((a, b) => a - b);
            if (!withCoords.length) return 0;
            const nearest = withCoords[0];
            return Math.min(Math.max(nearest * 1.8, 2000), 7000);
        }

        function venueMatchesBaseFilters(venue) {
            if (selectedCity && venue.city !== selectedCity) return false;
            if (activeTab === 'favorites' && !isFavorite(venue.name)) {
                return false;
            }

            // Search filter
            if (searchQuery) {
                const searchMatch =
                    venue.name.toLowerCase().includes(searchQuery) ||
                    venue.address.toLowerCase().includes(searchQuery) ||
                    venue.city.toLowerCase().includes(searchQuery);

                if (!searchMatch) return false;
            }

            // Category filters (AND logic - venue must have ALL selected filters)
            for (const [category, selectedFilters] of Object.entries(activeFilters)) {
                if (selectedFilters.length > 0) {
                    // Check if venue has ALL selected filters in this category
                    const hasAllFilters = selectedFilters.every(filter =>
                        venueHasCategoryFilter(venue, category, filter)
                    );
                    if (!hasAllFilters) return false;
                }
            }

            return true;
        }

        // Check if venue matches filters
        function venueMatchesFilters(venue) {
            if (!venueMatchesBaseFilters(venue)) {
                return false;
            }

            if (nearMeActive && (!userLocationLatLng || !Array.isArray(venue.fallbackCoords) || venue.fallbackCoords.length < 2)) {
                return false;
            }

            return true;
        }

        function getVisibleVenues() {
            const filtered = venues.filter(venueMatchesFilters);

            if (!nearMeActive || !userLocationLatLng) {
                return filtered;
            }

            const withDistance = filtered
                .map((venue) => ({
                    venue,
                    distance: map.distance(
                        userLocationLatLng,
                        L.latLng(venue.fallbackCoords[0], venue.fallbackCoords[1])
                    )
                }))
                .sort((a, b) => a.distance - b.distance);

            const withinRadius = withDistance.filter(({ distance }) => distance <= nearMeRadiusMeters);

            if (withinRadius.length > 0) {
                return withinRadius.map(({ venue }) => venue);
            }

            const normalizeCity = (city) => (city || '').trim().toLowerCase();
            const nearestCity = normalizeCity(withDistance[0]?.venue?.city);

            if (!nearestCity) {
                return [withDistance[0].venue];
            }

            return withDistance
                .filter(({ venue }) => normalizeCity(venue.city) === nearestCity)
                .map(({ venue }) => venue);
        }

        function applySelectedMarkerStyle() {
            markers.forEach(({ venue, marker }) => {
                marker.setIcon(venue.name === selectedVenueName ? markerIconSelected : markerIcon);
            });
        }

        const popupTagColor = '#1E52BA';

        // Create popup content with color-coded tags and image slider
        function createPopup(venue) {
            const hoursLabel = translate('popup.hours', 'Hours');
            const appleMapsLabel = translate('popup.appleMaps', 'Apple Maps');
            const favoriteAddLabel = translate('ui.favoriteAdd', 'Save');
            const favoriteRemoveLabel = translate('ui.favoriteRemove', 'Saved');
            const seasonalNote = venue.seasonalNote
                ? (venue.seasonalNote[currentLang] || venue.seasonalNote.en || venue.seasonalNote.de)
                : null;

            const localizedDescription = getVenueText(venue, 'description');
            const localizedHours = getVenueText(venue, 'hours');

            const tagsByCategory = Object.entries(venue.filters)
                .map(([category, values]) => {
                    const tags = values.map(v => {
                        const label = filterOptionLabel(category, v);
                        return `<span class="venue-tag" style="background: ${popupTagColor}; color: white;">${label}</span>`;
                    }).join('');
                    return tags;
                })
                .join('');

            const mapsUrl = getDirectionsUrl(venue);
            const useExplicitAppleMapsOption = isApplePlatform();
            const phoneHref = formatPhoneHref(venue.phone);
            const navigateSvg = `<svg viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z" fill="none"/></svg>`;

            // Image slider (if images available)
            let sliderHtml = '';
            if (venue.images && venue.images.length > 0) {
                const sliderId = `slider-${venue.name.replace(/\s+/g, '-').toLowerCase()}`;
                const imagesHtml = venue.images.map((img, i) =>
                    `<img src="${img}" alt="${venue.name}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" ${i === 0 ? 'fetchpriority="high"' : 'fetchpriority="low"'} width="320" height="150">`
                ).join('');
                sliderHtml = `
                    <div class="venue-slider" id="${sliderId}">
                        <span class="popup-slider-handle" aria-hidden="true"></span>
                        <div class="slider-container">${imagesHtml}</div>
                        ${venue.images.length > 1 ? `
                            <div class="slider-dots">${venue.images.map((_, i) =>
                                `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`
                            ).join('')}</div>
                        ` : ''}
                    </div>
                `;
            }

            return `
                <div class="popup-card">
                    ${sliderHtml}
                    <div class="popup-header">
                        <h3 class="popup-title" onclick="openVenueProfile('${venue.name.replace(/'/g, "\\'")}')">${venue.name}</h3>
                        <button class="favorite-toggle ${isFavorite(venue.name) ? 'active' : ''}" data-venue="${venue.name}">
                            <svg class="favorite-icon ${isFavorite(venue.name) ? 'filled' : ''}" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 6.6c-1.4-1.4-3.8-1.4-5.2 0L12 10.2 8.4 6.6C7 5.2 4.6 5.2 3.2 6.6c-1.4 1.4-1.4 3.8 0 5.2L12 21l8.8-9.2c1.4-1.4 1.4-3.8 0-5.2z"></path>
                            </svg>
                            <span class="favorite-label">${isFavorite(venue.name) ? favoriteRemoveLabel : favoriteAddLabel}</span>
                        </button>
                    </div>
                    <p class="popup-address"><span class="popup-icon">${navigateSvg}</span> <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${venue.address}${useExplicitAppleMapsOption ? ` · ${appleMapsLabel}` : ''}</a></p>
                    ${localizedHours ? `<p class="popup-hours"><strong>${hoursLabel}:</strong> ${localizedHours}</p>` : ''}
                    ${seasonalNote ? `<p class="popup-seasonal">${seasonalNote}</p>` : ''}
                    <p class="popup-desc">${localizedDescription}</p>
                    <div class="venue-tags">${tagsByCategory}</div>
                    <button class="popup-cta" onclick="openVenueProfile('${venue.name.replace(/'/g, "\\'")}')">${translate('popup.viewProfile', 'View Full Profile')}</button>
                </div>
            `;
        }

        // Update map markers
        function updateMap() {
            // Clear existing markers from cluster group
            markerClusterGroup.clearLayers();
            markers = [];

            const bounds = L.latLngBounds([]);
            let visibleCount = 0;
            const visibleVenues = getVisibleVenues();

            // Add markers for matching venues
            visibleVenues.forEach(venue => {
                if (!Array.isArray(venue.fallbackCoords) || venue.fallbackCoords.length < 2) {
                    return;
                }
                const coords = venue.fallbackCoords;
                const marker = L.marker(coords, { icon: markerIcon, title: venue.name, alt: venue.name });
                marker.on('click', () => {
                    selectedVenueName = venue.name;
                    applySelectedMarkerStyle();
                    openDetailModal(venue, 'map_pin');
                    centerPinAboveSheet(coords, 'half');
                    setTimeout(() => centerPinAboveSheet(coords, 'half'), 320);
                });

                // Add marker to cluster group instead of directly to map
                markerClusterGroup.addLayer(marker);

                markers.push({ venue, marker, coords });
                bounds.extend(coords);
                visibleCount++;
            });

            // Update count
            // Only auto-zoom on initial load
            if (isInitialLoad) {
                if (bounds.isValid()) {
                    map.fitBounds(bounds, {
                        paddingTopLeft: [50, 50],
                        paddingBottomRight: [50, 50],
                        maxZoom: 9
                    });
                } else {
                    map.setView([46.8182, 8.2275], 8);
                }
                isInitialLoad = false;
            }
            applySelectedMarkerStyle();
            updateListView();
            updateFilterCount();
        }

        function renderVenueCard(venue) {
            const description = getVenueText(venue, 'description');
            const image = venue.images && venue.images.length > 0 ? venue.images[0] : '';
            const isFav = isFavorite(venue.name);
            const tags = venue.filters?.venueType || [];
            const tagHtml = tags.map(tag => {
                const label = filterOptionLabel('venueType', tag);
                return `<span class="venue-card-tag">${label}</span>`;
            }).join('');

            return `
                <article class="venue-card" data-venue="${venue.name}">
                    ${image
                        ? `<img class="venue-card-image" src="${image}" alt="${venue.name}" loading="lazy" decoding="async">`
                        : `<div class="venue-card-image" aria-hidden="true"></div>`}
                    <div class="venue-card-header">
                        <h3 class="venue-card-title"><button type="button" class="venue-card-open">${escapeHtml(venue.name)}</button></h3>
                        <button class="venue-card-favorite ${isFav ? 'active' : ''}" data-venue="${venue.name}" type="button" aria-pressed="${isFav}" aria-label="${escapeHtml(translate('ui.favoritesTab', 'Favorites') + ': ' + venue.name)}">
                            <svg class="favorite-icon ${isFav ? 'filled' : ''}" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 6.6c-1.4-1.4-3.8-1.4-5.2 0L12 10.2 8.4 6.6C7 5.2 4.6 5.2 3.2 6.6c-1.4 1.4-1.4 3.8 0 5.2L12 21l8.8-9.2c1.4-1.4 1.4-3.8 0-5.2z"></path>
                            </svg>
                        </button>
                    </div>
                    <div class="venue-card-meta">${venue.city}</div>
                    <div class="venue-card-address">${venue.address}</div>
                    <div class="venue-card-description">${description}</div>
                    <div class="venue-card-tags">${tagHtml}</div>
                </article>
            `;
        }

        function updateListView() {
            if (!listCards || !listEmpty) return;
            const visibleVenues = getVisibleVenues();
            listCards.innerHTML = visibleVenues.map(renderVenueCard).join('');

            const emptyTitle = activeTab === 'favorites'
                ? translate('ui.noFavoritesTitle', 'No favorites yet')
                : translate('ui.noVenuesTitle', 'No venues found');
            const emptyBody = activeTab === 'favorites'
                ? translate('ui.noFavoritesBody', 'Tap the heart to save places.')
                : translate('ui.noVenuesBody', 'Try clearing filters or searching another city.');

            listEmpty.hidden = visibleVenues.length > 0;
            listCards.hidden = visibleVenues.length === 0;
            listEmpty.innerHTML = `<strong style="display:block; margin-bottom:6px;">${emptyTitle}</strong>${emptyBody}`;
        }

        function createDetailProfileContent(venue) {
            const hoursLabel = translate('popup.hours', 'Hours');
            const specialtyLabel = translate('popup.specialty', 'Specialty');
            const navigateLabel = translate('popup.navigate', 'Navigate');
            const appleMapsLabel = translate('popup.appleMaps', 'Apple Maps');
            const callLabel = translate('popup.call', 'Call');
            const websiteLabel = translate('popup.website', 'Website');
            const instagramLabel = translate('popup.instagram', 'Instagram');
            const noteLabel = translate('popup.note', 'Note');

            const seasonalNote = venue.seasonalNote
                ? (venue.seasonalNote[currentLang] || venue.seasonalNote.en || venue.seasonalNote.de)
                : null;

            const localizedDescription = getVenueText(venue, 'description');
            const localizedHours = getVenueText(venue, 'hours');
            const formattedHours = formatHoursForProfile(localizedHours);
            const localizedSpecialty = getVenueText(venue, 'specialty');

            const mapsUrl = getDirectionsUrl(venue);
            const appleMapsUrl = getAppleMapsUrl(venue);
            const useExplicitAppleMapsOption = isApplePlatform();
            const phoneHref = formatPhoneHref(venue.phone);
            const isFav = isFavorite(venue.name);

            // Build image slider
            let sliderHtml = '';
            let sliderId = '';
            if (venue.images && venue.images.length > 0) {
                sliderId = `detail-slider-${venue.name.replace(/\s+/g, '-').toLowerCase()}`;
                const imagesHtml = venue.images.map((img, i) =>
                    `<img src="${img}" alt="${venue.name}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async" ${i === 0 ? 'fetchpriority="high"' : 'fetchpriority="low"'} width="1200" height="900">`
                ).join('');
                const dotsHtml = venue.images.map((_, i) =>
                    `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" data-slider-owner="${sliderId}"></span>`
                ).join('');

                sliderHtml = `
                    <div class="venue-slider" id="${sliderId}">
                        <div class="slider-container">${imagesHtml}</div>
                        ${venue.images.length > 1 ? `
                            <div class="slider-dots">${dotsHtml}</div>
                        ` : ''}
                    </div>
                `;
            }

            // Build tags by category — plain text labels only, no Unicode symbols
            const tagsHtml = Object.entries(venue.filters)
                .filter(([_, values]) => values.length > 0)
                .map(([category, values]) => {
                    return values.map(v => {
                        let label = filterOptionLabel(category, v);
                        // Strip any leading Unicode symbols/bullets
                        label = label.replace(/^[\s○•△★□◇◈◎◊◆►▸▪▫●◦‣⁃※✦✧⬥⬦♦♢☆✶✴✵✷✸❖⚬⬡⬢]+/, '').trim();
                        return `<span class="detail-tag">${label}</span>`;
                    }).join('');
                })
                .join('');

            // Icon buttons row: Navigate, Call, Website, Instagram
            const navigateSvg = `<svg viewBox="0 0 24 24"><path d="M3 11l19-9-9 19-2-8-8-2z" fill="none"/></svg>`;
            const callSvg = `<svg viewBox="0 0 24 24"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>`;
            const websiteSvg = `<svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z"/></svg>`;
            const instagramSvg = `<svg viewBox="0 0 24 24"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg>`;

            // Determine Instagram URL from venue data (use instagram field or fall back to empty)
            const instagramUrl = venue.instagram || '';

            const actionButtons = useExplicitAppleMapsOption
                ? [
                    `<a class="detail-icon-btn" href="${appleMapsUrl}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="apple-maps">
                        <span class="icon-circle">${navigateSvg}</span>
                        <span class="icon-label">${appleMapsLabel}</span>
                    </a>`
                ]
                : [
                    `<a class="detail-icon-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="directions">
                        <span class="icon-circle">${navigateSvg}</span>
                        <span class="icon-label">${navigateLabel}</span>
                    </a>`
                ];

            if (phoneHref) {
                actionButtons.push(`
                    <a class="detail-icon-btn" href="${phoneHref}" data-analytics-link="true" data-link-type="phone">
                        <span class="icon-circle">${callSvg}</span>
                        <span class="icon-label">${callLabel}</span>
                    </a>
                `);
            }

            if (venue.website) {
                actionButtons.push(`
                    <a class="detail-icon-btn" href="${venue.website}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="website">
                        <span class="icon-circle">${websiteSvg}</span>
                        <span class="icon-label">${websiteLabel}</span>
                    </a>
                `);
            }

            if (instagramUrl) {
                actionButtons.push(`
                    <a class="detail-icon-btn" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="instagram">
                        <span class="icon-circle">${instagramSvg}</span>
                        <span class="icon-label">${instagramLabel}</span>
                    </a>
                `);
            }

            const iconButtonsHtml = `
                <div class="detail-icon-buttons">
                    ${actionButtons.join('')}
                </div>
            `;

            return `
                <div class="detail-hero">
                    ${sliderHtml}
                    <div class="detail-hero-overlay">
                        <div class="detail-hero-info">
                            <h2 class="detail-hero-name">${venue.name}</h2>
                            <p class="detail-hero-address">${venue.address}</p>
                        </div>
                        <button class="detail-favorite-btn ${isFav ? 'active' : ''}" data-venue="${venue.name}" type="button" aria-pressed="${isFav}" aria-label="${escapeHtml(translate('ui.favoritesTab', 'Favorites') + ': ' + venue.name)}">
                            <svg class="favorite-icon ${isFav ? 'filled' : ''}" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 6.6c-1.4-1.4-3.8-1.4-5.2 0L12 10.2 8.4 6.6C7 5.2 4.6 5.2 3.2 6.6c-1.4 1.4-1.4 3.8 0 5.2L12 21l8.8-9.2c1.4-1.4 1.4-3.8 0-5.2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="detail-content">
                    <div class="detail-summary">
                        <h2 class="detail-summary-name">${venue.name}</h2>
                        <p class="detail-summary-address">${venue.address}</p>
                    </div>
                    ${iconButtonsHtml}

                    <div class="detail-section">
                        <p class="detail-description">${localizedDescription}</p>
                    </div>

                    <div class="detail-section">
                        <div class="detail-info-row">
                            <span class="detail-info-label">${hoursLabel}</span>
                            <div class="detail-info-value detail-info-hours">${formattedHours}</div>
                        </div>
                        ${seasonalNote ? `
                            <div class="detail-info-row">
                                <span class="detail-info-label">${noteLabel}</span>
                                <span class="detail-info-value seasonal">${seasonalNote}</span>
                            </div>
                        ` : ''}
                        <div class="detail-info-row">
                            <span class="detail-info-label">${specialtyLabel}</span>
                            <span class="detail-info-value">${localizedSpecialty}</span>
                        </div>
                    </div>

                    <div class="detail-section">
                        <h3 class="detail-section-title">${translate('popup.features', 'Features')}</h3>
                        <div class="detail-tags">${tagsHtml}</div>
                    </div>
                </div>
            `;
        }

        function createDetailHalfBandContent(venue) {
            const sliderId = venue.images && venue.images.length > 0
                ? `detail-slider-${venue.name.replace(/\s+/g, '-').toLowerCase()}`
                : '';
            const isFav = isFavorite(venue.name);
            const dotsHtml = sliderId && venue.images && venue.images.length > 1
                ? `
                    <div class="detail-summary-dots">
                        ${venue.images.map((_, i) =>
                            `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}" data-slider-owner="${sliderId}"></span>`
                        ).join('')}
                    </div>
                `
                : '';

            return `
                ${dotsHtml}
                <div class="detail-summary-head">
                    <div class="detail-summary-copy">
                        <h2 class="detail-summary-name">${venue.name}</h2>
                        <p class="detail-summary-address">${venue.address}</p>
                    </div>
                    <button class="detail-favorite-btn detail-summary-favorite ${isFav ? 'active' : ''}" data-venue="${venue.name}" type="button" aria-pressed="${isFav}" aria-label="${escapeHtml(translate('ui.favoritesTab', 'Favorites') + ': ' + venue.name)}">
                        <svg class="favorite-icon ${isFav ? 'filled' : ''}" viewBox="0 0 24 24" aria-hidden="true">
                            <path d="M20.8 6.6c-1.4-1.4-3.8-1.4-5.2 0L12 10.2 8.4 6.6C7 5.2 4.6 5.2 3.2 6.6c-1.4 1.4-1.4 3.8 0 5.2L12 21l8.8-9.2c1.4-1.4 1.4-3.8 0-5.2z"></path>
                        </svg>
                    </button>
                </div>
            `;
        }

        const preloadedVenueImageUrls = new Set();

        function preloadImageUrl(src, { eager = false } = {}) {
            if (!src || preloadedVenueImageUrls.has(src)) return;
            preloadedVenueImageUrls.add(src);

            const img = new Image();
            img.decoding = 'async';
            img.loading = eager ? 'eager' : 'lazy';
            img.fetchPriority = eager ? 'high' : 'low';
            img.src = src;
        }

        function shouldLimitDeferredImagePrefetch() {
            const connection =
                navigator.connection ||
                navigator.mozConnection ||
                navigator.webkitConnection;

            if (!connection) return false;
            if (connection.saveData) return true;

            const effectiveType = (connection.effectiveType || '').toLowerCase();
            return effectiveType === 'slow-2g' || effectiveType === '2g';
        }

        function preloadVenueHeroImages() {
            const firstImages = [...new Set(
                venues
                    .map((venue) => Array.isArray(venue.images) && venue.images.length ? venue.images[0] : null)
                    .filter(Boolean)
            )];

            firstImages.forEach((src) => preloadImageUrl(src, { eager: true }));
        }

        function preloadVenueGalleryImages(venue) {
            if (shouldLimitDeferredImagePrefetch()) return;
            if (!Array.isArray(venue?.images) || venue.images.length <= 1) return;

            const galleryImages = [...new Set(venue.images.slice(1).filter(Boolean))];
            if (!galleryImages.length) return;

            const preloadAll = () => {
                galleryImages.forEach((src) => preloadImageUrl(src));
            };

            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(preloadAll, { timeout: 1200 });
            } else {
                setTimeout(preloadAll, 150);
            }
        }

        function setDetailSnap(snap) {
            if (!detailModal) return;
            const card = detailModal.querySelector('.detail-modal-card');
            if (!card) return;
            const normalized = ['half', 'full'].includes(snap) ? snap : 'half';
            currentDetailSnap = normalized;
            card.classList.remove('snap-half', 'snap-full');
            card.classList.add(`snap-${normalized}`);
            if (normalized !== 'full' && detailModalContent) {
                detailModalContent.scrollTop = 0;
            }
        }

        function stepDetailSnap(direction) {
            const order = ['half', 'full'];
            const idx = Math.max(0, order.indexOf(currentDetailSnap));
            const next = Math.min(order.length - 1, Math.max(0, idx + direction));
            setDetailSnap(order[next]);
        }

        let detailReturnFocus = null;
        function openDetailModal(venue, source = 'unknown') {
            if (!detailModal || !detailModalContent) return;

            trackEvent('venue_profile_open', {
                ...getPartnerAnalyticsParams(venue),
                source: source,
                language: currentLang,
                app_version: APP_VERSION
            });
            trackScreen('venue_profile');

            detailReturnFocus = document.activeElement;
            // Generate content
            detailModalContent.innerHTML = createDetailProfileContent(venue);
            if (detailPeekTitle) detailPeekTitle.textContent = venue.name;
            if (detailHalfBand) {
                detailHalfBand.innerHTML = createDetailHalfBandContent(venue);
                detailHalfBand.setAttribute('aria-hidden', 'false');
            }
            preloadVenueGalleryImages(venue);

            // Trigger sheet animation
            detailModal.setAttribute('aria-hidden', 'false');

            // Force reflow then activate
            detailModal.offsetHeight;
            detailModal.classList.add('active');
            const card = detailModal.querySelector('.detail-modal-card');
            if (card) card.classList.remove('closing');
            setDetailSnap(source === 'map_pin' ? 'half' : 'full');

            // Prevent body scroll
            document.body.classList.add('detail-open');
            updateBodyScrollLock();

            // Attach event handlers
            const favoriteButtons = detailModal.querySelectorAll('.detail-favorite-btn');
            favoriteButtons.forEach(favoriteBtn => {
                favoriteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const venueName = favoriteBtn.dataset.venue;
                    toggleFavorite(venueName);
                    const isFav = isFavorite(venueName);
                    favoriteButtons.forEach(btn => {
                        btn.classList.toggle('active', isFav);
                        btn.setAttribute('aria-pressed', String(isFav));
                        const heartIcon = btn.querySelector('.favorite-icon');
                        if (heartIcon) heartIcon.classList.toggle('filled', isFav);
                    });
                });
            });

            const sliderEl = detailModalContent.querySelector('.slider-container');
            attachSliderScrollSync(sliderEl);

            detailModalContent.querySelectorAll('a[data-analytics-link="true"]').forEach(link => {
                link.addEventListener('click', () => {
                    const linkType = link.dataset.linkType || 'unknown';
                    const eventName = LINK_EVENT_NAMES[linkType] || 'outbound_partner_click';
                    trackEvent(eventName, {
                        ...getPartnerAnalyticsParams(venue),
                        link_type: linkType,
                        source: source,
                        language: currentLang,
                        app_version: APP_VERSION
                    });
                }, { passive: true });
            });
        }

        function closeDetailModal() {
            if (!detailModal || !detailModal.classList.contains('active')) return;
            const card = detailModal.querySelector('.detail-modal-card');
            if (card) card.classList.add('closing');

            setTimeout(() => {
                if (detailModal.contains(document.activeElement)) {
                    (detailReturnFocus?.isConnected ? detailReturnFocus : document.getElementById('bottom-tab-list'))?.focus({ preventScroll: true });
                }
                detailModal.classList.remove('active');
                detailModal.setAttribute('aria-hidden', 'true');
                if (card) card.classList.remove('closing');
                if (detailPeekTitle) detailPeekTitle.textContent = '';
                if (detailHalfBand) {
                    detailHalfBand.innerHTML = '';
                    detailHalfBand.setAttribute('aria-hidden', 'true');
                }

                // Restore body scroll
                document.body.classList.remove('detail-open');
                selectedVenueName = null;
                applySelectedMarkerStyle();
                updateBodyScrollLock();
            }, 300);
        }

        function setActiveView(view) {
            const previousTab = activeTab;
            activeTab = view;
            saveActiveView(view);
            if (view === 'favorites' && (previousTab === 'map' || previousTab === 'list')) {
                favoritesReturnView = previousTab;
            }
            if (view === 'map' || view === 'list') {
                lastPrimaryView = view;
            }
            bottomTabs.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.view === view);
                btn.setAttribute('aria-pressed', String(btn.dataset.view === view));
            });
            if (sidebarFavorites) {
                sidebarFavorites.classList.toggle('active', view === 'favorites');
            }
            const showMap = view === 'map';
            if (mapPanel) mapPanel.classList.toggle('hidden', !showMap);
            if (listPanel) listPanel.classList.toggle('hidden', showMap);
            if (showMap) {
                setTimeout(() => map.invalidateSize(), 100);
            }
            if (previousTab !== view) trackScreen(view);
            closeDetailModal();
            updateBodyScrollLock();
            updateMap();
            updateListView();
        }

        if (sheetBackdrop) {
            sheetBackdrop.addEventListener('click', () => closeFilterSheet());
        }

        // Swipe down to close filters sheet on mobile
        let sheetTouchStartY = 0;
        let sheetTouchStartX = 0;
        let isSheetSwiping = false;

        if (sidebar) {
            sidebar.addEventListener('touchstart', (e) => {
                if (!isMobile()) return;
                const touch = e.touches[0];
                const sidebarTop = sidebar.getBoundingClientRect().top;
                const startInHandleZone = touch.clientY <= sidebarTop + 48;
                const atTop = !filtersContainer || filtersContainer.scrollTop <= 0;
                if (!startInHandleZone || !atTop) {
                    sheetTouchStartY = 0;
                    sheetTouchStartX = 0;
                    isSheetSwiping = false;
                    return;
                }
                sheetTouchStartY = touch.clientY;
                sheetTouchStartX = touch.clientX;
                isSheetSwiping = false;
            }, { passive: true });

            sidebar.addEventListener('touchmove', (e) => {
                if (!isMobile() || !sheetTouchStartY) return;
                const touch = e.touches[0];
                const diffY = touch.clientY - sheetTouchStartY;
                const diffX = Math.abs(touch.clientX - sheetTouchStartX);

                if (diffY > 20 && diffY > diffX * 1.4) {
                    isSheetSwiping = true;
                    sidebar.style.transform = `translateY(${diffY}px)`;
                }
            }, { passive: true });

            sidebar.addEventListener('touchend', () => {
                if (!isMobile()) return;
                if (isSheetSwiping) {
                    const currentTransform = parseFloat(sidebar.style.transform.replace(/[^0-9.-]/g, '')) || 0;
                    if (currentTransform > 120) {
                        sidebar.style.transform = '';
                        closeFilterSheet(true);
                    } else {
                        sidebar.style.transform = '';
                    }
                }
                sheetTouchStartY = 0;
                sheetTouchStartX = 0;
                isSheetSwiping = false;
            }, { passive: true });
        }

        if (filtersContainer) {
            const expandOnInteraction = () => expandFilterSheet();
            filtersContainer.addEventListener('touchstart', expandOnInteraction, { passive: true });
            filtersContainer.addEventListener('scroll', expandOnInteraction, { passive: true });
            filtersContainer.addEventListener('wheel', expandOnInteraction, { passive: true });
            filtersContainer.addEventListener('click', expandOnInteraction);
        }

        window.addEventListener('resize', handleResize);

        // Image slider functionality
        const sliderIndices = {};

        function slideImage(sliderId, direction) {
            const slider = document.getElementById(sliderId);
            if (!slider) return;

            const sliderContainer = slider.querySelector('.slider-container');
            const images = sliderContainer.querySelectorAll('img');
            const dots = document.querySelectorAll(`.slider-dot[data-slider-owner="${sliderId}"]`);

            if (!sliderIndices[sliderId]) {
                sliderIndices[sliderId] = 0;
            }

            // Calculate new index
            sliderIndices[sliderId] = (sliderIndices[sliderId] + direction + images.length) % images.length;

            // Update slider position via scroll
            const slideWidth = sliderContainer.clientWidth || slider.clientWidth;
            const targetScroll = sliderIndices[sliderId] * slideWidth;
            sliderContainer.scrollTo({ left: targetScroll, behavior: 'smooth' });

            // Update dots
            dots.forEach((dot, index) => {
                if (index === sliderIndices[sliderId]) {
                    dot.classList.add('active');
                } else {
                    dot.classList.remove('active');
                }
            });
        }

        // Make slideImage globally accessible for onclick handlers
        window.slideImage = slideImage;

        function attachSliderScrollSync(sliderEl) {
            if (!sliderEl || sliderEl.dataset.bound === 'true') return;
            const sliderId = sliderEl.closest('.venue-slider')?.id;
            if (!sliderId) return;
            sliderEl.dataset.bound = 'true';
            const dots = document.querySelectorAll(`.slider-dot[data-slider-owner="${sliderId}"]`);
            sliderEl.addEventListener('scroll', () => {
                const slideWidth = sliderEl.clientWidth || 1;
                const idx = Math.round(sliderEl.scrollLeft / slideWidth);
                sliderIndices[sliderId] = idx;
                dots.forEach((dot, i) => dot.classList.toggle('active', i === idx));
            });
        }

        function attachFavoriteHandlers(popupEl) {
            if (!popupEl) return;
            const btn = popupEl.querySelector('.favorite-toggle');
            if (!btn || btn.dataset.bound === 'true') return;
            btn.dataset.bound = 'true';
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const venueName = btn.dataset.venue;
                toggleFavorite(venueName);
                const isFav = isFavorite(venueName);
                btn.classList.toggle('active', isFav);
                const heart = btn.querySelector('.favorite-icon');
                const label = btn.querySelector('.favorite-label');
                if (heart) heart.classList.toggle('filled', isFav);
                if (label) label.textContent = isFav
                    ? translate('ui.favoriteRemove', 'Saved')
                    : translate('ui.favoriteAdd', 'Save');
            });
        }

        bottomTabs.forEach(btn => {
            btn.addEventListener('click', () => {
                setActiveView(btn.dataset.view || 'map');
            });
        });

        if (sidebarFavorites) {
            sidebarFavorites.addEventListener('click', () => {
                if (activeTab === 'favorites') {
                    setActiveView(favoritesReturnView || lastPrimaryView);
                } else {
                    setActiveView('favorites');
                }
                if (sidebar.classList.contains('show')) {
                    closeFilterSheet();
                }
            });
        }

        if (resetFiltersButton) {
            resetFiltersButton.addEventListener('click', resetAllFilters);
        }

        if (applyFiltersButton) {
            applyFiltersButton.addEventListener('click', () => closeFilterSheet());
        }

        const languageButtons = document.querySelectorAll('#language-toggle button');
        languageButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                const lang = btn.getAttribute('data-lang');
                setLanguage(lang);
            });
        });

        if (menuToggle) {
            menuToggle.addEventListener('click', openMenu);
        }
        if (menuClose) {
            menuClose.addEventListener('click', closeMenu);
        }
        if (menuBackdrop) {
            menuBackdrop.addEventListener('click', closeMenu);
        }
        if (menuSuggest) {
            menuSuggest.addEventListener('click', () => {
                closeMenu();
                openPanel(suggestView);
            });
        }
        if (menuAbout) {
            menuAbout.addEventListener('click', () => {
                closeMenu();
                openPanel(aboutView);
            });
        }
        if (menuHelp) {
            menuHelp.addEventListener('click', () => {
                closeMenu();
                openPanel(helpView);
            });
        }
        if (menuBug) {
            menuBug.addEventListener('click', () => {
                closeMenu();
                openPanel(bugView);
            });
        }
        if (menuPrivacy) {
            menuPrivacy.addEventListener('click', () => {
                closeMenu();
                window.open(getContentLink('privacy', fallbackContentLinks.privacy), '_blank', 'noopener,noreferrer');
            });
        }

        if (menuShare) {
            menuShare.addEventListener('click', async () => {
                const shareUrl = getContentLink('share', `${window.location.origin}${window.location.pathname}`);
                const shareData = {
                    title: translate('ui.shareTitle', 'Friendly Spaces'),
                    text: translate('ui.shareText', 'Find family-friendly venues in Switzerland.'),
                    url: shareUrl
                };
                try {
                    const nativeShare = window.Capacitor?.Plugins?.Share;
                    if (nativeShare?.share) {
                        await nativeShare.share(shareData);
                    } else if (navigator.share) {
                        await navigator.share(shareData);
                    } else {
                        window.open(shareUrl, '_blank', 'noopener,noreferrer');
                    }
                } catch (err) {
                    // Ignore cancelled share.
                }
            });
        }
        if (suggestClose) {
            suggestClose.addEventListener('click', () => closePanel(suggestView));
        }
        if (aboutClose) {
            aboutClose.addEventListener('click', () => closePanel(aboutView));
        }
        if (aboutPartner) {
            aboutPartner.addEventListener('click', () => {
                const subject = encodeURIComponent(translate('ui.partnerSubject', 'Partnership Inquiry'));
                const target = getContentLink('partnerEmail', fallbackContentLinks.partnerEmail);
                const separator = target.includes('?') ? '&' : '?';
                window.location.href = `${target}${separator}subject=${subject}`;
            });
        }

        if (introClose) {
            introClose.addEventListener('click', closeIntro);
        }
        if (introPrev) {
            introPrev.addEventListener('click', goToPrevIntroSlide);
        }
        if (introNext) {
            introNext.addEventListener('click', goToNextIntroSlide);
        }
        introDots.forEach((dot) => {
            dot.addEventListener('click', () => {
                const index = Number(dot.dataset.introDot);
                if (Number.isNaN(index)) return;
                introSlideIndex = index;
                updateIntroSlides();
            });
        });
        if (introOverlay) {
            introOverlay.addEventListener('click', (event) => {
                if (event.target === introOverlay) {
                    closeIntro();
                }
            });
        }
        if (introSlidesContainer) {
            introSlidesContainer.addEventListener('wheel', (event) => {
                if (!introOverlay || introOverlay.classList.contains('hidden')) return;
                if (Math.abs(event.deltaY) < 12) return;
                const now = Date.now();
                if (now < introWheelLockUntil) return;
                introWheelLockUntil = now + 320;
                event.preventDefault();
                if (event.deltaY > 0) goToNextIntroSlide();
                else goToPrevIntroSlide();
            }, { passive: false });
        }
        if (introCard) {
            introCard.addEventListener('touchstart', (event) => {
                if (!introOverlay || introOverlay.classList.contains('hidden')) return;
                const touch = event.touches[0];
                introTouchStartX = touch.clientX;
                introTouchStartY = touch.clientY;
            }, { passive: true });

            introCard.addEventListener('touchend', (event) => {
                if (!introOverlay || introOverlay.classList.contains('hidden')) return;
                const touch = event.changedTouches[0];
                const deltaX = touch.clientX - introTouchStartX;
                const deltaY = touch.clientY - introTouchStartY;
                const horizontalSwipe = Math.abs(deltaX) > 48 && Math.abs(deltaX) > Math.abs(deltaY);
                if (!horizontalSwipe) return;
                if (deltaX < 0) goToNextIntroSlide();
                else goToPrevIntroSlide();
            }, { passive: true });
        }
        if (bugClose) {
            bugClose.addEventListener('click', () => closePanel(bugView));
        }
        if (helpClose) {
            helpClose.addEventListener('click', () => closePanel(helpView));
        }
        suggestRoleButtons.forEach(btn => {
            btn.addEventListener('click', () => setSuggestRole(btn.dataset.suggestRole));
        });
        function encodeFormData(form) {
            const data = new FormData(form);
            const params = new URLSearchParams();
            for (const [key, value] of data.entries()) {
                params.append(key, value.toString());
            }
            return params.toString();
        }

        function getFormSubmitConfig() {
            const isHostedWebApp =
                window.location.protocol === 'https:' &&
                window.location.hostname === 'app.friendlyspaces.ch';

            if (isHostedWebApp) {
                return {
                    url: '/',
                    options: {}
                };
            }

            return {
                url: REMOTE_FORM_SUBMIT_URL,
                options: {
                    credentials: 'omit'
                }
            };
        }

        async function postNetlifyForm(encodedData) {
            const cap = window.Capacitor;
            const headers = { 'Content-Type': 'application/x-www-form-urlencoded' };
            if (cap?.isNativePlatform?.()) {
                const response = await cap.Plugins.CapacitorHttp.request({
                    url: REMOTE_FORM_SUBMIT_URL, method: 'POST', headers,
                    data: encodedData, responseType: 'text',
                    connectTimeout: 15000, readTimeout: 15000
                });
                if (response.status < 200 || response.status >= 300) throw new Error('Form submission rejected');
                return;
            }
            const config = getFormSubmitConfig();
            const response = await fetch(config.url, {
                method: 'POST', headers, body: encodedData, ...config.options
            });
            if (!response.ok) throw new Error('Form submission rejected');
        }

        function handleNetlifySubmit(form, statusEl, successKey, errorKey) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (statusEl) {
                statusEl.textContent = translate('ui.formSending', 'Sending...');
                statusEl.classList.add('visible', 'is-pending');
                statusEl.classList.remove('is-success', 'is-error');
            }
            if (submitBtn) submitBtn.disabled = true;

            postNetlifyForm(encodeFormData(form))
                .then(() => {
                    if (statusEl) {
                        statusEl.textContent = translate(successKey, 'Thanks! Sent.');
                        statusEl.classList.add('visible', 'is-success');
                        statusEl.classList.remove('is-pending', 'is-error');
                    }
                    form.reset();
                    if (form === suggestForm) document.getElementById('fan-email').required = false;
                })
                .catch(() => {
                    if (statusEl) {
                        statusEl.textContent = translate(errorKey, 'Something went wrong. Please try again.');
                        statusEl.classList.add('visible', 'is-error');
                        statusEl.classList.remove('is-pending', 'is-success');
                    }
                })
                .finally(() => {
                    if (submitBtn) submitBtn.disabled = false;
                });
        }

        if (suggestForm) {
            document.getElementById('suggest-newsletter-input')?.addEventListener('change', (event) => {
                document.getElementById('fan-email').required = event.target.checked;
            });
            suggestForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const role = Array.from(suggestRoleButtons).find(btn => btn.classList.contains('active'))?.dataset.suggestRole || 'fan';
                const roleField = document.createElement('input');
                roleField.type = 'hidden';
                roleField.name = 'role';
                roleField.value = role;
                suggestForm.appendChild(roleField);

                const statusEl = document.getElementById('suggest-status');
                handleNetlifySubmit(suggestForm, statusEl, 'ui.suggestSubmitSuccess', 'ui.suggestSubmitError');

                roleField.remove();
            });
        }

        if (bugForm) {
            bugForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const statusEl = document.getElementById('bug-status');
                handleNetlifySubmit(bugForm, statusEl, 'ui.bugSubmitSuccess', 'ui.bugSubmitError');
            });
        }

        if (listCards) {
            listCards.addEventListener('click', (event) => {
                const favoriteButton = event.target.closest('.venue-card-favorite');
                if (favoriteButton) {
                    event.preventDefault();
                    event.stopPropagation();
                    const venueName = favoriteButton.dataset.venue;
                    toggleFavorite(venueName);
                    const replacement = Array.from(listCards.querySelectorAll('.venue-card-favorite')).find(btn => btn.dataset.venue === venueName);
                    (replacement || document.getElementById('pill-favorites'))?.focus({ preventScroll: true });
                    return;
                }

                const card = event.target.closest('.venue-card');
                if (!card) return;
                const venueName = card.dataset.venue;
                const venue = venues.find(v => v.name === venueName);
                if (venue) {
                    openDetailModal(venue, 'list_card');
                    if (event.detail === 0) document.getElementById('detail-modal-close')?.focus({ preventScroll: true });
                }
            });
        }

        const modalClose = document.getElementById('detail-modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', closeDetailModal);
        }

        let detailDragStartY = 0;
        let detailDragStartX = 0;
        let detailDragging = false;
        let detailDragFromContent = false;
        function handleDetailSheetDrag(deltaY) {
            const upwardThreshold = -24;
            const downwardThreshold = 24;
            if (deltaY < upwardThreshold) {
                stepDetailSnap(1);
                return true;
            }
            if (deltaY > downwardThreshold) {
                if (currentDetailSnap === 'half') closeDetailModal();
                else stepDetailSnap(-1);
                return true;
            }
            return false;
        }

        function bindDetailSwipeTarget(target, fromContent, topZoneOnly = false) {
            if (!target) return;
            target.addEventListener('touchstart', (event) => {
                if (!isMobile() || !detailModal?.classList.contains('active')) return;
                if (topZoneOnly) {
                    if (event.target instanceof Element && event.target.closest('#detail-modal-content')) {
                        return;
                    }
                    const touch = event.touches?.[0];
                    if (!touch) return;
                    const rect = target.getBoundingClientRect();
                    const inTopZone = touch.clientY <= rect.top + 72;
                    const onCloseButton = event.target instanceof Element && !!event.target.closest('#detail-modal-close');
                    if (!inTopZone || onCloseButton) {
                        return;
                    }
                }
                if (fromContent && currentDetailSnap === 'full' && detailModalContent && detailModalContent.scrollTop > 0) {
                    detailDragging = false;
                    return;
                }
                detailDragStartY = event.touches[0].clientY;
                detailDragStartX = event.touches[0].clientX;
                detailDragFromContent = fromContent;
                detailDragging = true;
            }, { passive: true });

            target.addEventListener('touchmove', (event) => {
                if (!isMobile() || !detailDragging) return;
                const deltaY = event.touches[0].clientY - detailDragStartY;
                const deltaX = event.touches[0].clientX - detailDragStartX;
                if (Math.abs(deltaX) > 10 && Math.abs(deltaX) > Math.abs(deltaY)) {
                    detailDragging = false;
                    return;
                }
                if (Math.abs(deltaY) < 10) return;

                const pullingFromTop =
                    !detailDragFromContent ||
                    !detailModalContent ||
                    detailModalContent.scrollTop <= (isNativeIOSPlatform() ? 8 : 0);

                if (pullingFromTop && (currentDetailSnap !== 'full' || deltaY > 0)) {
                    event.preventDefault();
                }
            }, { passive: false });

            target.addEventListener('touchend', (event) => {
                if (!isMobile() || !detailDragging) return;
                const endY = event.changedTouches[0].clientY;
                const deltaY = endY - detailDragStartY;
                const deltaX = event.changedTouches[0].clientX - detailDragStartX;
                detailDragging = false;
                if (Math.abs(deltaY) <= Math.abs(deltaX)) return;
                if (!fromContent) {
                    if (deltaY > 24) {
                        closeDetailModal();
                        return;
                    }
                    if (deltaY < -24) {
                        setDetailSnap('full');
                        return;
                    }
                }
                handleDetailSheetDrag(deltaY);
            }, { passive: true });
            target.addEventListener('touchcancel', () => { detailDragging = false; }, { passive: true });
        }

        bindDetailSwipeTarget(document.querySelector('.detail-modal-card'), false, true);
        bindDetailSwipeTarget(detailModalContent, true);

        if (detailModal) {
            detailModal.addEventListener('click', (event) => {
                if (event.target === detailModal) closeDetailModal();
            });
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Tab' && detailModal?.classList.contains('active') && detailModal.contains(document.activeElement)) {
                const items = Array.from(detailModal.querySelectorAll('button, a[href]')).filter(el => !el.disabled && el.getClientRects().length);
                const first = items[0], last = items[items.length - 1];
                if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
            }
            if (menuDrawer?.classList.contains('open')) {
                if (event.key === 'Escape') { event.preventDefault(); closeMenu(); return; }
                if (event.key === 'Tab') {
                    const items = Array.from(menuDrawer.querySelectorAll('button, a[href], input')).filter(el => !el.disabled && el.getClientRects().length);
                    const first = items[0], last = items[items.length - 1];
                    if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last?.focus(); }
                    else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first?.focus(); }
                }
            } else if (event.key === 'Escape') {
                const panel = document.querySelector('.fullscreen-panel.open');
                if (panel) closePanel(panel);
                else if (introOverlay && !introOverlay.classList.contains('hidden')) closeIntro();
                else if (sidebar?.classList.contains('show')) closeFilterSheet(true);
                else closeDetailModal();
            }
        });

        // Global function to open venue profile from popup
        window.openVenueProfile = function(venueName) {
            const venue = venues.find(v => v.name === venueName);
            if (venue) {
                map.closePopup();
                openDetailModal(venue, 'map_popup');
            }
        };

        // Quick filter pills functionality
        const pillFilters = document.getElementById('pill-filters');
        const pillFavorites = document.getElementById('pill-favorites');
        const quickFilterPills = document.querySelectorAll('.quick-filter-pill[data-filter-category]');

        // Update quick filter pill labels based on current language
        function updateQuickFilterLabels() {
            document.querySelectorAll('[data-pill-label]').forEach(label => {
                const key = label.dataset.pillLabel;
                if (key === 'favorites') {
                    label.textContent = translate('ui.favoritesTab', 'Favorites');
                } else if (key === 'filters') {
                    label.textContent = translate('ui.filtersLabel', 'Filters');
                } else if (key === 'cafe') {
                    label.textContent = filterOptionLabel('venueType', 'cafe');
                } else if (key === 'restaurant') {
                    label.textContent = filterOptionLabel('venueType', 'restaurant');
                } else if (key === 'baby') {
                    label.textContent = filterOptionLabel('ageRange', 'baby');
                } else if (key === 'toddler') {
                    label.textContent = filterOptionLabel('ageRange', 'toddler');
                } else if (key === 'small-child') {
                    label.textContent = filterOptionLabel('ageRange', 'small-child');
                } else if (key === 'play-area') {
                    label.textContent = filterOptionLabel('amenities', 'play-area');
                }
            });
        }

        // Sync quick filter pills with sidebar filter state
        function syncQuickFilterPills() {
            quickFilterPills.forEach(pill => {
                const category = pill.dataset.filterCategory;
                const value = pill.dataset.filterValue;
                const isActive = activeFilters[category].includes(value);
                pill.classList.toggle('active', isActive);
                pill.setAttribute('aria-pressed', String(isActive));
            });

            // Update favorites pill active state
            if (pillFavorites) {
                pillFavorites.classList.toggle('active', activeTab === 'favorites');
                pillFavorites.setAttribute('aria-pressed', String(activeTab === 'favorites'));
            }
            if (sidebarNearMe) sidebarNearMe.classList.toggle('active', nearMeActive);
        }

        function getCityFilterCopy() {
            return [
                translate('ui.cityLabel', 'City'),
                translate('ui.allCities', 'All cities')
            ];
        }

        function closeCityFilterMenu({ restoreFocus = false } = {}) {
            const button = document.getElementById('city-filter-button');
            const menu = document.getElementById('city-filter-menu');
            if (!button || !menu || menu.hidden) return;
            menu.hidden = true;
            button.setAttribute('aria-expanded', 'false');
            if (restoreFocus) button.focus({ preventScroll: true });
        }

        function positionCityFilterMenu() {
            const button = document.getElementById('city-filter-button');
            const menu = document.getElementById('city-filter-menu');
            if (!button || !menu || menu.hidden) return;
            const rect = button.getBoundingClientRect();
            const gap = 6;
            const viewportPadding = 12;
            menu.style.minWidth = `${Math.max(176, Math.round(rect.width))}px`;
            menu.style.top = `${Math.round(rect.bottom + gap)}px`;
            menu.style.left = `${Math.max(viewportPadding, Math.min(Math.round(rect.left), window.innerWidth - menu.offsetWidth - viewportPadding))}px`;
        }

        function updateCityFilter() {
            const button = document.getElementById('city-filter-button');
            const valueLabel = document.getElementById('city-filter-value');
            const menu = document.getElementById('city-filter-menu');
            if (!button || !valueLabel || !menu) return;
            const copy = getCityFilterCopy();
            const cities = [...new Set(venues.map(venue => venue.city).filter(Boolean))]
                .sort((a, b) => a.localeCompare(b, currentLang));
            valueLabel.textContent = selectedCity || copy[1];
            button.setAttribute('aria-label', `${copy[0]}: ${selectedCity || copy[1]}`);
            button.classList.toggle('active', Boolean(selectedCity));
            menu.setAttribute('aria-label', copy[0]);
            menu.replaceChildren(...[['', copy[1]], ...cities.map(city => [city, city])].map(([value, label]) => {
                const option = document.createElement('button');
                const checked = value === selectedCity;
                option.type = 'button';
                option.className = 'city-filter-option';
                option.dataset.city = value;
                option.setAttribute('role', 'menuitemradio');
                option.setAttribute('aria-checked', String(checked));
                option.innerHTML = `<span>${label}</span><svg viewBox="0 0 20 20" aria-hidden="true"><path d="m4 10 4 4 8-9"></path></svg>`;
                return option;
            }));
        }

        document.getElementById('city-filter-button')?.addEventListener('click', () => {
            const menu = document.getElementById('city-filter-menu');
            const button = document.getElementById('city-filter-button');
            if (!menu || !button) return;
            if (!menu.hidden) {
                closeCityFilterMenu();
                return;
            }
            menu.hidden = false;
            button.setAttribute('aria-expanded', 'true');
            positionCityFilterMenu();
            menu.querySelector('[aria-checked="true"]')?.focus({ preventScroll: true });
        });

        document.getElementById('city-filter-menu')?.addEventListener('click', event => {
            const option = event.target.closest('.city-filter-option');
            if (!option) return;
            selectedCity = option.dataset.city;
            nearMeActive = false;
            isInitialLoad = true;
            closeCityFilterMenu({ restoreFocus: true });
            updateCityFilter();
            updateMap();
            syncQuickFilterPills();
            trackFilterChange('city', selectedCity || 'all', Boolean(selectedCity), 'city_picker');
        });

        document.addEventListener('click', event => {
            if (!event.target.closest('.quick-filter-city') && !event.target.closest('#city-filter-menu')) closeCityFilterMenu();
        });

        document.getElementById('city-filter-menu')?.addEventListener('keydown', event => {
            const options = [...event.currentTarget.querySelectorAll('.city-filter-option')];
            const current = options.indexOf(document.activeElement);
            if (event.key === 'Escape') {
                event.preventDefault();
                closeCityFilterMenu({ restoreFocus: true });
            } else if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
                event.preventDefault();
                const direction = event.key === 'ArrowDown' ? 1 : -1;
                options[(current + direction + options.length) % options.length]?.focus();
            }
        });

        window.addEventListener('resize', closeCityFilterMenu);
        document.getElementById('quick-filters-row')?.addEventListener('scroll', closeCityFilterMenu, { passive: true });

        // Toggle a quick filter
        function toggleQuickFilter(category, value) {
            ensureActiveFilterCategories();
            const index = activeFilters[category].indexOf(value);
            if (index === -1) {
                activeFilters[category].push(value);
            } else {
                activeFilters[category].splice(index, 1);
            }

            // Also update the sidebar filter button state
            const sidebarBtn = document.querySelector(`.filter-button[data-category="${category}"][data-value="${value}"]`);
            if (sidebarBtn) {
                sidebarBtn.classList.toggle('active', activeFilters[category].includes(value));
                sidebarBtn.setAttribute('aria-pressed', String(activeFilters[category].includes(value)));
            }

            updateMap();
            updateFilterCount();
            syncQuickFilterPills();
            trackFilterChange(category, value, activeFilters[category].includes(value), 'quick_filter');
        }

        // Filters pill - opens sidebar/sheet
        if (pillFilters) {
            pillFilters.addEventListener('click', () => {
                if (isMobile()) {
                    if (sidebar.classList.contains('show')) {
                        closeFilterSheet();
                    } else {
                        openFilterSheet();
                    }
                } else {
                    // On desktop, toggle sidebar visibility or just scroll to filters
                    sidebar.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }

        // Favorites pill - toggles favorites view
        if (pillFavorites) {
            pillFavorites.addEventListener('click', () => {
                if (activeTab === 'favorites') {
                    // Return to the user's previous main view (map or list)
                    setActiveView(favoritesReturnView || lastPrimaryView);
                } else {
                    // Switch to favorites view
                    setActiveView('favorites');
                }
                syncQuickFilterPills();
            });
        }

        const toggleNearMe = () => {
            nearMeActive = !nearMeActive;
            if (nearMeActive) setActiveView('map');
            updateMap();
            updateFilterCount();
            syncQuickFilterPills();
            trackFilterChange('location', 'near_me', nearMeActive, 'filter_panel');
        };

        if (sidebarNearMe) {
            sidebarNearMe.addEventListener('click', async () => {
                if (!nearMeActive && !userLocationLatLng) {
                    await requestNearMeLocation();
                    return;
                }

                hideLocationNotice();
                toggleNearMe();
            });
        }

        // Quick filter pills - toggle their respective filters
        quickFilterPills.forEach(pill => {
            pill.addEventListener('click', () => {
                const category = pill.dataset.filterCategory;
                const value = pill.dataset.filterValue;
                toggleQuickFilter(category, value);
            });
        });

        // Extend setLanguage to also update quick filter labels
        const originalSetLanguage = setLanguage;
        setLanguage = function(lang, options) {
            originalSetLanguage(lang, options);
            updateCityFilter();
            updateQuickFilterLabels();
            syncQuickFilterPills();
        };

        // Extend setActiveView to sync pills
        const originalSetActiveView = setActiveView;
        setActiveView = function(view) {
            originalSetActiveView(view);
            syncQuickFilterPills();
        };

        function startApp() {
            applyNativeAndroidInsetFallback();
            setAppShellHeight();
            syncNativeIOSSafeArea();
            updateLandscapeNotchMaskSide();
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', setAppShellHeight);
                window.visualViewport.addEventListener('scroll', setAppShellHeight);
                window.visualViewport.addEventListener('resize', syncNativeIOSSafeArea);
                window.visualViewport.addEventListener('scroll', syncNativeIOSSafeArea);
            }
            window.addEventListener('orientationchange', setAppShellHeight);
            window.addEventListener('orientationchange', syncNativeIOSSafeArea);
            window.addEventListener('orientationchange', updateLandscapeNotchMaskSide);
            loadFavorites();
            updateFavoritesBadge();
            setLanguage(currentLang, { skipUrlUpdate: true });
            setActiveView(activeTab);
            handleResize();
            if ('requestIdleCallback' in window) {
                window.requestIdleCallback(preloadVenueHeroImages, { timeout: 2000 });
            } else {
                setTimeout(preloadVenueHeroImages, 300);
            }
            updateQuickFilterLabels();
            syncQuickFilterPills();
            setSuggestRole('fan');
            updateBodyScrollLock();
            showIntroIfNeeded();

            if (!hasTrackedInitialMapView) {
                trackScreen('map');
                hasTrackedInitialMapView = true;
            }

            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('./sw.js').catch(() => {});
                });
            }
        }

        Promise.all([loadFilters(), loadVenues(), loadContent()]).finally(startApp);
