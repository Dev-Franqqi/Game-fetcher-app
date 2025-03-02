declare namespace NodeJS {
  interface ProcessEnv {
    API_KEY: string;
  
  }
}


type Game = {
  id: string;
  slug: string;
  name: string;
  background_image: string;
  released: string;
};
