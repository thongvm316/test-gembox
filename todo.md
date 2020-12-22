How to add more remote repo:
    1. git remote add repo2 https://github.com/thongvm316/JamFactory.git
    2. Push master: git push -u repo2 master
    3. Push branch: git push -u repo2 development

Fix Cors in localhost-chorme: 
/usr/bin/google-chrome-stable --disable-web-security --user-data-dir=/home/jossnaz/.config/google-chrome/

Err when deploy to Heroku: Err=H10
Fix:
    "scripts": {
        "dev": "react-scripts start",
        "start": "serve -s build",
        "build": "react-scripts build",
        "test": "react-scripts test --env=jsdom",
        "eject": "react-scripts     eject",
        "heroku-postbuild": "npm run build"
    }
---------------------------------------------------------
API: Register - Login - Product - Vender

----
todo:
1. Story Board ---- Done
2. Fix some UI
3. React lazy load - BackEnd

--
todos: 

Call API:
    2. Intergate to React App
        c. Approve / Reject


a. Login ----> Done
1. AdminMember - Admin Member Detail ---- Done
2. Member request - member request detail --- Done
d. Del member ----> Done



Api with AdminLogin:
    1. Logic after success: store token
    2. Logic when login failed

AdminMember - AdminMemberRequest:
    1. Process data
    2. Logic with err
    3. Use token in localstore and add to headers - not fix by myseft

Logic when del user failed



