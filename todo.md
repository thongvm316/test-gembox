How to add more remote repo:
    1. git remote add repo2 https://github.com/thongvm316/JamFactory.git
    2. Push master: git push -u repo2 master
    3. Push branch: git push -u repo2 development

git remote remove origin

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
Plan:

Home --> 4 - 11 /1
Mypage ---> 12 - 16/1
Search Fn All Page -- 18 - 19/1 
Other ---> Ok
Possible


---------------------------------------------------------
Todos: 
4. Clean code
5. Render data when user type more url


4. check email in verify sms - api -> remove one ------- Done
2. status approve/reject -- logic show ----- Done
3. Hover when click btn in admin member - request ---- Done
1. Show pdf file to image - test dowload ---- Done



0 request
1 approve
2 reject



















  {/* <Modal
                title="비밀 번호 찾기"
                visible={findPassword}
                onOk={handleOkModalFindPassword}
                onCancel={() => setFindPassword(false)}
                okText="확인"
                okButtonProps={{ type: "default" }}
                cancelButtonProps={{ style: { display: 'none' } }}
            >
                <div style={{ textAlign: 'center' }}>
                    <p>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                    <p>gemtoys@gemtoys.co.kr</p>
                    <p>1899-5704</p>
                </div>
            </Modal>

            <Modal
                okButtonProps={{ type: "default" }}
                cancelButtonProps={{ style: { display: 'none' } }}
                visible={loginFailed}
                onOk={handleOkModalLoginFailed}
            >
                <div style={{ textAlign: 'center' }}>
                    <h1>계정정보가 올바르지 않습니다</h1>
                    <p>비밀번호 분실의 경우 관리자에게 문의바랍니다</p>
                    <p>1899-5704</p>
                </div>
            </Modal> */}