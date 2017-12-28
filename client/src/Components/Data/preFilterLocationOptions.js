///// north /////

let golanHeightsandGalilee = {
  id: '2101',
  title: 'Golan Heights and Galilee'
};

let tiberias = {
  id: '2102',
  title: 'Tiberias Beit Shean and the area'
};

let afula = {
  id: '2103',
  title: 'Afula and Jezreel Valley'
};

let krayot = {
  id: '2104',
  title: 'Krayot'
}

let haifa = {
  id: '2105',
  title: 'Haifa'
}

let zikhronYaakov = {
  id: '2106',
  title: 'Zikhron Yaakov and Pardes Hana-Karkur'
}

let harish = {
  id: '2107',
  tite: 'Harish and Wadi Ara'
}

let north =
  {
    id: '1002',
    title: 'North',
    options: [golanHeightsandGalilee, tiberias, afula, krayot, haifa, zikhronYaakov, zikhronYaakov, harish]
  };

/////////////////////////////////////////////////////

let Herzliya = {
  id: '2201',
  title: 'Herzliya and Ramat Hasharon'
};

let netenya = {
  id: '2202',
  title: 'Netenya and the erea'
};

let petahTikva = {
  id: '2203',
  title: 'Petah Tikva'
};

let givatayim = {
  id: '2204',
  title: 'Holon'
};

let kefarSaba = {
  id: '2205',
  title: 'Kefar Saba'
};

let bneyBrak = {
  id: '2206',
  title: 'Bney Brak'
};

let holon = {
  id: '2207',
  title: 'Holon and Bat Yam'
}

let onoValley = {
  id: '2208',
  title: 'Ono Valley (Yehud)'
}

let rishonLezion = {
  id: '2209',
  title: 'Rishon Lezion and Ness Ziona'
}

let ramatGan = {
  id: '2210',
  title: 'Ramat Gan'
}

let rehovot = {
  id: '2211',
  title: 'Rehovot and the area'
}

let lod = {
  id: '2212',
  title: 'Lod, Ramla, Shoham and Modiin'
}

let center =
  {
    id: '1001',
    title: 'Center',
    options: [Herzliya, netenya, petahTikva, givatayim, kefarSaba, bneyBrak, holon,
      onoValley, rishonLezion, ramatGan, rehovot, lod]
  };

/////////////////////////////////////////////////////

let judeaAndSamaria = {
  id: '2301',
  title: 'Judea And Samaria'
};

let jerusalemAndBeitShemesh = {
  id: '2302',
  title: 'Jerusalem and Beit Shemesh'
};

let jerusalem =
  {
    id: '1004',
    title: 'Jerusalem',
    options: [judeaAndSamaria, jerusalemAndBeitShemesh]
  };

/////////////////////////////////////////////////////

let eilat = {
  id: '2401',
  title: 'Eilat'
};

let beerSheva = {
  id: '2402',
  title: 'Beer Sheva'
};

let kiryatGat = {
  id: '2403',
  title: 'Kiryat Gat and the area'
};

let ashdod = {
  id: '2404',
  title: 'Ashdod and the area'
};

let south =
  {
    id: '1003',
    title: 'South',
    options: [eilat, beerSheva, kiryatGat, ashdod]
  };

/////////////////////////////////////////////////////

let telAvivNorth = {
  id: '2501',
  title: 'Tel Aviv North'
};

let telAvivCenter = {
  id: '2502',
  title: 'Tel Aviv Center'
};

let telAvivSouth = {
  id: '2503',
  title: 'Tel Aviv South'
};

let telAviv =
  {
    id: '1004',
    title: 'Tel Aviv',
    options: [telAvivNorth, telAvivCenter, telAvivSouth]
  };

/////////////////////////////////////////////////////

export default
  {
    id: '0001',
    title: 'Region',
    options: [telAviv, center, north, south, jerusalem]
  };
