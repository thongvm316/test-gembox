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

{/_ <div
style={{
                    display: 'flex',
                    border: '1px solid #A6B0CF',
                    padding: '0 .7rem',
                  }} >
<PhoneInput
placeholder="핸드폰 번호 입력_"
// defaultCountry="VN"
displayInitialValueAsLocalNumber
international
value={valueOfPhoneInput}
onChange={setValueOfPhoneInput}
id="inputID"
name="phone"
style={{ flex: 1 }}
/>
<Button
onClick={verifySmsCode}
className="send-sms"
type="text"
style={{
                      flex: 1,
                      paddingLeft: 0,
                      paddingRight: 0,
                    }} >
{resendSms ? resendSms : '인증번호 전송'}
</Button>

</div> \*/}
