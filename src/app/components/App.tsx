import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';
import * as Icons from "@navikt/aksel-icons";
import meta from "@navikt/aksel-icons/metadata";
import { useState } from 'react';
import { getFillIcon, categorizeIcons } from '../utils';
import { useMemo } from 'react';
import { Button } from '@navikt/ds-react';

function App() {
  const [strokeIcons] = useState(
    Object.values(meta).filter((x) => x.variant.toLowerCase() === "stroke")
  );

  const [fillIcons] = useState(getFillIcon(Object.values(meta)));

  const categories = useMemo(() => {
    return categorizeIcons(
      strokeIcons
    );
  }, [strokeIcons, fillIcons]);

  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-icon') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  const newIcons = () => {
    let sortedIcons = strokeIcons.sort((a, b) => a.updated_at < b.updated_at ? 1 : -1);
    return sortedIcons.slice(0, 10);
  };

  newIcons()

  return (
    <div className='plugin-wrapper'>
      <header className='header'>
        <img src={logo} className="logo" />
        <h1 className='name'>Aksel Icons</h1>
      </header>

      <div className='collection updated'>
        <h2 className='title'>Recently updated</h2>
        <div className='icon-grid'>
          {newIcons().map((i) => {
            const T = Icons[`${i.id}Icon`];
            if (T === undefined) {
              return null;
            }
            const iconSVG = React.useRef<SVGElement>(undefined);

            const onCreate = (name: string) => {
              let svg = iconSVG.current.outerHTML;
              let size = 24;
              parent.postMessage({ pluginMessage: { type: 'create-icon', svg, size, name } }, '*');
            };

            return (
              <Button key={i.id} variant="tertiary-neutral" icon={<T
                className="text-3xl"
                aria-hidden
                alt=""
                fontSize="1.5rem"
                ref={iconSVG}
              />} onClick={() => {
                onCreate(i.name);
              }} />
            );
          })
          }
        </div>
      </div>

      {categories.map((cat) => {
        return (
          <div key={cat.category} className="collection all">
            {cat.sub_categories.map((sub) => {
              return (
                <div key={sub.sub_category} className="category">
                  <h2 className='title'>{cat.category}&nbsp;<span className='sub-category'>| {sub.sub_category}</span></h2>
                  <div className='icon-grid'>
                    {sub.icons.map((i) => {
                      const T = Icons[`${i.id}Icon`];
                      if (T === undefined) {
                        return null;
                      }
                      const iconSVG = React.useRef<SVGElement>(undefined);

                      const onCreate = (name: string) => {
                        let svg = iconSVG.current.outerHTML;
                        let size = 24;
                        parent.postMessage({ pluginMessage: { type: 'create-icon', svg, size, name } }, '*');
                      };

                      return (
                        <Button key={i.id} variant="tertiary-neutral" icon={<T
                          className="text-3xl"
                          aria-hidden
                          alt=""
                          fontSize="1.5rem"
                          ref={iconSVG}
                        />} onClick={() => {
                          onCreate(i.name);
                        }} />
                      );
                    })}
                  </div>
                </div>
              );
            })}
          </div>
        );
      })}
    </div>
  );
}

export default App;
