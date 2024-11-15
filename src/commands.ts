import { Command } from "commander";
import { generateData } from "./generator";
import { availableFields } from "./fields";

const program = new Command();

program.name("Fakemint").description("Test data generator").version("0.0.1");

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

program
    .command("help")
    .description("List available fields")
    .action(() => {
        console.log("Available fields:");
        console.log(Object.keys(availableFields).join(", "));
    });

export default program;
