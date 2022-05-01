import currDate from "../../helpers/currentDate/currentDate";

export default function APOD(props) {
  console.log(props.data);

  return (
    <div>
      <h1>APOD</h1>
    </div>
  );
}

export async function getServerSideProps() {
  let date = currDate();
  let key = process.env.NASA_APIKEY;

  const res = await fetch(
    `https://api.nasa.gov/planetary/apod?date=${date}&api_key=${key}`
  );
  const data = await res.json();

  return {
    props: { data },
  };
}
