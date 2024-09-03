const galeriaImg = document.getElementById("galeria-img");
const galeriaTxt = document.getElementById("galeria-texto");

const imgElmt = document.createElement("img");
const txtTituloElmt = document.createElement("h1");
const txtSerieElmt = document.createElement("h2");
const txtDataElmt = document.createElement("h3");

galeriaImg.appendChild(imgElmt);
galeriaTxt.appendChild(txtTituloElmt);
galeriaTxt.appendChild(txtSerieElmt);
galeriaTxt.appendChild(txtDataElmt);

const conteudo = {
  runescape: {
    trabalho1: {
      img: {
        sm: "/src/images/portfolio/serie-runescape/ghostrider-1-sm.jpg",
        lg: "/src/images/portfolio/serie-runescape/ghostrider-1-lg.jpg"
      },
      titulo: "Ghost Rider",
      serie: "Illustrations",
      data: ""
    },
    trabalho2: {
      img: {
        sm: "/src/images/portfolio/serie-runescape/Godfather-2-sm.jpg",
        lg: "/src/images/portfolio/serie-runescape/Godfather-2-lg.jpg"
      },
      titulo: "Don Delgado",
      serie: "Illustration",
      data: ""
    },
    trabalho3: {
      img: {
        sm: "/src/images/portfolio/serie-runescape/Perception-3-sm.jpg",
        lg: "/src/images/portfolio/serie-runescape/Perception-3-lg.jpg"
      },
      titulo: "Perception",
      serie: "Illustration",
      data: ""
    },
    trabalho4: {
      img: {
        sm: "/src/images/portfolio/serie-runescape/Untitled-4-sm.jpg",
        lg: "/src/images/portfolio/serie-runescape/Untitled-4-lg.jpg"
      },
      titulo: "Landscape",
      serie: "Illustration",
      data: ""
    }
  },
  folclore: {
    trabalho1: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/folclore-1-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/folclore-1-lg.jpg"
      },
      titulo: "yaci yaterê",
      serie: "série folclore do brasil",
      data: "{28 / 03 / 2018}"
    },
    trabalho2: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/folclore-2-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/folclore-2-lg.jpg"
      },
      titulo: "y'iara",
      serie: "série folclore do brasil",
      data: "{15 / 06 / 2018}"
    },
    trabalho3: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/folclore-3-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/folclore-3-lg.jpg"
      },
      titulo: "mbae'tatá",
      serie: "série folclore do brasil",
      data: "{30 / 09 / 2018}"
    },
    trabalho4: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/folclore-4-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/folclore-4-lg.jpg"
      },
      titulo: "vitória régia",
      serie: "série folclore do brasil",
      data: "{11 / 12 / 2018}"
    }
  }
};

let windowWidth = document.body.clientWidth;
