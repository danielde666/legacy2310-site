import { motion } from 'framer-motion';
import Header from '../../components/Header';
import styles from '../../styles/xeno.module.css';

export default function Proposal() {
  return (
    <>
      <main className={`min-h-screen bg-gradient-to-br from-zinc-900 to-black ${styles.xenoPage}`}>
        <Header />
        
        {/* Splash Section */}
        <section className="splash">
          <motion.span
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="splash-text"
          >
            DAPHNE X<br /> DANIEL DE LA ROSA
          </motion.span>
        </section>

        {/* Top Info */}
        <div className="top-info">
          <p>
            <strong>DAPHNE - Summer 2025</strong><br />
            <strong>Issue Date:</strong> July 8, 2025<br />
          </p>
        </div>

        {/* Full Web Development Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <h2>Full web development</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Hrs</th>
                <th>Rate</th>
                <th className="right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="description">
                  <strong>Shopify Development - 30 hours</strong><br />
                  - Custom Theme Configuration<br />
                  - Site map and page organization<br />
                  - Customer Experience and User Flow<br />
                  - Data / Content Organization<br />
                </td>
                <td>30.00</td>
                <td>$125.00</td>
                <td className="right">$3,750.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Revisions + Launch - 4 hours</strong>
                </td>
                <td>4.00</td>
                <td>$125.00</td>
                <td className="right">$500.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan="3">Total</td>
                <td className="right">$4,250.00</td>
              </tr>
            </tfoot>
          </table>
          <div className="section">
            <p>
              <a 
                href="https://dannyde.harvestapp.com/client/estimates/1a18695f1ec7117d61f7439c7cde940a22e89f5d" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn button"
              >
                View and Accept
              </a>
            </p>
          </div>
        </motion.section>

        {/* Full Web Development & Design Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <h2>Full web development &amp; design</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Hrs</th>
                <th>Rate</th>
                <th className="right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="description">
                  <strong>Website Design - 10 hours</strong><br />
                  Website (Homepage, Info, Product List & Detail, Generic pages)<br />
                  Expansive, boundless, elegant, interactive, familiar, new, clean, fresh, based on brief provided.<br />
                </td>
                <td>10.00</td>
                <td>$125.00</td>
                <td className="right">$1,250.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Shopify Development - 24 hours</strong><br />
                  - Custom Theme Configuration<br />
                  - Site map and page organization<br />
                  - Customer Experience and User Flow<br />
                  - Data / Content Organization<br />
                </td>
                <td>24.00</td>
                <td>$125.00</td>
                <td className="right">$3,000.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Revisions + Launch - 4 hours</strong>
                </td>
                <td>4.00</td>
                <td>$125.00</td>
                <td className="right">$500.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan="3">Total</td>
                <td className="right">$4,750.00</td>
              </tr>
            </tfoot>
          </table>
          <div className="section">
            <p>
              <a 
                href="https://dannyde.harvestapp.com/client/estimates/8fc78aad33e28240825d4deb800b5d710c135fd1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="btn button"
              >
                View and Accept
              </a>
            </p>
          </div>
        </motion.section>

        {/* Branding, Website Design and Development */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="section"
        >
          <h2>Branding, Website Design and Development</h2>
          <table>
            <thead>
              <tr>
                <th>Description</th>
                <th>Hrs</th>
                <th>Rate</th>
                <th className="right">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="description">
                  <strong>Branding - 20 hours</strong><br />
                  Up to 3 Rounds of Revisions for:<br />
                  - - Branding (Logo, Typeface, Colors, Brand guides)<br />
                  Organized folder of vector graphics, fonts, and content templates<br />
                </td>
                <td>20.00</td>
                <td>$125.00</td>
                <td className="right">$2,500.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Website Design - 10 hours</strong><br />
                  Website (Homepage, Info, Product List & Detail, Generic pages)<br />
                  Expansive, boundless, elegant, interactive, familiar, new, clean, fresh, based on brief provided.<br />
                </td>
                <td>10.00</td>
                <td>$125.00</td>
                <td className="right">$1,250.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Shopify Development - 20 hours</strong><br />
                  - Custom Theme Configuration<br />
                  - Site map and page organization<br />
                  - Customer Experience and User Flow<br />
                  - Data / Content Organization<br />
                </td>
                <td>20.00</td>
                <td>$125.00</td>
                <td className="right">$2,500.00</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Revisions + Launch - 4 hours</strong>
                </td>
                <td>4.00</td>
                <td>$125.00</td>
                <td className="right">$500.00</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan="3">Total</td>
                <td className="right">$6,750.00</td>
              </tr>
            </tfoot>
          </table>
          <p>
            <a 
              href="https://dannyde.harvestapp.com/client/estimates/a6486d9521dfa681e541fc7302a7bf788d8753b5" 
              target="_blank" 
              rel="noopener noreferrer"
              className="btn button"
            >
              View and Accept
            </a>
          </p>
        </motion.section>

        {/* Timeline Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="section"
        >
          <h2>TIMELINE</h2>
          <table>
            <thead>
              <tr>
                <th>Deliverable</th>
                <th className="right">Timeline</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="description">
                  <strong>Branding</strong>
                </td>
                <td className="right">2 weeks per round</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Website Design</strong>
                </td>
                <td className="right">2 weeks from branding completion</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Shopify Development</strong>
                </td>
                <td className="right">4 weeks from start / design completion</td>
              </tr>
              <tr>
                <td className="description">
                  <strong>Project Completion</strong>
                </td>
                <td className="right">8 weeks from start</td>
              </tr>
            </tbody>
            <tfoot>
              <tr className="total">
                <td colSpan="2"><br /><br /><br /><br />Deadlines</td>
              </tr>
              <tr className="total">
                <td>Sample copy, imagery & videos hand-off</td>
                <td className="right">August 10, 2025</td>
              </tr>
              <tr className="total">
                <td>Full content hand-off</td>
                <td className="right">September 10, 2025</td>
              </tr>
              <tr className="total">
                <td>Soft launch goal</td>
                <td className="right">Sept 20, 2025</td>
              </tr>
              <tr className="total">
                <td>Final site hand-off</td>
                <td className="right">September 31, 2025</td>
              </tr>
            </tfoot>
          </table>
        </motion.section>

        {/* Relevant Projects Section */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1.0 }}
          className="section"
        >
          <br /><br /><br /><br />
          <h2>Relevant Projects</h2>
          <p>Below you will find a list of past and in progress projects that fit the scope and general direction you want to take DAPHNE.</p>

          {/* Project: Jii */}
          <div className="project">
            <h3>Jii</h3>
            <p className="description">Website Design and Development, Art Direction, Apparel Design, Website Development, Marketing, Consulting.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.18.58_AM.png?v=1746120830" alt="JII" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.19.06_AM.png?v=1746120828" alt="JII" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.19.17_AM.png?v=1746120869" alt="JII" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.19.44_AM.png?v=1746120868" alt="JII" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.19.56_AM.png?v=1746120883" alt="JII" />
              </div>
            </div>
            <p><a href="https://www.jiisports.com/" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Nina Runsdorf */}
          <div className="project">
            <h3>Nina Runsdorf</h3>
            <p className="description">UX Design and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.10.16_AM.png?v=1746120899" alt="Nina Runsdorf" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.10.27_AM.png?v=1746120845" alt="Nina Runsdorf" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.10.36_AM.png?v=1746120853" alt="Nina Runsdorf" />
              </div>
            </div>
            <p><a href="https://www.ninarunsdorf.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: OLGA BASHA */}
          <div className="project">
            <h3>OLGA BASHA</h3>
            <p className="description">User Experience, website design and developement.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.14.40_AM.png?v=1746120870" alt="OLGA BASHA" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.14.54_AM.png?v=1746120869" alt="OLGA BASHA" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.15.02_AM.png?v=1746120844" alt="OLGA BASHA" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.14.50_AM.png?v=1746120864" alt="OLGA BASHA" />
              </div>
            </div>
            <p><a href="https://www.olga-basha.com/" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Kleio */}
          <div className="project">
            <h3>Kleio</h3>
            <p className="description">User Experience, website developement.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.15.09_PM.png?v=1752005976" alt="KLEIO" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.16.17_PM.png?v=1752005981" alt="KLEIO" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.18.32_PM.png?v=1752005976" alt="KLEIO" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.18.34_PM.png?v=1752005975" alt="KLEIO" />
              </div>
            </div>
            <p>In Development</p>
          </div>

          {/* Project: TURKISH BATH */}
          <div className="project">
            <h3>TURKISH BATH</h3>
            <p className="description">Website design and developement.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.07.03_PM.png?v=1752005593" alt="TURKISH BATH" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.07.27_PM.png?v=1752005592" alt="TURKISH BATH" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-07-08_at_1.07.16_PM.png?v=1752005592" alt="TURKISH BATH" />
              </div>
            </div>
            <p>In Development</p>
          </div>

          {/* Project: Shereen Mohammad */}
          <div className="project">
            <h3><a href="https://shereenmohammad.com" target="_blank" rel="noopener noreferrer">Shereen Mohammad</a></h3>
            <p className="description">Art Direction, Website design, Website Development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.08.25_AM.png?v=1746120862" alt="Shereen Mohammad" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.37.01_AM.png?v=1746121093" alt="Shereen Mohammad" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.37.35_AM.png?v=1746121091" alt="Shereen Mohammad" />
              </div>
            </div>
            <p><a href="https://shereenmohammad.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Vivien Ramsay */}
          <div className="project">
            <h3>Vivien Ramsay</h3>
            <p className="description">UX, design and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.21.18_AM.png?v=1746120890" alt="Vivien Ramsay" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.21.21_AM.png?v=1746120857" alt="Vivien Ramsay" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.21.56_AM.png?v=1746120896" alt="Vivien Ramsay" />
              </div>
            </div>
            <p><a href="https://vivienramsay.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: French Presse Linens */}
          <div className="project">
            <h3>French Presse Linens</h3>
            <p className="description">Branding, Website Design and Development</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.22.26_AM.png?v=1746120896" alt="French Presse" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.23.43_AM.png?v=1746120883" alt="French Presse" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.22.41_AM.png?v=1746120849" alt="French Presse" />
              </div>
            </div>
            <p><a href="https://frenchpresse.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Zycloom */}
          <div className="project">
            <h3>Zycloom</h3>
            <p className="description">UX, design and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.14.26_AM.png?v=1746120886" alt="Zycloom" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.09.01_AM.png?v=1746120886" alt="Zycloom" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.08.45_AM.png?v=1746120885" alt="Zycloom" />
              </div>
            </div>
            <p><a href="https://zycloom.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Samira Larouci */}
          <div className="project">
            <h3>Samira Larouci</h3>
            <p className="description">Data migration, consulting and website design &amp; development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.11.37_AM.png?v=1746120872" alt="Samira Larouci" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.12.25_AM.png?v=1746120854" alt="Samira Larouci" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.12.50_AM.png?v=1746120852" alt="Samira Larouci" />
              </div>
            </div>
            <p><a href="https://www.samiralarouci.com" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>

          {/* Project: Henri */}
          <div className="project">
            <h3>Henri</h3>
            <p className="description">UX, design, custom fonts, and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.27.45_AM.png?v=1746120898" alt="Henri" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.29.27_AM.png?v=1746120894" alt="Henri" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.29.38_AM.png?v=1746120895" alt="Henri" />
              </div>
            </div>
            <p>In Development</p>
          </div>

          {/* Project: Lucien Smith Studio */}
          <div className="project">
            <h3>Lucien Smith Studio</h3>
            <p className="description">UX, design and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_10.15.49_AM.png?v=1746120832" alt="Lucien Smith Studio" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-05-01_at_12.07.33_PM.png?v=1746126461" alt="Lucien Smith Studio" />
              </div>
            </div>
            <p><a href="https://luciensmithstudio.com/" target="_blank" rel="noopener noreferrer">Ongoing</a></p>
          </div>

          {/* Project: Alexa Runsdorf */}
          <div className="project">
            <h3>Alexa Runsdorf</h3>
            <p className="description">UX, design, log, and website development.</p>
            <div className="images">
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-06-22_at_4.26.30_PM.png?v=1750650587" alt="Alexa Runsdorf" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-06-22_at_4.26.25_PM.png?v=1750650584" alt="Alexa Runsdorf" />
              </div>
              <div className="image">
                <img src="https://cdn.shopify.com/s/files/1/0666/6269/4959/files/Screenshot_2025-06-22_at_4.26.47_PM.png?v=1750650582" alt="Alexa Runsdorf" />
              </div>
            </div>
            <p><a href="https://alexarunsdorf.com/" target="_blank" rel="noopener noreferrer">View Project</a></p>
          </div>
        </motion.section>
      </main>
    </>
  );
}