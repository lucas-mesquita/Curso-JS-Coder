// Datos
const tienda = [
    { id: 1, nombre: "Lienzo", tipo: "material", precio: 2000 },
    { id: 2, nombre: "Vidrio", tipo: "material", precio: 2500 },
    { id: 3, nombre: "Aluminio", tipo: "material", precio: 3000 },
    { id: 4, nombre: "Cuadro 1", tipo: "cuadro", material: "Lienzo", categoria: "Historia", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2000, stock: 10 },
    { id: 5, nombre: "Cuadro 2", tipo: "cuadro", material: "Vidrio", categoria: "Arte contemporaneo", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2500, stock: 5 },
    { id: 6, nombre: "Cuadro 3", tipo: "cuadro", material: "Lienzo", categoria: "Artistas clasicos", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 3000, stock: 8 },
    { id: 7, nombre: "Cuadro 4", tipo: "cuadro", material: "Lienzo", categoria: "Abtracto", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2000, stock: 10 },
    { id: 8, nombre: "Cuadro 5", tipo: "cuadro", material: "Aluminio", categoria: "Contemporaneo", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2500, stock: 5 },
    { id: 9, nombre: "Cuadro 6", tipo: "cuadro", material: "Lienzo", categoria: "Monocromatico", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 3000, stock: 8 },
    { id: 10, nombre: "Cuadro 7", tipo: "cuadro", material: "Lienzo", categoria: "Abstracto", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2000, stock: 10 },
    { id: 11, nombre: "Cuadro 8", tipo: "cuadro", material: "Lienzo", categoria: "Monocromatico", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 2500, stock: 5 },
    { id: 12, nombre: "Cuadro 9", tipo: "cuadro", material: "Lienzo", categoria: "Anime", img: "https://s3-sa-east-1.amazonaws.com/centryproduction/belanit-inventario/products/61699d4ee8dab507affadc9e/image/61699d4ee8dab507affadc9e/original/open-uri20211015-1967-b6xuzh.", precio: 3000, stock: 8 }
  ];

localStorage.setItem("tienda", JSON.stringify(tienda));
