import Layout from "../components/Layout";
import Link from "next/link"

const Index = () => (
  <Layout>
    {/* HEADER CARD */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img src="/profile-pics.png" alt="img not found" className="img-fluid" />
            </div>
            <div className="col-md-8">
              <h1> MELINA ARMAND PILÓN</h1>
              <h2> Desarolladora Full-Stack e Ingeniera Civil</h2>
              <p>
                Desarrolladora Full-Stack Junior, curiosa, autodidacta,
                proactiva y orientada a la resolución de problemas, habilidades
                en la que me he destacado a lo largo de micarrera profesional.
                Busco enfrentarme a nuevos desafíos que desarrollen mipotencial
                y aumenten mi aprendizaje en el área.
              </p>
              <Link href="contratame">
              <a className="btn btn-outline-light">Contratame</a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </header>

    {/* SEGUNDA SECCION */}
    <div className="row">
      <div className="col-md-4">
        
      </div>
      <div className="col-md-8">

      </div>

    </div>
  </Layout>
);
export default Index;
