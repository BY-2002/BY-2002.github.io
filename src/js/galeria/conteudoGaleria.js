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
        sm: "/src/images/portfolio/serie-folclore/I_feel_spacey-1-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/I_feel_spacey-1-lg.jpg"
      },
      titulo: "Spacey",
      serie: "Illustration",
      data: ""
    },
    trabalho2: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/CyberpunkGirl-2-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/CyberpunkGirl-2-lg.jpg"
      },
      titulo: "Cyberpunk Girl",
      serie: "Potraits",
      data: ""
    },
    trabalho3: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/Serene-3-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/Serene-3-lg.jpg"
      },
      titulo: "Serene",
      serie: "Potraits",
      data: ""
    },
    trabalho4: {
      img: {
        sm: "/src/images/portfolio/serie-folclore/Arora-4-sm.jpg",
        lg: "/src/images/portfolio/serie-folclore/Arora-4-lg.jpg"
      },
      titulo: "Aurora",
      serie: "Potraits",
      data: ""
    }
  }
};

let windowWidth = document.body.clientWidth;
