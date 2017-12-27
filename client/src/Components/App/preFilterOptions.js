let telAviv = {
  id: '2001',
  title: 'Tel Aviv',
  options: ['Noth of Hayarkon', 'Old North', 'Dizingof', 'Rabin', 'Florentin']
};

let ramatGan = {
  id: '2002',
  title: 'Ramay Gan',
  options: ['Noth of Hayarkon', 'Old North', 'Dizingof', 'Rabin', 'Florentin']
};

let givataim = {
  id: '2003',
  title: 'Givataim',
  options: ['Noth of Hayarkon', 'Old North', 'Dizingof', 'Rabin', 'Florentin']
};

let holon = {
  id: '2004',
  title: 'Holon',
  options: ['Noth of Hayarkon', 'Old North', 'Dizingof', 'Rabin', 'Florentin']
};

let batYam = {
  id: '2005',
  title: 'Bat Yam',
  options: ['Noth of Hayarkon', 'Old North', 'Dizingof', 'Rabin', 'Florentin']
};

let center =
  {
    id: '1001',
    title: 'Center',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };

let north =
  {
    id: '1001',
    title: 'North',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };

let south =
  {
    id: '1001',
    title: 'South',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };

let jerusalem =
  {
    id: '1001',
    title: 'Jerusalem',
    options: [telAviv, ramatGan, givataim, holon, batYam]
  };


export default
  {
    id: '0001',
    title: 'Region',
    options: [center, north, south, jerusalem]
  };
