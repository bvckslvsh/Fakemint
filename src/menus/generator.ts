import { checkbox, Separator } from "@inquirer/prompts";
import { generateData } from "../generator";

export async function generatorMenu() {
    const answer = await checkbox({
        message:
            "Select required fields <space> and proceed to generation <enter>  (The list can be scrolled)",
        choices: [
            // ID & Names
            { name: "id", value: "id" },
            { name: "name", value: "name" },
            { name: "firstName", value: "firstName" },
            { name: "first_name", value: "first_name" },
            { name: "lastName", value: "lastName" },
            { name: "last_name", value: "last_name" },
            { name: "surname", value: "surname" },
            { name: "middleName", value: "middleName" },
            { name: "middle_name", value: "middle_name" },

            new Separator(),

            // Dates
            { name: "birthdate", value: "birthdate" },
            { name: "dateOfBirth", value: "dateOfBirth" },
            { name: "registeredAt", value: "registeredAt" },
            { name: "registered_at", value: "registered_at" },
            { name: "createdAt", value: "createdAt" },
            { name: "created_at", value: "created_at" },
            { name: "updatedAt", value: "updatedAt" },
            { name: "updated_at", value: "updated_at" },

            new Separator(),

            // Identity & System states
            { name: "gender", value: "gender" },
            { name: "sex", value: "sex" },
            { name: "isOnboarded", value: "isOnboarded" },
            { name: "is_onboarded", value: "is_onboarded" },
            { name: "isBlocked", value: "isBlocked" },
            { name: "is_blocked", value: "is_blocked" },

            new Separator(),

            // Contacts
            { name: "email", value: "email" },
            { name: "emailVerified", value: "emailVerified" },
            { name: "email_verified", value: "email_verified" },
            { name: "phoneNumber", value: "phoneNumber" },
            { name: "phone_number", value: "phone_number" },
            { name: "avatarLink", value: "avatarLink" },

            new Separator(),

            // Settings
            { name: "theme", value: "theme" },
            { name: "country", value: "country" },

            // Password
            { name: "passwordHash", value: "passwordHash" },
            { name: "password_hash", value: "password_hash" },

            // Statuses
            { name: "verified", value: "verified" },

            new Separator(),
        ],
    });

    try {
        const data = generateData(answer);
        console.log(JSON.stringify(data, null, 2));
    } catch (error) {
        console.error(error.message);
    }
}
