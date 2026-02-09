#!/usr/bin/env node

const fs = require("fs");
const path = require("path");
const os = require("os");

// ANSI colors
const bold = (s) => `\x1b[1m${s}\x1b[0m`;
const green = (s) => `\x1b[32m${s}\x1b[0m`;
const red = (s) => `\x1b[31m${s}\x1b[0m`;
const cyan = (s) => `\x1b[36m${s}\x1b[0m`;
const dim = (s) => `\x1b[2m${s}\x1b[0m`;

const SKILLS_SRC = path.join(__dirname, "..", "skills");
const SKILLS_DEST = path.join(os.homedir(), ".claude", "skills");

function getAvailableSkills() {
  const entries = fs.readdirSync(SKILLS_SRC, { withFileTypes: true });
  const skills = [];
  for (const entry of entries) {
    if (!entry.isDirectory()) continue;
    const skillMd = path.join(SKILLS_SRC, entry.name, "SKILL.md");
    if (!fs.existsSync(skillMd)) continue;
    const content = fs.readFileSync(skillMd, "utf8");
    const frontmatter = parseFrontmatter(content);
    skills.push({
      name: frontmatter.name || entry.name,
      description: frontmatter.description || "",
      dir: entry.name,
    });
  }
  return skills.sort((a, b) => a.name.localeCompare(b.name));
}

function parseFrontmatter(content) {
  const match = content.match(/^---\n([\s\S]*?)\n---/);
  if (!match) return {};
  const result = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx === -1) continue;
    const key = line.slice(0, idx).trim();
    const value = line.slice(idx + 1).trim();
    if (key === "name" || key === "description") {
      result[key] = value;
    }
  }
  return result;
}

function copyDirSync(src, dest) {
  fs.mkdirSync(dest, { recursive: true });
  const entries = fs.readdirSync(src, { withFileTypes: true });
  for (const entry of entries) {
    const srcPath = path.join(src, entry.name);
    const destPath = path.join(dest, entry.name);
    if (entry.isDirectory()) {
      copyDirSync(srcPath, destPath);
    } else {
      fs.copyFileSync(srcPath, destPath);
    }
  }
}

function cmdAdd(args) {
  const installAll = args.includes("--all");
  const skills = getAvailableSkills();

  if (!installAll && args.length === 0) {
    console.error(red("Error: specify a skill name or --all"));
    console.error(`  skills add <name>    Install a single skill`);
    console.error(`  skills add --all     Install all skills`);
    process.exit(1);
  }

  const toInstall = installAll
    ? skills
    : args.map((name) => {
        const skill = skills.find((s) => s.dir === name || s.name === name);
        if (!skill) {
          console.error(red(`Error: skill "${name}" not found`));
          console.error(`Run ${cyan("skills list")} to see available skills.`);
          process.exit(1);
        }
        return skill;
      });

  fs.mkdirSync(SKILLS_DEST, { recursive: true });

  for (const skill of toInstall) {
    const src = path.join(SKILLS_SRC, skill.dir);
    const dest = path.join(SKILLS_DEST, skill.dir);
    copyDirSync(src, dest);
    console.log(`${green("+")} ${bold(skill.name)} installed to ${dim(dest)}`);
  }

  console.log(
    `\n${green("Done!")} ${toInstall.length} skill${toInstall.length === 1 ? "" : "s"} installed.`
  );
}

function cmdRemove(args) {
  if (args.length === 0) {
    console.error(red("Error: specify a skill name to remove"));
    console.error(`  skills remove <name>`);
    process.exit(1);
  }

  for (const name of args) {
    const dest = path.join(SKILLS_DEST, name);
    if (!fs.existsSync(dest)) {
      console.error(red(`Error: "${name}" is not installed at ${dest}`));
      process.exit(1);
    }
    fs.rmSync(dest, { recursive: true, force: true });
    console.log(`${red("-")} ${bold(name)} removed`);
  }

  console.log(
    `\n${green("Done!")} ${args.length} skill${args.length === 1 ? "" : "s"} removed.`
  );
}

function cmdList() {
  const skills = getAvailableSkills();
  const maxName = Math.max(...skills.map((s) => s.name.length));

  console.log(bold("\nAvailable Skills\n"));
  console.log(
    `  ${bold("Name".padEnd(maxName))}  ${bold("Description")}`
  );
  console.log(`  ${"─".repeat(maxName)}  ${"─".repeat(50)}`);
  for (const skill of skills) {
    const desc =
      skill.description.length > 70
        ? skill.description.slice(0, 67) + "..."
        : skill.description;
    console.log(`  ${cyan(skill.name.padEnd(maxName))}  ${desc}`);
  }
  console.log(`\n  ${dim(`${skills.length} skills available`)}`);
  console.log(
    `  Install: ${cyan("npx skills add eachlabs/skills")}\n`
  );
}

function printHelp() {
  console.log(`
${bold("each::labs Agent Skills")}

${bold("Install via Vercel Skills CLI:")}
  npx skills add eachlabs/skills

${bold("Or use the built-in CLI:")}
  skills add <name>       Install a skill to ~/.claude/skills/
  skills add --all        Install all skills
  skills remove <name>    Remove an installed skill
  skills list             List available skills

${bold("Examples:")}
  npx skills add eachlabs/skills
  npx @eachlabs/skills add eachlabs-video-generation
  npx @eachlabs/skills list
`);
}

// --- Main ---

const args = process.argv.slice(2);
const command = args[0];
const rest = args.slice(1);

switch (command) {
  case "add":
    cmdAdd(rest);
    break;
  case "remove":
    cmdRemove(rest);
    break;
  case "list":
    cmdList();
    break;
  case "--help":
  case "-h":
  case "help":
    printHelp();
    break;
  default:
    if (!command) {
      printHelp();
    } else {
      console.error(red(`Unknown command: ${command}`));
      printHelp();
      process.exit(1);
    }
}
