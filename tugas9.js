const ObjectIn = () => {
  var data = {
    nama: "Fiqrian Faturachman",
    umur: "20 Tahun",
    status: "Suksess",
  };
  for (i in data) {
    console.log(data[i]);
  }
};

ObjectIn();
