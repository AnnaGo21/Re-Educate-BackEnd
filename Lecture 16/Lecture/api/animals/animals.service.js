const animals = [
  {
    id: 1,
    specie: "dog",
    age: 4,
    color: "colorful",
  },
  {
    id: 2,
    specie: "fish",
    age: 2,
    color: "red",
  },
  {
    id: 3,
    specie: "wolf",
    age: 5,
    color: "black",
  },
  {
    id: 4,
    specie: "wolf",
    age: 5,
    color: "black",
  },
  {
    id: 5,
    specie: "wolf",
    age: 5,
    color: "black",
  },
  {
    id: 6,
    specie: "wolf",
    age: 5,
    color: "black",
  },
  {
    id: 7,
    specie: "wolf",
    age: 5,
    color: "black",
  },
];

const pagination = (req, res) => {
  const { page = 1, take = 3 } = req.query;
  // console.log(page,"რამდენ ფეიჯზე")
  // console.log(take,"რამდენი ჩანაწერი უნდა მომეცს")
  take > 3 ? (take = 3) : take;
  res.json(animals.slice((page - 1) * take, take * page));
};

const getByIdAnimal = (req, res) => {
  const { id } = req.params;
  // console.log(id,"id from params")
  const findAnimal = animals.find((el) => el.id === Number(id));
  if (!findAnimal) {
    return res.status(400).json({ message: "animal not found", data: null });
  }

  res.json({ message: "finded successfully", data: findAnimal });
};

const createAnimal = (req, res) => {
  // console.log(req.body)
  const { specie, age, color } = req.body;
  // console.log(specie)
  // console.log(age)
  // console.log(color)
  if (!specie) {
    return res
      .status(400)
      .json({ message: "specie არის აუცილებელი რატომა რატან ?????????!!!!!!" });
  }
  const lastID = animals[animals.length - 1]?.id || 0;
  const newObj = {
    id: lastID + 1,
    specie,
    age,
    color,
  };

  animals.push(newObj);

  res.json({ message: "added successfully", data: animals });
};

const deleteAnimal = (req, res) => {
  const { id } = req.params;
  const index = animals.findIndex((el) => el.id === +id);
  if (index === -1) {
    return res.json({ message: "invalid id" });
  }
  const deletedAnimal = animals.splice(index, 1);
  res.json({ message: "deleted successfully", data: deletedAnimal });
};

function updateAnimal(req, res) {
  const { id } = req.params;
  const { specie, age, color } = req.body;
  const index = animals.findIndex((el) => el.id === +id);
  if (index === -1) {
    return res.json({ message: "invalid id" });
  }

  animals[index] = {
    ...animals[index],
    specie: specie || animals[index].specie,
    age: age || animals[index].age,
    color: color || animals[index].color,
  };

  res.json({ message: "updated successfully", data: animals[index] });
}

module.exports = {
  pagination,
  getByIdAnimal,
  createAnimal,
  deleteAnimal,
  updateAnimal,
};
