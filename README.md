This project was bootstrapped with [Create React App](https://github.com/facebookincubator/create-react-app).

To run the app:
```
git clone https://github.com/dougneves/skip-the-dishes-hackatlon.git
cd skip-the-dishes-hackatlon
yarn
yarn start
```

This is a simple app to show some nice features of React and Redux, like fetching data in backgroud, update the screen accordly and maintain a local store with all the data already fetched.

When the app loads in browser, the user can choose how many itens to get per request, and how many itens to show per page.
Then the user can click in the "Fetch Data" button, and the data starts to fetch in background.
After the number of itens reach the total of that page, the app stops fetching data, and a "next page" button appers.

You can try this app with values like 5 and 11, to see how it react. It you load 15 itens, but shows only 11. Then, when you click the "next Page" button, you will see the other 4 itens, and the app will start fetching more data.
