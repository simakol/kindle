import { Link } from "react-router-dom";
import routesConfig from "../../configurations/routes.config";
import "./style.css";

export default function NotFound() {
  return (
    <div className="container not-found-container">
      <h1>Упс! Похоже, вы потерялись &#x1F50D;</h1>
      <Link to={routesConfig.routes.index}>На главную &#x1F3E0;</Link>
    </div>
  );
}
