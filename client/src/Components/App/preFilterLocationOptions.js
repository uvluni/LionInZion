
let golanHeightsandGalilee = {
  id: '2006',
  title: 'Golan Heights and Galilee'
};

let tiberias = {
  id: '2007',
  title: 'Tiberias'
};

let beitShean = {
  id: '2008',
  title: 'Beit Shean and the area'
};

let afula = {
  id: '2009',
  title: 'Afula'
};

let jezreelValley = {
  id: '2010',
  title: 'Jezreel Valley'
};

let krayot = {
  id: '2011',
  title: "Krayot"
}

let haifa = {
  id: "2012",
  title: "Haifa"
}

let zikhronYaakov = {
  id: "2013",
  title: "Zikhron Yaakov and Pardes Hana-Karkur"
}

let harish = {
  id: "2014",
  tite: "Harish and Wadi Ara"
}

let north =
  {
    id: '1002',
    title: 'North',
    options: [golanHeightsandGalilee, tiberias, beitShean, afula, jezreelValley, krayot, haifa, zikhronYaakov, zikhronYaakov]
  };

/////////////////////////////////////////////////////

let telAviv = {
  id: '2001',
  title: 'Tel Aviv'
};

let ramatGan = {
  id: '2002',
  title: 'Ramat Gan'
};

let givataim = {
  id: '2003',
  title: 'Givataim'
};

let holon = {
  id: '2004',
  title: 'Holon'
};

let batYam = {
  id: '2005',
  title: 'Bat Yam'
};

let center =
  {
    id: '1001',
    title: 'Center',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };

/////////////////////////////////////////////////////

let cityCenter = {
  id: '2014',
  title: 'City Center'
};

let shilo = {
  id: '2014',
  title: 'Shilo'
};

let gilo = {
  id: '2014',
  title: 'Gilo'
};

let jerusalem =
  {
    id: '1004',
    title: 'Jerusalem',
    options: [cityCenter, shilo, gilo]
  };


/////////////////////////////////////////////////////

let beerSheva = {
  id: '2011',
  title: 'Beer Sheva'
};

let mizpeRamon = {
  id: '20012',
  title: 'Mizpe Ramon'
};

let elat = {
  id: '2013',
  title: 'Elat'
};

let arad = {
  id: '2014',
  title: 'Arad'
};

let south =
  {
    id: '1003',
    title: 'South',
    options: [beerSheva, mizpeRamon, elat, arad]
  };

/////////////////////////////////////////////////////

export default
  {
    id: '0001',
    title: 'Region',
    options: [center, north, south, jerusalem]
  };
