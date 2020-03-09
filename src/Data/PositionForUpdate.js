const positions = [
  {
    label: "A11",
    value: "A11"
  },
  {
    label: "A12",
    value: "A12"
  },
  {
    label: "A13",
    value: "A13"
  },
  {
    label: "A21",
    value: "A21"
  },
  {
    label: "A22",
    value: "A22"
  },
  {
    label: "A23",
    value: "A23"
  },
  {
    label: "A31",
    value: "A31"
  },
  {
    label: "A32",
    value: "A32"
  },
  {
    label: "A33",
    value: "A33"
  },
  {
    label: "A41",
    value: "A41"
  },
  {
    label: "A42",
    value: "A42"
  },
  {
    label: "A43",
    value: "A43"
  },
  {
    label: "A51",
    value: "A51"
  },
  {
    label: "A52",
    value: "A52"
  },
  {
    label: "A53",
    value: "A53"
  },
  {
    label: "A61",
    value: "A61"
  },
  {
    label: "A62",
    value: "A62"
  },
  {
    label: "A63",
    value: "A63"
  },
  {
    label: "A71",
    value: "A71"
  },
  {
    label: "A72",
    value: "A72"
  },
  {
    label: "A73",
    value: "A73"
  },
  {
    label: "A81",
    value: "A81"
  },
  {
    label: "A82",
    value: "A82"
  },
  {
    label: "A83",
    value: "A83"
  },
  {
    label: "A91",
    value: "A91"
  },
  {
    label: "A92",
    value: "A92"
  },
  {
    label: "A93",
    value: "A93"
  },
  {
    label: "A101",
    value: "A101"
  },
  {
    label: "A102",
    value: "A102"
  },
  {
    label: "A103",
    value: "A103"
  },
  {
    label: "B11",
    value: "B11"
  },
  {
    label: "B12",
    value: "B12"
  },
  {
    label: "B13",
    value: "B13"
  },
  {
    label: "B21",
    value: "B21"
  },
  {
    label: "B22",
    value: "B22"
  },
  {
    label: "B23",
    value: "B23"
  },
  {
    label: "B31",
    value: "B31"
  },
  {
    label: "B32",
    value: "B32"
  },
  {
    label: "B33",
    value: "B33"
  },
  {
    label: "B41",
    value: "B41"
  },
  {
    label: "B42",
    value: "B42"
  },
  {
    label: "B43",
    value: "B43"
  },
  {
    label: "B51",
    value: "B51"
  },
  {
    label: "B52",
    value: "B52"
  },
  {
    label: "B53",
    value: "B53"
  },
  {
    label: "B61",
    value: "B61"
  },
  {
    label: "B62",
    value: "B62"
  },
  {
    label: "B63",
    value: "B63"
  },
  {
    label: "B71",
    value: "B71"
  },
  {
    label: "B72",
    value: "B72"
  },
  {
    label: "B73",
    value: "B73"
  },
  {
    label: "Γ11",
    value: "Γ11"
  },
  {
    label: "Γ12",
    value: "Γ12"
  },
  {
    label: "Γ13",
    value: "Γ13"
  },
  {
    label: "Γ21",
    value: "Γ21"
  },
  {
    label: "Γ22",
    value: "Γ22"
  },
  {
    label: "Γ23",
    value: "Γ23"
  },
  {
    label: "Γ31",
    value: "Γ31"
  },
  {
    label: "Γ32",
    value: "Γ32"
  },
  {
    label: "Γ33",
    value: "Γ33"
  },
  {
    label: "Γ41",
    value: "Γ41"
  },
  {
    label: "Γ42",
    value: "Γ42"
  },
  {
    label: "Γ43",
    value: "Γ43"
  },
  {
    label: "Γ51",
    value: "Γ51"
  },
  {
    label: "Γ52",
    value: "Γ52"
  },
  {
    label: "Γ53",
    value: "Γ53"
  },
  {
    label: "Γ61",
    value: "Γ61"
  },
  {
    label: "Γ62",
    value: "Γ62"
  },
  {
    label: "Γ63",
    value: "Γ63"
  },
  {
    label: "Γ71",
    value: "Γ71"
  },
  {
    label: "Γ72",
    value: "Γ72"
  },
  {
    label: "Γ73",
    value: "Γ73"
  },
  {
    label: "Δ11",
    value: "Δ11"
  },
  {
    label: "Δ12",
    value: "Δ12"
  },
  {
    label: "Δ13",
    value: "Δ13"
  },
  {
    label: "Δ21",
    value: "Δ21"
  },
  {
    label: "Δ22",
    value: "Δ22"
  },
  {
    label: "Δ23",
    value: "Δ23"
  },
  {
    label: "Δ31",
    value: "Δ31"
  },
  {
    label: "Δ32",
    value: "Δ32"
  },
  {
    label: "Δ33",
    value: "Δ33"
  },
  {
    label: "Δ41",
    value: "Δ41"
  },
  {
    label: "Δ42",
    value: "Δ42"
  },
  {
    label: "Δ43",
    value: "Δ43"
  },
  {
    label: "Δ51",
    value: "Δ51"
  },
  {
    label: "Δ52",
    value: "Δ52"
  },
  {
    label: "Δ53",
    value: "Δ53"
  },
  {
    label: "Δ61",
    value: "Δ61"
  },
  {
    label: "Δ62",
    value: "Δ62"
  },
  {
    label: "Δ63",
    value: "Δ63"
  },
  {
    label: "Δ71",
    value: "Δ71"
  },
  {
    label: "Δ72",
    value: "Δ72"
  },
  {
    label: "Δ73",
    value: "Δ73"
  },
  { label: "Δ81", value: "Δ81" },
  {
    label: "Δ82",
    value: "Δ82"
  },
  {
    label: "Δ83",
    value: "Δ83"
  },
  {
    label: "Δ91",
    value: "Δ91"
  },
  {
    label: "Δ92",
    value: "Δ92"
  },
  {
    label: "Δ93",
    value: "Δ93"
  },
  {
    label: "Δ101",
    value: "Δ101"
  },
  {
    label: "Δ102",
    value: "Δ102"
  },
  {
    label: "Δ103",
    value: "Δ103"
  },
  {
    label: "Δ111",
    value: "Δ111"
  },
  {
    label: "Δ112",
    value: "Δ112"
  },
  {
    label: "Δ113",
    value: "A43"
  },
  {
    label: "Δ121",
    value: "Δ122"
  },
  {
    label: "Δ122",
    value: "Δ122"
  },
  {
    label: "Δ123",
    value: "Δ123"
  },
  {
    label: "Ε11",
    value: "Ε11"
  },
  {
    label: "Ε12",
    value: "Ε12"
  },
  {
    label: "Ε13",
    value: "Ε13"
  },
  {
    label: "Ε21",
    value: "Ε21"
  },
  {
    label: "Ε22",
    value: "Ε22"
  },
  {
    label: "Ε23",
    value: "Ε23"
  },
  {
    label: "Ε31",
    value: "Ε31"
  },
  {
    label: "Ε32",
    value: "Ε32"
  },
  {
    label: "Ε33",
    value: "Ε33"
  },
  {
    label: "Ε41",
    value: "Ε41"
  },
  {
    label: "Ε42",
    value: "Ε42"
  },
  {
    label: "Ε43",
    value: "Ε43"
  },
  {
    label: "Ε51",
    value: "Ε51"
  },
  {
    label: "Ε52",
    value: "Ε52"
  },
  {
    label: "Ε53",
    value: "Ε53"
  },
  {
    label: "Ζ11",
    value: "Ζ11"
  },
  {
    label: "Ζ12",
    value: "Ζ12"
  },
  {
    label: "Ζ13",
    value: "Ζ13"
  },
  {
    label: "Ζ21",
    value: "Ζ21"
  },
  {
    label: "Ζ22",
    value: "Ζ22"
  },
  {
    label: "Ζ23",
    value: "Ζ23"
  },
  {
    label: "Θ11",
    value: "Θ11"
  },
  {
    label: "Θ12",
    value: "Θ12"
  },
  {
    label: "Θ13",
    value: "Θ13"
  },
  {
    label: "Θ21",
    value: "Θ21"
  },
  {
    label: "Θ22",
    value: "Θ22"
  },
  {
    label: "Θ23",
    value: "Θ23"
  },
  {
    label: "Θ31",
    value: "Θ31"
  },
  {
    label: "Θ32",
    value: "Θ32"
  },
  {
    label: "Θ33",
    value: "Θ33"
  },
  {
    label: "Θ41",
    value: "Θ41"
  },
  {
    label: "Θ42",
    value: "Θ42"
  },
  {
    label: "Θ43",
    value: "Θ43"
  }
];
export default positions;
