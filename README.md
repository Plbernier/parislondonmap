# 🗺️ Paris & Londres - Carte Interactive

## 📖 Description

Application web interactive complète pour explorer Paris et Londres avec des points d'intérêt personnalisés, un système de directions intégré et des fonctionnalités avancées de planification d'itinéraires.

## ✨ Fonctionnalités Principales

### 🗺️ **Carte Interactive**
- **Leaflet.js + OpenStreetMap** pour une expérience fluide
- **Switch Paris/Londres** avec vues optimisées
- **Marqueurs personnalisés** colorés par catégorie avec icônes emoji

### 📍 **Système de Directions Avancé**
- **Boutons directions** : Google Maps, Apple Maps, Waze
- **Détection automatique** de plateforme (iOS → Apple Maps)
- **Géolocalisation utilisateur** pour point de départ
- **Formats URL optimisés** pour chaque service de navigation

### 🏪 **Points d'Intérêt Complets**

#### **PARIS (58 lieux)**
- 🏪 **4 Commerces locaux** avec téléphone, horaires, spécialités
- ☕ **4 Cafés authentiques** Montmartre avec informations complètes
- 🥖 **4 Boulangeries** primées avec distinctions
- 🛒 **4 Marchés** avec horaires et spécialités
- 🎭 **5 Attractions principales** avec infos pratiques
- 🏛️ **4 Musées famille** avec horaires et tarifs
- 🌳 **6 Parcs & détente** pour récupération
- 🏘️ **5 Quartiers authentiques** à explorer
- 📷 **7 Magasins photo** (Leica, vintage, quartiers)

#### **LONDRES (28 lieux)**
- 🎭 **7 Attractions principales** avec planning détaillé
- 🛒 **6 Marchés & quartiers** authentiques
- 🌳 **4 Parcs & détente** avec activités
- 🏛️ **5 Musées familiaux** interactifs
- 📷 **6 Magasins photo** spécialisés

### 🎯 **Fonctionnalités Avancées**

#### **📱 Interface Moderne**
- **Sidebar responsive** avec 4 onglets :
  - 📅 **Itinéraire** : Organisation par jour
  - 🏷️ **Catégories** : Filtrage par type
  - 📍 **Mes Lieux** : Points personnalisés
  - 🗺️ **Planifier** : Itinéraires multi-étapes

#### **🔍 Recherche & Filtres**
- **Recherche instantanée** par nom ou description
- **Filtres par catégorie** avec compteurs
- **Filtres par jour** d'itinéraire
- **Affichage sélectif** des marqueurs

#### **➕ Ajout de Lieux Personnalisés**
- **Modal moderne** avec formulaire complet
- **Géocodage automatique** (OpenStreetMap Nominatim)
- **Intégration Google Maps** pour vérification d'adresse
- **Champs détaillés** : nom, adresse, téléphone, horaires, site web, description, spécialité
- **Sauvegarde localStorage** automatique

#### **🚀 Planificateur d'Itinéraires**
- **Sélection multi-lieux** interactive
- **Optimisation d'itinéraire** par proximité et jour
- **Calcul de distances** avec formule Haversine
- **Export d'itinéraire** en JSON
- **Temps de marche estimé**

#### **💾 Sauvegarde & Export**
- **localStorage** pour données personnalisées
- **Export/import JSON** des lieux personnalisés
- **Export d'itinéraires** planifiés
- **Persistance automatique** des préférences

#### **🎨 UX/UI Optimisée**
- **Mode sombre/clair** avec basculement
- **Design responsive** mobile-friendly
- **Animations fluides** et feedback visuel
- **Popups enrichis** avec toutes les informations
- **Contrôles intuitifs** avec raccourcis

## 🚀 Installation & Utilisation

### **Lancement Rapide**
1. Ouvrir `paris-london-map.html` dans un navigateur moderne
2. La carte se charge automatiquement sur Paris (Montmartre)
3. Utiliser les boutons pour switcher entre Paris/Londres

### **Navigation**
- **Cliquer sur les marqueurs** pour voir les détails complets
- **Utiliser la sidebar** pour filtrer et organiser
- **Bouton "Ma position"** pour géolocalisation
- **Mode planification** pour créer des itinéraires

### **Ajout de Lieux**
1. Cliquer sur le bouton **"+"** (Ajouter lieu)
2. Remplir le formulaire avec les détails
3. Utiliser **"Rechercher sur Google Maps"** pour vérifier l'adresse
4. Enregistrer → géocodage automatique et ajout sur la carte

## 🛠️ Technologies Utilisées

- **Leaflet.js 1.9.4** - Cartographie interactive
- **OpenStreetMap** - Données cartographiques
- **Font Awesome 6.4.0** - Icônes
- **Nominatim API** - Géocodage d'adresses
- **JavaScript Vanilla** - Logique application
- **CSS3** - Styles et animations
- **HTML5** - Structure sémantique

## 📊 Statistiques

- **86 points d'intérêt** pré-configurés
- **12 catégories** différentes avec couleurs distinctes
- **3 services de navigation** intégrés
- **Géocodage** pour 190+ pays
- **Support mobile** complet
- **Sauvegarde locale** illimitée

## 🎯 Cas d'Usage

- **Planification de voyages** à Paris et Londres
- **Découverte de commerces locaux** authentiques
- **Exploration photographique** avec magasins spécialisés
- **Itinéraires famille** avec activités adaptées
- **Guide personnel** enrichi et personnalisable

## 🔧 Personnalisation

Le code est modulaire et facilement extensible :
- Ajouter de nouvelles villes dans `cities` 
- Créer de nouvelles catégories dans `categories`
- Étendre les données dans `getParisLocations()` et `getLondonLocations()`
- Personnaliser les styles CSS pour l'apparence

## 📝 Licence

Projet personnel - Libre d'utilisation et modification

---

**🎉 Profitez de votre exploration de Paris et Londres !** 

*Développé avec ❤️ pour les passionnés de découvertes urbaines et de photographie*