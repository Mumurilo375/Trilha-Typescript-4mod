abstract class Inventory {
    protected itens: Record<string, number> = {};

    abstract addItem(item: string, quantity: number): void;
    abstract removeItem(item: string): void;

    getInventory(): Record<string, number> {
        return { ...this.itens };
    }
}

class WarehouseInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        this.itens[item] = (this.itens[item] || 0) + quantity;
    }

    removeItem(item: string): void {
        delete this.itens[item];
    }
}

class StoreInventory extends Inventory {
    addItem(item: string, quantity: number): void {
        const atual = this.itens[item] || 0;
        this.itens[item] = Math.min(10, atual + quantity);
    }

    removeItem(item: string): void {
        delete this.itens[item];
    }
}

const deposito = new WarehouseInventory();
deposito.addItem("Caixas", 100);

deposito.addItem("Caixas", 50);

deposito.removeItem("Caixas");

deposito.addItem("Paletes", 20);

const loja = new StoreInventory();
loja.addItem("Caderno", 8);
loja.addItem("Caderno", 5);

console.log(deposito.getInventory());
console.log(loja.getInventory());
