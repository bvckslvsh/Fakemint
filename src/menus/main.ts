import { select, Separator } from "@inquirer/prompts";
import { generatorMenu } from "./generator";

export async function runMenu() {
    const answer = await select({
        message: "Choose option <↑↓> or <jk> and hit enter!",
        choices: [
            {
                name: "Generate JSON",
                value: "json",
                description:
                    "Build json structure filled with fake testing data.",
            },
            {
                name: "Generate XML",
                value: "xml",
                disabled: true,
            },
            {
                name: "Generate YAML",
                value: "yaml",
                disabled: true,
            },
            new Separator(),
            {
                name: "Exit",
                value: "exit",
            },
        ],
    });

    if (answer === "exit") {
        console.log("exiting...");
    } else if (answer === "json") {
        generatorMenu();
    }
}
