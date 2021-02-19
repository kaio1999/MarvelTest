import react, { useState, useEffect } from "react";
import axios from "axios";
import { NameHero,HeroIdImage,DivHeroId,DivImgDescHero,DivDescNameImg,DescripHero,TitleDetailsHeroes,DivGeralDetails,ListStyleHero } from '../styles/HeroId.style'


const Hero = () => {
  const [search, setSearch] = useState<any>();

  let url: string;
  let idHero: string;

  if (typeof window !== "undefined") {
    url = window.location?.href;
    idHero = url.split("id=")[1];
  }

  useEffect(() => {
    axios
      .get(
        `https://gateway.marvel.com:443/v1/public/characters/${idHero}?ts=1&apikey=dfdfc06935a1fe33837da6934f7b5373&hash=f5a214e5c63b897dfe0ebc1a1185c936`,
        {
          headers: {},
        }
      )
      .then((preview) => {
        setSearch(preview.data.data.results);
      });
  }, []);

  return (
    <div>
      {search && (
          <>
            {search.map((hero: any) => {console.log(hero,"hero")
              return (
                <DivHeroId>  
                    <DivDescNameImg>
                        <NameHero>{hero.name}</NameHero>
                        <DivImgDescHero> 
                                <HeroIdImage src={`${hero.thumbnail.path}.${hero.thumbnail.extension}`}/>              
                        
                                {hero.description && (
                            <DescripHero>
                                <strong>Description:</strong> {hero.description}
                            </DescripHero>
                      )}  
                        </DivImgDescHero>
                    </DivDescNameImg>  
                  <DivGeralDetails>
                    {hero.comics.returned !== 0 && (
                      <div>
                        <TitleDetailsHeroes>Comics</TitleDetailsHeroes>
                        <ListStyleHero>
                          {hero.comics.items.map((comic:any) => {
                            return (
                              <li>{comic.name}</li>
                            );
                          })}
                        </ListStyleHero>
                      </div>
                    )}
                    {hero.events.returned !== 0 && (
                      <div>
                        <TitleDetailsHeroes>Events</TitleDetailsHeroes>
                        <ListStyleHero>
                          {hero.events.items.map((event:any) => {
                            return (
                              <li>{event.name}</li>
                            );
                          })}
                        </ListStyleHero>
                      </div>
                    )}
                    {hero.series.returned !== 0 && (
                      <div>
                        <TitleDetailsHeroes>Series</TitleDetailsHeroes>
                        <ListStyleHero>
                          {hero.series.items.map((serie:any) => {
                            return (
                              <li>{serie.name}</li>
                            );
                          })}
                        </ListStyleHero>
                      </div>
                    )}
                    {hero.stories.returned !== 0 && (
                      <div>
                        <TitleDetailsHeroes>History</TitleDetailsHeroes>
                        <ListStyleHero>
                          {hero.stories.items.map((storie:any) => {
                            return (
                              <li>{storie.name}</li>
                            );
                          })}
                        </ListStyleHero>
                      </div>
                    )}
                  </DivGeralDetails>
                </DivHeroId>
              );
            })}
          </>
      )}
    </div>
  );
};

export default Hero;
