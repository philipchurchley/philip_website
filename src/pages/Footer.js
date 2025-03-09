import '../styles/App.css';
import '../styles/Footer.css';

const Footer = () => {
   return (
      <footer>
         <div className="footer-content">
            <p>&copy; 2025 Philip Churchley | Built with ❤️</p>
            <ul className="social-links">
               <li><a href="https://github.com/philipchurchley" target="_blank" rel="noreferrer" aria-label="GitHub">GitHub</a></li>
               <li><a href="https://www.linkedin.com/in/philip-churchley/" target="_blank" rel="noreferrer" aria-label="LinkedIn">LinkedIn</a></li>
               <li><a href="https://www.instagram.com/p.churchley/" target="_blank" rel="noreferrer" aria-label="Instagram">Instagram</a></li>
               <li><a href="https://soundcloud.com/philip-churchley" target="_blank" rel="noreferrer" aria-label="SoundCloud">SoundCloud</a></li>
               <li><a href="https://open.spotify.com/user/philipchurchley?si=77a04ca58664426a" target="_blank" rel="noreferrer" aria-label="Spotify">Spotify</a></li>
               <li><a href="https://www.youtube.com/@philipchurchley783" target="_blank" rel="noreferrer" aria-label="YouTube">YouTube</a></li>
               <li><a href="mailto:philipchurchley@gmail.com" aria-label="Email">Email</a></li>
            </ul>
         </div>
      </footer>
   );
}

export default Footer;
