import styles from '../../styles/header.module.css'
import Link from 'next/link'
export default function Header() {
  return (
    <div className={styles.grad}>
        <nav class="navbar navbar-expand-lg py-1 py-lg-3">
            <div class="container">
            <a class="navbar-brand text-white" href="#">Auto Donations</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
                <ul class="navbar-nav">
                <li class="nav-item">
                    <a class="nav-link text-white" href="#information">Information</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#donate">Donate</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link text-white" href="#contact">Contact</a>
                </li>
                </ul>
            </div>
            </div>
        </nav>
    </div>
  )
};
