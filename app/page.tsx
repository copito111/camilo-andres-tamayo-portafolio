const Arrow = () => <span aria-hidden="true">↗</span>;

export default function Home() {
  return (
    <main>
      <nav className="site-nav" aria-label="Navegación principal">
        <a className="brand" href="#inicio" aria-label="Camilo Andrés Tamayo, inicio">
          <span className="brand-mark">CAT</span>
          <span className="brand-copy">Camilo<br />Tamayo</span>
        </a>
        <div className="nav-links">
          <a href="#perfil">Perfil</a>
          <a href="#estudios">Estudios ADSO</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#habilidades">Stack</a>
        </div>
        <a className="nav-cta" href="#contacto">Hablemos <Arrow /></a>
      </nav>

      <section className="hero" id="inicio">
        <div className="hero-grid" aria-hidden="true" />
        
        <div className="hero-portrait-stage">
          <div className="hero-orbit" aria-hidden="true">
            <span className="orbit-dot" />
          </div>
          <div className="hero-portrait-card">
            <div className="hero-img-wrap">
              <img 
                src="/camilo-tamayo.jpg" 
                alt="Camilo Andrés Tamayo - Desarrollador de Software" 
                className="hero-img"
              />
            </div>
            <div className="hero-card-meta">
              <div className="hero-card-name">
                <span>Camilo A. Tamayo</span>
                <span className="status-dot" />
              </div>
              <span className="hero-card-tag">Tecnólogo ADSO · SENA</span>
              <span className="hero-card-sub">📍 Neiva, Huila · Colombia</span>
            </div>
          </div>
        </div>

        <div className="hero-kicker">
          <span className="status-dot" />
          Tecnólogo en Análisis y Desarrollo de Software · SENA
        </div>

        <h1>
          Construyo software.<br />
          <span>Aprendo ejecutando.</span><br />
          Soluciones reales.
        </h1>

        <div className="hero-bottom">
          <p>
            Soy <strong>Camilo Andrés Tamayo</strong>, en formación activa como 
            <strong> Tecnólogo en Análisis y Desarrollo de Software (ADSO)</strong> en el <strong>SENA</strong>. 
            Transformo requerimientos técnicos en sistemas sólidos, desde el modelado relacional y la 
            arquitectura backend hasta interfaces web modernas.
          </p>
          <a className="round-link" href="#proyectos" aria-label="Ver proyectos de Camilo">
            <span>Ver trabajo</span>
            <Arrow />
          </a>
        </div>
        <div className="hero-index" aria-hidden="true">01 / 05</div>
      </section>

      <section className="profile-section" id="perfil">
        <div className="section-label"><span>01</span> Perfil & Estudios</div>
        <div className="profile-copy">
          <p className="eyebrow">Desarrollador de Software · SENA ADSO</p>
          <h2 id="estudios">Ingeniería previa con ejecución práctica.</h2>
          <p className="lead">
            Actualmente adelanto el programa <strong>Tecnólogo en Análisis y Desarrollo de Software (ADSO)</strong> en el 
            <strong> Servicio Nacional de Aprendizaje (SENA)</strong> (Ficha 3407799). 
            Mi enfoque une el rigor del ciclo de vida del software —análisis de requerimientos (SRS), 
            modelado relacional y arquitectura C4— con la construcción directa de soluciones funcionales y optimizadas.
          </p>

          <div className="profile-credentials-card">
            <div className="credentials-avatar">
              <img src="/camilo-tamayo.jpg" alt="Camilo Andrés Tamayo" />
            </div>
            <div className="credentials-body">
              <div className="credentials-header">
                <div>
                  <h3>Camilo Andrés Tamayo</h3>
                  <p className="cred-sub">Tecnólogo en Análisis y Desarrollo de Software (ADSO) · SENA</p>
                </div>
                <span className="cred-badge">Ficha 3407799 · Activo</span>
              </div>
              <div className="credentials-grid">
                <div>
                  <span className="cred-label">Ubicación</span>
                  <span className="cred-value">Neiva, Huila · Colombia</span>
                </div>
                <div>
                  <span className="cred-label">Correo Oficial</span>
                  <a href="mailto:ctamayo959@gmail.com" className="cred-value link">ctamayo959@gmail.com</a>
                </div>
                <div>
                  <span className="cred-label">GitHub</span>
                  <a href="https://github.com/copito111" target="_blank" rel="noopener noreferrer" className="cred-value link">github.com/copito111</a>
                </div>
                <div>
                  <span className="cred-label">Competencias Clave</span>
                  <span className="cred-value">SRS · UML · MySQL · React · Node · Linux</span>
                </div>
              </div>
            </div>
          </div>

          <div className="principles">
            <div>
              <span>01</span>
              <p><strong>Ingeniería y Requerimientos:</strong> Comprensión profunda del problema, diagramas UML y especificación SRS antes de escribir código.</p>
            </div>
            <div>
              <span>02</span>
              <p><strong>Bases de Datos Robustas:</strong> Modelado relacional normalizado, integridad referencial y consultas estructuradas en MySQL.</p>
            </div>
            <div>
              <span>03</span>
              <p><strong>Desarrollo y Despliegue Continuo:</strong> Control de versiones en GitHub, interfaces claras y aplicaciones listas para producción.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="projects-section" id="proyectos">
        <div className="section-intro">
          <div className="section-label light"><span>02</span> Proyectos</div>
          <div>
            <p className="eyebrow">Trabajo seleccionado</p>
            <h2>Soluciones con<br />propósito real.</h2>
          </div>
        </div>

        <div className="projects-grid">
          {/* Featured Project: MERCANEX ERP (Replaces TITAN) */}
          <article className="project-card project-featured">
            <div className="project-topline">
              <span>01 / Proyecto Formativo Principal · SENA ADSO</span>
              <span className="project-status"><i /> Ficha 3407799 · En desarrollo activo</span>
            </div>

            <div className="mercanex-visual" aria-hidden="true">
              <div className="mercanex-hud">
                <div className="mercanex-hud-header">
                  <span>MERCANEX // SISTEMA ERP CORPORATIVO</span>
                  <span>ONLINE · v2.4</span>
                </div>
                <div className="mercanex-hud-modules">
                  <div className="mercanex-chip">
                    <span>Inventario</span>
                    <strong>Multisede</strong>
                  </div>
                  <div className="mercanex-chip">
                    <span>Comercial</span>
                    <strong>Facturación</strong>
                  </div>
                  <div className="mercanex-chip">
                    <span>Clientes</span>
                    <strong>Trazabilidad</strong>
                  </div>
                </div>
                <div className="mercanex-hud-footer">
                  <span>MODELO RELACIONAL E-R · MYSQL</span>
                  <span>REST API 200 OK</span>
                </div>
              </div>
            </div>

            <div className="project-body">
              <h3>MERCANEX ERP</h3>
              <p>
                Plataforma integral de gestión comercial desarrollada como proyecto formativo central 
                en el Tecnólogo ADSO. Diseñada para centralizar la operación empresarial multisede: control 
                estricto de inventarios, pedidos, catálogo, proveedores y facturación, con arquitectura 
                modular C4 y modelo relacional normalizado.
              </p>
            </div>
            <div className="tags">
              <span>SENA ADSO</span>
              <span>Arquitectura C4</span>
              <span>MySQL Relacional</span>
              <span>Full Stack</span>
              <span>TypeScript</span>
              <span>APIs REST</span>
            </div>
          </article>

          {/* Project 2: Cafe Web */}
          <article className="project-card cafe-card">
            <div className="project-topline"><span>02 / Producto web</span><span>Full Stack</span></div>
            <div className="cafe-visual" aria-hidden="true">
              <span className="cup">Café<br />Web</span>
              <span className="steam steam-a" />
              <span className="steam steam-b" />
            </div>
            <div className="project-body">
              <h3>Operación digital para café</h3>
              <p>Una experiencia full stack pensada para conectar clientes, catálogo, pedidos y administración de ventas en una interfaz intuitiva.</p>
            </div>
            <div className="tags"><span>PHP</span><span>MySQL</span><span>Admin Panel</span><span>MVC</span></div>
          </article>

          {/* Project 3: SQL Lab */}
          <article className="project-card sql-card">
            <div className="project-topline"><span>03 / Bases de Datos</span><span>Ingeniería</span></div>
            <div className="sql-visual" aria-hidden="true">
              <div><b>SELECT</b> student_name, competency</div>
              <div><b>FROM</b> sena_adso_records</div>
              <div><b>WHERE</b> status = 'COMPLETED';</div>
            </div>
            <div className="project-body">
              <h3>SQL & Data Modeling Lab</h3>
              <p>Diseño y normalización de bases de datos relacionales, modelos entidad–relación (E-R), integridad referencial y resolución de consultas analíticas avanzadas.</p>
            </div>
            <div className="tags"><span>MySQL</span><span>DBeaver</span><span>Modelado E-R</span><span>Optimización</span></div>
          </article>

          {/* Project 4: Linux Workbench */}
          <article className="project-card linux-card">
            <div className="project-topline"><span>04 / Infraestructura</span><span>Sistemas</span></div>
            <div className="terminal-visual" aria-hidden="true">
              <div className="terminal-bar"><i /><i /><i /></div>
              <code><span>$</span> systemctl status deployment-engine<br /><em>arch · debian · server-config · git</em><br /><span>✓</span> active (running)</code>
            </div>
            <div className="project-body">
              <h3>Linux & DevOps Workbench</h3>
              <p>Administración y configuración de entornos en Linux (Ubuntu, Debian, Arch): gestión de paquetes, servidores de desarrollo, automatización y despliegue continuo.</p>
            </div>
            <div className="tags"><span>Linux</span><span>Bash</span><span>Git</span><span>Despliegue</span></div>
          </article>
        </div>
      </section>

      <section className="skills-section" id="habilidades">
        <div className="section-label"><span>03</span> Stack</div>
        <div className="skills-content">
          <p className="eyebrow">Competencias con propósito técnico</p>
          <h2>Del requerimiento<br />al despliegue.</h2>
          <div className="skill-columns">
            <div>
              <span className="skill-number">01</span>
              <h3>Frontend</h3>
              <p>HTML5 · CSS3 · TypeScript<br />React · Next.js · Tailwind<br />Interfaces accesibles y responsivas</p>
            </div>
            <div>
              <span className="skill-number">02</span>
              <h3>Backend & Lógica</h3>
              <p>Node.js · PHP · Java<br />APIs RESTful · Arquitectura C4<br />Lógica estructurada y PSeInt</p>
            </div>
            <div>
              <span className="skill-number">03</span>
              <h3>Bases de Datos</h3>
              <p>MySQL · DBeaver<br />Modelo Entidad-Relación (E-R)<br />Normalización y consultas complejas</p>
            </div>
            <div>
              <span className="skill-number">04</span>
              <h3>Herramientas & DevOps</h3>
              <p>Git · GitHub (@copito111)<br />Entornos Linux (Ubuntu/Debian)<br />Despliegue en Vercel · Docs SRS</p>
            </div>
          </div>
        </div>
      </section>

      <section className="journey-section">
        <div className="section-label"><span>04</span> Recorrido</div>
        <div className="journey-content">
          <p className="eyebrow">Formación y Trayectoria</p>
          <h2>Disciplina con<br />dirección.</h2>
          <div className="journey-list">
            <div className="journey-item">
              <span>Actualidad</span>
              <h3>Tecnólogo ADSO · SENA</h3>
              <p>Formación integral como Tecnólogo en Análisis y Desarrollo de Software (Ficha 3407799). Dominio de ciclo de vida completo: levantamiento de requisitos (SRS), modelado UML, programación modular, bases de datos y pruebas de software.</p>
            </div>
            <div className="journey-item">
              <span>Proyecto Central</span>
              <h3>Mercanex ERP Multisede</h3>
              <p>Desarrollo del sistema de control comercial e inventarios multinacional como proyecto insignia formativo, integrando arquitectura C4, modelo de datos relacional y frontend reactivo.</p>
            </div>
            <div className="journey-item">
              <span>Metodología</span>
              <h3>Aprender ejecutando</h3>
              <p>Construcción de software real, experimentación en Linux, control riguroso de versiones en GitHub y aprendizaje continuo con documentación técnica exhaustiva.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="contact-section" id="contacto">
        <div className="contact-meta">
          <span className="status-dot dark" />
          Disponible para proyectos, prácticas y colaboraciones
        </div>
        <h2>¿Construimos<br />algo real?</h2>
        <p>
          Tecnólogo en formación en Análisis y Desarrollo de Software (ADSO · SENA). 
          Abierto a oportunidades laborales, desarrollo de sistemas empresariales, aplicaciones web y proyectos de datos.
        </p>

        <div className="contact-info-strip">
          <div className="contact-item">
            <span className="contact-label">Correo Oficial</span>
            <a href="mailto:ctamayo959@gmail.com" className="contact-val">ctamayo959@gmail.com</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">GitHub Oficial</span>
            <a href="https://github.com/copito111" target="_blank" rel="noopener noreferrer" className="contact-val">github.com/copito111</a>
          </div>
          <div className="contact-item">
            <span className="contact-label">Ubicación</span>
            <span className="contact-val">Neiva, Huila · Colombia</span>
          </div>
        </div>

        <div className="contact-actions">
          <a href="mailto:ctamayo959@gmail.com">Escribir al Correo <Arrow /></a>
          <a href="https://github.com/copito111" target="_blank" rel="noopener noreferrer">Visitar GitHub @copito111 <Arrow /></a>
          <a href="#proyectos">Ver Proyectos <Arrow /></a>
        </div>
      </section>

      <section className="preview-strip" aria-label="Áreas de enfoque">
        <span>TECNÓLOGO ADSO</span><i>✦</i><span>DESARROLLO WEB FULL STACK</span><i>✦</i><span>BASES DE DATOS RELACIONALES</span><i>✦</i><span>ARQUITECTURA DE SOFTWARE</span><i>✦</i><span>LINUX</span>
      </section>

      <footer className="first-footer">
        <span>© 2026 Camilo Andrés Tamayo · Tecnólogo en Análisis y Desarrollo de Software (SENA)</span>
        <a href="#inicio">Volver arriba ↑</a>
      </footer>
    </main>
  );
}
