abstract class Pagamento {
    abstract processar(): void;
}

class PagamentoCartao extends Pagamento {
    constructor(private numeroCartao: string) {
        super();
    }

    private validarNumero(): boolean {
        return /^\d{16}$/.test(this.numeroCartao);
    }

    processar(): void {
        if (!this.validarNumero()) {
            console.log("Cartão inválido. Pagamento não processado.");
            return;
        }

        const finalCartao = this.numeroCartao.slice(-4);
        console.log(`Pagamento no cartão final ${finalCartao} processado com sucesso.`);
    }
}

class PagamentoBoleto extends Pagamento {
    constructor(private valor: number) {
        super();
    }

    private gerarCodigoBarras(): string {
        const sequencia = Math.random().toString().slice(2, 14);
        const codigo = (sequencia + "000000000000").slice(0, 12);
        return `23790${codigo}`;
    }

    processar(): void {
        const codigo = this.gerarCodigoBarras();
        console.log(`Boleto de R$ ${this.valor.toFixed(2)} gerado: ${codigo}`);
    }
}

function processarPagamento(pagamento: Pagamento): void {
    pagamento.processar();
}

const pagamentos: Pagamento[] = [
    new PagamentoCartao("1234123412341234"),
    new PagamentoCartao("9999"),
    new PagamentoBoleto(199.9)
];

pagamentos.forEach(processarPagamento);
