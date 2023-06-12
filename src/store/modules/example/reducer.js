const initialState = {
  botaoClicado: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case 'BOTAO_CLICADO': {
      const novoEstado = { ...state };
      novoEstado.botaoClicado = !novoEstado.botaoClicado;
      return novoEstado;
    }

    default:
      return state;
  }
};
