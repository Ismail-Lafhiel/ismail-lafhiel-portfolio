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
            src="https://ismail-lafhiel-portfolio.s3.eu-north-1.amazonaws.com/ismail%20avatar.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2AMRAZRZLTGOL3AJ%2F20241106%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241106T192757Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiEAhGO1KUIA7%2BLx4VM0T0%2FCSrlUXqf6GMlbmCAVpsyzkkICIDAYDl%2BzI6RcG4NiRUy20S4N%2B6DAqMKER4IWW2Lmqi%2BdKugCCDUQARoMNjg4MDM1Nzc3NjUwIgyzw15soGPnEWkZt%2FUqxQJ27oDNl7XogOgsk3%2BQKtQpMx3hxgcwd1i8Yp6cMpJ4aTQ%2FNzuMlfVTR0u2HY%2B5PVQyJnVTBCEAsxwCSrLWb1CJWGe7YcVKa3%2F7lTkc0sam%2FqvkMi9ng6dFvjTZgO7GMIFE1PbWL25DBxOFbO5iZei%2Bn6109bqKCAKtXAQO0doTflLkABkjpZSnM2%2BPC5qYlrmJy2swZr6kXMEmriqAIrlJ5%2FW3H%2F5CZ6AHIt9DHQbwnk2RC7eNGQSqpcWnvKBS2Jhxo3GcpHPD7Wr4p53wOgztweu6wR1JxVFgDhzUL1bhhiLGSjfCUfXDb7xTLTFalA0YMih4JF9G%2BjapGDbr1ycfdY4eAp64E9%2BfF1yjU5F%2Bhsh6dJXHaU9QisUUx%2Fv2r76oz8xmZWbwll0jHtvAh%2FjnD%2Be6Is%2BGulfCYEpXih4HUi9la7G7MOf5rrkGOrMC5WtLxmqJ7dYuV0C%2FMtLHDFLc7dYDi%2BP9yijPmYirpj%2BpxL3d6Xdu5484KneugoEeM18Zbttw5Vx5tcaQCgqdWMDmy2Dyqrmf2QVZoZ4IJ2QUPo2VnjlG2YREwuB0tbLacbsFzd8wQmboRSD5Td8rnoi1tgg06RlCCf6dUMoU7TbYyv7k07pDlW1EZZUrOAQ5fCrAzx%2BtAYe6TcnCHCAp3q6kc%2FLqfhC3jK3tdwNrJ1LrvhfWEChmFmPL7y4m3Vpkj8xy%2F0XKc91BKNmlS2UsNk6H7WcrV1scD962OCukOHa7wXqVtyrEYT2wjya%2FGrQtt9%2Bzz3IhfG1tTUY1yh4Kbfbva%2BVoFFXrLHco%2FIQSBabiT0%2Bl7Ug5u9kBYkcFFgdXf%2F9xGCcpJp5xS6bzRnOodeiVAA%3D%3D&X-Amz-Signature=0d12f43547c495b50d1907a7477413566979286a32083388f4a9b5bcbf97726a&X-Amz-SignedHeaders=host&response-content-disposition=inline"
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
