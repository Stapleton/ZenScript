import { CompletionItem } from "vscode-languageserver";
import { IBracketHandler } from "../../api/IBracketHandler";

class DamageSource implements IBracketHandler {
  handler: CompletionItem = {
    label: "damageSource",
    detail: "Refer to IDamageSources.",
    documentation: {
      kind: "markdown",
      value:
        "The Damage Source Bracket Handler allows you to refer to [IDamageSources](https://crafttweaker.readthedocs.io/en/latest/#Vanilla/Damage/IDamageSource/) in the game.  \n" +
        "If the Damage source is not one of the predefined ones, this will create a new one with the given name.  \n" +
        // TODO: Add wiki here.
        // https://raw.githubusercontent.com/CraftTweaker/CraftTweaker-Documentation/master/docs/Vanilla/Brackets/Bracket_DamageSource.md
        "\n" +
        "```\n" +
        "<damageSource:type>;\n" +
        "\n" +
        "<damageSource:IN_FIRE>;\n" +
        "```"
    }
  };

  next(predecessor: string[]): CompletionItem[] {
    return [];
  }

  detail(item: CompletionItem): CompletionItem {
    return item;
  }
}

export const DamageSourceBracketHandler = new DamageSource();
