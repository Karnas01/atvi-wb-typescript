import CPF from "./cpf"
import Produto from "./produto"
import RG from "./rg"
import Servico from "./servico"
import Telefone from "./telefone"

export default class Cliente {
    public nome: string
    public nomeSocial: string
    private cpf: CPF
    private genero: string
    // M - masculino; F - Feminino; O - outro
    private rgs: Array<RG>
    private dataCadastro: Date
    private telefones: Array<Telefone>
    private produtosConsumidos: Array<Produto>
    private servicosConsumidos: Array<Servico>
    constructor(nome: string, nomeSocial: string, cpf: CPF, genero: string) {
        this.nome = nome
        this.nomeSocial = nomeSocial
        this.cpf = cpf
        this.genero = genero
        this.rgs = []
        this.dataCadastro = new Date()
        this.telefones = []
        this.produtosConsumidos = []
        this.servicosConsumidos = []
    }
    public get getCpf(): CPF {
        return this.cpf
    }
    public get getRgs(): Array<RG> {
        return this.rgs
    }
    public get getDataCadastro(): Date {
        return this.dataCadastro
    }
    public get getTelefones(): Array<Telefone> {
        return this.telefones
    }
    public get getProdutosConsumidos(): Array<Produto> {
        return this.produtosConsumidos
    }
    public get getServicosConsumidos(): Array<Servico> {
        return this.servicosConsumidos
    }

    public get getGenero(): string{
        switch(this.genero){
            case 'M':
                return 'M - Masculino'
            case 'F': 
                return 'F - Feminino'
            default:
                return 'O - Outro'
        }
    }

    public getGeneroChar(): string{
        return this.genero
    }

    public addProdutoConsumido(produto: Produto):void{
        this.produtosConsumidos.push(produto)
    }

    public addServicoConsumido(servico: Servico):void{
        this.servicosConsumidos.push(servico)
    }

    public addTelefone(telefone: Telefone){
        this.telefones.push(telefone);
    }

    public delTelefone(indice: number) {
        this.telefones.splice(indice, 1);
    }

    public addRg(rg: RG){
        this.rgs.push(rg);
    }

    public delRg(indice: number){
        this.rgs.splice(indice, 1);
    }
}