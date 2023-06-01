# typescript-total-react

A repository for solutions from the Total Typescript tutorial on React with Typescript.

Each problem is set up with Node (etc) separately, to drill in the setup workflow.

## Workflow for setting up a new project using Typescript with React:

pnpm init
pnpm add typescript --save-dev

pnpm tsc --init

Then go to tsconfig.json and enable "jsx": "preserve" under "compilerOptions".

pnpm add react
pnpm add -D @types/react
