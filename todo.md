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

At evening
Fix Method Call API like Easy FrontEnd -- https://www.youtube.com/watch?v=LXz_7WQpob4
Research - Lodash // Code with less err in solution of EasyFrontEnd

---

5. Spiner like https://www.youtube.com/watch?v=zY5jOP5v-FY
   My Page:
1. Load More
   All: Solution Redux
   Call API like PH
