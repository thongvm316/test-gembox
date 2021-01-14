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
At evening
2. Logic with expire token
4. Hover icon in sider
5. Fix Method Call API like Easy FrontEnd -- https://www.youtube.com/watch?v=LXz_7WQpob4
6. Style DatePicker Home Page - Chang month to Kr language in P2, P3
7. Change old input search in all Page to search box in Select Comp
----
today:
3. Fix field input of ten/company in signup
4. Think about chart: page 2 - page 3

8. Page 2:
    b. Map data - problem with stt
    g. Add category to UI
    
    d. Spiner ---- Done
    e. Select Market ---- Done
    a. DatePicker - timestamp ---- Done
    f. Solution to call api as async ---- Done





 <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market1} />
                                <span className="style-market">11번가</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market2} />
                                <span className="style-market">G마켓</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market3} />
                                <span className="style-market">쿠팡</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market4} />
                                <span className="style-market">인터파크</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market5} />
                                <span className="style-market">옥션</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market6} />
                                <span className="style-market">스마트스토어</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market7} />
                                <span className="style-market">티몬</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>
                        <Col
                            xs={12}
                            sm={12}
                            md={6}
                            lg={3}
                            xl={3}
                            style={{ textAlign: "center" }}
                        >
                            <div className="style-border">
                                <img src={Market8} />
                                <span className="style-market">위메프</span>
                            </div>
                            <p
                                style={{
                                    paddingTop: "2rem",
                                    fontWeight: "400",
                                    fontSize: "16px",
                                    color: "#495057"
                                }}
                            >
                                1500
                            </p>
                        </Col>