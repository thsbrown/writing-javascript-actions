const core = require("@actions/core");
const github = require("@actions/github");

async function run() {

    const issueTitle = core.getInput("issue-title");
    const repoToken = core.getInput("repo-token");
    const joke = core.getInput("joke");
    const octokit = github.getOctokit(repoToken);

    const newIssue = await octokit.issues.create({
        title: issueTitle,
        body:joke
    });
}

run();