This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

1. Clone the github project (you need Git)

```bash
git clone https://github.com/a-h-a-m/todo-app.git
```

2. Open project directory

```bash
cd todo-app
```

3. Install dependencies (you need Node.js)

```bash
npm install
```

4. Create `.env.local` file
   Add new file in the `todo-app` directory
   Rename the file to `.env.local`

5. Add local MySQL database config (you can use xampp)
   Copy this to .env.local file

    ```bash
    MYSQL_HOST=localhost
    MYSQL_DATABASE=YOUR_DATABASE_NAME
    MYSQL_USER=root
    MYSQL_PASSWORD=
    MYSQL_PORT=3306
    ```
   You can change host name, database name, username, password, and port to match your database configurations

6. Run the development server (you need Node.js)

```bash
npm run dev
```

7. Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations you have ran the project locally! You can also click this link to open the project: [https://todo-app-pink-ten-97.vercel.app/](https://todo-app-pink-ten-97.vercel.app/)

Thanks for reading this