export default function Header() {
  return (
    <div>
      <nav class="navbar navbar-expand-lg navbar-dark bg-dark fixed-top">
    <div class="container">
      <a class="navbar-brand" href="#">Auto Donation</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <a class="nav-link" href="#section1">Information</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section2">Donate</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="#section3">Contact Us</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>

    </div>
  );
}