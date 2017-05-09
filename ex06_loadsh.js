const _ =  require('lodash');


const alunos = [
  {
    nome: 'joa',
    nota: 5
  },
  {
    nome: 'tiom',
    nota: 9
  },

  {
    nome: 'maria',
    nota: 15
  },
]

const media = _.sumBy(alunos, 'nota') / alunos.length

console.log(media);
