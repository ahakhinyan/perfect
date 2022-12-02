import s from './Footer.module.css';

function Footer() {
  return (
    <div className={s.footer}>
      <div className={s.footer_container}>
        <div className={s.footer_top}>
          <div className={s.company_info}>
            <h2 className={s.company_logo}>Prefect Pixel</h2>
            <p className={s.company_description}>Let's create your unique design together!</p>
            <ul className={s.footer_list}>
              <li className={s.footer_list_item}>
                <a href="/" className={s.footer_list_link}>
                  About
                </a>
              </li>
              <li className={s.footer_list_item}>
                <a href="/" className={s.footer_list_link}>
                  Services
                </a>
              </li>
              <li className={s.footer_list_item}>
                <a href="/" className={s.footer_list_link}>
                  Portfolio
                </a>
              </li>
              <li className={s.footer_list_item}>
                <a href="/" className={s.footer_list_link}>
                  Contacts
                </a>
              </li>
            </ul>
            <span className={s.copyright}>Copyright © 2022 Perfect Pixel Armenia. All rights reserved.</span>
          </div>
          <div>
            <h6 className={s.footer_title}>Perfect Pixel Social</h6>
            <ul className={s.footer_list}>
            <li className={s.footer_list_item}>
                <a href="https://www.behance.net/ppx_design" className={s.footer_list_link}>
                  Behance
                </a>
              </li>
              <li className={s.footer_list_item}>
                <a href="https://www.instagram.com/ppx.design/" className={s.footer_list_link}>
                  Instagram
                </a>
              </li>
              <li className={s.footer_list_item}>
                <a href="https://www.facebook.com/ppx.dsgn" className={s.footer_list_link}>
                  Facebook
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
