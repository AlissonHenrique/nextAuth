import { GetServerSideProps } from "next";
import { FormEvent, useContext, useState } from "react";
import { AuthContext } from "../context/authContext";
import styles from "../styles/Home.module.css";
import { parseCookies } from "nookies";
import { witchSSRGuest } from "../utils/witchSSRGuest";
export default function Home() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { signIn } = useContext(AuthContext);

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const data = { email, password };
    await signIn(data);
  }
  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <input
        type="text"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Entrar</button>
    </form>
  );
}

export const getServerSideProps: GetServerSideProps = witchSSRGuest(
  async (ctx) => {
    return { props: {} };
  }
);