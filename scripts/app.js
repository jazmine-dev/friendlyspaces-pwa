        // Language support (German/French) with query param override (?lang=de|fr)
        const supportedLanguages = ['de', 'fr', 'en'];
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
                    menuInstall: "Installation",
                    menuLanguage: "Sprache",
                    menuBug: "Fehler melden / Feedback geben",
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
                    aboutBody: "Friendly Spaces ist das erste familienfreundliche Zertifikationslabel der Schweiz und hilft Eltern, die besten Cafés, Restaurants, Geschaefte und Kulturorte für Familien mit kleinen Kindern zu finden. Durch unsere strengen Vor-Ort-Audits stellen wir sicher, dass jeder zertifizierte Ort Kinder wirklich willkommen heisst und auf ihre Bedürfnisse eingeht.",
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
                    introTitle: "Willkommen bei Friendly Spaces",
                    introText: "Dein Guide zu zertifizierten familienfreundlichen Cafés, Restaurants, Geschäften und Kulturorten in der ganzen Schweiz.",
                    introInstallTitle: "Fuer schnelleren Zugriff installieren",
                    introInstallIosLabel: "iPhone:",
                    introInstallIosText: "In Safari öffnen -> auf Teilen tippen -> Zum Home-Bildschirm wählen.",
                    introInstallAndroidLabel: "Android:",
                    introInstallAndroidText: "Oben auf Zum Home-Bildschirm tippen. Die App wird automatisch installiert.",
                    introMapTitle: "Schnell den passenden Ort finden",
                    introMapText: "Nutze die Listenansicht beim Start oder wechsle zur Kartenansicht für Pins in deiner Nähe. Mit den Filtern findest du schneller passende Orte. Speichere Lieblingsorte als Favoriten, damit du sie jederzeit wiederfindest.",
                    introBack: "Zurück",
                    introNext: "Weiter",
                    introDone: "Fertig",
                    introSkip: "Nicht mehr anzeigen",
                    installHelpTitle: "Die Friendly Spaces App installieren",
                    installHelpTagline: "Zum Home-Bildschirm hinzufügen, um schneller zu starten.",
                    installHelpIosTitle: "Auf iPhone (Safari)",
                    installHelpIosStep1: "Die Friendly Spaces App in Safari öffnen.",
                    installHelpIosStep2: "Auf Teilen tippen (Quadrat mit Pfeil).",
                    installHelpIosStep3: "Zum Home-Bildschirm auswählen.",
                    installHelpAndroidTitle: "Auf Android (Chrome)",
                    installHelpAndroidStep1: "Die Friendly Spaces App in Chrome öffnen.",
                    installHelpAndroidStep2: "Installieren in der Browserabfrage oder im Menü wählen.",
                    installHelpAndroidStep3: "Bestätigen, um zum Home-Bildschirm hinzuzufügen.",
                    installHelpUseTitle: "So nutzt du die App",
                    installHelpUseStep1: "Nutze die Suche für Stadt, Namen oder Adresse.",
                    installHelpUseStep2: "Setze Filter passend zu euren Bedürfnissen.",
                    installHelpUseStep3: "Öffne einen Pin oder eine Karte für das volle Profil.",
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
                    favoritesInstall: "Friendly Spaces installieren",
                    favoritesInstallCta: "Zum Homescreen",
                    nearMe: "In der Nähe",
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
                            "friendly-spaces": "Friendly Spaces Playbox",
                            "high-chair": "Kinderstuhl",
                            "change-table": "Wickeltisch",
                            "games-room": "Spielzimmer"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Webseite besuchen",
                    hours: "Öffnungszeiten",
                    specialty: "Besonderheit",
                    directions: "Route planen",
                    viewProfile: "Profil anzeigen",
                    features: "Ausstattung"
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
                    menuInstall: "Installation",
                    menuLanguage: "Langue",
                    menuBug: "Signaler un bug / Donner un avis",
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
                    introTitle: "Bienvenue sur Friendly Spaces",
                    introText: "Votre guide des cafés, restaurants, boutiques et lieux culturels certifiés family-friendly dans toute la Suisse.",
                    introInstallTitle: "Installez pour un accès plus rapide",
                    introInstallIosLabel: "iPhone :",
                    introInstallIosText: "Ouvrez dans Safari -> appuyez sur Partager -> Ajouter à l'écran d'accueil.",
                    introInstallAndroidLabel: "Android :",
                    introInstallAndroidText: "Appuyez en haut sur Ajouter à l'écran d'accueil. L'app s'installe automatiquement.",
                    introMapTitle: "Trouvez le bon lieu rapidement",
                    introMapText: "Utilisez la vue liste au démarrage ou passez à la vue carte pour voir les épingles autour de vous. Les filtres vous aident à trouver plus vite le bon lieu. Enregistrez vos lieux préférés en favoris pour les retrouver facilement.",
                    introBack: "Retour",
                    introNext: "Suivant",
                    introDone: "Terminer",
                    introSkip: "Ne plus afficher",
                    installHelpTitle: "Installer l'app Friendly Spaces",
                    installHelpTagline: "Ajoutez-la à votre écran d'accueil pour un accès plus rapide.",
                    installHelpIosTitle: "Sur iPhone (Safari)",
                    installHelpIosStep1: "Ouvrez l'app Friendly Spaces dans Safari.",
                    installHelpIosStep2: "Appuyez sur Partager (carré avec flèche).",
                    installHelpIosStep3: "Choisissez Ajouter à l'écran d'accueil.",
                    installHelpAndroidTitle: "Sur Android (Chrome)",
                    installHelpAndroidStep1: "Ouvrez l'app Friendly Spaces dans Chrome.",
                    installHelpAndroidStep2: "Choisissez Installer depuis la fenêtre du navigateur ou le menu.",
                    installHelpAndroidStep3: "Confirmez pour l'ajouter à l'écran d'accueil.",
                    installHelpUseTitle: "Comment utiliser l'app",
                    installHelpUseStep1: "Utilisez la recherche par ville, nom ou adresse.",
                    installHelpUseStep2: "Appliquez les filtres selon les besoins de votre famille.",
                    installHelpUseStep3: "Ouvrez une épingle ou une carte pour voir le profil complet.",
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
                    favoritesInstall: "Installer Friendly Spaces",
                    favoritesInstallCta: "Ajouter à l'écran",
                    nearMe: "A proximité",
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
                            "friendly-spaces": "Friendly Spaces Playbox",
                            "high-chair": "Chaise haute",
                            "change-table": "Table à langer",
                            "games-room": "Salle de jeux"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Visiter le site",
                    hours: "Horaires",
                    specialty: "Spécialité",
                    directions: "Itinéraire",
                    viewProfile: "Voir le profil",
                    features: "Équipements"
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
                    menuInstall: "How to install",
                    menuLanguage: "Language",
                    menuBug: "Report a bug / Give feedback",
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
                    introTitle: "Welcome to Friendly Spaces",
                    introText: "Your guide to certified family-friendly cafés, restaurants, shops, and cultural venues across Switzerland. Check out our map to discover places that truly welcome families with young children, from safe play areas to convenient changing facilities.",
                    introInstallTitle: "Install for faster access",
                    introInstallIosLabel: "iPhone:",
                    introInstallIosText: "Open in Safari -> tap Share -> Add to Home Screen.",
                    introInstallAndroidLabel: "Android:",
                    introInstallAndroidText: "Tap Add to Home screen at the top. The app installs automatically.",
                    introMapTitle: "Find the right place fast",
                    introMapText: "Browse all our Friendly Spaces in List view, or switch to Map view to explore nearby pins. Use Filters to find the right places faster. Save your beloved spots to Favorites so you can quickly find them again.",
                    introBack: "Back",
                    introNext: "Next",
                    introDone: "Done",
                    introSkip: "Do not show again",
                    installHelpTitle: "Install the Friendly Spaces App",
                    installHelpTagline: "Add to your home screen for faster access.",
                    installHelpIosTitle: "On iPhone (Safari)",
                    installHelpIosStep1: "Open the Friendly Spaces app in Safari.",
                    installHelpIosStep2: "Tap Share (square with arrow).",
                    installHelpIosStep3: "Choose Add to Home Screen.",
                    installHelpAndroidTitle: "On Android (Chrome)",
                    installHelpAndroidStep1: "Open the Friendly Spaces app in Chrome.",
                    installHelpAndroidStep2: "Tap Install from the browser prompt or menu.",
                    installHelpAndroidStep3: "Confirm to add it to your home screen.",
                    installHelpUseTitle: "How to use the app",
                    installHelpUseStep1: "Use Search to find venues by city, name, or address.",
                    installHelpUseStep2: "Apply Filters to match your family needs.",
                    installHelpUseStep3: "Open a pin or card to view the full profile.",
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
                    favoritesInstall: "Install Friendly Spaces",
                    favoritesInstallCta: "Add to Home Screen",
                    nearMe: "Near Me",
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
                            "games-room": "Games Room"
                        }
                    }
                },
                popup: {
                    visitWebsite: "Visit Website",
                    hours: "Hours",
                    specialty: "Specialty",
                    directions: "Directions",
                    viewProfile: "View Full Profile",
                    features: "Features"
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

        function formatPhoneHref(phone) {
            if (!phone) return null;
            if (/contact via website/i.test(phone)) return null;
            const normalized = phone.replace(/[^+\d]/g, '');
            if (!normalized || normalized.replace(/\D/g, '').length === 0) return null;
            return `tel:${normalized}`;
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

        // Venue data loaded from data/venues.json
        let venues = [];

        function loadVenues() {
            return fetch('data/venues.json')
                .then((response) => response.json())
                .then((data) => {
                    venues = Array.isArray(data) ? data : [];
                })
                .catch(() => {
                    venues = [];
                });
        }

        // Filter definitions
        const filterDefinitions = {
            venueType: [
                { id: "cafe", label: "Cafe" },
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
                { id: "games-room", label: "Games Room" }
            ]
        };

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
            container.querySelector('.locate-button').addEventListener('click', () => {
                if (!navigator.geolocation) return;
                navigator.geolocation.getCurrentPosition(
                    (pos) => {
                        const { latitude, longitude } = pos.coords;
                        showUserLocation(latitude, longitude);
                        centerMapWithNearestVenue(latitude, longitude);
                    },
                    () => {
                        // Ignore location errors
                    },
                    { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
                );
            });
            return container;
        };
        locateControl.addTo(map);

        L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
            maxZoom: 19
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
        let searchQuery = '';
        let isInitialLoad = true;
        let activeTab = 'map';
        const favoritesKey = 'friendlyspaces_favorites';
        let favorites = new Set();
        const sidebar = document.getElementById('sidebar');
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
        const menuInstallHelp = document.getElementById('menu-install-help');
        const menuBug = document.getElementById('menu-bug');
        const suggestView = document.getElementById('suggest-view');
        const aboutView = document.getElementById('about-view');
        const bugView = document.getElementById('bug-view');
        const installHelpView = document.getElementById('install-help-view');
        const suggestClose = document.getElementById('suggest-close');
        const aboutClose = document.getElementById('about-close');
        const bugClose = document.getElementById('bug-close');
        const installHelpClose = document.getElementById('install-help-close');
        const suggestForm = document.getElementById('suggest-form');
        const bugForm = document.getElementById('bug-form');
        const aboutPartner = document.getElementById('about-partner');
        const introOverlay = document.getElementById('intro-overlay');
        const introClose = document.getElementById('intro-close');
        const introSkip = document.getElementById('intro-skip');
        const introSlides = Array.from(document.querySelectorAll('[data-intro-slide]'));
        const introDots = Array.from(document.querySelectorAll('[data-intro-dot]'));
        const introPrev = document.getElementById('intro-prev');
        const introNext = document.getElementById('intro-next');
        const suggestRoleButtons = document.querySelectorAll('[data-suggest-role]');
        const ownerFields = document.getElementById('owner-fields');
        let introSlideIndex = 0;
        let currentDetailSnap = 'half';

        // City coordinates for zoom
        const cityCoordinates = {
            'bern': [46.9480, 7.4474, 13],
            'basel': [47.5596, 7.5886, 13]
        };

        const isMobile = () => window.matchMedia('(max-width: 768px)').matches;
        const APP_VERSION = 'pwa-1.0';
        const APP_DOMAIN = 'app.friendlyspaces.ch';
        const analyticsEnabled = true;
        let hasTrackedInitialMapView = false;

        function setAppShellHeight() {
            const viewportHeight = window.visualViewport ? window.visualViewport.height : window.innerHeight;
            document.documentElement.style.setProperty('--app-height', `${Math.round(viewportHeight)}px`);
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
                (installHelpView && installHelpView.classList.contains('open'));

            const shouldLock = overlayOpen || detailOpen || filterSheetOpen || drawerOpen || fullPanelOpen;
            document.body.style.overflow = shouldLock ? 'hidden' : 'auto';
        }

        function trackEvent(name, params = {}) {
            if (!analyticsEnabled) return;
            if (typeof gtag === 'function') {
                gtag('event', name, {
                    app_domain: APP_DOMAIN,
                    ...params
                });
            }
        }

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
            if (favorites.has(venueName)) {
                favorites.delete(venueName);
            } else {
                favorites.add(venueName);
            }
            saveFavorites();
            updateFavoritesBadge();
            updateMap();
            updateListView();
        }

        function updateFavoritesBadge() {
            const bottomBadge = document.getElementById('bottom-favorites-count');
            if (bottomBadge) bottomBadge.textContent = favorites.size;
        }

        function renderCountWrappers() {}

        function applyTranslations() {
            document.title = translate('ui.title', document.title);
            const appTitle = document.getElementById('app-title');
            if (appTitle) appTitle.textContent = translate('ui.title', appTitle.textContent);
            const sidebarTitle = document.getElementById('sidebar-title');
            if (sidebarTitle) sidebarTitle.textContent = translate('ui.sidebarTitle', sidebarTitle.textContent);

            const searchInputEl = document.getElementById('search-input');
            if (searchInputEl) searchInputEl.placeholder = translate('ui.searchPlaceholder', searchInputEl.placeholder);

            const topSearchInputEl = document.getElementById('top-search-input');
            if (topSearchInputEl) topSearchInputEl.placeholder = translate('ui.searchPlaceholder', topSearchInputEl.placeholder);

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

            const favoritesTab = document.getElementById('bottom-tab-favorites-label');
            if (favoritesTab) favoritesTab.textContent = translate('ui.favoritesTab', favoritesTab.textContent);
            if (sidebarFavoritesLabel) {
                sidebarFavoritesLabel.textContent = translate('ui.favoritesTab', sidebarFavoritesLabel.textContent);
            }
            if (sidebarNearMeLabel) {
                sidebarNearMeLabel.textContent = translate('ui.nearMe', sidebarNearMeLabel.textContent);
            }

            const installBannerText = document.getElementById('install-banner-text');
            if (installBannerText) installBannerText.textContent = translate('ui.favoritesInstall', installBannerText.textContent);
            const installButton = document.getElementById('install-button');
            if (installButton) installButton.textContent = translate('ui.favoritesInstallCta', installButton.textContent);

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
            if (menuInstallHelp) {
                const label = menuInstallHelp.querySelector('.menu-label');
                if (label) label.textContent = translate('ui.menuInstall', label.textContent);
            }
            const menuLanguageTitle = document.getElementById('menu-language-title');
            if (menuLanguageTitle) menuLanguageTitle.textContent = translate('ui.menuLanguage', menuLanguageTitle.textContent);
            if (menuBug) menuBug.textContent = translate('ui.menuBug', menuBug.textContent);

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
            if (installHelpClose) installHelpClose.setAttribute('aria-label', translate('ui.menuClose', installHelpClose.getAttribute('aria-label') || 'Close'));

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
            const introInstallTitle = document.getElementById('intro-install-title');
            if (introInstallTitle) introInstallTitle.textContent = translate('ui.introInstallTitle', introInstallTitle.textContent);
            const introInstallIosLabel = document.getElementById('intro-install-ios-label');
            if (introInstallIosLabel) introInstallIosLabel.textContent = translate('ui.introInstallIosLabel', introInstallIosLabel.textContent);
            const introInstallIosText = document.getElementById('intro-install-ios-text');
            if (introInstallIosText) introInstallIosText.textContent = translate('ui.introInstallIosText', introInstallIosText.textContent);
            const introInstallAndroidLabel = document.getElementById('intro-install-android-label');
            if (introInstallAndroidLabel) introInstallAndroidLabel.textContent = translate('ui.introInstallAndroidLabel', introInstallAndroidLabel.textContent);
            const introInstallAndroidText = document.getElementById('intro-install-android-text');
            if (introInstallAndroidText) introInstallAndroidText.textContent = translate('ui.introInstallAndroidText', introInstallAndroidText.textContent);
            const introMapTitle = document.getElementById('intro-map-title');
            if (introMapTitle) introMapTitle.textContent = translate('ui.introMapTitle', introMapTitle.textContent);
            const introMapText = document.getElementById('intro-map-text');
            if (introMapText) introMapText.textContent = translate('ui.introMapText', introMapText.textContent);
            const introSkipLabel = document.getElementById('intro-skip-label');
            if (introSkipLabel) introSkipLabel.textContent = translate('ui.introSkip', introSkipLabel.textContent);
            if (introPrev) introPrev.textContent = translate('ui.introBack', introPrev.textContent);
            if (introNext && introSlideIndex < introSlides.length - 1) {
                introNext.textContent = translate('ui.introNext', introNext.textContent);
            } else if (introNext) {
                introNext.textContent = translate('ui.introDone', introNext.textContent);
            }

            const installHelpTitle = document.getElementById('install-help-title');
            if (installHelpTitle) installHelpTitle.textContent = translate('ui.installHelpTitle', installHelpTitle.textContent);
            const installHelpTagline = document.getElementById('install-help-tagline');
            if (installHelpTagline) installHelpTagline.textContent = translate('ui.installHelpTagline', installHelpTagline.textContent);
            const installHelpIosTitle = document.getElementById('install-help-ios-title');
            if (installHelpIosTitle) installHelpIosTitle.textContent = translate('ui.installHelpIosTitle', installHelpIosTitle.textContent);
            const installHelpIosStep1 = document.getElementById('install-help-ios-step-1');
            if (installHelpIosStep1) installHelpIosStep1.textContent = translate('ui.installHelpIosStep1', installHelpIosStep1.textContent);
            const installHelpIosStep2 = document.getElementById('install-help-ios-step-2');
            if (installHelpIosStep2) installHelpIosStep2.textContent = translate('ui.installHelpIosStep2', installHelpIosStep2.textContent);
            const installHelpIosStep3 = document.getElementById('install-help-ios-step-3');
            if (installHelpIosStep3) installHelpIosStep3.textContent = translate('ui.installHelpIosStep3', installHelpIosStep3.textContent);
            const installHelpAndroidTitle = document.getElementById('install-help-android-title');
            if (installHelpAndroidTitle) installHelpAndroidTitle.textContent = translate('ui.installHelpAndroidTitle', installHelpAndroidTitle.textContent);
            const installHelpAndroidStep1 = document.getElementById('install-help-android-step-1');
            if (installHelpAndroidStep1) installHelpAndroidStep1.textContent = translate('ui.installHelpAndroidStep1', installHelpAndroidStep1.textContent);
            const installHelpAndroidStep2 = document.getElementById('install-help-android-step-2');
            if (installHelpAndroidStep2) installHelpAndroidStep2.textContent = translate('ui.installHelpAndroidStep2', installHelpAndroidStep2.textContent);
            const installHelpAndroidStep3 = document.getElementById('install-help-android-step-3');
            if (installHelpAndroidStep3) installHelpAndroidStep3.textContent = translate('ui.installHelpAndroidStep3', installHelpAndroidStep3.textContent);
            const installHelpUseTitle = document.getElementById('install-help-use-title');
            if (installHelpUseTitle) installHelpUseTitle.textContent = translate('ui.installHelpUseTitle', installHelpUseTitle.textContent);
            const installHelpUseStep1 = document.getElementById('install-help-use-step-1');
            if (installHelpUseStep1) installHelpUseStep1.textContent = translate('ui.installHelpUseStep1', installHelpUseStep1.textContent);
            const installHelpUseStep2 = document.getElementById('install-help-use-step-2');
            if (installHelpUseStep2) installHelpUseStep2.textContent = translate('ui.installHelpUseStep2', installHelpUseStep2.textContent);
            const installHelpUseStep3 = document.getElementById('install-help-use-step-3');
            if (installHelpUseStep3) installHelpUseStep3.textContent = translate('ui.installHelpUseStep3', installHelpUseStep3.textContent);

            document.querySelectorAll('[data-category-heading]').forEach(heading => {
                const cat = heading.getAttribute('data-category-heading');
                heading.textContent = translate(`filters.categories.${cat}`, heading.textContent);
            });

            renderCountWrappers();
        }

        function openMenu() {
            if (!menuDrawer || !menuBackdrop) return;
            menuDrawer.classList.add('open');
            menuBackdrop.classList.add('visible');
            updateBodyScrollLock();
        }

        function closeMenu() {
            if (!menuDrawer || !menuBackdrop) return;
            menuDrawer.classList.remove('open');
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

        function openFilterSheet() {
            if (!isMobile()) return;
            sidebar.classList.add('show');
            sheetBackdrop.classList.add('visible');
            updateBodyScrollLock();
        }

        function closeFilterSheet(force = false) {
            if (!isMobile() && !force) return;
            sidebar.classList.remove('show');
            sheetBackdrop.classList.remove('visible');
            updateBodyScrollLock();
        }

        function handleResize() {
            setAppShellHeight();
            if (!isMobile()) {
                closeFilterSheet(true);
            }
            updateBodyScrollLock();
            if (mapPanel && !mapPanel.classList.contains('hidden')) {
                setTimeout(() => map.invalidateSize(), 100);
            }
        }

        // Helper: Count venues with specific filter
        function countVenuesWithFilter(category, filterId) {
            return venues.filter(v => v.filters[category].includes(filterId)).length;
        }

        // Create filter buttons
        function createFilterButtons() {
            Object.keys(filterDefinitions).forEach(category => {
                const container = document.getElementById(`${category}-filters`);
                if (!container) return;
                container.innerHTML = '';

                const heading = document.querySelector(`[data-category-heading="${category}"]`);
                if (heading) {
                    heading.textContent = translate(`filters.categories.${category}`, heading.textContent);
                }

                const filters = [...filterDefinitions[category]];
                if (category === 'amenities') {
                    filters.sort((a, b) => {
                        if (a.id === 'friendly-spaces') return 1;
                        if (b.id === 'friendly-spaces') return -1;
                        return 0;
                    });
                }

                filters.forEach(filter => {
                    const count = countVenuesWithFilter(category, filter.id);

                    const button = document.createElement('button');
                    button.className = `filter-button${filter.id === 'friendly-spaces' ? ' wide' : ''}`;
                    if (activeFilters[category].includes(filter.id)) {
                        button.classList.add('active');
                    }
                    button.dataset.category = category;
                    button.dataset.value = filter.id;

                    const labelSpan = document.createElement('span');
                    const labelText = translate(`filters.options.${category}.${filter.id}`, filter.label || filter.id);
                    labelSpan.textContent = typeof labelText === 'function' ? labelText() : labelText;

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
            button.classList.toggle('active');

            if (button.classList.contains('active')) {
                activeFilters[category].push(value);
            } else {
                activeFilters[category] = activeFilters[category].filter(v => v !== value);
            }

            updateMap();
            updateFilterCount();
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
                    const countLabel = translate('ui.cityCount', `${venueCount} venues`);
                    suggestions.push({
                        type: 'city',
                        name: city.charAt(0).toUpperCase() + city.slice(1),
                        count: typeof countLabel === 'function' ? countLabel(venueCount) : countLabel
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
            activeFilters = {
                venueType: [],
                cuisineType: [],
                ageRange: [],
                amenities: []
            };
            nearMeActive = false;
            searchQuery = '';
            if (searchInput) searchInput.value = '';
            if (topSearchInput) topSearchInput.value = '';
            setActiveView('map');
            createFilterButtons();
            updateFilterCount();
            isInitialLoad = true;
            updateMap();
            updateListView();
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
                const label = total > 0
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
            return Math.min(Math.max(nearest * 1.8, 1500), 7000);
        }

        // Check if venue matches filters
        function venueMatchesFilters(venue) {
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
                        venue.filters[category].includes(filter)
                    );
                    if (!hasAllFilters) return false;
                }
            }

            if (nearMeActive) {
                if (!userLocationLatLng || !Array.isArray(venue.fallbackCoords) || venue.fallbackCoords.length < 2) {
                    return false;
                }
                const distance = map.distance(
                    userLocationLatLng,
                    L.latLng(venue.fallbackCoords[0], venue.fallbackCoords[1])
                );
                if (distance > nearMeRadiusMeters) return false;
            }

            return true;
        }

        function getVisibleVenues() {
            return venues.filter(venueMatchesFilters);
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
                        const def = filterDefinitions[category].find(f => f.id === v);
                        const translated = translate(`filters.options.${category}.${v}`, def?.label || v);
                        const label = typeof translated === 'function' ? translated() : translated;
                        return `<span class="venue-tag" style="background: ${popupTagColor}; color: white;">${label}</span>`;
                    }).join('');
                    return tags;
                })
                .join('');

            // Create Google Maps directions link
            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.address)}`;
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
                    <p class="popup-address"><span class="popup-icon">${navigateSvg}</span> <a href="${mapsUrl}" target="_blank" rel="noopener noreferrer">${venue.address}</a></p>
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
                const marker = L.marker(coords, { icon: markerIcon });
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
        }

        function renderVenueCard(venue) {
            const description = getVenueText(venue, 'description');
            const image = venue.images && venue.images.length > 0 ? venue.images[0] : '';
            const isFav = isFavorite(venue.name);
            const tags = venue.filters?.venueType || [];
            const tagHtml = tags.map(tag => {
                const def = filterDefinitions.venueType.find(item => item.id === tag);
                const translated = translate(`filters.options.venueType.${tag}`, def?.label || tag);
                const label = typeof translated === 'function' ? translated() : translated;
                return `<span class="venue-card-tag">${label}</span>`;
            }).join('');

            return `
                <article class="venue-card" data-venue="${venue.name}">
                    ${image
                        ? `<img class="venue-card-image" src="${image}" alt="${venue.name}" loading="lazy" decoding="async">`
                        : `<div class="venue-card-image" aria-hidden="true"></div>`}
                    <div class="venue-card-header">
                        <h3 class="venue-card-title">${venue.name}</h3>
                        <button class="venue-card-favorite ${isFav ? 'active' : ''}" data-venue="${venue.name}" type="button" aria-label="Save venue">
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

            const seasonalNote = venue.seasonalNote
                ? (venue.seasonalNote[currentLang] || venue.seasonalNote.en || venue.seasonalNote.de)
                : null;

            const localizedDescription = getVenueText(venue, 'description');
            const localizedHours = getVenueText(venue, 'hours');
            const localizedSpecialty = getVenueText(venue, 'specialty');

            const mapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${encodeURIComponent(venue.address)}`;
            const phoneHref = formatPhoneHref(venue.phone);
            const isFav = isFavorite(venue.name);

            // Build image slider
            let sliderHtml = '';
            if (venue.images && venue.images.length > 0) {
                const sliderId = `detail-slider-${venue.name.replace(/\s+/g, '-').toLowerCase()}`;
                const imagesHtml = venue.images.map((img, i) =>
                    `<img src="${img}" alt="${venue.name}" loading="${i === 0 ? 'eager' : 'lazy'}" decoding="async">`
                ).join('');
                const dotsHtml = venue.images.map((_, i) =>
                    `<span class="slider-dot ${i === 0 ? 'active' : ''}" data-slide="${i}"></span>`
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
                        const def = filterDefinitions[category].find(f => f.id === v);
                        const translated = translate(`filters.options.${category}.${v}`, def?.label || v);
                        let label = typeof translated === 'function' ? translated() : translated;
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

            const iconButtonsHtml = `
                <div class="detail-icon-buttons">
                    <a class="detail-icon-btn" href="${mapsUrl}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="directions">
                        <span class="icon-circle">${navigateSvg}</span>
                        <span class="icon-label">Navigate</span>
                    </a>
                    ${phoneHref ? `
                        <a class="detail-icon-btn" href="${phoneHref}" data-analytics-link="true" data-link-type="phone">
                            <span class="icon-circle">${callSvg}</span>
                            <span class="icon-label">Call</span>
                        </a>
                    ` : `
                        <span class="detail-icon-btn" style="opacity:0.4; pointer-events:none;">
                            <span class="icon-circle">${callSvg}</span>
                            <span class="icon-label">Call</span>
                        </span>
                    `}
                    ${venue.website ? `
                        <a class="detail-icon-btn" href="${venue.website}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="website">
                            <span class="icon-circle">${websiteSvg}</span>
                            <span class="icon-label">Website</span>
                        </a>
                    ` : `
                        <span class="detail-icon-btn" style="opacity:0.4; pointer-events:none;">
                            <span class="icon-circle">${websiteSvg}</span>
                            <span class="icon-label">Website</span>
                        </span>
                    `}
                    ${instagramUrl ? `
                        <a class="detail-icon-btn" href="${instagramUrl}" target="_blank" rel="noopener noreferrer" data-analytics-link="true" data-link-type="instagram">
                            <span class="icon-circle">${instagramSvg}</span>
                            <span class="icon-label">Instagram</span>
                        </a>
                    ` : `
                        <span class="detail-icon-btn" style="opacity:0.4; pointer-events:none;">
                            <span class="icon-circle">${instagramSvg}</span>
                            <span class="icon-label">Instagram</span>
                        </span>
                    `}
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
                        <button class="detail-favorite-btn ${isFav ? 'active' : ''}" data-venue="${venue.name}" type="button" aria-label="Add to favorites">
                            <svg class="favorite-icon ${isFav ? 'filled' : ''}" viewBox="0 0 24 24" aria-hidden="true">
                                <path d="M20.8 6.6c-1.4-1.4-3.8-1.4-5.2 0L12 10.2 8.4 6.6C7 5.2 4.6 5.2 3.2 6.6c-1.4 1.4-1.4 3.8 0 5.2L12 21l8.8-9.2c1.4-1.4 1.4-3.8 0-5.2z"></path>
                            </svg>
                        </button>
                    </div>
                </div>
                <div class="detail-content">
                    ${iconButtonsHtml}

                    <div class="detail-section">
                        <p class="detail-description">${localizedDescription}</p>
                    </div>

                    <div class="detail-section">
                        <div class="detail-info-row">
                            <span class="detail-info-label">${hoursLabel}</span>
                            <span class="detail-info-value">${localizedHours}</span>
                        </div>
                        ${seasonalNote ? `
                            <div class="detail-info-row">
                                <span class="detail-info-label">Note</span>
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

        function setDetailSnap(snap) {
            if (!detailModal) return;
            const card = detailModal.querySelector('.detail-modal-card');
            if (!card) return;
            const normalized = ['peek', 'half', 'full'].includes(snap) ? snap : 'half';
            currentDetailSnap = normalized;
            card.classList.remove('snap-peek', 'snap-half', 'snap-full');
            card.classList.add(`snap-${normalized}`);
            if (normalized !== 'full' && detailModalContent) {
                detailModalContent.scrollTop = 0;
            }
        }

        function stepDetailSnap(direction) {
            const order = ['peek', 'half', 'full'];
            const idx = Math.max(0, order.indexOf(currentDetailSnap));
            const next = Math.min(order.length - 1, Math.max(0, idx + direction));
            setDetailSnap(order[next]);
        }

        function openDetailModal(venue, source = 'unknown') {
            if (!detailModal || !detailModalContent) return;

            trackEvent('venue_click', {
                venue_name: venue.name,
                venue_city: venue.city,
                source: source,
                language: currentLang,
                app_version: APP_VERSION
            });

            // Generate content
            detailModalContent.innerHTML = createDetailProfileContent(venue);
            if (detailPeekTitle) detailPeekTitle.textContent = venue.name;

            // Trigger sheet animation
            detailModal.setAttribute('aria-hidden', 'false');

            // Force reflow then activate
            detailModal.offsetHeight;
            detailModal.classList.add('active');
            setDetailSnap(source === 'map_pin' ? 'half' : 'full');

            // Prevent body scroll
            document.body.classList.add('detail-open');
            updateBodyScrollLock();

            // Attach event handlers
            const favoriteBtn = detailModalContent.querySelector('.detail-favorite-btn');
            if (favoriteBtn) {
                favoriteBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    const venueName = favoriteBtn.dataset.venue;
                    toggleFavorite(venueName);
                    const isFav = isFavorite(venueName);
                    favoriteBtn.classList.toggle('active', isFav);
                    const heartIcon = favoriteBtn.querySelector('.favorite-icon');
                    if (heartIcon) heartIcon.classList.toggle('filled', isFav);
                });
            }

            const sliderEl = detailModalContent.querySelector('.slider-container');
            attachSliderScrollSync(sliderEl);

            detailModalContent.querySelectorAll('a[data-analytics-link="true"]').forEach(link => {
                link.addEventListener('click', () => {
                    const linkType = link.dataset.linkType || 'unknown';
                    trackEvent('outbound_click', {
                        venue_name: venue.name,
                        venue_city: venue.city,
                        link_type: linkType,
                        url: link.href,
                        language: currentLang,
                        app_version: APP_VERSION
                    });
                }, { passive: true });
            });
        }

        function closeDetailModal() {
            if (!detailModal) return;

            detailModal.style.opacity = '0';
            if (isMobile()) setDetailSnap('peek');

            setTimeout(() => {
                detailModal.classList.remove('active');
                detailModal.setAttribute('aria-hidden', 'true');
                detailModal.style.opacity = '';
                if (detailPeekTitle) detailPeekTitle.textContent = '';

                // Restore body scroll
                document.body.classList.remove('detail-open');
                selectedVenueName = null;
                applySelectedMarkerStyle();
                updateBodyScrollLock();
            }, 300);
        }

        function setActiveView(view) {
            activeTab = view;
            bottomTabs.forEach(btn => {
                btn.classList.toggle('active', btn.dataset.view === view);
            });
            if (sidebarFavorites) {
                sidebarFavorites.classList.toggle('active', view === 'favorites');
            }
            const showMap = view === 'map';
            if (mapPanel) mapPanel.classList.toggle('hidden', !showMap);
            if (listPanel) listPanel.classList.toggle('hidden', showMap);
            if (showMap) {
                setTimeout(() => map.invalidateSize(), 100);
                trackEvent('map_view', {
                    view_source: 'tab',
                    language: currentLang,
                    app_version: APP_VERSION
                });
            }
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
                const atTop = sidebar.scrollTop <= 0;
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

        window.addEventListener('resize', handleResize);

        // Image slider functionality
        const sliderIndices = {};

        function slideImage(sliderId, direction) {
            const slider = document.getElementById(sliderId);
            if (!slider) return;

            const sliderContainer = slider.querySelector('.slider-container');
            const images = sliderContainer.querySelectorAll('img');
            const dots = slider.querySelectorAll('.slider-dot');

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
            const dots = sliderEl.parentElement.querySelectorAll('.slider-dot');
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
                    setActiveView('map');
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
        if (menuInstallHelp) {
            menuInstallHelp.addEventListener('click', () => {
                closeMenu();
                openPanel(installHelpView);
            });
        }
        if (menuBug) {
            menuBug.addEventListener('click', () => {
                closeMenu();
                openPanel(bugView);
            });
        }
        const SHARE_URL = window.location.origin;

        if (menuShare) {
            menuShare.addEventListener('click', async () => {
                const shareUrl = SHARE_URL || `${window.location.origin}${window.location.pathname}`;
                const shareData = {
                    title: 'Friendly Spaces',
                    text: 'Find family-friendly venues in Switzerland.',
                    url: shareUrl
                };
                try {
                    if (navigator.share) {
                        await navigator.share(shareData);
                    } else if (navigator.clipboard) {
                        await navigator.clipboard.writeText(shareUrl);
                        alert('Link copied to clipboard.');
                    } else {
                        prompt('Copy this link:', shareUrl);
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
                const to = 'hello@friendlyspaces.ch';
                window.location.href = `mailto:${to}?subject=${subject}`;
            });
        }

        if (introClose) {
            introClose.addEventListener('click', closeIntro);
        }
        if (introPrev) {
            introPrev.addEventListener('click', () => {
                if (introSlideIndex === 0) return;
                introSlideIndex -= 1;
                updateIntroSlides();
            });
        }
        if (introNext) {
            introNext.addEventListener('click', () => {
                if (introSlideIndex >= introSlides.length - 1) {
                    closeIntro();
                    return;
                }
                introSlideIndex += 1;
                updateIntroSlides();
            });
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
        if (bugClose) {
            bugClose.addEventListener('click', () => closePanel(bugView));
        }
        if (installHelpClose) {
            installHelpClose.addEventListener('click', () => closePanel(installHelpView));
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

        function handleNetlifySubmit(form, statusEl, successKey, errorKey) {
            const submitBtn = form.querySelector('button[type="submit"]');
            if (statusEl) statusEl.textContent = translate('ui.formSending', 'Sending...');
            if (submitBtn) submitBtn.disabled = true;

            fetch('/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
                body: encodeFormData(form)
            })
                .then(() => {
                    if (statusEl) statusEl.textContent = translate(successKey, 'Thanks! Sent.');
                    form.reset();
                })
                .catch(() => {
                    if (statusEl) statusEl.textContent = translate(errorKey, 'Something went wrong. Please try again.');
                })
                .finally(() => {
                    if (submitBtn) submitBtn.disabled = false;
                });
        }

        if (suggestForm) {
            suggestForm.addEventListener('submit', (event) => {
                event.preventDefault();
                const role = Array.from(suggestRoleButtons).find(btn => btn.classList.contains('active'))?.dataset.suggestRole || 'owner';
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
                    return;
                }

                const card = event.target.closest('.venue-card');
                if (!card) return;
                const venueName = card.dataset.venue;
                const venue = venues.find(v => v.name === venueName);
                if (venue) openDetailModal(venue, 'list_card');
            });
        }

        const modalClose = document.getElementById('detail-modal-close');
        if (modalClose) {
            modalClose.addEventListener('click', closeDetailModal);
        }

        let detailDragStartY = 0;
        let detailDragging = false;
        let detailDragFromContent = false;
        function handleDetailSheetDrag(deltaY) {
            if (deltaY < -44) {
                stepDetailSnap(1);
                return true;
            }
            if (deltaY > 44) {
                if (currentDetailSnap === 'peek') closeDetailModal();
                else stepDetailSnap(-1);
                return true;
            }
            return false;
        }

        function bindDetailSwipeTarget(target, fromContent) {
            if (!target) return;
            target.addEventListener('touchstart', (event) => {
                if (!isMobile() || !detailModal?.classList.contains('active')) return;
                if (fromContent && currentDetailSnap === 'full' && detailModalContent && detailModalContent.scrollTop > 0) {
                    detailDragging = false;
                    return;
                }
                detailDragStartY = event.touches[0].clientY;
                detailDragFromContent = fromContent;
                detailDragging = true;
            }, { passive: true });

            target.addEventListener('touchmove', (event) => {
                if (!isMobile() || !detailDragging) return;
                const deltaY = event.touches[0].clientY - detailDragStartY;
                if (Math.abs(deltaY) < 16) return;

                const pullingFromTop =
                    !detailDragFromContent ||
                    !detailModalContent ||
                    detailModalContent.scrollTop <= 0;

                if (pullingFromTop && (currentDetailSnap !== 'full' || deltaY > 0)) {
                    event.preventDefault();
                }
            }, { passive: false });

            target.addEventListener('touchend', (event) => {
                if (!isMobile() || !detailDragging) return;
                const endY = event.changedTouches[0].clientY;
                const deltaY = endY - detailDragStartY;
                detailDragging = false;
                handleDetailSheetDrag(deltaY);
            }, { passive: true });
        }

        bindDetailSwipeTarget(detailSheetGrabber, false);
        bindDetailSwipeTarget(detailModalContent, true);

        if (detailModal) {
            detailModal.addEventListener('click', (event) => {
                if (event.target === detailModal) closeDetailModal();
            });
        }

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeDetailModal();
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

        // Install prompt banner
        let deferredPrompt = null;
        const installBanner = document.getElementById('install-banner');
        const installButton = document.getElementById('install-button');
        const installBannerText = document.getElementById('install-banner-text');

        // Detect iOS (any browser on iOS uses WebKit)
        const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) || 
                      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
        const isInStandaloneMode = window.matchMedia('(display-mode: standalone)').matches || 
                                   window.navigator.standalone === true;
        
        // Check if iOS banner was previously dismissed
        let iosBannerDismissed = false;
        try {
            iosBannerDismissed = localStorage.getItem('friendlyspaces_ios_install_dismissed') === 'true';
        } catch (e) {}

        // Android/Chrome install prompt
        window.addEventListener('beforeinstallprompt', (e) => {
            e.preventDefault();
            deferredPrompt = e;
            if (installBanner) installBanner.classList.remove('hidden');
        });

        // iOS - show manual instructions (if not dismissed and not already installed)
        if (isIOS && !isInStandaloneMode && !iosBannerDismissed) {
            if (installBanner && installBannerText && installButton) {
                const iosText = {
                    de: 'Tippe auf Teilen □↑ dann "Zum Home-Bildschirm"',
                    fr: 'Appuyez sur Partager □↑ puis "Écran d\'accueil"',
                    en: 'Tap Share □↑ then "Add to Home Screen"'
                };
                const iosDismiss = {
                    de: 'OK',
                    fr: 'OK', 
                    en: 'Got it'
                };
                installBannerText.textContent = iosText[currentLang] || iosText.en;
                installButton.textContent = iosDismiss[currentLang] || iosDismiss.en;
                installBanner.classList.remove('hidden');
                installBanner.classList.add('ios-install');
            }
        }

        if (installButton) {
            installButton.addEventListener('click', async () => {
                // iOS - just dismiss
                if (isIOS) {
                    if (installBanner) installBanner.classList.add('hidden');
                    try {
                        localStorage.setItem('friendlyspaces_ios_install_dismissed', 'true');
                    } catch (e) {}
                    return;
                }
                // Android - trigger install prompt
                if (!deferredPrompt) return;
                deferredPrompt.prompt();
                await deferredPrompt.userChoice;
                deferredPrompt = null;
                if (installBanner) installBanner.classList.add('hidden');
            });
        }

        window.addEventListener('appinstalled', () => {
            if (installBanner) installBanner.classList.add('hidden');
        });

        // Quick filter pills functionality
        const pillFilters = document.getElementById('pill-filters');
        const pillFavorites = document.getElementById('pill-favorites');
        const quickFilterPills = document.querySelectorAll('.quick-filter-pill[data-filter-category]');

        // Update quick filter pill labels based on current language
        function updateQuickFilterLabels() {
            document.querySelectorAll('[data-pill-label]').forEach(label => {
                const key = label.dataset.pillLabel;
                if (key === 'filters') {
                    label.textContent = translate('ui.filtersLabel', 'Filters');
                } else if (key === 'cafe') {
                    label.textContent = translate('filters.options.venueType.cafe', 'Cafe');
                } else if (key === 'baby') {
                    label.textContent = translate('filters.options.ageRange.baby', 'Baby');
                } else if (key === 'toddler') {
                    label.textContent = translate('filters.options.ageRange.toddler', 'Toddler');
                } else if (key === 'play-area') {
                    label.textContent = translate('filters.options.amenities.play-area', 'Play Area');
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
            });

            // Update favorites pill active state
            if (pillFavorites) {
                pillFavorites.classList.toggle('active', activeTab === 'favorites');
            }
            if (sidebarNearMe) sidebarNearMe.classList.toggle('active', nearMeActive);
        }

        // Toggle a quick filter
        function toggleQuickFilter(category, value) {
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
            }

            updateMap();
            updateFilterCount();
            syncQuickFilterPills();
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
                    // Switch back to map view
                    setActiveView('map');
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
        };

        if (sidebarNearMe) {
            sidebarNearMe.addEventListener('click', () => {
                if (!nearMeActive && !userLocationLatLng) {
                    if (!navigator.geolocation) return;
                    navigator.geolocation.getCurrentPosition(
                        (pos) => {
                            const { latitude, longitude } = pos.coords;
                            showUserLocation(latitude, longitude);
                            centerMapWithNearestVenue(latitude, longitude);
                            toggleNearMe();
                        },
                        () => {
                            // Ignore location errors
                        },
                        { enableHighAccuracy: true, timeout: 8000, maximumAge: 60000 }
                    );
                    return;
                }

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
            setAppShellHeight();
            if (window.visualViewport) {
                window.visualViewport.addEventListener('resize', setAppShellHeight);
                window.visualViewport.addEventListener('scroll', setAppShellHeight);
            }
            window.addEventListener('orientationchange', setAppShellHeight);
            loadFavorites();
            updateFavoritesBadge();
            setLanguage(currentLang, { skipUrlUpdate: true });
            handleResize();
            updateQuickFilterLabels();
            syncQuickFilterPills();
            setSuggestRole('owner');
            updateBodyScrollLock();

            if (!hasTrackedInitialMapView) {
                trackEvent('map_view', {
                    view_source: 'load',
                    language: currentLang,
                    app_version: APP_VERSION
                });
                hasTrackedInitialMapView = true;
            }

            if ('serviceWorker' in navigator) {
                window.addEventListener('load', () => {
                    navigator.serviceWorker.register('./sw.js').catch(() => {});
                });
            }
        }

        loadVenues().finally(startApp);

        // Show intro after initial render
        showIntroIfNeeded();
