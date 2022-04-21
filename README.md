# Minimal reproduction for `@storybook/vite-builder` with React + Typescript component control props rendering

## Steps to reproduce

- Init project via `yarn create vite <project_name> --template react-ts`.
- Run `npx sb init --builder @storybook/builder-vite` to initialize storybook with vite builder.
- Then create same exact component like that lives in here <a href="./src/components/Button">`./src/components/Button`</a>.
- Run `yarn storybook`

## Problems

As I stated in https://github.com/storybookjs/builder-vite/issues/79#issuecomment-1104836933, my `IconButton` did correctly generate the props control but
the `BaseButton` didn't.
