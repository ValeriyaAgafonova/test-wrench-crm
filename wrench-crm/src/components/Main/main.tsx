import './Main.css';
import { FC, PropsWithChildren, ReactNode } from 'react';




const Main: FC<PropsWithChildren> = (props) => {
    return (
      <section className="main">
          {props.children}
      </section>
    );
  }
  
  export default Main;
  