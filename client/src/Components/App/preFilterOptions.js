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
let ramamtHagolan = {
  id: '2006',
  title: 'Ramat Hagolan'
};

let galil = {
  id: '2007',
  title: 'Galil'
};

let kiryatShmona = {
  id: '2008',
  title: 'Kiryat Shmona'
};

let Haifa = {
  id: '2009',
  title: 'Hifa'
};

let Afula = {
  id: '2010',
  title: 'Afula'
};

let north =
  {
    id: '1002',
    title: 'North',
    options: [ramamtHagolan, galil, kiryatShmona, Haifa, Afula]
  };

//////////////////////////////////////////

let south =
  {
    id: '1003',
    title: 'South',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };

let jerusalem =
  {
    id: '1004',
    title: 'Jerusalem',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };


export default
  {
    id: '0001',
    title: 'Region',
    options: [center, north, south, jerusalem]
  };
