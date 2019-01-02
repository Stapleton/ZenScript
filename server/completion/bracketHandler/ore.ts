import { CompletionItem } from "vscode-languageserver";
import { IBracketHandler } from "../../api/IBracketHandler";

class Ore implements IBracketHandler {
  handler: CompletionItem = {
    label: "ore",
    detail: "Access Ore Dictionaries.",
    documentation: {
      kind: "markdown",
      value:
        "The Ore Dictionary Bracket Handler gives you access to the Ore Dictionaries in the game.  \n" +
        "Ore Dictionarys are referenced in the Ore Dictionary Bracket Handler by like so:  \n" +
        "```\n" +
        "<ore:orename>\n" +
        "\n" +
        "<ore:ingotIron>\n" +
        "```\n" +
        "Returns an [IOreDictEntry](https://crafttweaker.readthedocs.io/en/latest/#Vanilla/OreDict/IOreDictEntry/)," +
        " as long as no `*` is in the call, otherwise returns a `List<IOreDictEntry>`  \n" +
        "If the oreDictionary is not yet in the game, will create a new and empty oreDictionary with the given name and return that.  \n" +
        "Please refer to the [Ore Dictionary](https://crafttweaker.readthedocs.io/en/latest/#Vanilla/OreDict/IOreDictEntry/)" +
        " Entry for further information on what to do with them."
    }
  };

  next(predecessor: string[]): CompletionItem[] {
    return [];
  }

  detail(item: CompletionItem): CompletionItem {
    return item;
  }
}

export const OreBracketHandler = new Ore();