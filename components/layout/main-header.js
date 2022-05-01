import Link from "next/link";
import classes from  "./header.module.scss";

export default function MainHeader() {
  return (
    <header className={classes.web__header}>
      <div>
        <Link href="/">NASA API</Link>
      </div>
      <nav>
        <ul>
          <li>
            <Link href="/apod">APOD</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
