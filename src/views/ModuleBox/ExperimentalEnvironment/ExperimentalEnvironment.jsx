import React from "react";
import { useHistory } from "react-router-dom";
import style from "./ExperimentalEnvironment.module.scss";
import img from "../../../image/微信图片_20230606161559.png";

function ExperimentalEnvironment() {
  const history = useHistory();
  return (
    <div style={{ height: "100%" }}>
      <div className={style.homeBox}>
        <div className={style.topBox}>
          <div className={style.title}>
            <img src={img} alt="logo" />
          </div>
        </div>
        <div className={style.content}>
          <h1>多场景下国际大宗商品数字人民币全天候</h1>
          <h1>同步交付创新服务虚拟仿真实验</h1>
          <p></p>
          <p>“一带一路”背景下国际化应用型人才培养的模式，重庆市高等教育学会高等教育科学研究项目</p>
          <p style={{ marginTop: "-15px" }}>
            “以本为本”背景下应用型专业国际化人才培养的模式，重庆市高等教育教学改革研究重点项目
          </p>
          <div></div>
          <div></div>
          <div>
            <span
              className={style.login}
              onClick={() => history.push("/experimentalEnvironment/steps1")}
            >
              开始实验
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ExperimentalEnvironment;
