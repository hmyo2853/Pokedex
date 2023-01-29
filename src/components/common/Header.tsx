import { IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import style from "../common/Common.module.sass";
import { Link } from "react-router-dom";

interface Props {
  path: string;
  faIcon: IconDefinition;
  isHome: boolean;
}

const Header = ({ path, faIcon, isHome }: Props) => {
  return (
    <div className={style.Header}>
      {isHome ? (
        <>
          홈페이지
          <Link to={path} relative="path">
            <FontAwesomeIcon icon={faIcon} size="2x" />
          </Link>
        </>
      ) : (
        <>
          <Link to={path} relative="path">
            <FontAwesomeIcon icon={faIcon} size="2x" />
          </Link>
          마이페이지
        </>
      )}
    </div>
  );
};

export default Header;
