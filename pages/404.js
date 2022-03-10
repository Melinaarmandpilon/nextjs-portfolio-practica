import Layout from "../components/Layout";
import Link from "next/link";

const custom404 = () => (
  <Layout>
    <div className="text-center">
      <h1 className="bs-red">404</h1>
      <p>
        Esta pagina no existe. Por favor retorna a{" "}
        <Link href="/">
          <a>Inicio</a>
        </Link>
      </p>
    
    </div>
  </Layout>
);
export default custom404;
