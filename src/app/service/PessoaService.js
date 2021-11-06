import ApiService from '../Apiservice';

class PessoaService extends ApiService{
    constructor(){
        super('/pessoas');
    }

    salvar(pessoa){
        return this.post('/', pessoa);
    }

    buscarPessoa(id){
        return this.get(`/${id}`);
    }

    buscarTodos(){
        return this.get(`/`);
    }
    atualizar(pessoa){
        return this.put(`/${pessoa.id}`, pessoa);
    }
}

export default PessoaService;