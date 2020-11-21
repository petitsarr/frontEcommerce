// Mes tableau d'objets de fruit,légume,fresh,epicerie,boisson.
const fruits = [
    {
      ref: "fruits_1",
      category: 0,
      name: "Citrons",
      price: 0.99,
      unit: "pièce",
      image: "citron.png"
    },
    {
      ref: "fruits_2",
      category: 0,
      name: "Citrons Vert",
      price: 1.99,
      unit: "pièce",
      image: "lime.png"
    },
    {
      ref: "fruits_3",
      category: 0,
      name: "Fraises",
      price: 2.99,
      unit: "kg",
      image: "fraise.png"
    },
    {
      ref: "fruits_4",
      category: 0,
      name: "Noix de coco",
      price: 3.99,
      unit: "pièce",
      image: "coconut.png"
    },
    {
      ref: "fruits_5",
      category: 0,
      name: "Clémentine",
      price: 3.99,
      unit: "kg",
      image: "clementine.png"
    },
    {
      ref: "fruits_6",
      category: 0,
      name: "Figues",
      price: 5.99,
      unit: "kg",
      image: "figues.png"
    },
    ,
    {
      ref: "fruits_7",
      category: 0,
      name: "Raisins",
      price: 4.59,
      unit: "kg",
      image: "grapes.png"
    },
    {
      ref: "fruits_8",
      category: 0,
      name: "Kiwi",
      price: 4.99,
      unit: "kg",
      image: "kiwi.png"
    },
    {
      ref: "fruits_9",
      category: 0,
      name: "Poires",
      price: 3.49,
      unit: "kg",
      image: "poires.png"
    }
  ];  
  // tableau d'objet de légumes.
  const legumes = [
    {
      ref: "legumes_1",
      category: 1,
      name: "Oignons",
      price: 0.99,
      unit: "kg",
      image: "oignons.png"
    },
    {
      ref: "legumes_2",
      category: 1,
      name: "Poivrons",
      price: 2.99,
      unit: "kg",
      image: "poivrons.png"
    },
    {
      ref: "legumes_3",
      category: 1,
      name: "Radis",
      price: 3.99,
      unit: "kg",
      image: "radis.png"
    },
    {
      ref: "legumes_4",
      name: "Tomato",
      category: 1,
      price: 3.99,
      unit: "kg",
      image: "tomato.png"
    },
    {
      ref: "legumes_5",
      name: "Brocolis",
      category: 1,
      price: 3.99,
      unit: "kg",
      image: "brocoli.png"
    },
    {
      ref: "legumes_6",
      name: "Aubergines",
      category: 1,
      price: 3.99,
      unit: "kg",
      image: "aubergine.png"
    },
    {
      ref: "legumes_7",
      name: "Carottes",
      category: 1,
      price: 2.99,
      unit: "kg",
      image: "carot.png"
    },
    {
      ref: "legumes_8",
      name: "Choux",
      category: 1,
      price: 1.99,
      unit: "kg",
      image: "chou.png"
    }
  ]; 
  // tableau d'objet de fraise.
  const fresh = [
    {
      ref: "fresh_1",
      category: 2,
      name: "Milk",
      price: 2.99,
      unit: "pièce",
      image: "milk.png"
    },
    {
      ref: "fresh_2",
      category: 2,
      name: "Beurre à tartiner",
      price: 1.99,
      unit: "pièce",
      image: "beurre.png"
    },
    {
      ref: "fresh_3",
      category: 2,
      name: "Oeufs",
      price: 3.99,
      unit: "les douzes",
      image: "eggs.png"
    },
    {
      ref: "fresh_4",
      category: 2,
      name: "Yaourts Nature",
      price: 13.99,
      unit: "pièce",
      image: "yaourts_nature.png"
    },
    {
      ref: "fresh_5",
      category: 2,
      name: "Yaourts Fruits",
      price: 10.19,
      unit: "pièce",
      image: "yaourts_fruits.png"
    }
  ];  
  // tableau d'objet d'épicerie...
  const epicerie = [
    {
      ref: "epicerie_1",
      category: 3,
      name: "Thon",
      price: 2.99,
      unit: "pièce",
      image: "thon.png"
    },
    {
      ref: "epicerie_2",
      category: 3,
      name: "Sardines",
      price: 1.99,
      unit: "pièce",
      image: "sardines.png"
    },
    {
      ref: "epicerie_3",
      category: 3,
      name: "Cookies",
      price: 3.99,
      unit: "pièce",
      image: "cookies.png"
    },
    {
      ref: "epicerie_4",
      category: 3,
      name: "Biscottes",
      price: 5.99,
      unit: "pièce",
      image: "biscottes.png"
    },
    {
      ref: "epicerie_5",
      category: 3,
      name: "Thé",
      price: 3.59,
      unit: "pièce",
      image: "thé.png"
    },
    {
      ref: "epicerie_6",
      category: 3,
      name: "Soupes",
      price: 3.59,
      unit: "pièce",
      image: "soupe.png"
    },
    {
      ref: "epicerie_7",
      category: 3,
      name: "Pâtes",
      price: 3.59,
      unit: "pièce",
      image: "pates.png"
    }
  ];
  // tableau d'objet de boisson...
  const boissons = [
    {
      ref: "boissons_1",
      category: 4,
      name: "Vin Rouge",
      price: 12.99,
      unit: "pièce",
      image: "bordeaux.png"
    },
    {
      ref: "boissons_2",
      category: 4,
      name: "Vin blanc",
      price: 11.99,
      unit: "pièce",
      image: "white_wine.png"
    },
    {
      ref: "boissons_3",
      category: 4,
      name: "Riesling",
      price: 25.99,
      unit: "pièce",
      image: "riesling.png"
    },
    {
      ref: "boissons_4",
      category: 4,
      name: "Coca ",
      price: 2.49,
      unit: "pièce",
      image: "coke.png"
    },
    {
      ref: "boissons_5",
      category: 4,
      name: "Sprite",
      price: 1.49,
      unit: "pièce",
      image: "sprite.png"
    },
    {
      ref: "boissons_6",
      category: 4,
      name: "Finley",
      price: 1.49,
      unit: "pièce",
      image: "finley.png"
    },
    {
      ref: "boissons_7",
      category: 4,
      name: "Nestea",
      price: 1.19,
      unit: "pièce",
      image: "nestea.png"
    },
    {
      ref: "boissons_8",
      category: 4,
      name: "Sprite",
      price: 1.49,
      unit: "pièce",
      image: "sprite.png"
    },
    {
      ref: "boissons_9",
      category: 4,
      name: "Sprite Zero",
      price: 1.49,
      unit: "pièce",
      image: "sprite_zero.png"
    }
  ];
  
  export const list = [fruits,legumes,fresh,epicerie,boissons]

  