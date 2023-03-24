import React from 'react';
import logo from '../assets/logo.svg';
import '../styles/ui.css';
import * as Icons from "@navikt/aksel-icons";
import meta from "@navikt/aksel-icons/metadata";
import { useState } from 'react';
import { getFillIcon, categorizeIcons } from '../utils';
import { useMemo } from 'react';
import Fuse from 'fuse.js';

const fuseStroke = new Fuse(
  Object.values(meta).filter((x) => x.variant.toLowerCase() === "stroke"),
  {
    threshold: 0.2,
    keys: [
      { name: "name", weight: 3 },
      { name: "category", weight: 2 },
      { name: "sub_category", weight: 2 },
      { name: "keywords", weight: 3 },
      { name: "variant", weight: 1 },
    ],
    shouldSort: false,
  }
);

const fuseFill = new Fuse(getFillIcon(Object.values(meta)), {
  threshold: 0.2,
  keys: [
    { name: "name", weight: 3 },
    { name: "category", weight: 2 },
    { name: "sub_category", weight: 2 },
    { name: "keywords", weight: 3 },
    { name: "variant", weight: 1 },
  ],
  shouldSort: false,
});

function App() {
  const [query] = useState("");
  const [toggle] = useState<"stroke" | "fill">("stroke");

  const [strokeIcons] = useState(
    Object.values(meta).filter((x) => x.variant.toLowerCase() === "stroke")
  );

  const [fillIcons] = useState(getFillIcon(Object.values(meta)));

  const categories = useMemo(() => {
    if (toggle === "fill") {
      return categorizeIcons(
        query
          ? fuseFill.search(query).map((result) => result.item as any)
          : fillIcons
      );
    }
    return categorizeIcons(
      query
        ? fuseStroke.search(query).map((result) => result.item as any)
        : strokeIcons
    );
  }, [toggle, query, strokeIcons, fillIcons]);



  React.useEffect(() => {
    window.onmessage = (event) => {
      const { type, message } = event.data.pluginMessage;
      if (type === 'create-icon') {
        console.log(`Figma Says: ${message}`);
      }
    };
  }, []);

  return (
    <div className='plugin-wrapper'>
      <header className='header'>
        <img src={logo} />
        <h2>Aksel Icons</h2>
      </header>

      <div className='icons'>
        {categories.map((cat) => {
          return (
            <div key={cat.category} className="category">
              <h2>
                {cat.category}
              </h2>
              {cat.sub_categories.map((sub) => {
                return (
                  <div key={sub.sub_category} className="sub-category">
                    <h3>
                      {sub.sub_category}
                    </h3>
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
                          <div key={i.id} className='icon' onClick={() => {
                            onCreate(i.name);
                          }}>
                            <T
                              className="text-3xl"
                              aria-hidden
                              alt=""
                              fontSize="1.5rem"
                              ref={iconSVG}
                            />
                            <span className='name'>
                              {i.name}
                            </span>
                          </div>
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
    </div >
  );
}

export default App;
