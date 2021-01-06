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
 Home: 5days (7 8 9 11 12)
 Product-Detail: 5days (13 14 15 16 18)
 Search vender: 3days (19 20 21)
 My page: 3days (22 23 25)


---------------------------------------------------------
Todos: 
5. Intergate Redux


6. Logout ---- Done
4. Ke hoach cac phan tiep theo - UI, ho tro ---- Done
































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