import React from "react";
import "./Css/footer.css";
import language from "./images/lang2.svg";

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p class="footer-top">
          Questions? Call
          <a href="tel:000-800-040-1843 ">000-800-040-1843</a>
        </p>
        <ul class="footer-links.structural">
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_faq_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_faq"
            >
              <span data-uia="data-uia-footer-label">FAQ</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_help_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_help"
            >
              <span data-uia="data-uia-footer-label">Help Centre</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_account_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_account"
            >
              <span data-uia="data-uia-footer-label">Account</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_media_center_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_media_center"
            >
              <span data-uia="data-uia-footer-label">Media Centre</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_relations_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_relations"
            >
              <span data-uia="data-uia-footer-label">Investor Relations</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_jobs_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_jobs"
            >
              <span data-uia="data-uia-footer-label">Jobs</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_waysToWatch_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_waysToWatch"
            >
              <span data-uia="data-uia-footer-label">Ways to Watch</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_terms_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_terms"
            >
              <span data-uia="data-uia-footer-label">Terms of Use</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_privacy_separate_link_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_privacy_separate_link"
            >
              <span data-uia="data-uia-footer-label">Privacy</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_cookies_separate_link_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_cookies_separate_link"
            >
              <span data-uia="data-uia-footer-label">Cookie Preferences</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_corporate_information_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_corporate_information"
            >
              <span data-uia="data-uia-footer-label">
                Corporate Information
              </span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_contact_us_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_contact_us"
            >
              <span data-uia="data-uia-footer-label">Contact Us</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_speed_test_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_speed_test"
            >
              <span data-uia="data-uia-footer-label">Speed Test</span>
            </a>
          </li>
          <li
            class="footer-link-item"
            placeholder="footer_responsive_link_legal_notices_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_legal_notices"
            >
              <span data-uia="data-uia-footer-label">Legal Notices</span>
            </a>
          </li>
          <li
            class="footer-link-item originals-link"
            placeholder="footer_responsive_link_only_on_netflix_item"
          >
            <a
              class="footer-link"
              data-uia="footer-link"
              href="/"
              placeholder="footer_responsive_link_only_on_netflix"
            >
              <span data-uia="data-uia-footer-label">Only on Netflix</span>
            </a>
          </li>
        </ul>
        <span className="btn1">
          <img src={language} alt="language" className="language_icon" />
          <select name="language" className="language_text">
            <option value="English">English</option>
            <option value="हिन्दी">हिन्दी</option>
          </select>
        </span>
        <p className="last">Netflix India</p>
      </div>
    </footer>
  );
};

export default Footer;
