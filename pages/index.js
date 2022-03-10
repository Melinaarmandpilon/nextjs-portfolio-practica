import Layout from "../components/Layout";
import Link from "next/link";
import { Technologies, soft, Proyects, Education, Experiences } from "../utils";

const Index = () => (
  <Layout>
    {/* HEADER CARD */}
    <header className="row">
      <div className="col-md-12">
        <div className="card card-body bg-secondary text-light">
          <div className="row">
            <div className="col-md-4">
              <img
                src="/profile-picr.png"
                alt="img not found"
                className="img-fluid"
              />
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
    <div className="row py-2">
      <div className="col-md-4">
        <div className="card bg-light">
          <div className="card-body">
            <h3>Tecnologías</h3>
            {Technologies.map(({ skill }, index) => (
              <div key={index} /* className="py-1" */>
                <ul>
                  <li>
                    <h5>{skill}</h5>
                  </li>
                </ul>
              </div>
            ))}
            <h3>Habilidades blandas</h3>
            {soft.map(({ skill }, index) => (
              <div key={index} /* className="py-1" */>
                <ul>
                  <li>
                    <h5>{skill}</h5>
                  </li>
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="col-md-8">
        <div className="card bg-light">
          <div className="card-body">
            <h1>Proyectos</h1>
            {Proyects.map(
              ({ title, empresa, data, description, tasks }, index) => (
                <div key={index} className="py-1">
                  <h5>{title}</h5>
                  <h4>
                    {empresa} | {data}
                  </h4>
                  <div>
                    {tasks.map(({ task }, index) => (
                      <ul key={index}>
                        <li>
                          <h5>{task}</h5>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="card-body">
            <h1>Experiencias</h1>
            {Experiences.map(
              ({ title, empresa, data, description, tasks }, index) => (
                <div key={index} className="py-1">
                  <h5>{title}</h5>
                  <h4>
                    {empresa} | {data}
                  </h4>
                  <div>
                    {tasks.map(({ task }, index) => (
                      <ul key={index}>
                        <li>
                          <h5>{task}</h5>
                        </li>
                      </ul>
                    ))}
                  </div>
                </div>
              )
            )}
          </div>
          <div className="card-body">
            <h1>Educación</h1>
            {Education.map(
              ({ title, institution, data, description, tasks }, index) => (
                <div key={index} className="py-1">
                  <h5>{title}</h5>
                  <h4>
                    {institution} | {data}
                  </h4>
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  </Layout>
);
export default Index;
