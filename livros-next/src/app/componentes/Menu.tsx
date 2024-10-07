import Link from 'next/link';
export default function Menu() {
  return (
  <nav className='navbar navbar-expanded-lg bg-body-secondary'>
    <div className="container-fluid">
      <ul className="navbar-nav flex-row gap-5">
        <li className="nav-item">
          <Link href="/" className="nav-link">Home</Link>
        </li>
        <li className="nav-item">
            <Link href="/livrolista" className="nav-link">Catálogo</Link>
        </li>
        <li className="nav-item">
          <Link href="/livrodados" className="nav-link">Novo</Link>
        </li> 
      </ul>
    </div>
    </nav>
)  
}
