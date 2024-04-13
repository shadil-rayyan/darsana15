import { useEffect, useState } from 'react'; // Import useEffect and useState from React
import styles from './navigation.module.css';

const Navigation = () => {
  const [isNavbarActive, setIsNavbarActive] = useState(false); // Define state for navbar active status

  useEffect(() => {
    const dropdownToggles = document.querySelectorAll('.navbar > ul > .dropdown > a');
    const mobileNavToggle = document.querySelector('.mobile-nav-toggle');
    const navbar = document.querySelector('.navbar');

    dropdownToggles.forEach(function (dropdownToggle) {
      dropdownToggle.addEventListener('click', function (event) {
        event.preventDefault();
        const dropdownMenu = this.parentNode.querySelector('ul');
        dropdownMenu.classList.toggle('active');
      });
    });

    mobileNavToggle.addEventListener('click', function (event) {
      event.preventDefault();
      setIsNavbarActive(!isNavbarActive); // Toggle navbar active status
    });

    document.addEventListener('click', function (event) {
      if (!navbar.contains(event.target) && !mobileNavToggle.contains(event.target)) {
        setIsNavbarActive(false); // Close navbar when clicking outside
        dropdownToggles.forEach(function (dropdownToggle) {
          dropdownToggle.classList.remove('active');
          const dropdownMenu = dropdownToggle.parentNode.querySelector('ul');
          dropdownMenu.classList.remove('active');
        });
      }
    });
  }, [isNavbarActive]); // Add isNavbarActive to dependency array to ensure effect runs on state change
  
  return (
    <header id="header" className={styles.header}>
      <div className="container d-flex justify-content-between align-items-center">
        <div className="logo">
          <a href="https://darsana.in">
            <img src="../images/logo.png" className="img-fluid" />
          </a>
        </div>
        <div className={styles.menuWrap}>
          <div className={styles.cartMenuWrap}>
            <nav id="navbar" className={styles.navbar}>
              <ul>
                <li>
                  <a className={styles.active} href="https://darsana.in">
                    Home
                  </a>
                </li>
                <li>
                  <a className={styles.navLink} href="https://darsana.in/aboutus">
                    About Us
                  </a>
                </li>
                <li className={styles.dropdown}>
                  <a href="#">
                    <span>Key Initiatives</span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li>
                      <a href="https://darsana.in/article/biju-cheriyan-student-empowerment-program">
                        Biju Cheriyan Student Empowerment Program
                      </a>
                    </li>
                    <li><a href="https://darsana.in/article/prabakaran-memorial-best-project-award">Prabakaran Memorial Best Project Award</a></li>
                    <li><a href="https://darsana.in/article/skill-development-program">Skill Development Program</a></li>
                    <li><a target="_blank" href="https://ignite.darsana.in">IGNITE</a></li>
                    <li><a href="https://darsana.in/article/bridge">BRIDGE</a></li>
                    <li><a href="https://darsana.in/article/biju-cherian-endowment-talk">Biju Cherian Endowment Talk</a></li>
                    <li><a href="https://darsana.in/article/house-constructions">House Constructions</a></li>
                    <li><a href="https://darsana.in/article/course-explorer">Course Explorer</a></li>
                  </ul>
                </li>
                <li className={styles.dropdown}>
                  <a href="#">
                    <span>other Initiatives</span>
                    <i className="bi bi-chevron-down"></i>
                  </a>
                  <ul>
                    <li><a href="https://darsana.in/article/covid-care-support">Covid care Support</a></li>
                                <li><a href="https://darsana.in/article/ambulance-to-palliative-care-unit">Ambulance to Palliative care unit</a></li>
                                <li><a href="https://darsana.in/article/job-fair">Job Fair</a></li>
                                <li><a href="https://darsana.in/article/technology-corner">Technology Corner</a></li>
                                <li><a href="https://darsana.in/article/seminar-on-restructuring-engineering-education">Seminar on restructuring Engineering education</a></li>
                                <li><a href="https://darsana.in/article/sholayur-educational-support-program">Sholayur Educational Support Program</a></li>
                            </ul>
                </li>
                <li>
                  <a  href="https://darsana.in/aboutus">
                    Products
                  </a>
                </li>
                <li>
                  <a href="https://darsana.in/aboutus">
                    Activites
                  </a>
                </li>
                <li>
                  <a  href="https://darsana.in/aboutus">
                    contact us
                  </a>
                </li>   
                
                <li>
                  <a className={styles.blackButton} href="https://member.darsana.in/">
                    Sign In
                  </a>
                </li>
              </ul>
              <i className={`${styles.mobileNavToggle} bi bi-list`}></i>
            </nav>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
