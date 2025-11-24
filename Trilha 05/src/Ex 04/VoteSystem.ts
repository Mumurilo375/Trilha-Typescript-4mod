abstract class VoteSystem {
    abstract voteFor(candidate: string): void;
    abstract getResults(): object;
}

class Election extends VoteSystem {
    private votos: Record<string, number> = {};

    voteFor(candidate: string): void {
        this.votos[candidate] = (this.votos[candidate] || 0) + 1;
    }

    getResults(): object {
        return { ...this.votos };
    }
}

class Poll extends VoteSystem {
    private votos: Map<string, number> = new Map();

    voteFor(candidate: string): void {
        const atual = this.votos.get(candidate) || 0;
        this.votos.set(candidate, atual + 1);
    }

    getResults(): object {
        return Array.from(this.votos.entries())
            .sort(([, votosA], [, votosB]) => votosB - votosA)
            .map(([candidato, votos]) => ({ candidato, votos }));
    }
}

const eleicao = new Election();
eleicao.voteFor("Alice");
eleicao.voteFor("Bob");
eleicao.voteFor("Alice");

const enquete = new Poll();
enquete.voteFor("Opção A");
enquete.voteFor("Opção B");
enquete.voteFor("Opção A");

enquete.voteFor("Opção C");

console.log(eleicao.getResults());
console.log(enquete.getResults());
