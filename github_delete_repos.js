import "dotenv/config"; // Load environment variables
import axios from "axios";
import inquirer from "inquirer";
import chalk from "chalk";
import dayjs from "dayjs"; // To format dates

const GITHUB_USERNAME = process.env.GITHUB_USERNAME;
const GITHUB_TOKEN = process.env.GITHUB_TOKEN;

// Validate .env variables
if (!GITHUB_USERNAME || !GITHUB_TOKEN) {
    console.error(chalk.red("❌ Error: Please set GITHUB_USERNAME and GITHUB_TOKEN in your .env file."));
    process.exit(1);
}

// GitHub API base URL
const GITHUB_API_URL = "https://api.github.com";

// Axios instance with authentication
const apiClient = axios.create({
    baseURL: GITHUB_API_URL,
    headers: {
        Authorization: `token ${GITHUB_TOKEN}`,
        Accept: "application/vnd.github.v3+json",
    },
});

// Function to fetch repositories sorted by last modified date (oldest first)
async function fetchRepositories() {
    try {
        console.log(chalk.blue("\nFetching your repositories..."));
        const response = await apiClient.get(`/users/${GITHUB_USERNAME}/repos?per_page=100`);

        let repos = response.data.map(repo => ({
            name: `${repo.name} (Last updated: ${dayjs(repo.updated_at).format("YYYY-MM-DD")})`,
            value: repo.name,
            lastUpdated: repo.updated_at
        }));

        // Sort by last modified date (oldest first)
        repos.sort((a, b) => new Date(a.lastUpdated) - new Date(b.lastUpdated));

        return repos;
    } catch (error) {
        console.error(chalk.red("❌ Error fetching repositories:"), error.response?.data || error.message);
        process.exit(1);
    }
}

// Function to delete a repository
async function deleteRepository(repoName) {
    try {
        console.log(chalk.yellow(`\nDeleting repository: ${repoName}...`));
        await apiClient.delete(`/repos/${GITHUB_USERNAME}/${repoName}`);
        console.log(chalk.green(`✔ Repository '${repoName}' deleted successfully!`));
    } catch (error) {
        console.error(chalk.red(`❌ Failed to delete '${repoName}':`), error.response?.data || error.message);
    }
}

// Main function to select and delete repositories
async function main() {
    const repos = await fetchRepositories();

    if (repos.length === 0) {
        console.log(chalk.red("No repositories found."));
        return;
    }

    const { selectedRepos } = await inquirer.prompt([
        {
            type: "checkbox",
            name: "selectedRepos",
            message: "Select repositories to delete (sorted by last updated date - oldest first):",
            choices: repos
        }
    ]);

    if (selectedRepos.length === 0) {
        console.log(chalk.yellow("⚠️ No repositories selected. Exiting."));
        return;
    }

    const { confirmDelete } = await inquirer.prompt([
        {
            type: "confirm",
            name: "confirmDelete",
            message: chalk.red(`⚠️ Are you sure you want to delete ${selectedRepos.length} repositories? This action is irreversible!`),
            default: false
        }
    ]);

    if (confirmDelete) {
        for (const repo of selectedRepos) {
            await deleteRepository(repo);
        }
        console.log(chalk.green("\n✅ All selected repositories have been deleted."));
    } else {
        console.log(chalk.yellow("\n❌ Operation cancelled. No repositories were deleted."));
    }
}

// Run the script
main();
