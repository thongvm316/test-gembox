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
 2. UI - SignUp - Modal
 3. Call API with that
 4. Logic after call API for all button with every page

Done:
 1. Continues make UI Login User ----> Done
 4. Add Footer to Admin Page ----- > Done








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