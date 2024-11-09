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
            src="https://ismail-lafhiel-portfolio.s3.eu-north-1.amazonaws.com/ismail%20avatar.jpg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIA2AMRAZRZHTNK3QRT%2F20241109%2Feu-north-1%2Fs3%2Faws4_request&X-Amz-Date=20241109T115047Z&X-Amz-Expires=300&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCmV1LW5vcnRoLTEiRzBFAiBy9Qp5wm1mjR7SmypLkEe5JQm1BQXH9E8F%2FbRaLI6vDQIhAPxpESPefKHjwUnbgZsz%2Fmwjxx2uDBGUxvKJSUFR5SuNKugCCHUQARoMNjg4MDM1Nzc3NjUwIgz6pRUl0GDJOMCtsLkqxQKKUgwLxnljYSgTCUIvwsAjT%2F%2BrmLvxjlyKr6qJykqtIOlhI7WqKpWfJvkJ2rYkGpsK1UNHUX0gBWIzlkoOavvfpZ%2F6KG25X1WN%2FJM%2Fr1oUk1VPEl17HLhUblSmywK1DfprVKR4L%2BkYAEJyiiZsbnPhrzyE2T1ZmkIQrlnzuJ%2FI%2B3q6d1ijGxGVGcOJ13Zk%2B4J%2FOBHZB12sF66nN73eGvSfeS0e%2FS%2Fl8S4kwzhvjXA2EL35UIyCP4XHYuyYal9pwPbzHoQwBH2gELweLE66WGH0x5LSMI4dQpOUzr%2BWH0zLlBHmhxo4jhX7BQOoo8iif5sYwr5unnwp8%2BonhperFxrXFLHttyhTASQymttLaN4j9inpu1sc1j5GKqrAGCzcZoC7Q0J7Dcc1MfXs2sbtkVRzY86PEmWJt%2FqHZT2hq91f64o6TgR9MIGXvbkGOrMCiMqS6oVFIFLih43RoZ0eNUmN2hkNwSaiVDmL%2FPHKG44ONFKaueHfebI6xkXUBVbsxLqqtzz7CcXOi%2FzotshIVEjfEB5JqhrJ8TJPBnDOhjFN8rkHSeAedE5tbnlH7t991MInGHrjkhtMjrYnMCfaWSFHtkzwTU9%2BcAejb6rwudqww%2BoqAtE2qimt7yCNr%2BV6J9CXVIi%2Bu91jfAts9lpPZBH8r1Gi0hXk8EUhHKJKS7DpiCx4zv5eErFuOcaJIVSyaGL9vzJtJLQ1V8p5Lso7AOkq%2BgI0aD4t8PXKE%2BcjOiIEc3my9y7QgdWoqLbE2%2BGeI4376%2B4PJb%2FnFWa%2BYxg2Ak3cNWY8vguHKcdLn3o47QMTS142RO7skxyTWxq7T4S8S8aXbOk5y5HJBfzdkapuwu56WA%3D%3D&X-Amz-Signature=6da7adcbf77cedd07964633aefed330d653f402cebb2f973bb11271ebc9e3098&X-Amz-SignedHeaders=host&response-content-disposition=inline&versionId=null"
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
