import Omnacortil from "../assets/img/products/medicines/omnacortil.jpg";
import Platoplus from "../assets/img/products/medicines/Platorich.jpg";
import primaquine from "../assets/img/products/medicines/primaquine.jpg";
import glizid from "../assets/img/products/medicines/glizid.jpg";
import ecosprin from "../assets/img/products/medicines/ecosprin.jpg";
import sinus from "../assets/img/products/medicines/sinus.jpg";
import thyronorm from "../assets/img/products/medicines/thyronorm.jpg";
import Kurta8 from "../assets/img/products/mens_kurta/kurta-8.jpg";

export const medicines = [
  {
    id: 1,
    imageUrl: Omnacortil,
    category: "Thyroid",
    name: "Omnacortil",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Thyroid" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "10", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    quantityUnit: "tablets",
    description:
      "Omnacortil 5 Tablet DT is a steroid. It is used to treat a wide variety of medical conditions such as severe allergic reactions, allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and nephrotic syndrome...",
  },
  {
    id: 2,
    imageUrl: Platoplus,
    category: "Dengue",
    name: "Platoplus Dengue Fever tablet",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Dengue" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Keeping in mind the precise demands of clients, we offer a wide range of Dhanvyaas for Platorich Dengue Fever Tablet. These are widely demanded by clients owing to its high quality, purity and effective usage. Following the precise demands and requirements of clients, we offer these products in all standard sized packaging and at very reasonable prices.",
  },

  {
    id: 3,
    imageUrl: primaquine,
    category: "Maleria",
    name: "Primal Tablets",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Maleria" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 50,
    description:
      "Primal Tablet is an antimalarial medicine containing Primaquine as its active ingredient. It is used to treat and prevent malaria. Primal works by killing the parasite that causes malaria, thus stopping the infection from being spread. This medicine should be used under medical prescription and for the duration it is prescribed. Primal Tablets should be taken after food. Tell your doctor, if you are pregnant, planning a pregnancy or are breastfeeding and about all the medicines and supplements you take and all the conditions or diseases you suffer from, before starting treatment with Primal Tablet.",
  },

  {
    id: 4,
    imageUrl: glizid,
    category: "Diabetes",
    name: "Glizid Mr Tablets",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Diabetes" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Glizid Tablet is an anti-diabetic medicine that contains gliclazide as its active ingredient. It is used in the treatment of type 2 diabetes mellitus. Take this medicine exactly as instructed by the doctor. It should be taken before food. While taking this medicine you should be cautious of your diet and should also exercise regularly. Do not miss any dose or stop taking this medicine without informing your doctor. It should be taken just before or with food. Headache, nausea, vomiting, dizziness are some side effects that you may experience while on treatment with this medicine. If you feel the side effects persist or your condition worsens, then contact your doctor immediately. You should tell your doctor about all the medicines, supplements you take and also about all the diseases or conditions you suffer from or if you are pregnant or planning pregnancy or are breastfeeding, before starting this medicine.",
  },

  {
    id: 5,
    imageUrl: ecosprin,
    category: "Heart Attack",
    name: "Ecosprin",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Heart Attack" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Omnacortil 5 Tablet DT is a steroid. It is used to treat a wide variety of medical conditions such as severe allergic reactions, allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and nephrotic syndrome. It suppresses the immune system and provides relief from inflammation Omnacortil 5 Tablet DT should be taken with food to avoid an upset stomach. It should be swallowed whole with water at the same time(s) each day. Your doctor will decide the dose and how often you should take them. This may change from time to time depending on how well they are working. You should take this medicine regularly to get the most benefit, even if you feel fine.",
  },

  {
    id: 6,
    imageUrl: sinus,
    category: "Thyroid",
    name: "Sinus 77 Strip Tablets",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Thyroid" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Sinus 77 Tablet is a cough and cold medication. It contains a combination of paracetamol, phenylephrine, chlorpheniramine, and caffeine as active substances. Sinus 77 Tablet is used in the treatment of nasal and sinus congestion, sinus pain, and headache. It is also used to provide relief of allergic symptoms of the nose/throat due to upper respiratory tract allergies. Take Sinus 77 Tablet in the exact dose and duration as prescribed by your doctor. Before starting this medicine, inform your doctor if you are pregnant/breastfeeding and about your complete medical history.",
  },

  {
    id: 7,
    imageUrl: thyronorm,
    category: "Thyroid",
    name: "Thyronorm Bottle Of Tablets",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Thyroid" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 20,
    description:
      "Thyronorm 125mcg tablet is used to control hypothyroidism. Hypothyroidism is a condition where the thyroid gland stops producing sufficient thyroid hormones. Thyronorm 125mcg tablet contains levothyroxine as the active component. Levothyroxine is a synthetic form of the thyroid hormone thyroxine produced naturally by the thyroid gland. Take this medicine in the exact dose and duration as recommended by your doctor. Do not take more than the prescribed dose. Do not stop taking this medicine on your own. Before taking Thyronorm 125mcg tablet, inform your doctor if you are pregnant, planning on becoming pregnant, breastfeeding and about your complete medical history.        ",
  },

  {
    id: 8,
    imageUrl: Omnacortil,
    category: "Thyroid",
    name: "Omnacortil",
    breadcrumbs: [
      { id: 1, name: "Medicines", href: "/medicines" },
      { id: 2, name: "Thyroid" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Omnacortil 5 Tablet DT is a steroid. It is used to treat a wide variety of medical conditions such as severe allergic reactions, allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and nephrotic syndrome. It suppresses the immune system and provides relief from inflammation Omnacortil 5 Tablet DT should be taken with food to avoid an upset stomach. It should be swallowed whole with water at the same time(s) each day. Your doctor will decide the dose and how often you should take them. This may change from time to time depending on how well they are working. You should take this medicine regularly to get the most benefit, even if you feel fine.",
  },

  {
    id: 9,
    imageUrl: Omnacortil,
    category: "Thyroid",
    name: "Omnacortil",
    breadcrumbs: [
      { id: 1, name: "Men", href: "/medicines" },
      { id: 2, name: "Clothing" },
    ],
    power: [
      { mg: "5", inStock: true },
      { mg: "20", inStock: true },
      { mg: "15", inStock: true },
    ],
    amount: [
      { amount: "6", inStock: true },
      { amount: "8", inStock: true },
      { amount: "10", inStock: true },
    ],
    quantity: 100,
    description:
      "Omnacortil 5 Tablet DT is a steroid. It is used to treat a wide variety of medical conditions such as severe allergic reactions, allergic conditions, asthma, rheumatic disorder, skin and eye disorders, and nephrotic syndrome. It suppresses the immune system and provides relief from inflammation Omnacortil 5 Tablet DT should be taken with food to avoid an upset stomach. It should be swallowed whole with water at the same time(s) each day. Your doctor will decide the dose and how often you should take them. This may change from time to time depending on how well they are working. You should take this medicine regularly to get the most benefit, even if you feel fine.",
  },
];
