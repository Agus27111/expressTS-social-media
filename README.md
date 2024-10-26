# express-ts-social-media


## Overview

Welcome to  **ExpressTS-Social-Media** , a project designed to help you learn and implement TypeScript in an Express.js application. This project focuses on building a social media platform with features such as authentication using JWT, password hashing with bcrypt, token storage in cookies, and user information storage in Redis.

## Features

* **TypeScript Integration** : Experience the power of static typing with TypeScript in a Node.js environment, enhancing code quality and development speed.
* **Authentication** : Implement JWT (JSON Web Tokens) for secure authentication.
* **Password Security** : Use bcrypt to hash passwords, ensuring robust security for user credentials.
* **Token Storage** : Store JWT tokens in cookies for persistent authentication.
* **Redis Integration** : Utilize Redis for efficient storage of user information and session management.

## Getting Started

### Prerequisites

Ensure you have the following installed on your system:

* Node.js
* Yarn

### Installation

1. Clone the repository:
   `git clone https://github.com/yourusername/expressTS-social-media.git`
2. Navigate to the project directory:
   `cd expressTS-social-media`
3. Install the dependencies:

   `yarn add`

### Running the Application

To start the application, run the following command:

`yarn start`

The application will be available at `http://localhost:5000`.

## Project Structure

The project is organized as follows:

<pre class="!overflow-visible"><div class="contain-inline-size rounded-md border-[0.5px] border-token-border-medium relative bg-token-sidebar-surface-primary dark:bg-gray-950"><div class="flex items-center text-token-text-secondary px-4 py-2 text-xs font-sans justify-between rounded-t-md h-9 bg-token-sidebar-surface-primary dark:bg-token-main-surface-secondary">bash</div><div class="sticky top-9 md:top-[5.75rem]"><div class="absolute bottom-0 right-2 flex h-9 items-center"><div class="flex items-center rounded bg-token-sidebar-surface-primary px-2 font-sans text-xs text-token-text-secondary dark:bg-token-main-surface-secondary"><span class="" data-state="closed"><button class="flex gap-1 items-center py-1"><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" class="icon-sm"><path fill-rule="evenodd" clip-rule="evenodd" d="M7 5C7 3.34315 8.34315 2 10 2H19C20.6569 2 22 3.34315 22 5V14C22 15.6569 20.6569 17 19 17H17V19C17 20.6569 15.6569 22 14 22H5C3.34315 22 2 20.6569 2 19V10C2 8.34315 3.34315 7 5 7H7V5ZM9 7H14C15.6569 7 17 8.34315 17 10V15H19C19.5523 15 20 14.5523 20 14V5C20 4.44772 19.5523 4 19 4H10C9.44772 4 9 4.44772 9 5V7ZM5 9C4.44772 9 4 9.44772 4 10V19C4 19.5523 4.44772 20 5 20H14C14.5523 20 15 19.5523 15 19V10C15 9.44772 14.5523 9 14 9H5Z" fill="currentColor"></path></svg>Copy code</button></span></div></div></div><div class="overflow-y-auto p-4" dir="ltr"><code class="!whitespace-pre hljs language-bash">expressTS-social-media/
├── src/
│   ├── controllers/
│   ├── middlewares/
│   ├── schemas/
│   ├── routes/
│   ├── services/
│   ├── utils/
|   ├── @types/
│   └── index.ts
├── .env
├── tsconfig.json
├── package.json
└── README.md
</code></div></div></pre>

## Learning Objectives

By working through this project, you will:

* Understand the benefits and usage of TypeScript in a Node.js application.
* Learn how to set up authentication using JWT and secure password storage with bcrypt.
* Gain experience in managing user sessions and information with Redis.
* Develop a deeper appreciation for the advantages of static typing and type safety provided by TypeScript.


## API Documentation

For detailed API documentation and testing, please refer to the Postman documentation:
[Postman Documentation](https://documenter.getpostman.com/view/27969319/2sAY4sjQF2)

## Contributing

Contributions are welcome! If you have suggestions for improvements or want to add new features, feel free to open an issue or submit a pull request.

## License

This project is licensed under the MIT License.

## Acknowledgements

* Thanks to the TypeScript and Node.js communities for their invaluable resources and support.
* Special mention to the contributors and maintainers of the libraries and tools used in this project.

Happy coding!
