import { destroyCookie } from "nookies";
import { useContext } from "react";
import { Can } from "../componente/Can";
import { AuthContext } from "../context/authContext";
import { useCan } from "../hook/useCan";
import { setupApiClient } from "../services/api";
import { AuthTokenError } from "../services/erros/AuthTokenError";
import { witchSSRAuth } from "../utils/witchSSRAuth";

export default function Dashboard() {
  const { user, signOut } = useContext(AuthContext);
  // const userCanSeemMetrics = useCan({ permissions: ["metrics.list"] });
  return (
    <>
      <h1>Dashboard {user}</h1>
      <button onClick={signOut}>SignOut</button>
      {/* {userCanSeemMetrics && <div>Metrics</div>} */}
      <Can permissions={["metrics.list"]}>
        <div>Métrics</div>
      </Can>
    </>
  );
}

export const getServerSideProps = witchSSRAuth(async (ctx) => {
  const apiClient = setupApiClient(ctx);

  const response = await apiClient.get("/me");

  return {
    props: {},
  };
});
