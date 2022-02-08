import styles from '@/styles/Header.module.css'

import Link from 'next/link';
function header() {
  return <header className={styles.header}>
               <div className={styles.logo}>
                 <Link href="/">
                   <a className='logostyle'>DJ Events</a>
                 </Link>
               </div>

               <nav>
                 <ul>
                   <li>
                     <Link href='/events'>
                       <a>Events</a>
                     </Link>
                   </li>
                 </ul>
               </nav>
         </header>;
}

export default header;

