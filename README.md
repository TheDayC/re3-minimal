# Resident Evil 3 Remake Stream Widget
A React application to serve data for Stream Widgets. Designed for RE3R and RE2R but will include other RE games in future as I run them.

## Quick start

Install [Volta](https://volta.sh/) to manage your node versions then clone this repository and navigate into it with your terminal of choice.

### Install all dependencies

```bash
npm install
```

### Create the .env file

Copy the contents of `.env.example` into `.env` and change the `VITE_GAME` variable to either RE3R or RE2R depending on your game of choice. You can also change the `VITE_INVENTORY` variable to `true` or `false` depending on whether you want to show the inventory or not.

### Serve the application

```bash
npm run dev
```

### Set up OBS source

In OBS add a new "Browser" source to your scene and put `http://localhost:4000` in the url. This will now display the application in your OBS scene and you can resize it however you like.

