import { Link, Outlet } from 'umi';
import { Tabs } from 'antd';
import styles from './index.less';

export default function Layout() {
  return (
    <div className={styles.navs}>
      <Tabs
        
      
      ></Tabs>


      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/docs">Docs</Link>
        </li>
        <li>
          <a href="https://github.com/umijs/umi">Github</a>
        </li>
      </ul>
      <Outlet />
    </div>
  );
}
