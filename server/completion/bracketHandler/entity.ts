import { CompletionItem } from "vscode-languageserver";
import { IBracketHandler } from "../../api/IBracketHandler";

class Entity implements IBracketHandler {
  handler: CompletionItem = {
    label: "entity",
    detail: "Access Entities.",
    documentation: {
      kind: "markdown",
      value:
        "The Entity Bracket Handler gives you access to the Entities (e.g. Mobs, tile ents etc.) in the game. It is only possible to get entities registered in the game, so adding or removing mods may cause issues if you reference the mod's mobs in an Entity Bracket Handler.  \n" +
        "Entities are referenced in the Entity handler this way:  \n" +
        "```\n" +
        "<entity:modID:entityName>\n" +
        "\n" +
        "<entity:minecraft:sheep>\n" +
        "```\n" +
        "If the mob/entity is found, this will return an IEntityDefinition Object.  \n" +
        "Please refer to the [respective Wiki entry](https://crafttweaker.readthedocs.io/en/latest/#Vanilla/Entities/IEntityDefinition/)" +
        " for further information on what you can do with these."
    }
  };

  next(predecessor: string[]): CompletionItem[] {
    return [];
  }

  detail(item: CompletionItem): CompletionItem {
    return item;
  }
}

export const EntityBracketHandler = new Entity();