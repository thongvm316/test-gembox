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
1. Add some UI in admin page
2. UI Login Page    


