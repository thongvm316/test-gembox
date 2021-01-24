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
   a. Solution to call API ---- Done
   b. Load more
   c. LastIndex - Detail
   d. API excel file

3. Expire token --- Done

// try {
// // const { data } = await axios.get(
// // `${API_URL}/myproduct/export?key=${"abc"}&lastIndex=${100}&start=${datePicker[0] // // }&end=${datePicker[1]}`,
// // {
// // responseType: "blob"
// // },
// // config
// // );
// const { data } = await axios.get(
// `${API_URL}/myproduct/export?start=1234567890&end=2134567890&key=${valueOfSearchInput}&lastIndex=${10000000}`, // user Id of last product
// {
// responseType: 'blob',
// },
// config,
// )
// fileDownload(data, 'data.xls')
// } catch (error) {
// console.log(error.response)
// }
