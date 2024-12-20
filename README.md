# The Platform

A blog about various web features and apis.

## Article Structure

All articles should follow the below format. The list items below should be
level one headers in your article.

1. **Title**

   Name of the feature or API (e.g., "IntersectionObserver API")

2. **Introduction**

   A brief overview of the API. Why it's useful and common scenarios where it
   applies.

3. **How It Works**

   A high-level explanation of the API’s functionality. Include key concepts or
   prerequisites (e.g., required permissions).

4. **Basic Example**

   A simple code snippet demonstrating a basic use case.

5. **Key Features**

   Highlight important methods, properties, or events of the API. Provide brief
   explanations and examples.

6. **Advanced Usage**

   Cover more complex scenarios or best practices. Example: combining with other
   APIs or performance considerations.

7. **Common Pitfalls**

   Discuss typical issues developers might encounter and how to solve them.

8. **Working Example**

   A live demonstration, similar to MDN’s "Play," showcasing the API in action.

9. **Further Reading**

   Links to official MDN documentation and other resources.

10. **Closing**

    Encourage experimentation and suggest related APIs to explore next.

## Development

Simply use `npm start` to run any script(s). Don't worry about remembering which
scripts are available!

### Committing

This project uses the
[conventional commits message format](https://www.conventionalcommits.org/en/v1.0.0/#summary).
Simply run `git commit` to get started.

### Component Placement

Do not put components in the `routes/` directory. Instead put components in
`src/` or `src/<featureName>`. Components in the `routes/` directory are not
checked for test coverage.

Additionally, do not put components directly in `src/Root.tsx` as that file is
excluded from coverage and not tested.

### Git Hooks

This project uses [husky](https://typicode.github.io/husky) to manage git hooks.
If you prefer to commit without these hooks prefix your command with `HUSKY=0`
or see
[the husky how to page](https://typicode.github.io/husky/how-to.html#skipping-git-hooks)
