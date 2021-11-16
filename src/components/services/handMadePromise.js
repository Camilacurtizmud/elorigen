const data = [
    {
    "id": 201,
    "name": "Brunch",
    "price": 207,
    "categoryId": "Comida",
    "rate": 2.44,
    "description": "Culpa sed tenetur incidunt quia veniam sed molliti",
    "review": 78,
    "imageUrl": "https://github.com/Camilacurtizmud/origenpuertopiramides/blob/main/imagen/sandwich.jpg?raw=true"
  },
  {
    "id": 202,
    "name": "Licuado",
    "price": 271,
    "categoryId": "Bebida",
    "rate": 2.18,
    "description": "Nam incidunt blanditiis odio inventore. Nobis volu",
    "review": 67,
    "imageUrl": "https://github.com/Camilacurtizmud/origenpuertopiramides/blob/main/imagen/licuado.JPG?raw=true"
  },
  {
    "id": 203,
    "name": "Cafe",
    "price": 295,
    "categoryId": "Bebida",
    "rate": 0.91,
    "description": "Quod reiciendis aspernatur ipsum cum debitis. Quis",
    "review": 116,
    "imageUrl": "https://github.com/Camilacurtizmud/origenpuertopiramides/blob/main/imagen/cafe.jpg?raw=true"
  },
  {
    "id": 204,
    "name": "Torta",
    "price": 280,
    "categoryId": "Comida",
    "rate": 3.11,
    "description": "Occaecati dolore assumenda facilis error quaerat. ",
    "review": 78,
    "imageUrl": "https://github.com/Camilacurtizmud/origenpuertopiramides/blob/main/imagen/tortaDulce.jpg?raw=true"
  },
  {
    "id": 209,
    "name": "French Toast",
    "price": 262,
    "categoryId": 1,
    "rate": 0.29,
    "description": "Autem blanditiis similique saepe excepturi at erro",
    "review": 44,
    "imageUrl": "https://github.com/Camilacurtizmud/origenpuertopiramides/blob/main/imagen/tostadaFrancesa.jpg?raw=true"
  },
  
]

const getProducts = new Promise((resolve) => {
    setTimeout(()=>{
        resolve(data)
    },2000)
})

export default getProducts