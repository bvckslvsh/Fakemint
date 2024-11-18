import { Command } from "commander";
import { generateData } from "./generator";
import { availableFields } from "./fields";
import { runMenu } from "./menus/main";

const program = new Command();

program.name("Fakemint").description("Test data generator").version("0.1.0");

program.action(() => {
    runMenu();
});

program
    .command("fields")
    .description("List available fields")
    .action(() => {
        console.log("Available fields:");
        console.log(Object.keys(availableFields).join(", "));
    });

program
    .command("generate")
    .description("Generate test data")
    .argument("<fields...>", "Enter the fields you want to generate")
    .action((fields) => {
        try {
            const data = generateData(fields);
            console.log(JSON.stringify(data, null, 2));
        } catch (error) {
            console.error(error.message);
        }
    });

export default program;
