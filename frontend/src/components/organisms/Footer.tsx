export default function Footer() {
  return (
    <footer className="shadow-md py-4 px-8 border-t flex justify-between items-center">
      <p>Copyright &copy; - 2024</p>
      <ul className="flex gap-x-3">
        <li>
          <a href="https://github.com/GuillemotClement" target="_blank" rel="noreferrer">
            <i className="fa-brands fa-github"></i>
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/cl%C3%A9ment-guillemot/"
            target="_blank"
            rel="noreferrer"
          >
            <i className="fa-brands fa-linkedin"></i>
          </a>
        </li>
      </ul>
    </footer>
  );
}
