// alert("oi");
// const negociacao = new Negociacao(new Date(), 1, 100);
// console.log(negociacao);
const controller = new NegociacaoController();
document
    .querySelector('.form')
    .addEventListener('submit', controller.adiciona.bind(controller));
