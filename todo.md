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

2. Hover icon in sider - Problem with Sider when click
3. Style DatePicker Home Page - Chang month to Kr language in P2, P3
4. Map fake data to chart: page 2 - page 3
5. Lazy load and add lastindex - Redux

Fix Method Call API like Easy FrontEnd -- https://www.youtube.com/watch?v=LXz_7WQpob4
Research - Lodash // Code with less err in solution of EasyFrontEnd

---

1. PrivateRouter ---- Done
2. Show name in header
3. Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
