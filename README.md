# Google Clone

A simple Google clone made using NextJS, TailwindCSS and uses Google Custom Search API for searching.

## Run Locally

Clone the project

```bash
  git clone https://github.com/Hardik-Dharmik/google-nextjs.git
```

Go to the project directory

```bash
  cd google-nextjs
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

## API Reference

#### Get all items

```
https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${context.query.term}&start=${startIndex}
```

| Parameter | Type     | Description                    |
| :-------- | :------- | :----------------------------- |
| `key`     | `string` | **Required**. Your API key     |
| `cx`      | `string` | **Required**. Your CONTEXT key |
| `q`       | `string` | **Required**. Query term       |
| `start`   | `string` | Page number for pagination     |

## Tech Stack

**Client:** React, NextJS, TailwindCSS

**Server:** Google Custom Search

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`API_KEY`

`CONTEXT_KEY`
