import React from "react";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import "../assets/styles/Main.scss";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img
            src="https://ismail-lafhiel-portfolio.s3.eu-north-1.amazonaws.com/ismail%20avatar.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2AMRAZRZJ6CVSBCE%2F20241106%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241106T191427Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiSDBGAiEA1GM99K%2BmfTYDzYYtS9M2pOo%2Boe4gylX2qgd6Cl%2BUfncCIQCqfWdmNurC6VE0shQk3UxosrOV0j9j3qb8egvZf%2BVoxyroAgg0EAEaDDY4ODAzNTc3NzY1MCIMQKseZqvOA34mAiD1KsUCgjuUkAtX8ohC%2Fs6p90zfg1M6ASP4RodnmXrMOL1Owy2PLMCkUtcph2qP3CNw5ddW5nLkXvijEKfJPLDyJLI4ptlEZYU05xrTUJqBQezdvAMicpwKAKoqVeAC9AlSFCTRarV1OPMZGi9jYNqRVAa23sBip1qnsWJgFpfUcOKIdR1XFh%2FVfX7lkQ%2B49d47ulbkAOPtMZ9XF9azFEUYDBPaGLnWZVtrw0C6ynLuPTkFkN2QZhflGVzSOVDd2GdU0RdnZVI9uER9lDggwpzJoYsDsep1QYwwIY%2FmN4bOoUG3xKWnvkf5AzK8Tfx8WJhpf68De6UqOpIEj1ryDuyWFwNyMbouev0KF5edjN5R61tPOY0YHTcpCXXVc1Y1ymgD3TBwGMr%2BFxWpYQZW2hFDyJf86u6Y4d1F0468dDi4H3zkd1huveK5qjDn%2Ba65BjqyAl7wuSFv0CAN7HTVn%2BFx0d0Tr9qkFk3lO0fWDY1pU%2BhN9qmUdVr%2FRQoeKnnKgYHr8%2B6dTzNkD87dlRS0ZsA8HqVGfHp8EvvIQACJP5Nq02Jk0IqxB4FV7tbFIupxSBBoslkemXvIB6fhAjDSEepaXNCxgxjS06T5brpSp6QIM98m0NgwM10L%2FuTqGiQPAvy%2FSB%2Bmt3Ssz3KLvZDqCjIBy5YJD6M5HZ4%2FbHuM7ZRj7XYqemSmwq9onEXdSFF9Byhn%2B7bxSCLmNMKu5qiTx0iwWh74Wx1avd3UfPQKybPhATWxyJ51zCiLsAKRIuAlugQZdGo9l3WhBMPtQTOpRgKLh1GOjvn7Hb6qGPRuPJTiR8mNrhM83l5%2BshnteYw15RK64iT0WlfT7nzNTA%2F%2B6qzXDHZvcQ%3D%3D&X-Amz-Signature=f6f81b57ae163f512b7ed6bde31a4eb1214dbfba76aaf2f645048f2620690dcd&X-Amz-SignedHeaders=host&response-content-disposition=inline"
            alt="Avatar"
          />
        </div>
        <div className="content">
          <div className="social_icons">
            <a
              href="https://github.com/Ismail-Lafhiel"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-lafhiel/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
          <h1>Ismail Lafhiel</h1>
          <p>Full Stack Developer</p>

          <div className="mobile_social_icons">
            <a
              href="https://github.com/Ismail-Lafhiel"
              target="_blank"
              rel="noreferrer"
            >
              <GitHubIcon />
            </a>
            <a
              href="https://www.linkedin.com/in/ismail-lafhiel/"
              target="_blank"
              rel="noreferrer"
            >
              <LinkedInIcon />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
