How to add more remote repo: 1. git remote add repo2 https://github.com/thongvm316/JamFactory.git 2. Push master: git push -u repo2 master 3. Push branch: git push -u repo2 development

git remote remove origin
https://github.com/thongvm316/JamFactory.git (fetch)
https://gitlab.brickmate.kr/gemfactory/gemfactory-web.git (fetch)

Fix Cors in localhost-chorme:
/usr/bin/google-chrome-stable --disable-web-security --user-data-dir=/home/jossnaz/.config/google-chrome/

Err when deploy to Heroku: Err=H10
Fix:
"scripts": {
"dev": "react-scripts start",
"start": "serve -s build",
"build": "react-scripts build",
"test": "react-scripts test --env=jsdom",
"eject": "react-scripts eject",
"heroku-postbuild": "npm run build"
}

---

## Research - Lodash // Code with less err in solution of EasyFrontEnd

2. My Sale
   a. Solution to call API
   b. Load more
   c. LastIndex - Detail

3. Expire token --- Done

await Promise.all([
axios
.get(`${API_URL}/myproduct/productcount`, config)
.then((value) => {
console.log(value)
if (value.data.data.result) {
setData((prevState) => ({
...prevState,
totalProductCount: value.data.data.result,
}))
}
})
.catch((error) => console.log(error.response)),

      axios
        .get(`${API_URL}/myproduct/reviewinfo`, config)
        .then((value) => {
          console.log(value)
          if (value.data.data.result) {
            setData((prevState) => ({
              ...prevState,
              totalReviewCount: value.data.data.result,
            }))
          }
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(`${API_URL}/myproduct/saleinfo`, config)
        .then((value) => {
          console.log(value)
          if (value.data.data.result) {
            setData((prevState) => ({
              ...prevState,
              saleCountRank: value.data.data.result,
            }))
          }
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(`${API_URL}/myproduct/revenueinfo`, config)
        .then((value) => {
          console.log(value)
          if (value.data.data.result) {
            setData((prevState) => ({
              ...prevState,
              saleRank: value.data.data.result,
            }))
          }
        })
        .catch((error) => console.log(error.response)),

      axios
        .get(`${API_URL}/myproduct/listmarket`, config)
        .then((value) => {
          if (value.data.data.result) {
            setListMarket(value.data.data.result)
          }
        })
        .catch((error) => console.log(error.response)),
    ])
