

const personas=[
    {id:1, nombres:"Juan", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"san marcos", estado: true},
    {id:2, nombres:"Maria", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"Jinotepe", estado: false},
    {id:3, nombres:"Pedro", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"jinotepe", estado: false},
    {id:4, nombres:"Karla", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"dolores", estado: true},
    {id:5, nombres:"Alejandro", Apellidos:"Sanchez", Deporte:"futbol", Municipio:"san marcos", estado: false}
];


export function Listadopersonas()
{
    return personas;
}