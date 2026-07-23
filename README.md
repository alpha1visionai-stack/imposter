# Imposter 🕵️

Ein einfaches, modernes Pass-and-Play Partyspiel für 3–12 Spieler auf einem Handy.

Alle Zivilisten bekommen dasselbe geheime Wort, der/die Imposter nicht. Reihum stellt ihr euch Fragen zum Wort, ohne es direkt zu verraten – am Ende wird abgestimmt, wer der Imposter war.

Gebaut mit Next.js (App Router) und Tailwind CSS.

## Entwicklung

```bash
npm install
npm run dev
```

Anschließend [http://localhost:3000](http://localhost:3000) öffnen.

## Ablauf

1. **Setup** – Spieler eintragen, Anzahl Imposter, Kategorie und Diskussionszeit wählen.
2. **Rollenverteilung** – Handy reihum weitergeben, jeder deckt sein Wort bzw. seine Imposter-Rolle per Tippen auf.
3. **Diskussion** – Countdown-Timer läuft, alle stellen sich gegenseitig Fragen.
4. **Auflösung** – Wort und Imposter werden angezeigt, direkt neue Runde starten.

## Deployment

Die App ist ein statisches Next.js-Projekt ohne Backend und lässt sich direkt auf [Vercel](https://vercel.com) deployen.
