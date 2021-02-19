import React, { useState, useEffect } from "react";
import axios from "axios";
import { DivHeroes,ImageHeroes,DivTeste,DivCaixa,IdHero } from '../styles/ImageHeroes'

const Heroes = () => {
  const [search, setSearch] = useState<any>();

  let url: any;
  let nameHero: any;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    nameHero = url.split("name=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `http://gateway.marvel.com/v1/public/characters?nameStartsWith=${nameHero}&ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setSearch(preview.data.data.results);
      });
  }, []);
  console.log(search, "search");
  return (

    <DivHeroes>
      {search && (       
          <DivTeste>    
          <>
            {search.map((hero: any) => {
              return (
                              
                <IdHero
                  href={`/hero?id=${hero.id}`}
                >              
                  <DivCaixa>
                    <p>{hero.name}</p>
                    <ImageHeroes src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>
                 </DivCaixa>
                </IdHero>
              );
            })}
          </>
        </DivTeste>
      )}
    </DivHeroes>
  );
};

export default Heroes;

