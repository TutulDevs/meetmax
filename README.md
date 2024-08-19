# Meetmax - Frontend Assesment for LIILAB

🚀 [Live Preview](https://t-mm.vercel.app/)

## Tech Stack

- [Next.js](https://nextjs.org) with App Router support
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [Shad CN UI Components](https://ui.shadcn.com/docs/components)
- [React Hook Form](https://react-hook-form.com/)

## Requirements

- Node.js 20+ and npm

## Getting started

Run the following command on your local environment:

```shell
git clone https://github.com/TutulDevs/meetmax.git my-project-name
cd my-project-name
npm install
```

Then, you can run the project locally in development mode with live reload by executing:

```shell
npm run dev
```

Or, if you want to run it locally after build, execute:

```shell
npm run build
npm run start
```

Open http://localhost:3000 with your favorite browser to see the project.

## Project structure

```shell
.
├── public                          # Public assets folder
├── src
│   ├── app                         # Next JS App (App Router)
│   ├── components                  # React components
│   ├── libs                        # 3rd party libraries configuration
│   ├── mock                        # Mock data
│   ├── middleware.ts               # Next JS middleware configuration & route protection
├── next.config.mjs                 # Next JS configuration
├── README.md                       # README file
├── tailwind.config.js              # Tailwind CSS configuration
└── tsconfig.json                   # TypeScript configuration
```

## Authentication

- There are three forms for sign in, sign up & forgot password
- The apis are in `/src/app/api` folder
- The sign up & forgot password forms call an api on submit
- These apis don't do anyting but send a response
- The sign in form calls api on submit to validate credentials
- A valid email (`u2@yopmail.com`) & password (`Pass.1234`) is being shown in the sign in form for quick sign in
- The valid users are stored in a local file (`/src/mock/users.ts`)
- On a successful sign in, the user will be redirected to home/ feed page & a stringified JS object will be stored in the cookies

## Page protection

- In the middleware file, stringified token is is being stored in a variable
- If there is token, the user is logged in and he/she can't go to any authentication related pages
- If there is no token, the user can't visit the home/ feed page

## Feed page

- The avatar images are from [Random User Generator](https://randomuser.me/)
- The posts data are from a mock file
- In the sidebar, the **Logout** button is functional
-

## TO DOs

- Comments in post
- Set meta title for all pages
- Fetch posts data
- Add loader
- Add error file
