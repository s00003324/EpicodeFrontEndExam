# Book Manager Project

Matricola Epicode: S00003324
Anno accademico: 2025/2026

# Descrizione

Applicazione React per la gestione e visualizzazione di libri per bambini, sviluppata come progetto finale del corso di Frontend Programming. 

# Funzionalità principali

- Visualizzazione dell’elenco dei libri con titolo e copertina
- Pagina con elenco dettagliato dei libri disponibili
- Login simulato con indirizzo email (senza password)
- Area profilo personale accessibile dopo login:
	- Modifica nome, email e immagine profilo
	- Cambio password
	- Elenco libri letti con rimozione
- Dashboard admin:
	- Modifica,aggiunta e cancellazione libri dall'elenco principale
- Navbar e footer visibili su tutte le pagine
- Protezione delle rotte con controllo via `localStorage`

# Avvio del progetto

Assicurati di avere installato Node.js e npm.

Per avviare il progetto su desktop:

```bash
npm install
npm run dev

Apri il browser su http://localhost:5173

# Tecnologie utilizzate

- React
- Redux Toolkit
- React Router DOM
- LocalStorage (per autenticazione)
- Vite (per il bundling)
- CSS Modules / plain CSS

Struttura del Progetto:

public/
└── assets/
│ ├── book cover images
│ ├── background image
├── books.js

src/
├── assets/
│ ├── owl_logo.png
│ ├── user.jpg
├── components/
│ ├── Navbar.jsx
│ ├── Footer.jsx
│ ├── PasswordForm.jsx
│ ├── ProfileForm.jsx
├── redux/
│ ├── authSlice.js
│ ├── bookSlice.js
│ ├── store.js
├── pages/
│ ├── Home.jsx
│ ├── Login.jsx
│ ├── BookList.jsx
│ ├── BookDetail.jsx
│ ├── EditBook.jsx
│ ├── AddBook.jsx
│ ├── NotFound.jsx
│ ├── Dashboard.jsx
│ └── UserDashboard.jsx
├── styles/
│ └── style.css
├── App.jsx
└── main.jsx


# Accesso utenti

- **Utente qualsiasi**: inserisci qualsiasi email (es. dario@email.com)
- **Amministratore**: usa `admin@email.com`

I dati di login sono simulati, non è richiesta password.
Tutti i dati sono simulati e gestiti in locale.

# Requisiti d'esame coperti

- Uso di React Router con 9 pagine
- Rotte dinamiche (/book/:id)
- Stato locale (useState) e globale (Redux)
- Login simulato con ruoli (utente/admin)
- API simulata (dati da JSON o costanti)
- Form controllati con validazione
- Condizionale rendering (Navbar diversa se loggato/admin)

