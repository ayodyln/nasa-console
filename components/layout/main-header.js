import Link from "next/link";
import classes from "./header.module.scss";

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
          <li>
            <Link href="/Earth">Earth</Link>
          </li>
          <li>
            <Link href="/Mars">Mars</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}
