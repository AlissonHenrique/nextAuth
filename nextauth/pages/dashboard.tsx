import { destroyCookie } from "nookies";
import { useContext } from "react";
import { AuthContext } from "../context/authContext";
import { setupApiClient } from "../services/api";
import { AuthTokenError } from "../services/erros/AuthTokenError";
import { witchSSRAuth } from "../utils/witchSSRAuth";

export default function Dashboard() {
  const { user } = useContext(AuthContext);
  return <h1>Dashboard {user}</h1>;
}

export const getServerSideProps = witchSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
