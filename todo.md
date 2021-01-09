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

Plan:
Home: 5days (7 8 9 11 15)
Search vender: 3days (16 18 19)
My page: 3days (20 21 22 25)

Spent more time at evening

---

Todos:
Page 1: 
1. Style DatePicker

Page 2:
1. Logic select market - style  
2. Res aggregate-month  
3. Style DatePicker

Page 3:
1. Html
2. Css
3. Res

PrivateRoute with all Home Page - Logic with expire token
1. PrivateRoute
2. Logic with expire token

Must finished at 20200112

Intergrate API - Debug --- Will fn at 20200115