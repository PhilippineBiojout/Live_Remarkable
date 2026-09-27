import { Plugin } from "fragment";
import { brancherRemarkable } from "./remarkable/remarkable";

/**
 * La reMarkable dans Fragment. Tout vit dans `src/remarkable/` : ce fichier ne
 * fait que le brancher. Chaque `addX()` / `registerX()` fait par
 * `brancherRemarkable` se défait tout seul quand le plugin est désactivé.
 */
export default class RemarkablePlugin extends Plugin {
	async onload(): Promise<void> {
		await brancherRemarkable(this);
	}
}
