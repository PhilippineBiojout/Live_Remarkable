# reMarkable pour Fragment

Un plugin [Fragment](https://github.com/RebornFlamme/Fragment) qui tient à jour
dans le vault un PDF de chaque document d'une reMarkable branchée en USB-C.
Même structure que
[`fragment-sample-plugin`](https://github.com/RebornFlamme/fragment-sample-plugin).

## Ce qu'il fait

- **`reMarkable/` est le miroir de la tablette** : chaque document y est écrit à
  `reMarkable/<chemin sur la tablette>.pdf`, dossiers compris. Créé, déplacé,
  renommé ou supprimé sur la tablette : de même dans le vault.
- **Un carnet manuscrit** est dessiné par le plugin à partir de ses traits bruts
  (`/download/{id}/rmdoc`, environ 0,5 s) ; un PDF ou un EPUB importé passe par
  l'export PDF de la tablette, qui rend les annotations.
- **Un PDF ouvert se recharge seul** à chaque modification et reste à la page
  qu'on lisait.
- **Statut dans la barre d'état** : « Live » ou « Déconnectée » quand un PDF de
  la tablette est affiché ; au clic, l'étape qui manque (le câble ou
  l'interface web USB).
- **Commandes** (Cmd+P) : « reMarkable : sync » coupe ou relance la synchro,
  « reMarkable : show live status » cache ou montre le statut.

## Prérequis

Sur la tablette : Réglages → Stockage → **interface web USB** activée. Le plugin
interroge `http://10.11.99.1`. Ses réglages sont dans `remarkable.json`, dans
le dossier du plugin.

## Installer

```bash
npm install
npm run build
```

Copier `main.js`, `manifest.json` et `styles.css` dans
`<vault>/.fragment/plugins/remarkable/`, puis ajouter `"remarkable"` à
`<vault>/.fragment/community-plugins.json`.

## Code

```
src/
  main.ts              branche le plugin, rien d'autre
  remarkable/
    remarkable.ts      commandes, icône, statut, réglages
    synchro.ts         la boucle de synchro et le miroir du vault
    tablette.ts        l'interface web USB (http de Node)
    rmdoc.ts           d'un rmdoc à un PDF
    registre.ts        ce qui a déjà été écrit, par document
    statut.ts, demande.ts, eclosion.ts, dom.ts   l'interface
  tests/               vitest (`npm test`)
```
