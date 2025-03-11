# Wiki For Fans

> This is a a Full-Stack application with the goal of enabling fans to know more about the lore of a specific fictional universe, in this case the **World Of Ice And Fire** from **Game Of Thrones**.

### Project Roadmap

How I approached the development of the application:

- [x] Creation of user interface
- [x] Database creation and modeling
- [x] Creation of a RESTapi to serve the data
- [x] Client and Server integration

## 💻 Technologies Used

### Back-End

- Typescript
- Docker
- PostgreSQL
- Node.js
- Express.js

### Front-End

- Typescript
- React.js
- Tailwind
- Framer Motion
- Axios

### Deploy

- Render
- Vercel

## 🚀 Installing **Wiki For Fans**

To install **Wiki For Fans**, follow these steps:

Execute in your terminal, inside your folder dedicated to repositories:

```
git clone git@github.com:itspablomontes/wiki-for-fans.git
```

Enter the repository

```
cd wiki-for-fans
```

Open it with your chosen text-editor:

```
code .
```

## ☕ Running **Wiki For Fans**

To use **Wiki For Fans**, follow these steps:

In the root directory, execute this command to install the dependencies:

```
npm run install-all
```

Create a .env file at the root directory, add the database info, or just copy paste the standart config from .env.example. It should look like this:

```
DB_USER=your_user
DB_PASSWORD=your_password
DB_DB=your_database
DB_HOST=your_db_host
DB_PORT=5432
PORT=3000

VITE_API_BASE_URL=http://localhost:3000
```

Then, populate the database running this in the terminal:

```
./populate-db.sh
```

Afterwards, execute this command to run the project locally:

```
npm start
```
